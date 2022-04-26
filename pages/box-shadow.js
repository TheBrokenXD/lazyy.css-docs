import Head from 'next/head'

const boxShadow = () => {
    return (
        <>
            <Head>
                <title>Box Shadow - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <p className="custom-color">Effects</p>
                <h1 className="custom-text">Box Shadow</h1>
                <p className='fw-md custom-sub-text mt-1'>To control an {`element's`} box shadow.</p>

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
                            <p className='custom-color'>shadow-base</p>
                            <p className='custom-color pt-2'>shadow-extra</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>box-shadow: rgb(0 0 0 / 12%) 0px 5px 10px !default;</p>
                            <p className='custom-variant-2 pt-2'>box-shadow: rgb(0 0 0 / 12%) 0px 8px 30px !default;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Base</h2>
                    <div className='display-f justify-center mt-1'>
                        <div className='royal-main-bg w-4 h-4 p-2 display-f justify-center align-i-center shadow-base'>
                            <p className='custom-text'>Base</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<div class='shadow-base'>...</div>`
}
                        </code>
                    </pre>
                </div>
                
                <div className='mt-3'>
                    <h2 className="custom-text">Extra</h2>
                    <div className='display-f justify-center mt-1'>
                        <div className='royal-main-bg w-4 h-4 p-2 display-f justify-center align-i-center shadow-extra'>
                            <p className='custom-text'>Extra</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<div class='shadow-extra'>...</div>`
}
                        </code>
                    </pre>
                </div>
            </div>
        </>
    );
}
 
export default boxShadow;