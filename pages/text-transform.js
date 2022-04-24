import Head from 'next/head'
import Link from 'next/link'

const textTransform = () => {
    return (
        <>
            <Head>
                <title>Text Transform - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Text Transform</h1>
                <p className='fw-md custom-sub-text mt-1'>To control a {`text's`} transformation.</p>

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
                            <p className='custom-color'>text-uppercase</p>
                            <p className='custom-color pt-2'>text-lowercase</p>
                            <p className='custom-color pt-2'>text-capitalize</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>text-transform: uppercase;</p>
                            <p className='custom-variant-2 pt-2'>text-transform: lowercase;</p>
                            <p className='custom-variant-2 pt-2'>text-transform: capitalize;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Transform</h2>
                    <p className='custom-sub-text text-uppercase pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptate perferendis sit, odit incidunt deserunt ab delectus commodi fugit repellat.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='custom-sub-text text-uppercase'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text text-lowercase pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptate perferendis sit, odit incidunt deserunt ab delectus commodi fugit repellat.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='custom-sub-text text-lowercase'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text text-capitalize pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptate perferendis sit, odit incidunt deserunt ab delectus commodi fugit repellat.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='custom-sub-text text-capitalize'>...</p>`
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
    `<p class='text-capitalize lg-text-lowercase'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>To learn more about breakpoints, check <Link href="/responsiveness" passHref><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default textTransform;