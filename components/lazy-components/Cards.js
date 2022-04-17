const Cards = () => {
    return (
        <>
            <div className="mt-3">
                <div className="card black-bg p-4">
                <h1 className="card-title white ml-3 mt-2">Card Title</h1>
                <div className="card-body ml-3">
                    <p className="emerald-text">This is the card body</p>
                </div>
                <button className="emerald-btn-rounded white emerald-error-bg mt-2 ml-3 mb-2">Emerald BTN</button>
                </div>
            </div>

            <div className="card black-bg emerald-card-bg-gradient p-4 mt-3">
                <h1 className="card-title white ml-3 mt-2">Card Title</h1>
                <div className="card-body ml-3">
                    <p className="emerald-text">This is the card body</p>
                </div>
                <button className="emerald-btn-rounded white emerald-error-bg mt-2 ml-3 mb-2">Emerald BTN</button>
            </div>

            <div className="card black-bg custom-card-bg-gradient p-4 mt-3">
                <h1 className="card-title white ml-3 mt-2">Card Title</h1>
                <div className="card-body ml-3">
                    <p className="custom-text">This is the card body</p>
                </div>
                <button className="custom-btn-rounded white emerald-error-bg mt-2 ml-3 mb-2">custom BTN</button>
            </div>
        </>
    );
}
 
export default Cards;