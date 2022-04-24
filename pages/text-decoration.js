import Head from 'next/head'
import Link from 'next/link'

const textDecoration = () => {
    return (
        <>
            <Head>
                <title>Text Decoration - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Text Decoration</h1>
                <p className='fw-md custom-sub-text mt-1'>To control an {`element's`} decoration.</p>

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
                            <p className='custom-color'>decoration-under</p>
                            <p className='custom-color pt-2'>decoration-over</p>
                            <p className='custom-color pt-2'>decoration-through</p>
                            <p className='custom-color pt-2'>decoration-none</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>text-decoration-line: underline;</p>
                            <p className='custom-variant-2 pt-2'>text-decoration-line: overline;</p>
                            <p className='custom-variant-2 pt-2'>text-decoration-line: line-through;</p>
                            <p className='custom-variant-2 pt-2'>text-decoration-line: none;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Decoration</h2>
                    <p className='custom-sub-text decoration-under pt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, soluta illo doloremque sed illum quo est repellat esse necessitatibus earum.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='decoration-under'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text decoration-over pt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, soluta illo doloremque sed illum quo est repellat esse necessitatibus earum.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='decoration-over'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text decoration-through pt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, soluta illo doloremque sed illum quo est repellat esse necessitatibus earum.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='decoration-through'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text decoration-none pt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, soluta illo doloremque sed illum quo est repellat esse necessitatibus earum.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p class='decoration-none'>...</p>`
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
    `<p class='decoration-none lg-decoration-over'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>To learn more about breakpoints, check <Link href="/responsiveness" passHref><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default textDecoration;