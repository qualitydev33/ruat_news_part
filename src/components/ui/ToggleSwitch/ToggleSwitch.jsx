import React from 'react'
import './ToggleSwitch.css'

const ToggleSwitch = ({label, label_css, label_id}) => {
    return (
        <>
            <div className="toggle-switch">
                <input type="checkbox" id={label_id} style={{position: 'absolute', left: -9999}}/>
                <label htmlFor={label_id}>
                    <span className={label_css}>{label}</span>
                    <span></span>
                </label>
            </div>
        </>
    )
}

export default React.memo(ToggleSwitch)