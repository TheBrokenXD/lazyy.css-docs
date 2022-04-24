import Head from 'next/head'
import Link from 'next/link'

const letterSpacing = () => {
    return (
        <>
            <Head>
                <title>Letter Spacing - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Letter Spacing</h1>
                <p className='fw-md custom-sub-text mt-1'>To control an {`element's`} letter spacing.</p>

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
                            <p className='custom-color'>ls-tight</p>
                            <p className='custom-color pt-2'>ls-normal</p>
                            <p className='custom-color pt-2'>ls-0</p>
                            <p className='custom-color pt-2'>ls-wide</p>
                            <p className='custom-color pt-2'>ls-wider</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>letter-spacing: -0.06em;</p>
                            <p className='custom-variant-2 pt-2'>letter-spacing: -0.04em;</p>
                            <p className='custom-variant-2 pt-2'>letter-spacing: 0;</p>
                            <p className='custom-variant-2 pt-2'>letter-spacing: 0.25em;</p>
                            <p className='custom-variant-2 pt-2'>letter-spacing: 0.5em;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Spacings</h2>
                    <p className='custom-sub-text ls-tight pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus similique impedit officiis quasi voluptatum, dignissimos velit consectetur nemo sequi perferendis!</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p className='custom-sub-text ls-tight'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text ls-normal pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus similique impedit officiis quasi voluptatum, dignissimos velit consectetur nemo sequi perferendis!</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p className='custom-sub-text ls-normal'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text ls-0 pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus similique impedit officiis quasi voluptatum, dignissimos velit consectetur nemo sequi perferendis!</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p className='custom-sub-text ls-0'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text ls-wide pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus similique impedit officiis quasi voluptatum, dignissimos velit consectetur nemo sequi perferendis!</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p className='custom-sub-text ls-wide'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text ls-wider pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus similique impedit officiis quasi voluptatum, dignissimos velit consectetur nemo sequi perferendis!</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p className='custom-sub-text ls-wider'>...</p>`
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
    `<p className='ls-normal lg-ls-wide'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>To learn more about breakpoints, check <Link href="/responsiveness" passHref><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default letterSpacing;