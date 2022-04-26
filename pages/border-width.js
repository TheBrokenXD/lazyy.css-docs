import Head from 'next/head'
import Link from 'next/link'

const borderRadius = () => {
    return (
        <>
            <Head>
                <title>Border Width - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Border Width</h1>
                <p className='fw-md custom-sub-text mt-1'>To control an {`element's`} border width.</p>

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
                            <p className='custom-color'>border-0</p>
                            <p className='custom-color pt-2'>border-1</p>
                            <p className='custom-color pt-2'>border-2</p>
                            <p className='custom-color pt-2'>border-3</p>
                            <p className='custom-color pt-2'>border-4</p>
                            <p className='custom-color pt-2'>border-5</p>
                            <p className='custom-color pt-2'>border-6</p>
                            <p className='custom-color pt-2'>border-7</p>
                            <p className='custom-color pt-2'>border-8</p>
                            <p className='custom-color pt-2'>border-l-0</p>
                            <p className='custom-color pt-2'>border-l-1</p>
                            <p className='custom-color pt-2'>border-l-2</p>
                            <p className='custom-color pt-2'>border-l-3</p>
                            <p className='custom-color pt-2'>border-l-4</p>
                            <p className='custom-color pt-2'>border-l-5</p>
                            <p className='custom-color pt-2'>border-l-6</p>
                            <p className='custom-color pt-2'>border-l-7</p>
                            <p className='custom-color pt-2'>border-l-8</p>
                            <p className='custom-color pt-2'>border-r-0</p>
                            <p className='custom-color pt-2'>border-r-1</p>
                            <p className='custom-color pt-2'>border-r-2</p>
                            <p className='custom-color pt-2'>border-r-3</p>
                            <p className='custom-color pt-2'>border-r-4</p>
                            <p className='custom-color pt-2'>border-r-5</p>
                            <p className='custom-color pt-2'>border-r-6</p>
                            <p className='custom-color pt-2'>border-r-7</p>
                            <p className='custom-color pt-2'>border-r-8</p>
                            <p className='custom-color pt-2'>border-b-0</p>
                            <p className='custom-color pt-2'>border-b-1</p>
                            <p className='custom-color pt-2'>border-b-2</p>
                            <p className='custom-color pt-2'>border-b-3</p>
                            <p className='custom-color pt-2'>border-b-4</p>
                            <p className='custom-color pt-2'>border-b-5</p>
                            <p className='custom-color pt-2'>border-b-6</p>
                            <p className='custom-color pt-2'>border-b-7</p>
                            <p className='custom-color pt-2'>border-b-8</p>
                            <p className='custom-color pt-2'>border-t-0</p>
                            <p className='custom-color pt-2'>border-t-1</p>
                            <p className='custom-color pt-2'>border-t-2</p>
                            <p className='custom-color pt-2'>border-t-3</p>
                            <p className='custom-color pt-2'>border-t-4</p>
                            <p className='custom-color pt-2'>border-t-5</p>
                            <p className='custom-color pt-2'>border-t-6</p>
                            <p className='custom-color pt-2'>border-t-7</p>
                            <p className='custom-color pt-2'>border-t-8</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>border-width: 0;</p>
                            <p className='custom-variant-2 pt-2'>border-width: 1px;</p>
                            <p className='custom-variant-2 pt-2'>border-width: 2px;</p>
                            <p className='custom-variant-2 pt-2'>border-width: 3px;</p>
                            <p className='custom-variant-2 pt-2'>border-width: 4px;</p>
                            <p className='custom-variant-2 pt-2'>border-width: 5px;</p>
                            <p className='custom-variant-2 pt-2'>border-width: 6px;</p>
                            <p className='custom-variant-2 pt-2'>border-width: 7px;</p>
                            <p className='custom-variant-2 pt-2'>border-width: 8px;</p>
                            <p className='custom-variant-2 pt-2'>border-left-width: 0;</p>
                            <p className='custom-variant-2 pt-2'>border-left-width: 1px;</p>
                            <p className='custom-variant-2 pt-2'>border-left-width: 2px;</p>
                            <p className='custom-variant-2 pt-2'>border-left-width: 3px;</p>
                            <p className='custom-variant-2 pt-2'>border-left-width: 4px;</p>
                            <p className='custom-variant-2 pt-2'>border-left-width: 5px;</p>
                            <p className='custom-variant-2 pt-2'>border-left-width: 6px;</p>
                            <p className='custom-variant-2 pt-2'>border-left-width: 7px;</p>
                            <p className='custom-variant-2 pt-2'>border-left-width: 8px;</p>
                            <p className='custom-variant-2 pt-2'>border-right-width: 0;</p>
                            <p className='custom-variant-2 pt-2'>border-right-width: 1px;</p>
                            <p className='custom-variant-2 pt-2'>border-right-width: 2px;</p>
                            <p className='custom-variant-2 pt-2'>border-right-width: 3px;</p>
                            <p className='custom-variant-2 pt-2'>border-right-width: 4px;</p>
                            <p className='custom-variant-2 pt-2'>border-right-width: 5px;</p>
                            <p className='custom-variant-2 pt-2'>border-right-width: 6px;</p>
                            <p className='custom-variant-2 pt-2'>border-right-width: 7px;</p>
                            <p className='custom-variant-2 pt-2'>border-right-width: 8px;</p>
                            <p className='custom-variant-2 pt-2'>border-bottom-width: 0;</p>
                            <p className='custom-variant-2 pt-2'>border-bottom-width: 1px;</p>
                            <p className='custom-variant-2 pt-2'>border-bottom-width: 2px;</p>
                            <p className='custom-variant-2 pt-2'>border-bottom-width: 3px;</p>
                            <p className='custom-variant-2 pt-2'>border-bottom-width: 4px;</p>
                            <p className='custom-variant-2 pt-2'>border-bottom-width: 5px;</p>
                            <p className='custom-variant-2 pt-2'>border-bottom-width: 6px;</p>
                            <p className='custom-variant-2 pt-2'>border-bottom-width: 7px;</p>
                            <p className='custom-variant-2 pt-2'>border-bottom-width: 8px;</p>
                            <p className='custom-variant-2 pt-2'>border-top-width: 0;</p>
                            <p className='custom-variant-2 pt-2'>border-top-width: 1px;</p>
                            <p className='custom-variant-2 pt-2'>border-top-width: 2px;</p>
                            <p className='custom-variant-2 pt-2'>border-top-width: 3px;</p>
                            <p className='custom-variant-2 pt-2'>border-top-width: 4px;</p>
                            <p className='custom-variant-2 pt-2'>border-top-width: 5px;</p>
                            <p className='custom-variant-2 pt-2'>border-top-width: 6px;</p>
                            <p className='custom-variant-2 pt-2'>border-top-width: 7px;</p>
                            <p className='custom-variant-2 pt-2'>border-top-width: 8px;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Border</h2>
                    <div className='display-f justify-center mt-1'>
                        <div className='royal-main-bg w-4 h-4 p-2 display-f justify-center align-i-center border-7 border-royal-color border-solid'>
                            <p className='custom-text'>border-4</p>
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
                    <h2 className="custom-text">Single Side Border</h2>
                    <div className='display-f justify-center mt-1'>
                        <div className='royal-main-bg w-4 h-4 br-xs p-2 display-f justify-center align-i-center border-l-7 border-b-0 border-t-0 border-r-0 border-royal-color border-solid'>
                            <p className='custom-text'>bl-7</p>
                        </div>
                        <div className='royal-main-bg w-4 h-4 br-xs p-2 ml-3 display-f justify-center align-i-center border-t-7 border-b-0 border-l-0 border-r-0 border-royal-color border-solid'>
                            <p className='custom-text'>bt-7</p>
                        </div>
                        <div className='royal-main-bg w-4 h-4 br-xs p-2 ml-3 display-f justify-center align-i-center border-b-7 border-t-0 border-l-0 border-r-0 border-royal-color border-solid'>
                            <p className='custom-text'>bb-7</p>
                        </div>
                        <div className='royal-main-bg w-4 h-4 br-xs p-2 ml-3 display-f justify-center align-i-center border-r-7 border-b-0 border-l-0 border-t-0 border-royal-color border-solid'>
                            <p className='custom-text'>br-7</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<p class='border-l-7 border-b-0 border-r-0 border-t-0 border-royal-color border-solid'>...</p>
<p class='border-t-7 border-b-0 border-l-0 border-r-0 border-royal-color border-solid'>...</p>
<p class='border-b-0 border-t-7 border-l-0 border-r-0 border-royal-color border-solid'>...</p>
<p class='border-r-7 border-b-0 border-l-0 border-t-0 border-royal-color border-solid'>...</p>`
}
                        </code>
                    </pre>
                    <div className='display-f justify-center'>
                        <p className='custom-text pt-1 text-center'><span className='custom-color fw-md'>Note: </span> If you just use border-t-7, it will make the top border 7px and the other sides 1px. To remove all other borders except the top one, use border-r-0, border-l-0, border-b-0.</p>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Breakpoints</h2>
                    <p className='custom-sub-text mt-1'>For each breakpoint, you can modify utility classes.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='border-0 lg-border-4'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>To learn more about breakpoints, check <Link href="/responsiveness" passHref><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default borderRadius;