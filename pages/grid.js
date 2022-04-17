import Head from 'next/head'
import Link from 'next/link'

const grid = () => {
    return (
        <>
            <Head>
                <title>Grid - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Grid</h1>
                <p className='fw-md custom-sub-text mt-1'>Grid is a powerful system that makes your site responsive from the start.</p>

                <div className="mt-4">
                    <div className="card custom-sub-text-bg p-3">
                        <div className='row gap-1'>
                            <div className="col-12-xs">
                                <div className='card custom-color-bg p-2 display-f justify-center'><p className='custom-text'>12</p></div>
                            </div>
                        </div>
                        <div className='row gap-1 mt-1'>
                            <div className="col-11-xs">
                                <div className='card custom-color-bg p-2 display-f justify-center'><p className='custom-text'>11</p></div>
                            </div>
                            <div className="col-1-xs">
                                <div className='card custom-main-bg p-2 display-f justify-center'><p className='custom-text'>1</p></div>
                            </div>
                        </div>
                        <div className='row gap-1 mt-1'>
                            <div className="col-10-xs">
                                <div className='card custom-color-bg p-2 display-f justify-center'><p className='custom-text'>10</p></div>
                            </div>
                            <div className="col-2-xs">
                                <div className='card custom-main-bg p-2 display-f justify-center'><p className='custom-text'>2</p></div>
                            </div>
                        </div>
                        <div className='row gap-1 mt-1'>
                            <div className="col-9-xs">
                                <div className='card custom-color-bg p-2 display-f justify-center'><p className='custom-text'>9</p></div>
                            </div>
                            <div className="col-3-xs">
                                <div className='card custom-main-bg p-2 display-f justify-center'><p className='custom-text'>3</p></div>
                            </div>
                        </div>
                        <div className='row gap-1 mt-1'>
                            <div className="col-8-xs">
                                <div className='card custom-color-bg p-2 display-f justify-center'><p className='custom-text'>8</p></div>
                            </div>
                            <div className="col-4-xs">
                                <div className='card custom-main-bg p-2 display-f justify-center'><p className='custom-text'>4</p></div>
                            </div>
                        </div>
                        <div className='row gap-1 mt-1'>
                            <div className="col-7-xs">
                                <div className='card custom-color-bg p-2 display-f justify-center'><p className='custom-text'>7</p></div>
                            </div>
                            <div className="col-5-xs">
                                <div className='card custom-main-bg p-2 display-f justify-center'><p className='custom-text'>5</p></div>
                            </div>
                        </div>
                        <div className='row gap-1 mt-1'>
                            <div className="col-6-xs">
                                <div className='card custom-color-bg p-2 display-f justify-center'><p className='custom-text'>6</p></div>
                            </div>
                            <div className="col-6-xs">
                                <div className='card custom-main-bg p-2 display-f justify-center'><p className='custom-text'>6</p></div>
                            </div>
                        </div>
                        <div className='row gap-1 mt-1'>
                            <div className="col-4-xs">
                                <div className='card custom-color-bg p-2 display-f justify-center'><p className='custom-text'>4</p></div>
                            </div>
                            <div className="col-4-xs">
                                <div className='card custom-main-bg p-2 display-f justify-center'><p className='custom-text'>4</p></div>
                            </div>
                            <div className="col-4-xs">
                                <div className='card custom-color-bg p-2 display-f justify-center'><p className='custom-text'>4</p></div>
                            </div>
                        </div>
                        <div className='row gap-1 mt-1'>
                            <div className="col-4-xs">
                                <div className='card custom-color-bg p-2 display-f justify-center'><p className='custom-text'>4</p></div>
                            </div>
                            <div className="col-8-xs">
                                <div className='card custom-main-bg p-2 display-f justify-center'><p className='custom-text'>8</p></div>
                            </div>
                        </div>
                        <div className='row gap-1 mt-1'>
                            <div className="col-3-xs">
                                <div className='card custom-color-bg p-2 display-f justify-center'><p className='custom-text'>3</p></div>
                            </div>
                            <div className="col-3-xs">
                                <div className='card custom-main-bg p-2 display-f justify-center'><p className='custom-text'>3</p></div>
                            </div>
                            <div className="col-3-xs">
                                <div className='card custom-color-bg p-2 display-f justify-center'><p className='custom-text'>3</p></div>
                            </div>
                            <div className="col-3-xs">
                                <div className='card custom-main-bg p-2 display-f justify-center'><p className='custom-text'>3</p></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <h2 className="custom-text">Row</h2>
                    <p className='custom-sub-text pt-1'>Align items in a row.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="row">..</div>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text pt-1'>Lazyy CSS features a total of 12 row blocks. You may get the whole width by using 12.</p>
                    <div className='card custom-sub-text-bg p-2'>
                        <div className='row p-2 mt-1'>
                            <div className="col-12-xs">
                                <div className='card custom-color-bg p-2 display-f justify-center'><p className='custom-text'>12</p></div>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="row">
    <div class="col-12-xs">..</div>
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className="mt-3">
                    <h2 className="custom-text">Gap</h2>
                    <p className='custom-sub-text pt-1'>To provide space between two row blocks.</p>
                    <div className='card custom-sub-text-bg p-2 mt-1'>
                        <div className='row gap-2'>
                            <div className="col-6-xs">
                                <div className='card custom-color-bg p-2 display-f justify-center'><p className='custom-text'>6</p></div>
                            </div>
                            <div className="col-6-xs">
                                <div className='card custom-main-bg p-2 display-f justify-center'><p className='custom-text'>6</p></div>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='row gap-2'>
    <div class="col-6-xs">
        <div class='card custom-color-bg p-2 display-f justify-center'><p class='custom-text'>6</p></div>
    </div>
    <div class="col-6-xs">
        <div class='card custom-main-bg p-2 display-f justify-center'><p class='custom-text'>6</p></div>
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
 
export default grid;