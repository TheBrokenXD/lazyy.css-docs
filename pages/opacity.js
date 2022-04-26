import Head from 'next/head'
import Link from 'next/link'

const opacity = () => {
    return (
        <>
            <Head>
                <title>Box Shadow - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <p className="custom-color">Effects</p>
                <h1 className="custom-text">Box Shadow</h1>
                <p className='fw-md custom-sub-text mt-1'>To control an {`element's`} box shadow.</p>

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
                            <p className='custom-color'>o-0</p>
                            <p className='custom-color pt-2'>o-10</p>
                            <p className='custom-color pt-2'>o-20</p>
                            <p className='custom-color pt-2'>o-30</p>
                            <p className='custom-color pt-2'>o-40</p>
                            <p className='custom-color pt-2'>o-50</p>
                            <p className='custom-color pt-2'>o-60</p>
                            <p className='custom-color pt-2'>o-70</p>
                            <p className='custom-color pt-2'>o-80</p>
                            <p className='custom-color pt-2'>o-90</p>
                            <p className='custom-color pt-2'>o-100</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>opacity: 0;</p>
                            <p className='custom-variant-2 pt-2'>opacity: 0.1;</p>
                            <p className='custom-variant-2 pt-2'>opacity: 0.2;</p>
                            <p className='custom-variant-2 pt-2'>opacity: 0.3;</p>
                            <p className='custom-variant-2 pt-2'>opacity: 0.4;</p>
                            <p className='custom-variant-2 pt-2'>opacity: 0.5;</p>
                            <p className='custom-variant-2 pt-2'>opacity: 0.6;</p>
                            <p className='custom-variant-2 pt-2'>opacity: 0.7;</p>
                            <p className='custom-variant-2 pt-2'>opacity: 0.8;</p>
                            <p className='custom-variant-2 pt-2'>opacity: 0.9;</p>
                            <p className='custom-variant-2 pt-2'>opacity: 1;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Opacity</h2>
                    <div className='display-f justify-center mt-1'>
                        <div className='royal-main-bg w-4 h-4 p-2 display-f justify-center align-i-center o-100'>
                            <p className='custom-text'>100</p>
                        </div>
                        <div className='royal-main-bg w-4 h-4 p-2 ml-2 display-f justify-center align-i-center o-80'>
                            <p className='custom-text'>80</p>
                        </div>
                        <div className='royal-main-bg w-4 h-4 p-2 ml-2 display-f justify-center align-i-center o-50'>
                            <p className='custom-text'>50</p>
                        </div>
                        <div className='royal-main-bg w-4 h-4 p-2 ml-2 display-f justify-center align-i-center o-20'>
                            <p className='custom-text'>20</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='o-100'>...</div>
<div class='o-80'>...</div>
<div class='o-50'>...</div>
<div class='o-20'>...</div>`
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
`<p class='xs-o-0 lg-o-100'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>To learn more about breakpoints, check <Link href="/responsiveness" passHref><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default opacity;