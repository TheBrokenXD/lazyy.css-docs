import Head from 'next/head'
import Link from 'next/link'

const alignItems = () => {
    return (
        <>
            <Head>
                <title>Align Items - Lazyy CSS</title>
            </Head>     

            <div className="mt-4 p-4">
                <h1 className="custom-text">Align Items</h1>
                <p className='fw-md custom-sub-text mt-1'>The align-items property specifies the default alignment for items inside the flexible container.</p>

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
                            <p className='custom-color'>align-i-start</p>
                            <p className='custom-color pt-1'>align-i-end</p>
                            <p className='custom-color pt-1'>align-i-center</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>align-items: start;</p>
                            <p className='custom-variant-2 pt-1'>align-items: end;</p>
                            <p className='custom-variant-2 pt-1'>align-items: center;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Start</h2>
                    <p className='custom-sub-text pt-1'></p>
                    <div className='card custom-sub-text-bg h-200-px mt-1 display-f justify-center align-i-start'>
                        <div className='card honey-color-bg p-3'>
                            <p className='fw-md honey-text'>1</p>
                        </div>
                        <div className='card honey-main-bg p-3 ml-2'>
                            <p className='fw-md honey-text'>2</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="display-f justify-center align-i-start">..</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">End</h2>
                    <p className='custom-sub-text pt-1'>Justify items against the end of the {`container's`} main axis.</p>
                    <div className='card custom-sub-text-bg h-200-px mt-1 display-f justify-center align-i-end'>
                        <div className='card honey-color-bg p-3'>
                            <p className='fw-md honey-text'>1</p>
                        </div>
                        <div className='card honey-main-bg p-3 ml-2'>
                            <p className='fw-md honey-text'>2</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="display-f justify-center align-i-end">..</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Center</h2>
                    <p className='custom-sub-text pt-1'>Justify items along the center of the {`container's`} main axis.</p>
                    <div className='card custom-sub-text-bg h-200-px mt-1 display-f justify-center align-i-center'>
                        <div className='card honey-color-bg p-3'>
                            <p className='fw-md honey-text'>1</p>
                        </div>
                        <div className='card honey-main-bg p-3 ml-2'>
                            <p className='fw-md honey-text'>2</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="display-f justify-center align-i-center">..</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Breakpoints</h2>
                    <p className='custom-sub-text mt-1'>For each breakpoint, you can modify utility classes. For example,</p>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='display-f lg-align-i-start xs-align-i-center'></div>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>On large screens, the items will be aligned at the top, while on small screens, they will be aligned in the center. To learn more about breakpoints, check <Link href="/responsiveness"><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default alignItems;