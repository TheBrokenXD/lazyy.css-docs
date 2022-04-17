import Image from 'next/image'

const Avatars = () => {
    return (
        <>
            <div className="display-f flex-wrap gap-2">
                <div>
                    <h3 className='custom-sub-text'>Small</h3>
                    <div className='avatar-sm mt-1'><Image src="/demo.png" width={30} height={30} alt="img"/></div>
                </div>
                <div>
                    <h3 className='custom-sub-text'>Small - Square</h3>
                    <div className='avatar-square-sm mt-1'><Image src="/demo.png" width={30} height={30} alt="img"/></div>
                </div>
            </div>
            <div className="display-f flex-wrap gap-2">
                <div>
                    <h3 className='custom-sub-text'>Regular</h3>
                    <div className='avatar-reg mt-1'><Image src="/demo.png" width={60} height={60} alt="img"/></div>
                </div>
                <div>
                    <h3 className='custom-sub-text'>Regular - Square</h3>
                    <div className='avatar-square-reg mt-1'><Image src="/demo.png" width={60} height={60} alt="img"/></div>
                </div>
            </div>
            <div className="display-f flex-wrap gap-2">
                <div>
                    <h3 className='custom-sub-text'>XL</h3>
                    <div className='avatar-xl mt-1'><Image src="/demo.png" width={120} height={120} alt="img"/></div>
                </div>
                <div>
                    <h3 className='custom-sub-text'>XL - Square</h3>
                    <div className='avatar-square-xl mt-1'><Image src="/demo.png" width={120} height={120} alt="img"/></div>
                </div>
            </div>
            <div className="display-f flex-wrap gap-2">
                <div>
                    <h3 className='custom-sub-text'>XXL</h3>
                    <div className='avatar-xxl mt-1'><Image src="/demo.png" width={180} height={180} alt="img"/></div>
                </div>
                <div>
                    <h3 className='custom-sub-text'>XXL</h3>
                    <div className='avatar-square-xxl mt-1'><Image src="/demo.png" width={180} height={180} alt="img"/></div>
                </div>
            </div>
        </>
    );
}
 
export default Avatars;