import Head from 'next/head'
import Link from 'next/link'

const padding = () => {
    return (
        <>
            <Head>
                <title>Padding - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <p className="custom-color">Spacing {`&`} Sizing</p>
                <h1 className="custom-text mt-1">Padding</h1>
                <p className='fw-md custom-sub-text mt-1'>To control an {`element's`} padding.</p>

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
                            <p className='custom-color'>p-0</p>
                            <p className='custom-color pt-2'>p-1</p>
                            <p className='custom-color pt-2'>p-2</p>
                            <p className='custom-color pt-2'>p-3</p>
                            <p className='custom-color pt-2'>p-4</p>
                            <p className='custom-color pt-2'>p-5</p>
                            <p className='custom-color pt-2'>p-6</p>
                            <p className='custom-color pt-2'>p-7</p>
                            <p className='custom-color pt-2'>p-8</p>
                            <p className='custom-color pt-2'>pl-0</p>
                            <p className='custom-color pt-2'>pl-1</p>
                            <p className='custom-color pt-2'>pl-2</p>
                            <p className='custom-color pt-2'>pl-3</p>
                            <p className='custom-color pt-2'>pl-4</p>
                            <p className='custom-color pt-2'>pl-5</p>
                            <p className='custom-color pt-2'>pl-6</p>
                            <p className='custom-color pt-2'>pl-7</p>
                            <p className='custom-color pt-2'>pl-8</p>
                            <p className='custom-color pt-2'>pr-0</p>
                            <p className='custom-color pt-2'>pr-1</p>
                            <p className='custom-color pt-2'>pr-2</p>
                            <p className='custom-color pt-2'>pr-3</p>
                            <p className='custom-color pt-2'>pr-4</p>
                            <p className='custom-color pt-2'>pr-5</p>
                            <p className='custom-color pt-2'>pr-6</p>
                            <p className='custom-color pt-2'>pr-7</p>
                            <p className='custom-color pt-2'>pr-8</p>
                            <p className='custom-color pt-2'>pt-0</p>
                            <p className='custom-color pt-2'>pt-1</p>
                            <p className='custom-color pt-2'>pt-2</p>
                            <p className='custom-color pt-2'>pt-3</p>
                            <p className='custom-color pt-2'>pt-4</p>
                            <p className='custom-color pt-2'>pt-5</p>
                            <p className='custom-color pt-2'>pt-6</p>
                            <p className='custom-color pt-2'>pt-7</p>
                            <p className='custom-color pt-2'>pt-8</p>
                            <p className='custom-color pt-2'>pb-0</p>
                            <p className='custom-color pt-2'>pb-1</p>
                            <p className='custom-color pt-2'>pb-2</p>
                            <p className='custom-color pt-2'>pb-3</p>
                            <p className='custom-color pt-2'>pb-4</p>
                            <p className='custom-color pt-2'>pb-5</p>
                            <p className='custom-color pt-2'>pb-6</p>
                            <p className='custom-color pt-2'>pb-7</p>
                            <p className='custom-color pt-2'>pb-8</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>padding: 0;</p>
                            <p className='custom-variant-2 pt-2'>padding: 0.5rem;</p>
                            <p className='custom-variant-2 pt-2'>padding: 1rem;</p>
                            <p className='custom-variant-2 pt-2'>padding: 2rem;</p>
                            <p className='custom-variant-2 pt-2'>padding: 3rem;</p>
                            <p className='custom-variant-2 pt-2'>padding: 4rem;</p>
                            <p className='custom-variant-2 pt-2'>padding: 5rem;</p>
                            <p className='custom-variant-2 pt-2'>padding: 6rem;</p>
                            <p className='custom-variant-2 pt-2'>padding: 7rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-left: 0;</p>
                            <p className='custom-variant-2 pt-2'>padding-left: 0.5rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-left: 1rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-left: 2rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-left: 3rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-left: 4rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-left: 5rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-left: 6rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-left: 7rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-right: 0;</p>
                            <p className='custom-variant-2 pt-2'>padding-right: 0.5rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-right: 1rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-right: 2rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-right: 3rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-right: 4rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-right: 5rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-right: 6rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-right: 7rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-top: 0;</p>
                            <p className='custom-variant-2 pt-2'>padding-top: 0.5rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-top: 1rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-top: 2rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-top: 3rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-top: 4rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-top: 5rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-top: 6rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-top: 7rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-bottom: 0;</p>
                            <p className='custom-variant-2 pt-2'>padding-bottom: 0.5rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-bottom: 1rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-bottom: 2rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-bottom: 3rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-bottom: 4rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-bottom: 5rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-bottom: 6rem;</p>
                            <p className='custom-variant-2 pt-2'>padding-bottom: 7rem;</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-3">
                    <h2 className="custom-text">Padding</h2>
                    <div className='card custom-sub-text-bg p-2 mt-1'>
                        <div className='card custom-color-bg p-2'>
                            <p className='white'>p-2</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='card custom-sub-text-bg p-2 mt-1'>
    <div class='card custom-color-bg p-2'>
        <p class='white'>p-2</p>
    </div>
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className="mt-3">
                    <h2 className="custom-text">Padding to a single side</h2>
                    <div className='card custom-sub-text-bg p-2 mt-1'>
                        <div className="card custom-sub-text-bg display-f justify-center">
                            <div className='card custom-color-bg p-0 pl-3'>
                                <div className="card custom-main-bg p-3">
                                    <p className='fw-md custom-text'>pl-3</p>
                                </div>
                            </div>
                            <div className='card custom-color-bg p-0 pr-3 ml-2'>
                                <div className="card custom-main-bg p-3">
                                    <p className='fw-md custom-text'>pr-3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="card custom-sub-text-bg display-f justify-center">
    <div class='card custom-color-bg p-0 pl-3'>
        <div class="card custom-main-bg p-3">
            <p class='fw-md custom-text'>pl-3</p>
        </div>
    </div>
    <div class='card custom-color-bg p-0 pr-3 ml-2'>
        <div class="card custom-main-bg p-3">
            <p class='fw-md custom-text'>pr-3</p>
        </div>
    </div>
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className="mt-3">
                    <h2 className="custom-text">Horizontal Padding</h2>
                    <div className='card custom-sub-text-bg p-2 mt-1'>
                        <div className="card custom-sub-text-bg display-f justify-center">
                            <div className='card custom-color-bg p-0 ph-3'>
                                <div className="card custom-main-bg p-3">
                                    <p className='fw-md custom-text'>ph-3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='card custom-color-bg p-0 ph-3'>
    <div class="card custom-main-bg p-3">
        <p class='fw-md custom-text'>ph-3</p>
    </div>
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className="mt-3">
                    <h2 className="custom-text">Vertical Padding</h2>
                    <div className='card custom-sub-text-bg p-2 mt-1'>
                        <div className="card custom-sub-text-bg display-f justify-center">
                            <div className='card custom-color-bg p-0 pv-3'>
                                <div className="card custom-main-bg p-3">
                                    <p className='fw-md custom-text'>pv-3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='card custom-color-bg p-0 pv-3'>
    <div class="card custom-main-bg p-3">
        <p class='fw-md custom-text'>pv-3</p>
    </div>
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Breakpoints</h2>
                    <p className='custom-sub-text mt-1'>For each breakpoint, you can modify utility classes.</p>
                    <p className='custom-sub-text mt-1'>To learn more about breakpoints, check <Link href="/responsiveness"><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default padding;