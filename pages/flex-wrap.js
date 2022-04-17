import Head from 'next/head'
import Link from 'next/link'

const flexWrap = () => {
    return (
        <>
            <Head>
                <title>Flex Wrap - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Flex Wrap</h1>
                <p className='fw-md custom-sub-text mt-1'>The flex-wrap property determines whether or not the flexible elements should be wrapped around each other.</p>

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
                            <p className='custom-color'>flex-wrap</p>
                            <p className='custom-color pt-2'>flex-wrap-rev</p>
                            <p className='custom-color pt-2'>flex-nowrap</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>flex-wrap: wrap;</p>
                            <p className='custom-variant-2 pt-2'>flex-wrap: wrap-reverse;</p>
                            <p className='custom-variant-2 pt-2'>flex-wrap: nowrap;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Wrap</h2>
                    <p className='custom-sub-text pt-1'>When flex-wrap is used, child components will wrap to several rows if they are wider than their parent.</p>
                    <div className="card custom-sub-text-bg w-full mt-1 display-f justify-center">
                        <div className='max-w-400-px display-f flex-wrap justify-center p-2'>
                            <div className='card honey-color-bg p-3'>
                                <p className='fw-md honey-text'>1</p>
                            </div>
                            <div className='card honey-main-bg p-3 ml-3'>
                                <p className='fw-md honey-text'>2</p>
                            </div>
                            <div className='card honey-color-bg p-3 ml-3'>
                                <p className='fw-md honey-text'>3</p>
                            </div>
                            <div className='card honey-main-bg p-3 ml-3 mt-2'>
                                <p className='fw-md honey-text'>4</p>
                            </div>
                            <div className='card honey-color-bg p-3 ml-3 mt-2'>
                                <p className='fw-md honey-text'>5</p>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="display-f flex-wrap">..</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Wrap Reverse</h2>
                    <p className='custom-sub-text pt-1'>Specifying flex-wrap-reverse reverses the ordering of rows.</p>
                    <div className="card custom-sub-text-bg w-full mt-1 display-f justify-center">
                        <div className='max-w-400-px display-f flex-wrap-rev justify-center p-2'>
                            <div className='card honey-color-bg p-3 mt-2'>
                                <p className='fw-md honey-text'>1</p>
                            </div>
                            <div className='card honey-main-bg p-3 ml-3 mt-2'>
                                <p className='fw-md honey-text'>2</p>
                            </div>
                            <div className='card honey-color-bg p-3 ml-3 mt-2'>
                                <p className='fw-md honey-text'>3</p>
                            </div>
                            <div className='card honey-main-bg p-3 ml-3'>
                                <p className='fw-md honey-text'>4</p>
                            </div>
                            <div className='card honey-color-bg p-3 ml-3'>
                                <p className='fw-md honey-text'>5</p>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="display-f flex-wrap-rev">..</div>`
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
`<div class='display-f md-flex-nowrap xs-flex-wrap'></div>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>Will wrap the elements on small screens and {`won't`} wrap them on medium-sized screens. To learn more about breakpoints, check <Link href="/responsiveness" passHref><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default flexWrap;