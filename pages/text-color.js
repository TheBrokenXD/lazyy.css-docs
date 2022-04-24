import Head from 'next/head'
import Link from 'next/link'

const textColor = () => {
    return (
        <>
            <Head>
                <title>Text Color - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Text Color</h1>
                <p className='fw-md custom-sub-text mt-1'>To control a {`text's`} color.</p>

                <div className='mt-4'>
                    <h2 className="custom-text">Colors</h2>
                    <p className='custom-sub-text pt-1'>Any color from the <Link href="/theme" passHref><span className='custom-color'>Themes</span></Link> can be used a text color.</p>
                    <div className='card custom-main-bg mt-1 p-2'>
                        <p className='custom-text'>Custom Text (#1D1D1D)</p>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='custom-text'>...</p>`
}
                        </code>
                    </pre>
                    <div className='card custom-main-bg mt-1 p-2'>
                        <p className='royal-color'>Royal Color (#5e81ac)</p>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='royal-color'>...</p>`
}
                        </code>
                    </pre>
                    <div className='card custom-main-bg mt-1 p-2'>
                        <p className='custom-color'>Custom Color (#FFA789)</p>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='custom-color'>...</p>`
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
    `<p class='royal-text md-royal-color'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>To learn more about breakpoints, check <Link href="/responsiveness" passHref><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default textColor;