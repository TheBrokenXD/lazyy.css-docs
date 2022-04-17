import Head from 'next/head'
import Link from 'next/link'

const margin = () => {
    return (
        <>
            <Head>
                <title>margin - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <p className="custom-color">Spacing {`&`} Sizing</p>
                <h1 className="custom-text mt-1">Margin</h1>
                <p className='fw-md custom-sub-text mt-1'>To control an {`element's`} margin.</p>

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
                            <p className='custom-color'>m-0</p>
                            <p className='custom-color pt-2'>m-1</p>
                            <p className='custom-color pt-2'>m-2</p>
                            <p className='custom-color pt-2'>m-3</p>
                            <p className='custom-color pt-2'>m-4</p>
                            <p className='custom-color pt-2'>m-5</p>
                            <p className='custom-color pt-2'>m-6</p>
                            <p className='custom-color pt-2'>m-7</p>
                            <p className='custom-color pt-2'>m-8</p>
                            <p className='custom-color pt-2'>ml-0</p>
                            <p className='custom-color pt-2'>ml-1</p>
                            <p className='custom-color pt-2'>ml-2</p>
                            <p className='custom-color pt-2'>ml-3</p>
                            <p className='custom-color pt-2'>ml-4</p>
                            <p className='custom-color pt-2'>ml-5</p>
                            <p className='custom-color pt-2'>ml-6</p>
                            <p className='custom-color pt-2'>ml-7</p>
                            <p className='custom-color pt-2'>ml-8</p>
                            <p className='custom-color pt-2'>mr-0</p>
                            <p className='custom-color pt-2'>mr-1</p>
                            <p className='custom-color pt-2'>mr-2</p>
                            <p className='custom-color pt-2'>mr-3</p>
                            <p className='custom-color pt-2'>mr-4</p>
                            <p className='custom-color pt-2'>mr-5</p>
                            <p className='custom-color pt-2'>mr-6</p>
                            <p className='custom-color pt-2'>mr-7</p>
                            <p className='custom-color pt-2'>mr-8</p>
                            <p className='custom-color pt-2'>mt-0</p>
                            <p className='custom-color pt-2'>mt-1</p>
                            <p className='custom-color pt-2'>mt-2</p>
                            <p className='custom-color pt-2'>mt-3</p>
                            <p className='custom-color pt-2'>mt-4</p>
                            <p className='custom-color pt-2'>mt-5</p>
                            <p className='custom-color pt-2'>mt-6</p>
                            <p className='custom-color pt-2'>mt-7</p>
                            <p className='custom-color pt-2'>mt-8</p>
                            <p className='custom-color pt-2'>mb-0</p>
                            <p className='custom-color pt-2'>mb-1</p>
                            <p className='custom-color pt-2'>mb-2</p>
                            <p className='custom-color pt-2'>mb-3</p>
                            <p className='custom-color pt-2'>mb-4</p>
                            <p className='custom-color pt-2'>mb-5</p>
                            <p className='custom-color pt-2'>mb-6</p>
                            <p className='custom-color pt-2'>mb-7</p>
                            <p className='custom-color pt-2'>mb-8</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>margin: 0;</p>
                            <p className='custom-variant-2 pt-2'>margin: 0.5rem;</p>
                            <p className='custom-variant-2 pt-2'>margin: 1rem;</p>
                            <p className='custom-variant-2 pt-2'>margin: 2rem;</p>
                            <p className='custom-variant-2 pt-2'>margin: 3rem;</p>
                            <p className='custom-variant-2 pt-2'>margin: 4rem;</p>
                            <p className='custom-variant-2 pt-2'>margin: 5rem;</p>
                            <p className='custom-variant-2 pt-2'>margin: 6rem;</p>
                            <p className='custom-variant-2 pt-2'>margin: 7rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-left: 0;</p>
                            <p className='custom-variant-2 pt-2'>margin-left: 0.5rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-left: 1rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-left: 2rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-left: 3rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-left: 4rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-left: 5rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-left: 6rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-left: 7rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-right: 0;</p>
                            <p className='custom-variant-2 pt-2'>margin-right: 0.5rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-right: 1rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-right: 2rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-right: 3rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-right: 4rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-right: 5rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-right: 6rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-right: 7rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-top: 0;</p>
                            <p className='custom-variant-2 pt-2'>margin-top: 0.5rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-top: 1rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-top: 2rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-top: 3rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-top: 4rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-top: 5rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-top: 6rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-top: 7rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-bottom: 0;</p>
                            <p className='custom-variant-2 pt-2'>margin-bottom: 0.5rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-bottom: 1rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-bottom: 2rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-bottom: 3rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-bottom: 4rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-bottom: 5rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-bottom: 6rem;</p>
                            <p className='custom-variant-2 pt-2'>margin-bottom: 7rem;</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-3">
                    <h2 className="custom-text">Margin</h2>
                    <div className='card custom-sub-text-bg mt-1'>
                        <div className='card custom-color-bg m-2'>
                            <p className='white'>m-2</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='card custom-sub-text-bg mt-1'>
    <div class='card custom-color-bg m-2'>
        <p class='white'>m-2</p>
    </div>
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className="mt-3">
                    <h2 className="custom-text">Margin to a single side</h2>
                    <div className='card custom-sub-text-bg p-2 mt-1'>
                        <div className="card custom-sub-text-bg">
                            <div className='card custom-color-bg p-0'>
                                <div className="card custom-main-bg ml-3 p-2">
                                    <p className='fw-md custom-text'>ml-3</p>
                                </div>
                            </div>
                            <div className='card custom-color-bg p-0 mt-2'>
                                <div className="card custom-main-bg mr-3 p-2">
                                    <p className='fw-md custom-text'>mr-3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="card custom-sub-text-bg">
    <div class='card custom-color-bg p-0'>
        <div class="card custom-main-bg ml-3 p-2">
            <p class='fw-md custom-text'>ml-3</p>
        </div>
    </div>
    <div class='card custom-color-bg p-0 mt-2'>
        <div class="card custom-main-bg mr-3 p-2">
            <p class='fw-md custom-text'>mr-3</p>
        </div>
    </div>
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className="mt-3">
                    <h2 className="custom-text">Horizontal Margin</h2>
                    <div className='card custom-sub-text-bg p-2 mt-1'>
                        <div className="card custom-sub-text-bg display-f justify-center">
                            <div className='card custom-color-bg p-0'>
                                <div className="card custom-main-bg mh-3 p-2">
                                    <p className='fw-md custom-text'>mh-3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='card custom-sub-text-bg p-2 mt-1'>
    <div class="card custom-sub-text-bg display-f justify-center">
        <div class='card custom-color-bg p-0'>
            <div class="card custom-main-bg mh-3 p-2">
                <p class='fw-md custom-text'>mh-3</p>
            </div>
        </div>
    </div>
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className="mt-3">
                    <h2 className="custom-text">Vertical Margin</h2>
                    <div className='card custom-sub-text-bg p-2 mt-1'>
                        <div className="card custom-sub-text-bg display-f justify-center">
                            <div className='card custom-color-bg p-0'>
                                <div className="card custom-main-bg mv-3 p-2">
                                    <p className='fw-md custom-text'>mv-3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='card custom-sub-text-bg p-2 mt-1'>
    <div class="card custom-sub-text-bg display-f justify-center">
        <div class='card custom-color-bg p-0'>
            <div class="card custom-main-bg mv-3 p-2">
                <p class='fw-md custom-text'>mv-3</p>
            </div>
        </div>
    </div>
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Breakpoints</h2>
                    <p className='custom-sub-text mt-1'>For each breakpoint, you can modify utility classes.</p>
                    <p className='custom-sub-text mt-1'>To learn more about breakpoints, check <Link href="/responsiveness" passHref><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default margin;