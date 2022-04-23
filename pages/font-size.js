import Head from 'next/head'
import Link from 'next/link'

const fontSize = () => {
    return (
        <>
            <Head>
                <title>Font Size - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Font Size</h1>
                <p className='fw-md custom-sub-text mt-1'>To control an {`element's`} font size.</p>

                <div className='mt-4'>
                    <div className="row">
                        <div className="col-6-xs">
                            <h3>Class</h3>
                        </div>
                        <div className="col-6-xs">
                            <h3>Properties</h3>
                        </div>
                    </div>

                    <div className="row pt-2 max-h-250-px overflow-y-scroll">
                        <div className="col-6-xs">
                            <p className='custom-color'>font-xs</p>
                            <p className='custom-color pt-2'>font-sm</p>
                            <p className='custom-color pt-2'>font-md</p>
                            <p className='custom-color pt-2'>font-lg</p>
                            <p className='custom-color pt-2'>font-xl</p>
                            <p className='custom-color pt-2'>font-xl-2</p>
                            <p className='custom-color pt-2'>font-xl-3</p>
                            <p className='custom-color pt-2'>font-xl-4</p>
                            <p className='custom-color pt-2'>font-xl-5</p>
                            <p className='custom-color pt-2'>font-xl-6</p>
                            <p className='custom-color pt-2'>font-xl-7</p>
                            <p className='custom-color pt-2'>font-xl-8</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>font-size: 0.5rem;</p>
                            <p className='custom-variant-2 pt-2'>font-size: 0.75rem;</p>
                            <p className='custom-variant-2 pt-2'>font-size: 1rem;</p>
                            <p className='custom-variant-2 pt-2'>font-size: 1.5rem;</p>
                            <p className='custom-variant-2 pt-2'>font-size: 2.25rem;</p>
                            <p className='custom-variant-2 pt-2'>font-size: 2.75rem;</p>
                            <p className='custom-variant-2 pt-2'>font-size: 3rem;</p>
                            <p className='custom-variant-2 pt-2'>font-size: 4rem;</p>
                            <p className='custom-variant-2 pt-2'>font-size: 5rem;</p>
                            <p className='custom-variant-2 pt-2'>font-size: 6em;</p>
                            <p className='custom-variant-2 pt-2'>font-size: 7rem;</p>
                            <p className='custom-variant-2 pt-2'>font-size: 8rem;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Font Sizes</h2>
                    <div className='display-f mt-1'>
                        <div className='custom-sub-text-bg w-4 h-4 display-f justify-center align-i-center br-sm'>
                            <p className='white font-xl-2 fw-bold'>A</p>
                        </div>
                        <div className='custom-sub-text-bg w-4 h-4 display-f justify-center align-i-center br-sm ml-2'>
                            <p className='white font-xl fw-bold'>A</p>
                        </div>
                        <div className='custom-sub-text-bg w-4 h-4 display-f justify-center align-i-center br-sm ml-2'>
                            <p className='white font-lg fw-bold'>A</p>
                        </div>
                        <div className='custom-sub-text-bg w-4 h-4 display-f justify-center align-i-center br-sm ml-2'>
                            <p className='white font-md fw-bold'>A</p>
                        </div>
                        <div className='custom-sub-text-bg w-4 h-4 display-f justify-center align-i-center br-sm ml-2'>
                            <p className='white font-sm fw-bold'>A</p>
                        </div>
                        <div className='custom-sub-text-bg w-4 h-4 display-f justify-center align-i-center br-sm ml-2'>
                            <p className='white font-xs fw-bold'>A</p>
                        </div>
                    </div>
                </div>
                
                <div className='mt-3'>
                    <h2 className="custom-text">XS</h2>
                    <p className='custom-sub-text pt-1 font-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia cupiditate iure quo! Eum autem molestiae facilis, omnis vel quia perferendis placeat unde soluta odio impedit tempora nam! Deleniti, dicta magni? Can you see me?</p>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">SM</h2>
                    <p className='custom-sub-text pt-1 font-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia cupiditate iure quo! Eum autem molestiae facilis, omnis vel quia perferendis placeat unde soluta odio impedit tempora nam! Deleniti, dicta magni?</p>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">MD</h2>
                    <p className='custom-sub-text pt-1 font-md'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia cupiditate iure quo! Eum autem molestiae facilis, omnis vel quia perferendis placeat unde soluta odio impedit tempora nam! Deleniti, dicta magni?</p>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">LG</h2>
                    <p className='custom-sub-text pt-1 font-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia cupiditate iure quo! Eum autem molestiae facilis, omnis vel quia perferendis placeat unde soluta odio impedit tempora nam! Deleniti, dicta magni?</p>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">XL</h2>
                    <p className='custom-sub-text pt-1 font-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia cupiditate iure quo! Eum autem molestiae facilis, omnis vel quia perferendis placeat unde soluta odio impedit tempora nam! Deleniti, dicta magni?</p>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Breakpoints</h2>
                    <p className='custom-sub-text mt-1'>For each breakpoint, you can modify utility classes.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
    `<p className='ont-lg md-font-xl'>...</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>To learn more about breakpoints, check <Link href="/responsiveness" passHref><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default fontSize;