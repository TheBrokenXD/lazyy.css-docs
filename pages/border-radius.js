import Head from 'next/head'
import Link from 'next/link'

const borderRadius = () => {
    return (
        <>
            <Head>
                <title>Border Radius - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <p className="custom-color">Borders</p>
                <h1 className="custom-text mt-1">Border Radius</h1>
                <p className='fw-md custom-sub-text mt-1'>To control an {`element's`} border radius.</p>

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
                            <p className='custom-color'>br-base</p>
                            <p className='custom-color pt-2'>br-xs</p>
                            <p className='custom-color pt-2'>br-sm</p>
                            <p className='custom-color pt-2'>br-md</p>
                            <p className='custom-color pt-2'>br-lg</p>
                            <p className='custom-color pt-2'>br-none</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>border-radius: 10px;</p>
                            <p className='custom-variant-2 pt-2'>font-weight: 2.5px;</p>
                            <p className='custom-variant-2 pt-2'>font-weight: 5px;</p>
                            <p className='custom-variant-2 pt-2'>font-weight: 15px;</p>
                            <p className='custom-variant-2 pt-2'>font-weight: 20px;</p>
                            <p className='custom-variant-2 pt-2'>font-weight: 0;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Base</h2>
                    <div className='display-f justify-center'>
                        <div className='custom-sub-text-bg w-4 h-4 br-base p-2 mt-1 display-f justify-center align-i-center'>
                            <p className='custom-main'>br-base</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='card custom-sub-text-bg br-base'>...</p>`
}
                        </code>
                    </pre>
                </div>
                
                <div className='mt-3'>
                    <h2 className="custom-text">XS</h2>
                    <div className='display-f justify-center'>
                        <div className='custom-sub-text-bg w-4 h-4 br-xs p-2 mt-1 display-f justify-center align-i-center'>
                            <p className='custom-main'>br-xs</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='card custom-sub-text-bg br-xs'>...</p>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">SM</h2>
                    <div className='display-f justify-center'>
                        <div className='custom-sub-text-bg w-4 h-4 br-sm p-2 mt-1 display-f justify-center align-i-center'>
                            <p className='custom-main'>br-sm</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='card custom-sub-text-bg br-sm'>...</p>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">MD</h2>
                    <div className='display-f justify-center'>
                        <div className='custom-sub-text-bg w-4 h-4 br-sm p-2 mt-1 display-f justify-center align-i-center'>
                            <p className='custom-main'>br-md</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='card custom-sub-text-bg br-md'>...</p>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">LG</h2>
                    <div className='display-f justify-center'>
                        <div className='custom-sub-text-bg w-4 h-4 br-lg p-2 mt-1 display-f justify-center align-i-center'>
                            <p className='custom-main'>br-lg</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='card custom-sub-text-bg br-lg'>...</p>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">None</h2>
                    <div className='display-f justify-center'>
                        <div className='custom-sub-text-bg w-4 h-4 br-none p-2 mt-1 display-f justify-center align-i-center'>
                            <p className='custom-main'>br-none</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='card custom-sub-text-bg br-none'>...</p>`
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
    `<p class='br-base md-br-none'>...</p>`
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