import Head from 'next/head'
import Link from 'next/link'

const boxSizing = () => {
    return (
        <>
            <Head>
                <title>Box Sizing - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <p className="custom-color">Layout</p>
                <h1 className="custom-text mt-1">Box Sizing</h1>
                <p className='fw-md custom-sub-text mt-1'>Controlling the {`browser's`} calculation of an {`element's`} overall size.</p>

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
                            <p className='custom-color'>box-border</p>
                            <p className='custom-color pt-2'>box-content</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>box-sizing: border-box;</p>
                            <p className='custom-variant-2 pt-2'>box-sizing: content-box;</p>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <h2 className="custom-text">Class</h2>
                    <pre>
                        <code className="language-css font-f-code">
{
`.box-border {
    box-sizing: border-box;
}`
}
                        </code>
                    </pre>
                    <pre>
                        <code className="language-css font-f-code">
{
`.box-content {
    box-sizing: content-box;
}`
}
                        </code>
                    </pre>
                </div>

                <div className="mt-3">
                    <h2 className="custom-text">Usage</h2>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="box-border w-30-px h-30-px">
    <!-- .. -->
</div>`
}
                        </code>
                    </pre>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="box-content w-30-px h-30-px">
    <!-- .. -->
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Breakpoints</h2>
                    <p className='custom-sub-text mt-1'>For each breakpoint, you can modify utility classes. For example,</p>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='md-box-content xs-box-border w-30-px h-30-px'></div>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>Will apply box-content only above medium screen sizes. To learn more about breakpoints, check <Link href="/responsiveness" passHref><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
            
        </>
    );
}
 
export default boxSizing;