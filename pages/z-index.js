import Head from 'next/head'
import Link from 'next/link'

const zIndex = () => {
    return (
        <>
            <Head>
                <title>Z-Index - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Z-Index</h1>
                <p className='fw-md custom-sub-text mt-1'>The stacking order of elements may be specified using the z-index attribute.</p>

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
                            <p className='custom-color'>z-neg-3</p>
                            <p className='custom-color pt-2'>z-neg-2</p>
                            <p className='custom-color pt-2'>z-neg-1</p>
                            <p className='custom-color pt-2'>z-0</p>
                            <p className='custom-color pt-2'>z-1</p>
                            <p className='custom-color pt-2'>z-2</p>
                            <p className='custom-color pt-2'>z-3</p>
                            <p className='custom-color pt-2'>z-auto</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>z-index: -3;</p>
                            <p className='custom-variant-2 pt-2'>z-index: -2;</p>
                            <p className='custom-variant-2 pt-2'>z-index: -1;</p>
                            <p className='custom-variant-2 pt-2'>z-index: 0;</p>
                            <p className='custom-variant-2 pt-2'>z-index: 1;</p>
                            <p className='custom-variant-2 pt-2'>z-index: 2;</p>
                            <p className='custom-variant-2 pt-2'>z-index: 3;</p>
                            <p className='custom-variant-2 pt-2'>z-index: auto;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Z-Index</h2>
                    <div className='display-f justify-center gap-neg-2 mt-2 mb-2'>
                        <div className='card custom-main-bg w-full h-80-px p-2 z-neg-2'>
                            <div className='pos-relative'>
                                <div className='pearl-color-bg w-50-px h-50-px avatar-reg z-0 shadow-base display-f justify-center align-i-center pos-absolute left-2'>
                                    <p className='black'>0</p>
                                </div>
                                <div className='coffee-color-bg w-50-px h-50-px avatar-reg z-1 shadow-base display-f justify-center align-i-center pos-absolute left-4'>
                                    <p className='black'>1</p>
                                </div>
                                <div className='honey-color-bg w-50-px h-50-px avatar-reg z-2 shadow-base display-f justify-center align-i-center pos-absolute left-6'>
                                    <p className='black'>2</p>
                                </div>
                                <div className='custom-color-bg w-50-px h-50-px avatar-reg z-3 shadow-base display-f justify-center align-i-center pos-absolute left-8'>
                                    <p className='black'>3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="z-0">0</div>
<div class="z-1">1</div>
<div class="z-2">2</div>
<div class="z-3">3</div>`
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
`<div class='xs-z-0 lg-z-2'>...</div>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>will apply z-0 as the default and z-2 for larger screens. To learn more about breakpoints, check <Link href="/responsiveness"><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default zIndex;