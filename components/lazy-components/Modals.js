import { useRef } from "react";

const Modals = () => {

    const modalRefOne = useRef(null);

    const openRef = () => {
        modalRefOne.current.className = "modal";
    }

    const closeRef = () => {
        modalRefOne.current.className = "modal-hidden";
    }

    return (
        <>
            <div ref={modalRefOne} className="modal-hidden">
                <div className="modal-content card black-bg custom-card-bg-gradient base-shadow">
                    <span className="float-right font-xl pointer custom-main" onClick={closeRef}>&times;</span>
                    <p className="font-lg fw-lg custom-main">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quo!</p>
                </div>
            </div>
            <div className="display-f justify-center">
                <button className="custom-btn-rounded custom-main pl-5 pr-5 pt-2 pb-2" onClick={openRef}>Click Here</button>
            </div>
        </>
    );
}
 
export default Modals;