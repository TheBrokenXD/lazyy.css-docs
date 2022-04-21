import Head from 'next/head'
import Link from 'next/link'

const fontFamily = () => {
    return (
        <>
            <Head>
                <title>Font Family - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <p className="custom-color">Typography</p>
                <h1 className="custom-text mt-1">Font Family</h1>
                <p className='fw-md custom-sub-text mt-1'>To control an {`element's`} font family.</p>

                <div className='mt-4'>
                    <div className="row">
                        <div className="col-6-xs">
                            <h3>Class</h3>
                        </div>
                        <div className="col-6-xs">
                            <h3>Properties</h3>
                        </div>
                    </div>

                    <div className="row pt-2">
                        <div className="col-6-xs">
                            <p className='custom-color'>font-f-base</p>
                            <p className='custom-color pt-2'>font-f-alt</p>
                            <p className='custom-color pt-2'>font-f-code</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>font-family: "Google Sans Display", "Roboto", sans-serif;</p>
                            <p className='custom-variant-2 pt-2'>font-family: "Roboto", sans-serif;</p>
                            <p className='custom-variant-2 pt-2'>font-family: "Source Code Pro", monospace;</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default fontFamily;