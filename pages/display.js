import Head from 'next/head'
import Link from 'next/link'

const display = () => {
    return (
        <>
            <Head>
                <title>Display - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Display</h1>
                <p className='fw-md custom-sub-text mt-1'>Using the display property, you may control how an element appears on screen.</p>

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
                            <p className='custom-color'>display-n</p>
                            <p className='custom-color pt-2'>display-b</p>
                            <p className='custom-color pt-2'>display-f</p>
                            <p className='custom-color pt-2'>display-i</p>
                            <p className='custom-color pt-2'>display-i-b</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>display: none;</p>
                            <p className='custom-variant-2 pt-2'>display: block;</p>
                            <p className='custom-variant-2 pt-2'>display: flex;</p>
                            <p className='custom-variant-2 pt-2'>display: inline;</p>
                            <p className='custom-variant-2 pt-2'>display: inline-block;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Block {`&`} Inline</h2>
                    <p className='fw-md custom-sub-text mt-1'>Flow of text and components may be controlled by using inline, inline-block, or block formatting options.</p>
                    <div className='mt-2'>
                        <div className="card custom-sub-text-bg p-2">
                            <p className='fw-md white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <span className='custom-color display-i'>display: inline</span> Exercitationem adipisci ipsum obcaecati molestias error dolores eum minima maxime veniam delectus.</p>
                        </div>
                        <div className="card custom-sub-text-bg mt-2 p-2">
                            <p className='fw-md white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <span className='custom-color display-b'>display: block</span> Exercitationem adipisci ipsum obcaecati molestias error dolores eum minima maxime veniam delectus.</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Flex</h2>
                    <p className='fw-md custom-sub-text mt-1'>Displays an element as a block-level flex container.</p>
                    <div className='mt-2'>
                        <div className="card custom-sub-text-bg display-f justify-center p-2">
                            <div className='card honey-color-bg p-3'>
                                <p className='fw-md honey-text'>Left</p>
                            </div>
                            <div className='card honey-main-bg p-3 ml-5'>
                                <p className='fw-md honey-text'>Right</p>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="card custom-sub-text-bg display-f justify-center p-2">
    <div class='card honey-color-bg p-3'>
        <p class='fw-md honey-text'>Left</p>
    </div>
    <div class='card honey-main-bg p-3 ml-5'>
        <p class='fw-md honey-text'>Right</p>
    </div>
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">None</h2>
                    <p className='fw-md custom-sub-text mt-1'>To set an {`element's`} visiblity as hidden.</p>
                    <div className='mt-2'>
                        <div className="card custom-sub-text-bg display-f p-2">
                            <div className='card honey-color-bg p-3'>
                                <p className='fw-md honey-text'>1</p>
                            </div>
                            <div className='card honey-main-bg p-3 ml-2'>
                                <p className='fw-md honey-text'>2</p>
                            </div>
                            <div className='card honey-color-bg p-3 ml-2 display-n'>
                                <p className='fw-md honey-text'>3</p>
                            </div>
                        </div>
                        <pre>
                            <code className="language-html font-f-code">
{
`<div class="card custom-sub-text-bg display-f p-2">
    <div class='card honey-color-bg p-3'>
        <p class='fw-md honey-text'>1</p>
    </div>
    <div class='card honey-main-bg p-3 ml-2'>
        <p class='fw-md honey-text'>2</p>
    </div>
    <div class='card honey-color-bg p-3 ml-2 display-n'>
        <p class='fw-md honey-text'>3</p>
    </div>
</div>`
}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Breakpoints</h2>
                    <p className='custom-sub-text mt-1'>For each breakpoint, you can modify utility classes. For example,</p>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='lg-display-f xs-display-n'></div>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>Will display as a block-level flex container on large screens and hidden on small screens. To learn more about breakpoints, check <Link href="/responsiveness"><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default display;