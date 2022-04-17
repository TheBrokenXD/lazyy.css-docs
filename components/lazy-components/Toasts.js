import { useRef } from 'react';

const Toasts = () => {

    const toastRef = useRef();

    const showToast = () => {
        toastRef.current.className = "toast custom-color-bg";
        toastRef.current.children[0].innerHTML = "Hey there!";
        setTimeout(() => {
            toastRef.current.className = "toast-hidden custom-color-bg"
        }, 2000)
    }

    return (
        <>
            <div ref={toastRef} className="toast-hidden custom-error-bg">
                <p className='fw-md custom-main'>Error! please check your code</p>
            </div>

            <div className='display-f justify-center'>
                <button className="custom-btn-rounded custom-main pl-5 pr-5 pt-2 pb-2" onClick={showToast}>Toast!</button>
            </div>
        </>
    );
}
 
export default Toasts;