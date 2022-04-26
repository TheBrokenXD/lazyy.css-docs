import Head from 'next/head'
import Link from 'next/link'

const borderStyle = () => {
    return (
        <>
            <Head>
                <title>Border Style - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Border Width</h1>
                <p className='fw-md custom-sub-text mt-1'>To control an {`element's`} border style.</p>

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
                            <p className='custom-color'>border-solid</p>
                            <p className='custom-color pt-2'>border-dashed</p>
                            <p className='custom-color pt-2'>border-dotted</p>
                            <p className='custom-color pt-2'>border-double</p>
                            <p className='custom-color pt-2'>border-none</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>border-style: solid;</p>
                            <p className='custom-variant-2 pt-2'>border-style: dashed;</p>
                            <p className='custom-variant-2 pt-2'>border-style: dotted;</p>
                            <p className='custom-variant-2 pt-2'>border-style: double;</p>
                            <p className='custom-variant-2 pt-2'>border-style: none;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Solid</h2>
                    <div className='display-f justify-center mt-1'>
                        <div className='royal-main-bg w-4 h-4 p-2 display-f justify-center align-i-center border-7 border-royal-color border-solid'>
                            <p className='custom-text'>Solid</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<div class='border-4 border-emerald-main border-solid'>...</div>`
}
                        </code>
                    </pre>
                </div>
                
                <div className='mt-3'>
                    <h2 className="custom-text">Dashed</h2>
                    <div className='display-f justify-center mt-1'>
                        <div className='royal-main-bg w-4 h-4 p-2 display-f justify-center align-i-center border-7 border-royal-color border-dashed'>
                            <p className='custom-text'>Dashed</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<div class='border-4 border-emerald-main border-dashed'>...</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Dotted</h2>
                    <div className='display-f justify-center mt-1'>
                        <div className='royal-main-bg w-4 h-4 p-2 display-f justify-center align-i-center border-7 border-royal-color border-dotted'>
                            <p className='custom-text'>Dotted</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<div class='border-4 border-emerald-main border-dotted'>...</div>`
}
                        </code>
                    </pre>
                </div>
                
                <div className='mt-3'>
                    <h2 className="custom-text">Double</h2>
                    <div className='display-f justify-center mt-1'>
                        <div className='royal-main-bg w-4 h-4 p-2 display-f justify-center align-i-center border-7 border-royal-color border-double'>
                            <p className='custom-text'>Double</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<div class='border-4 border-emerald-main border-double'>...</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">None</h2>
                    <div className='display-f justify-center mt-1'>
                        <div className='royal-main-bg w-4 h-4 p-2 display-f justify-center align-i-center border-7 border-royal-color border-none'>
                            <p className='custom-text'>None</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<div class='border-4 border-emerald-main border-none'>...</div>`
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
    `<p class='border-solid md-border-none'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>To learn more about breakpoints, check <Link href="/responsiveness" passHref><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default borderStyle;