const Loading = () => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full flex flex-col bg-gray-500 bg-opacity-50 z-20">
                <div className="lds-roller m-auto"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        </>
    )
}

export default Loading