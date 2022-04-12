import Head from 'next/head'
import Link from 'next/link'

const overflow = () => {
    return (
        <>
            <Head>
                <title>Overflow - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Overflow</h1>
                <p className='fw-md custom-sub-text mt-1'>If the content of an {`element's`} box is filled to its maximum height or width, the overflow property specifies what should happen.</p>

                <div className='mt-4'>
                    <div className="row">
                        <div className="col-6-xs">
                            <h3>Class</h3>
                        </div>
                        <div className="col-6-xs">
                            <h3>Properties</h3>
                        </div>
                    </div>

                    <div className="row pt-2 max-h-250-px overflow-y-scroll">
                        <div className="col-6-xs">
                            <p className='custom-color'>overflow-hidden</p>
                            <p className='custom-color pt-2'>overflow-visible</p>
                            <p className='custom-color pt-2'>overflow-scroll</p>
                            <p className='custom-color pt-2'>overflow-auto</p>
                            <p className='custom-color pt-2'>overflow-x-hidden</p>
                            <p className='custom-color pt-2'>overflow-x-visible</p>
                            <p className='custom-color pt-2'>overflow-x-scroll</p>
                            <p className='custom-color pt-2'>overflow-x-auto</p>
                            <p className='custom-color pt-2'>overflow-y-hidden</p>
                            <p className='custom-color pt-2'>overflow-y-visible</p>
                            <p className='custom-color pt-2'>overflow-y-scroll</p>
                            <p className='custom-color pt-2'>overflow-y-auto</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>overflow: hidden;</p>
                            <p className='custom-variant-2 pt-2'>overflow: visible;</p>
                            <p className='custom-variant-2 pt-2'>overflow: scroll;</p>
                            <p className='custom-variant-2 pt-2'>overflow: auto;</p>
                            <p className='custom-variant-2 pt-2'>overflow-x: hidden;</p>
                            <p className='custom-variant-2 pt-2'>overflow-x: visible;</p>
                            <p className='custom-variant-2 pt-2'>overflow-x: scroll;</p>
                            <p className='custom-variant-2 pt-2'>overflow-x: auto;</p>
                            <p className='custom-variant-2 pt-2'>overflow-y: hidden;</p>
                            <p className='custom-variant-2 pt-2'>overflow-y: visible;</p>
                            <p className='custom-variant-2 pt-2'>overflow-y: scroll;</p>
                            <p className='custom-variant-2 pt-2'>overflow-y: auto;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Overflow Visible</h2>
                    <p className='custom-sub-text pt-1'>Using the overflow-visible attribute, you can see when an element has gone beyond its allowed maximum size. The scrollbar {`isn't`} necessary if you want to display an {`element's`} overflow.</p>
                    
                </div>
            </div>
        </>
    );
}
 
export default overflow;