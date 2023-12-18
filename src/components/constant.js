const SERVER_URL = "http://localhost:8000"
const PROXY_URL = "https://thingproxy.freeboard.io/fetch/"
const TaskFiveCategoryLi = [
    {title: 'Home', link: '/task5'},
    {title: 'Category1', link: '/task5/category1'},
    {title: 'Category2', link: '/task5/category2'},
    {title: 'Category3', link: '/task5/category3'},
    {title: 'Category4', link: '/task5/category4'},
    {title: 'Category5', link: '/task5/category5'},
]
const POLL_OPTIONS = [
    {
        "id": "8ad79680-90a8-448d-b6b8-6316dc61fd66",
        "title": "Lorem ipsum dolor sit amet",
        "created_at": "2022-02-09 13:19:48",
        "updated_at": "2022-02-09 13:19:48"
    },
    {
        "id": "f113e09d-1d2d-4134-b51e-a93dae0c28b9",
        "title": "Lorem ipsum dolor",
        "created_at": "2022-02-09 13:19:56",
        "updated_at": "2022-02-09 13:19:56"
    },
    {
        "id": "2b1efb70-319f-4dc4-9094-f274c42aa9b8",
        "title": "Lorem ipsum dolor sit amet 1",
        "created_at": "2022-02-09 13:20:05",
        "updated_at": "2022-02-09 13:20:05"
    },
    {
        "id": "d2edb6da-834a-47bd-9c4c-00a335b98137",
        "title": "Lorem ipsum dolor 2",
        "created_at": "2022-02-09 13:20:14",
        "updated_at": "2022-02-09 13:20:14"
    }
]
const NEWS_SAMPLE = [
    {
        "id": "0",
        "title": "Beginnings of sustainable and connected world apparent in scalable compute network mainnet launch",
        "type": "options",
        "link": "https://cointelegraph.com/news/beginnings-of-sustainable-and-connected-world-apparent-in-scalable-compute-network-mainnet-launch",
        "polloption_li": "8ad79680-90a8-448d-b6b8-6316dc61fd66,2b1efb70-319f-4dc4-9094-f274c42aa9b8,f113e09d-1d2d-4134-b51e-a93dae0c28b9,d2edb6da-834a-47bd-9c4c-00a335b98137",
        "selected_poll": null,
        "vote_up": null,
        "vote_down": null,
        "vote_comment": null,
        "vote_bull": null,
        "vote_bear": null,
        "created_at": "2022-02-09 13:26:06",
        "updated_at": "2022-02-09 13:26:06",
        "img_id": "ed734b72-abfe-49cd-b9bd-8c22c2ff1ed0",
        "url": ""
    },
    {
        "id": "1",
        "title": "No precedent: IRS court settlement doesn't clarify crypto staking taxes",
        "type": "options",
        "link": "https://cointelegraph.com/news/no-precedent-irs-court-settlement-doesn-t-clarify-crypto-staking-taxes",
        "polloption_li": "null",
        "selected_poll": null,
        "vote_up": null,
        "vote_down": null,
        "vote_comment": null,
        "vote_bull": null,
        "vote_bear": null,
        "created_at": "2022-02-09 13:25:15",
        "updated_at": "2022-02-09 13:25:15",
        "img_id": "05cfd328-97e0-4008-8c30-0d14b440ee41",
        "url": ""
    },
    {
        "id": "2",
        "title": "Beginnings of sustainable and connected world apparent in scalable compute network mainnet launch",
        "type": "options",
        "link": "https://cointelegraph.com/news/beginnings-of-sustainable-and-connected-world-apparent-in-scalable-compute-network-mainnet-launch",
        "polloption_li": "8ad79680-90a8-448d-b6b8-6316dc61fd66,2b1efb70-319f-4dc4-9094-f274c42aa9b8,f113e09d-1d2d-4134-b51e-a93dae0c28b9,d2edb6da-834a-47bd-9c4c-00a335b98137",
        "selected_poll": null,
        "vote_up": null,
        "vote_down": null,
        "vote_comment": null,
        "vote_bull": null,
        "vote_bear": null,
        "detail": "Blockchain holds significant promise for avid cryptocurrency investors and the world at large. Unfortunately, the keyword in this phrase is “promising.” Upon an initial industry inspection, high computing costs are among the apparent barriers before the technology is ready for prominent, real-world applications. Addressing this concern then comes down to lowering the cost of processing power to be affordable for the average user. If this wasn’t already challenging in itself, problems in processing costs only become more prevalent with the rising interest in nonfungible tokens (NFTs) and the surrounding metaverse. Experts from Intel suggest a 1,000x increase in power will be needed ahead of currency capacity.",
        "created_at": "2022-02-09 13:26:06",
        "updated_at": "2022-02-09 13:26:06",
        "img_id": "ed734b72-abfe-49cd-b9bd-8c22c2ff1ed0",
        "url": "https://images.cointelegraph.com/images/587_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9iMGJjYjJhMWVjOTU2NWU2MmJhODMzYWExMTEzZDhlMC5qcGc=.jpg"
        
    },
    {
        "id": "3",
        "title": "Beginnings of sustainable and connected world apparent in scalable compute network mainnet launch",
        "type": "options",
        "link": "https://cointelegraph.com/news/beginnings-of-sustainable-and-connected-world-apparent-in-scalable-compute-network-mainnet-launch",
        "polloption_li": "8ad79680-90a8-448d-b6b8-6316dc61fd66,2b1efb70-319f-4dc4-9094-f274c42aa9b8,f113e09d-1d2d-4134-b51e-a93dae0c28b9,d2edb6da-834a-47bd-9c4c-00a335b98137",
        "selected_poll": null,
        "vote_up": null,
        "vote_down": null,
        "vote_comment": null,
        "vote_bull": null,
        "vote_bear": null,
        "created_at": "2022-02-09 13:26:06",
        "updated_at": "2022-02-09 13:26:06",
        "img_id": "ed734b72-abfe-49cd-b9bd-8c22c2ff1ed0",
        "url": "https://images.cointelegraph.com/images/587_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9iMGJjYjJhMWVjOTU2NWU2MmJhODMzYWExMTEzZDhlMC5qcGc=.jpg"
    },
    {
        "id": "4",
        "title": "Beginnings of sustainable and connected world apparent in scalable compute network mainnet launch",
        "type": "polls",
        "link": "https://cointelegraph.com/news/beginnings-of-sustainable-and-connected-world-apparent-in-scalable-compute-network-mainnet-launch",
        "polloption_li": "8ad79680-90a8-448d-b6b8-6316dc61fd66,2b1efb70-319f-4dc4-9094-f274c42aa9b8,f113e09d-1d2d-4134-b51e-a93dae0c28b9,d2edb6da-834a-47bd-9c4c-00a335b98137",
        "selected_poll": null,
        "vote_up": null,
        "vote_down": null,
        "vote_comment": null,
        "vote_bull": null,
        "vote_bear": null,
        "created_at": "2022-02-09 13:26:06",
        "updated_at": "2022-02-09 13:26:06",
        "img_id": "ed734b72-abfe-49cd-b9bd-8c22c2ff1ed0",
        "url": ""
    },
    {
        "id": "5",
        "title": "Beginnings of sustainable and connected world apparent in scalable compute network mainnet launch",
        "type": "polls",
        "link": "https://cointelegraph.com/news/beginnings-of-sustainable-and-connected-world-apparent-in-scalable-compute-network-mainnet-launch",
        "polloption_li": "8ad79680-90a8-448d-b6b8-6316dc61fd66,2b1efb70-319f-4dc4-9094-f274c42aa9b8,f113e09d-1d2d-4134-b51e-a93dae0c28b9,d2edb6da-834a-47bd-9c4c-00a335b98137",
        "selected_poll": null,
        "vote_up": null,
        "vote_down": null,
        "vote_comment": null,
        "vote_bull": null,
        "vote_bear": null,
        "created_at": "2022-02-09 13:26:06",
        "updated_at": "2022-02-09 13:26:06",
        "img_id": "ed734b72-abfe-49cd-b9bd-8c22c2ff1ed0",
        "url": "https://images.cointelegraph.com/images/587_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9iMGJjYjJhMWVjOTU2NWU2MmJhODMzYWExMTEzZDhlMC5qcGc=.jpg"
    },
]
export { SERVER_URL, PROXY_URL, TaskFiveCategoryLi, NEWS_SAMPLE, POLL_OPTIONS }