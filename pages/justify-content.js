import Head from 'next/head'
import Link from 'next/link'

const justifyContent = () => {
    return (
        <>
            <Head>
                <title>Justify Content - Lazyy CSS</title>
            </Head>     

            <div className="mt-4 p-4">
                <h1 className="custom-text">Justify Content</h1>
                <p className='fw-md custom-sub-text mt-1'>When the elements in the flexible container do not occupy all of the available space on the main-axis, the justify-content property aligns them.</p>

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
                            <p className='custom-color'>justify-start</p>
                            <p className='custom-color pt-2'>justify-end</p>
                            <p className='custom-color pt-2'>justify-center</p>
                            <p className='custom-color pt-2'>justify-between</p>
                            <p className='custom-color pt-2'>justify-around</p>
                            <p className='custom-color pt-2'>justify-evenly</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>justify-content: start;</p>
                            <p className='custom-variant-2 pt-2'>justify-content: end;</p>
                            <p className='custom-variant-2 pt-2'>justify-content: center;</p>
                            <p className='custom-variant-2 pt-2'>justify-content: between;</p>
                            <p className='custom-variant-2 pt-2'>justify-content: around;</p>
                            <p className='custom-variant-2 pt-2'>justify-content: evenly;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Justify Start</h2>
                    <p className='custom-sub-text pt-1'>Justify items against the start of the {`container's`} main axis.</p>
                    <div className='card custom-sub-text-bg p-2 mt-1'>
                        <div className='display-f justify-start'>
                            <div className='card honey-color-bg p-3'>
                                <p className='fw-md honey-text'>1</p>
                            </div>
                            <div className='card honey-main-bg p-3 ml-2'>
                                <p className='fw-md honey-text'>2</p>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="display-f justify-start">..</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Justify End</h2>
                    <p className='custom-sub-text pt-1'>Justify items against the end of the {`container's`} main axis.</p>
                    <div className='card custom-sub-text-bg p-2 mt-1'>
                        <div className='display-f justify-end'>
                            <div className='card honey-color-bg p-3'>
                                <p className='fw-md honey-text'>1</p>
                            </div>
                            <div className='card honey-main-bg p-3 ml-2'>
                                <p className='fw-md honey-text'>2</p>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="display-f justify-end">..</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Justify Center</h2>
                    <p className='custom-sub-text pt-1'>Justify items along the center of the {`container's`} main axis.</p>
                    <div className='card custom-sub-text-bg p-2 mt-1'>
                        <div className='display-f justify-center'>
                            <div className='card honey-color-bg p-3'>
                                <p className='fw-md honey-text'>1</p>
                            </div>
                            <div className='card honey-main-bg p-3 ml-2'>
                                <p className='fw-md honey-text'>2</p>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="display-f justify-center">..</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Justify Between</h2>
                    <p className='custom-sub-text pt-1'>Justify items along the {`container's`} main axis such that there is an equal amount of spac between each item.</p>
                    <div className='card custom-sub-text-bg p-2 mt-1'>
                        <div className='display-f justify-between'>
                            <div className='card honey-color-bg p-3'>
                                <p className='fw-md honey-text'>1</p>
                            </div>
                            <div className='card honey-main-bg p-3 ml-2'>
                                <p className='fw-md honey-text'>2</p>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="display-f justify-between">..</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Justify Around</h2>
                    <p className='custom-sub-text pt-1'>Justify items along the {`container's`} main axis such that there is an equal amount of space on each side of each item.</p>
                    <div className='card custom-sub-text-bg p-2 mt-1'>
                        <div className='display-f justify-around'>
                            <div className='card honey-color-bg p-3'>
                                <p className='fw-md honey-text'>1</p>
                            </div>
                            <div className='card honey-main-bg p-3 ml-2'>
                                <p className='fw-md honey-text'>2</p>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="display-f justify-around">..</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Justify Evenly</h2>
                    <p className='custom-sub-text pt-1'>Justify items along the center of the {`container's`} main axis such that there is an equal amount of space around each item.</p>
                    <div className='card custom-sub-text-bg p-2 mt-1'>
                        <div className='display-f justify-evenly'>
                            <div className='card honey-color-bg p-3'>
                                <p className='fw-md honey-text'>1</p>
                            </div>
                            <div className='card honey-main-bg p-3 ml-2'>
                                <p className='fw-md honey-text'>2</p>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="display-f justify-evenly">..</div>`
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
`<div class='display-f lg-justify-around xs-justify-center'></div>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>Will justify the elements to the center by default and space around above large sized screens. To learn more about breakpoints, check <Link href="/responsiveness"><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default justifyContent;