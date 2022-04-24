import Head from 'next/head'
import Link from 'next/link'

const fontWeight = () => {
    return (
        <>
            <Head>
                <title>Font Weight - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Font Weight</h1>
                <p className='fw-md custom-sub-text mt-1'>To control an {`element's`} font weight.</p>

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
                            <p className='custom-color'>fw-reg</p>
                            <p className='custom-color pt-2'>fw-md</p>
                            <p className='custom-color pt-2'>fw-bold</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>font-weight: 400;</p>
                            <p className='custom-variant-2 pt-2'>font-weight: 500;</p>
                            <p className='custom-variant-2 pt-2'>font-weight: 700;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Regular</h2>
                    <p className='custom-sub-text fw-reg pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus similique impedit officiis quasi voluptatum, dignissimos velit consectetur nemo sequi perferendis!</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='custom-sub-text fw-reg'>...</p>`
}
                        </code>
                    </pre>
                </div>
                
                <div className='mt-3'>
                    <h2 className="custom-text">MD</h2>
                    <p className='custom-sub-text fw-md pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus similique impedit officiis quasi voluptatum, dignissimos velit consectetur nemo sequi perferendis!</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='custom-sub-text fw-md'>...</p>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Bold</h2>
                    <p className='custom-sub-text fw-bold pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus similique impedit officiis quasi voluptatum, dignissimos velit consectetur nemo sequi perferendis!</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='custom-sub-text fw-bold'>...</p>`
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
    `<p class='fw-reg md-fw-bold'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>To learn more about breakpoints, check <Link href="/responsiveness" passHref><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default fontWeight;