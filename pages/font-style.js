import Head from 'next/head'
import Link from 'next/link'

const fontStyle = () => {
    return (
        <>
            <Head>
                <title>Font Style - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Font Style</h1>
                <p className='fw-md custom-sub-text mt-1'>To control an {`element's`} font style.</p>

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
                            <p className='custom-color'>fs-italic</p>
                            <p className='custom-color pt-2'>fs-normal</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>font-style: italic;</p>
                            <p className='custom-variant-2 pt-2'>font-style: normal;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Italic</h2>
                    <p className='custom-sub-text fs-italic pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus similique impedit officiis quasi voluptatum, dignissimos velit consectetur nemo sequi perferendis!</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='custom-sub-text fs-italic'>...</p>`
}
                        </code>
                    </pre>
                </div>
                
                <div className='mt-3'>
                    <h2 className="custom-text">Normal</h2>
                    <p className='custom-sub-text fs-normal pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus similique impedit officiis quasi voluptatum, dignissimos velit consectetur nemo sequi perferendis!</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='custom-sub-text fs-normal'>...</p>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Breakpoints</h2>
                    <p className='custom-sub-text mt-1'>For each breakpoint, you can modify utility classes.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='fs-normal lg-fs-normal'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>To learn more about breakpoints, check <Link href="/responsiveness" passHref><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default fontStyle;