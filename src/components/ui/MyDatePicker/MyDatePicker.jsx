import React, {Component} from 'react';
import './MyDatePicker.css';
import {
    BsCalendarEvent
} from '../../icon/IconImage'


let oneDay = 60 * 60 * 24 * 1000;
let todayTimestamp = Date.now() - (Date.now() % oneDay) + (new Date().getTimezoneOffset() * 1000 * 60);
let inputRef = React.createRef()
let datepickerRef = React.createRef()

export default class MyDatePicker extends Component {
    // props
    //      input_cn
    //      input_bg_cn
    //      returnVal
    //      datepicker_type: 'single' or 'range'


    state = {
        getMonthDetails: []
    }

    constructor() {
        super();
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        this.state = {
            year,
            month,
            selectedDay: todayTimestamp,
            monthDetails: this.getMonthDetails(year, month),

            startDay: todayTimestamp,
            endDay: todayTimestamp,
            selectedStartDay: false,
            selectedEndDay: false
        }
    }

    componentDidMount() {
        window.addEventListener('click', this.addBackDrop);
        if (this.props.datepicker_type === 'single') {
            this.setDateToInput(this.state.selectedDay);
        }else {
            this.setDateToInputByRange(this.state.startDay, this.state.endDay)
        }
        
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.addBackDrop);
    }

    addBackDrop = e => {
        // if(this.state.showDatePicker && !ReactDOM.findDOMNode(this).contains(e.target)) {
        //     this.showDatePicker(false);
        // }
        if(this.state.showDatePicker && !datepickerRef.current.contains(e.target)) {
            this.showDatePicker(false);
        }
        // if(this.state.showDatePicker) {
        //     this.showDatePicker(false);
        // }
    }

    showDatePicker =(showDatePicker=true)=> {
        this.setState({ showDatePicker })
    }

    /**
     *  Core
     */

    daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthMap = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    getDayDetails =args=> {
        let date = args.index - args.firstDay; 
        let day = args.index%7;
        let prevMonth = args.month-1;
        let prevYear = args.year;
        if(prevMonth < 0) {
            prevMonth = 11;
            prevYear--;
        }
        let prevMonthNumberOfDays = this.getNumberOfDays(prevYear, prevMonth);
        let _date = (date < 0 ? prevMonthNumberOfDays+date : date % args.numberOfDays) + 1;
        let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
        let timestamp = new Date(args.year, args.month, _date).getTime();
        return {
            date: _date,
            day,
            month, 
            timestamp,
            dayString: this.daysMap[day]
        }
    }

    getNumberOfDays =(year, month)=> {
        return 40 - new Date(year, month, 40).getDate();
    }

    getMonthDetails =(year, month)=> {
        let firstDay = (new Date(year, month)).getDay();
        let numberOfDays = this.getNumberOfDays(year, month);
        let monthArray = [];
        let rows = 6;
        let currentDay = null;
        let index = 0; 
        let cols = 7;

        for(let row=0; row<rows; row++) {
            for(let col=0; col<cols; col++) { 
                currentDay = this.getDayDetails({
                    index,
                    numberOfDays,
                    firstDay,
                    year,
                    month
                });
                monthArray.push(currentDay);
                index++;
            }
        }
        return monthArray;
    }

    isCurrentDay =day=> {
        return day.timestamp === todayTimestamp;
    }

    isSelectedDay =day=> {
        return day.timestamp === this.state.selectedDay;
    }

    getDateFromDateString =dateValue=> {
        let dateData = dateValue.split('-').map(d=>parseInt(d, 10));
        if(dateData.length < 3) 
            return null;

        let year = dateData[0];
        let month = dateData[1];
        let date = dateData[2];
        return {year, month, date};
    }

    getMonthStr =month=> this.monthMap[Math.max(Math.min(11, month), 0)] || 'Month';

    getDateStringFromTimestamp =timestamp=> {
        let dateObject = new Date(timestamp);
        let month = dateObject.getMonth() + 1;
        let date = dateObject.getDate();
        return (date < 10 ? '0'+date : date) + '/' + (month < 10 ? '0'+month : month) + '/' + dateObject.getFullYear();
    }

    setDate =dateData=> {
        let selectedDay = new Date(dateData.year, dateData.month-1, dateData.date).getTime();
        this.setState({ selectedDay })
        if(this.props.onChange) {
            this.props.onChange(selectedDay);
        }
    }

    updateDateFromInput =()=> {
        let dateValue = inputRef.current.value;
        let dateData = this.getDateFromDateString(dateValue);
        if(dateData !== null) { 
            this.setDate(dateData);
            this.setState({ 
                year: dateData.year, 
                month: dateData.month-1, 
                monthDetails: this.getMonthDetails(dateData.year, dateData.month-1)
            })
        }
    }

    setDateToInput =(timestamp)=> {
        let dateString = this.getDateStringFromTimestamp(timestamp);
        inputRef.current.value = dateString;
    }

    setDateToInputByRange = (start_timestamp, end_timestamp) => {
        let startDateStr = this.getDateStringFromTimestamp(start_timestamp)
        let endDateStr = this.getDateStringFromTimestamp(end_timestamp)
        inputRef.current.value = `${startDateStr} - ${endDateStr}`
        this.props.returnVal(`${startDateStr} - ${endDateStr}`)
    }

    onDateClick = day=> {
        this.setState({selectedDay: day.timestamp}, ()=>this.setDateToInput(day.timestamp));
        if(this.props.onChange) {
            this.props.onChange(day.timestamp);
        }
        if (this.props.datepicker_type === 'single') {
            
            this.showDatePicker(false)
            this.props.returnVal(this.state.selectedDay)
        }else if (this.props.datepicker_type === 'range') {
            if (!this.state.selectedStartDay && !this.state.selectedEndDay) {
                // this.setState({startDay: day.timestamp})
                // this.setState({selectedStartDay: true})
                // this.props.returnVal(`${new Date(this.state.startDay).toDateString()}-${new Date(this.state.endDay).toDateString()}`)
                this.setState({startDay: day.timestamp, selectedStartDay: true})
                // console.log(`start= ${this.state.startDay}`)
                return
            }else {
                if (day.timestamp - this.state.startDay < 0) {
                    this.setState({startDay: day.timestamp, selectedStartDay: true})
                    return
                }
                this.setState({endDay: day.timestamp, selectedStartDay: false, selectedEndDay: false}, () => this.setDateToInputByRange(this.state.startDay, day.timestamp))
                // console.log(`end= ${this.state.endDay}`)
                this.showDatePicker(false)
                return
            }
            
        }
        
    }

    setYear =offset=> {
        let year = this.state.year + offset;
        let month = this.state.month;
        this.setState({ 
            year,
            monthDetails: this.getMonthDetails(year, month)
        })
    }

    setMonth =offset=> {
        let year = this.state.year;
        let month = this.state.month + offset;
        if(month === -1) {
            month = 11;
            year--;
        } else if(month === 12) {
            month = 0;
            year++;
        }
        this.setState({ 
            year, 
            month,
            monthDetails: this.getMonthDetails(year, month)
        })
    }

    /**
     *  Renderers
     */

    renderCalendar() {
        let days = this.state.monthDetails.map((day, index)=> {
            return (
                <div className={'c-day-container ' + (day.month !== 0 ? ' disabled' : '') + (this.isCurrentDay(day) ? ' highlight' : '') + (this.isSelectedDay(day) ? ' highlight-blue' : '')} key={index}>
                    <div className='cdc-day'>
                        <span className={`${day.month !== 0 ? ' text-c_6E7582' : 'text-black dark:text-white'} ${this.isSelectedDay(day) && day.month === 0 ? 'bg-c_1564C0 dark:bg-dark_0fc9f2' : ' '}`} onClick={()=>this.onDateClick(day)}>
                            {day.date}
                        </span>
                    </div>
                </div>
            )
        })

        return (
            <div className='c-container'>
                <div className='cc-head'>
                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d,i)=><div key={i} className='cch-name'>{d}</div>)}
                </div>
                <div className='cc-body'>
                    {days}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='MyDatePicker' ref={datepickerRef}>
                {/* <div className='mdp-input'  onClick={()=> this.showDatePicker(!this.state.showDatePicker)}>
                    <input type='date' onChange={this.updateDateFromInput} ref={inputRef}/>
                </div> */}

                <div className={`relative ${this.props.input_cn}`}
                    onClick={()=> this.showDatePicker(!this.state.showDatePicker)}>
                    <input type="text" disabled={true} ref={inputRef} onChange={this.updateDateFromInput} 
                            className={`h-full w-full flex items-center pl-3 rounded-lg border font-semibold leading-normal
                            border-c_E8EBF1 dark:border-dark_0fc9f2
                            text-black dark:text-dark_0fc9f2
                            dark:bg-transparent ${this.props.input_bg_cn}
                                text-9px sm:text-xs`} />
                    <div className="absolute top-0 right-3 h-full flex flex-col cursor-pointer">
                        <BsCalendarEvent className="my-auto text-xs sm:text-lg text-black dark:text-dark_0fc9f2"/>
                    </div>
                </div>
                {this.state.showDatePicker ? (
                    <div className={`mdp-container ${this.props.picker_pos_cn} bg-white dark:bg-gray-900 shadow-card dark:shadow-dark_card`}>
                        <div className='mdpc-head'>
                            <div className='mdpch-button'>
                                <div className='mdpchb-inner bg-c_E8EBF1 dark:bg-dark_0fc9f2' onClick={()=> this.setYear(-1)}>
                                    <span className='mdpchbi-left-arrows border-c_6E7582 dark:border-white'></span>
                                </div>
                            </div>
                            <div className='mdpch-button'>
                                <div className='mdpchb-inner bg-c_E8EBF1 dark:bg-dark_0fc9f2' onClick={()=> this.setMonth(-1)}>
                                    <span className='mdpchbi-left-arrow border-c_6E7582 dark:border-white'></span>
                                </div>
                            </div>
                            <div className='mdpch-container'>
                                <div className='mdpchc-year text-c_6E7582 dark:text-white'>{this.state.year}</div>
                                <div className='mdpchc-month text-c_6E7582 dark:text-white'>{this.getMonthStr(this.state.month)}</div>
                            </div>
                            <div className='mdpch-button'>
                                <div className='mdpchb-inner bg-c_E8EBF1 dark:bg-dark_0fc9f2' onClick={()=> this.setMonth(1)}>
                                    <span className='mdpchbi-right-arrow border-c_6E7582 dark:border-white'></span>
                                </div>
                            </div>
                            <div className='mdpch-button' onClick={()=> this.setYear(1)}>
                                <div className='mdpchb-inner bg-c_E8EBF1 dark:bg-dark_0fc9f2'>
                                    <span className='mdpchbi-right-arrows border-c_6E7582 dark:border-white'></span>
                                </div>
                            </div>
                        </div>
                        <div className='mdpc-body'>
                            {this.renderCalendar()}
                        </div>
                    </div>
                ) : ''}
            </div>
        )
    }

}