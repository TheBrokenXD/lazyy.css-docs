import Head from 'next/head'

const cursor = () => {
    return (
        <>
            <Head>
                <title>Cursor - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <p className="custom-color">Interaction</p>
                <h1 className="custom-text mt-1">Cursor</h1>
                <p className='fw-md custom-sub-text mt-1'>To control the cursor style.</p>

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
                            <p className='custom-color'>cursor-pointer</p>
                            <p className='custom-color pt-2'>cursor-text</p>
                            <p className='custom-color pt-2'>cursor-wait</p>
                            <p className='custom-color pt-2'>cursor-move</p>
                            <p className='custom-color pt-2'>cursor-not-allowed</p>
                            <p className='custom-color pt-2'>cursor-help</p>
                            <p className='custom-color pt-2'>cursor-zoom-in</p>
                            <p className='custom-color pt-2'>cursor-zoom-out</p>
                            <p className='custom-color pt-2'>cursor-grab</p>
                            <p className='custom-color pt-2'>cursor-grabbing</p>
                            <p className='custom-color pt-2'>cursor-none</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2 cursor-pointer'>cursor: pointer;</p>
                            <p className='custom-variant-2 pt-2 cursor-text'>cursor: text;</p>
                            <p className='custom-variant-2 pt-2 cursor-wait'>cursor: wait;</p>
                            <p className='custom-variant-2 pt-2 cursor-move'>cursor: move;</p>
                            <p className='custom-variant-2 pt-2 cursor-not-allowed'>cursor: not-allowed;</p>
                            <p className='custom-variant-2 pt-2 cursor-help'>cursor: help;</p>
                            <p className='custom-variant-2 pt-2 cursor-zoom-in'>cursor: zoom-in;</p>
                            <p className='custom-variant-2 pt-2 cursor-zoom-out'>cursor: zoom-out;</p>
                            <p className='custom-variant-2 pt-2 cursor-grab'>cursor: grab;</p>
                            <p className='custom-variant-2 pt-2 cursor-grabbing'>cursor: grabbing;</p>
                            <p className='custom-variant-2 pt-2 cursor-none'>cursor: none;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Events</h2>
                    <div className='display-f justify-center mt-1 mb-2'>
                        <button className='custom-btn custom-main cursor-pointer'>Pointer</button>
                        <button className='custom-btn custom-main cursor-wait ml-2'>Wait</button>
                        <button className='custom-btn custom-main cursor-not-allowed ml-2'>Not Allowed</button>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<button class='custom-btn custom-main cursor-pointer'>Pointer</button>
<button class='custom-btn custom-main cursor-wait ml-2'>Wait</button>
<button class='custom-btn custom-main cursor-not-allowed ml-2'>Not Allowed</button>`
}
                        </code>
                    </pre>
                </div>
            </div>
        </>
    );
}
 
export default cursor;