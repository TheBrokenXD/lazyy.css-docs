const Forms = () => {
    return (
        <>
            <form>
                <div className="display-f-col mt-2">
                    <label for="test-1" className="form-label">Your name</label>
                    <input type="text" id="test-1" className="mt-1 input-t" />
                </div>
                <div className="display-f-col mt-2">
                    <label for="test-2" className="form-label">Age?</label>
                    <input type="text" id="test-2" className="mt-1 input-t"  placeholder="placeholder" />
                </div>
                <div className="display-f-col mt-2">
                    <label for="test-3" className="form-label">From?</label>
                    <input type="text" id="test-3" className="mt-1 input-t" />
                </div>
                <button className="emerald-btn-rounded mt-3 pl-5 pr-5 pt-2 pb-2">Stalk me</button>
            </form>
        </>
    );
}
 
export default Forms;