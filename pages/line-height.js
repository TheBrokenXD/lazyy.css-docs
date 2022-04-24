import Head from 'next/head'
import Link from 'next/link'

const lineHeight = () => {
    return (
        <>
            <Head>
                <title>Line Height - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Line Height</h1>
                <p className='fw-md custom-sub-text mt-1'>To control an {`element's`} line height.</p>

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
                            <p className='custom-color'>lh-small</p>
                            <p className='custom-color pt-2'>lh-1</p>
                            <p className='custom-color pt-2'>lh-normal</p>
                            <p className='custom-color pt-2'>lh-2</p>
                            <p className='custom-color pt-2'>lh-3</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>line-height: .75;</p>
                            <p className='custom-variant-2 pt-2'>line-height: 1;</p>
                            <p className='custom-variant-2 pt-2'>line-height: 1.15;</p>
                            <p className='custom-variant-2 pt-2'>line-height: 1.25;</p>
                            <p className='custom-variant-2 pt-2'>line-height: 1.5;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Line Height</h2>
                    <p className='custom-sub-text lh-small pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut accusamus minima fugiat numquam voluptatibus eveniet a? Cupiditate maxime deserunt quas magnam totam corrupti! Eveniet quisquam architecto ullam quae consectetur soluta. Tempora minus officiis sequi veniam nesciunt maxime odio, cumque quas quam, itaque quia corporis atque repellendus eligendi soluta sit!</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p className='custom-sub-text lh-small'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text lh-1 pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut accusamus minima fugiat numquam voluptatibus eveniet a? Cupiditate maxime deserunt quas magnam totam corrupti! Eveniet quisquam architecto ullam quae consectetur soluta. Tempora minus officiis sequi veniam nesciunt maxime odio, cumque quas quam, itaque quia corporis atque repellendus eligendi soluta sit!</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p className='custom-sub-text lh-1'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text lh-normal pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut accusamus minima fugiat numquam voluptatibus eveniet a? Cupiditate maxime deserunt quas magnam totam corrupti! Eveniet quisquam architecto ullam quae consectetur soluta. Tempora minus officiis sequi veniam nesciunt maxime odio, cumque quas quam, itaque quia corporis atque repellendus eligendi soluta sit!</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p className='custom-sub-text lh-normal'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text lh-2 pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut accusamus minima fugiat numquam voluptatibus eveniet a? Cupiditate maxime deserunt quas magnam totam corrupti! Eveniet quisquam architecto ullam quae consectetur soluta. Tempora minus officiis sequi veniam nesciunt maxime odio, cumque quas quam, itaque quia corporis atque repellendus eligendi soluta sit!</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p className='custom-sub-text lh-2'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text lh-3 pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut accusamus minima fugiat numquam voluptatibus eveniet a? Cupiditate maxime deserunt quas magnam totam corrupti! Eveniet quisquam architecto ullam quae consectetur soluta. Tempora minus officiis sequi veniam nesciunt maxime odio, cumque quas quam, itaque quia corporis atque repellendus eligendi soluta sit!</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p className='custom-sub-text lh-3'>...</p>`
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
    `<p className='lh-1 lg-lh-normal'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>To learn more about breakpoints, check <Link href="/responsiveness" passHref><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default lineHeight;