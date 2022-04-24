import Head from 'next/head'
import Link from 'next/link'

const textAlign = () => {
    return (
        <>
            <Head>
                <title>Text Align - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Text Align</h1>
                <p className='fw-md custom-sub-text mt-1'>To control an {`element's`} alignment.</p>

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
                            <p className='custom-color'>text-center</p>
                            <p className='custom-color pt-2'>text-left</p>
                            <p className='custom-color pt-2'>text-right</p>
                            <p className='custom-color pt-2'>text-justify</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>text-align: center;</p>
                            <p className='custom-variant-2 pt-2'>text-align: left;</p>
                            <p className='custom-variant-2 pt-2'>text-align: right;</p>
                            <p className='custom-variant-2 pt-2'>text-align: justify;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Align</h2>
                    <p className='custom-sub-text text-center pt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, soluta illo doloremque sed illum quo est repellat esse necessitatibus earum.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='custom-sub-text text-center'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text text-left pt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, soluta illo doloremque sed illum quo est repellat esse necessitatibus earum.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='custom-sub-text text-left'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text text-right pt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, soluta illo doloremque sed illum quo est repellat esse necessitatibus earum.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='custom-sub-text text-right'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text text-justify pt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, soluta illo doloremque sed illum quo est repellat esse necessitatibus earum.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='custom-sub-text text-justify'>...</p>`
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
    `<p class='text-left lg-text-center'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>To learn more about breakpoints, check <Link href="/responsiveness" passHref><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default textAlign;