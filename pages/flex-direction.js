import Head from 'next/head'
import Link from 'next/link'

const flexDirection = () => {
    return (
        <>
            <Head>
                <title>Flex Direction - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <p className="custom-color">Flexbox {`&`} Grid</p>
                <h1 className="custom-text mt-1">Flex Direction</h1>
                <p className='fw-md custom-sub-text mt-1'>The flex-direction property specifies the direction of the flexible items.</p>

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
                            <p className='custom-color'>flex-row</p>
                            <p className='custom-color pt-2'>flex-row-rev</p>
                            <p className='custom-color pt-2'>flex-col</p>
                            <p className='custom-color pt-2'>flex-col-rev</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>flex-direction: row;</p>
                            <p className='custom-variant-2 pt-2'>flex-direction: row-reverse;</p>
                            <p className='custom-variant-2 pt-2'>flex-direction: column;</p>
                            <p className='custom-variant-2 pt-2'>flex-direction: column-reverse;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Row</h2>
                    <p className='custom-sub-text pt-1'>Flex items in a horizontal way.</p>
                    <div className="card custom-sub-text-bg display-f flex-row justify-center p-2 mt-1">
                        <div className='card honey-color-bg p-3'>
                            <p className='fw-md honey-text'>1</p>
                        </div>
                        <div className='card honey-main-bg p-3 ml-5'>
                            <p className='fw-md honey-text'>2</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="display-f flex-row">..</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Row Reverse</h2>
                    <p className='custom-sub-text pt-1'>Flex items in a horizontal way but reversed.</p>
                    <div className="card custom-sub-text-bg display-f flex-row-rev justify-center p-2 mt-1">
                        <div className='card honey-color-bg p-3 ml-5'>
                            <p className='fw-md honey-text'>1</p>
                        </div>
                        <div className='card honey-main-bg p-3'>
                            <p className='fw-md honey-text'>2</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="display-f flex-row-rev">..</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Column</h2>
                    <p className='custom-sub-text pt-1'>Flex items in a vertical way.</p>
                    <div className="card custom-sub-text-bg display-f flex-column justify-center p-3 mt-1">
                        <div className='card honey-color-bg p-3'>
                            <p className='fw-md honey-text'>1</p>
                        </div>
                        <div className='card honey-main-bg p-3 mt-1'>
                            <p className='fw-md honey-text'>2</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="display-f flex-column">..</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Column Reverse</h2>
                    <p className='custom-sub-text pt-1'>Flex items in a vertical way but reversed.</p>
                    <div className="card custom-sub-text-bg display-f flex-column-rev justify-center p-3 mt-1">
                        <div className='card honey-color-bg p-3 mt-1'>
                            <p className='fw-md honey-text'>1</p>
                        </div>
                        <div className='card honey-main-bg p-3'>
                            <p className='fw-md honey-text'>2</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="display-f flex-column-rev">..</div>`
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
`<div class='display-f lg-flex-column xs-flex-column-rev'></div>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>Will display the elements in a vertical way on larger screens and reversed on small screens. To learn more about breakpoints, check <Link href="/responsiveness"><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default flexDirection;