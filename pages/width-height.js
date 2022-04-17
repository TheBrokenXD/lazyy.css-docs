import Head from 'next/head'
import Link from 'next/link'

const widthHeight = () => {
    return (
        <>
            <Head>
                <title>margin - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Width and Height</h1>
                <p className='fw-md custom-sub-text mt-1'>Setting the width and height of an element.</p>

                <div className="mt-4">
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
                            <p className='custom-color'>w-1</p>
                            <p className='custom-color pt-2'>w-2</p>
                            <p className='custom-color pt-2'>w-3</p>
                            <p className='custom-color pt-2'>w-4</p>
                            <p className='custom-color pt-2'>w-5</p>
                            <p className='custom-color pt-2'>h-1</p>
                            <p className='custom-color pt-2'>h-2</p>
                            <p className='custom-color pt-2'>h-3</p>
                            <p className='custom-color pt-2'>h-4</p>
                            <p className='custom-color pt-2'>h-5</p>
                            <p className='custom-color pt-2'>w-half</p>
                            <p className='custom-color pt-2'>w-full</p>
                            <p className='custom-color pt-2'>w-screen</p>
                            <p className='custom-color pt-2'>h-half</p>
                            <p className='custom-color pt-2'>h-full</p>
                            <p className='custom-color pt-2'>h-screen</p>
                            <p className='custom-color pt-2'>w-1-px</p>
                            <p className='custom-color pt-2'>h-1-px</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>width: 1rem;</p>
                            <p className='custom-variant-2 pt-2'>width: 2rem;</p>
                            <p className='custom-variant-2 pt-2'>width: 4rem;</p>
                            <p className='custom-variant-2 pt-2'>width: 8rem;</p>
                            <p className='custom-variant-2 pt-2'>width: 16rem;</p>
                            <p className='custom-variant-2 pt-2'>height: 1rem;</p>
                            <p className='custom-variant-2 pt-2'>height: 2rem;</p>
                            <p className='custom-variant-2 pt-2'>height: 4rem;</p>
                            <p className='custom-variant-2 pt-2'>height: 8rem;</p>
                            <p className='custom-variant-2 pt-2'>height: 16rem;</p>
                            <p className='custom-variant-2 pt-2'>width: 50%;</p>
                            <p className='custom-variant-2 pt-2'>width: 100%;</p>
                            <p className='custom-variant-2 pt-2'>width: 100vw;</p>
                            <p className='custom-variant-2 pt-2'>height: 50%;</p>
                            <p className='custom-variant-2 pt-2'>height: 100%;</p>
                            <p className='custom-variant-2 pt-2'>height: 100vh;</p>
                            <p className='custom-variant-2 pt-2'>width: 1px;</p>
                            <p className='custom-variant-2 pt-2'>height: 1px;</p>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <h2 className="custom-text">Widths</h2>
                    <div className='display-f gap-2 mt-2'>
                        <p className='custom-text'>w-1</p>
                        <div className='card custom-card-bg w-1'></div>
                    </div>
                    <div className='display-f gap-2 mt-2'>
                        <p className='custom-text'>w-2</p>
                        <div className='card custom-card-bg w-2'></div>
                    </div>
                    <div className='display-f gap-2 mt-2'>
                        <p className='custom-text'>w-3</p>
                        <div className='card custom-card-bg w-3'></div>
                    </div>
                    <div className='display-f gap-2 mt-2'>
                        <p className='custom-text'>w-4</p>
                        <div className='card custom-card-bg w-4'></div>
                    </div>
                    <div className='display-f gap-2 mt-2'>
                        <p className='custom-text'>w-5</p>
                        <div className='card custom-card-bg w-5'></div>
                    </div>
                    <div className='display-f gap-2 mt-2'>
                        <p className='custom-text'>half</p>
                        <div className='card custom-card-bg w-half'></div>
                    </div>
                    <div className='display-f gap-2 mt-2'>
                        <p className='custom-text'>full</p>
                        <div className='card custom-card-bg w-full'></div>
                    </div>
                </div>

                <div className="mt-3">
                    <h2 className="custom-text">Heights</h2>
                    <div className='display-f gap-2 align-i-center mt-2'>
                        <p className='custom-text'>h-1</p>
                        <div className='card custom-card-bg h-1'></div>
                    </div>
                    <div className='display-f gap-2 align-i-center mt-2'>
                        <p className='custom-text'>h-2</p>
                        <div className='card custom-card-bg h-2'></div>
                    </div>
                    <div className='display-f gap-2 align-i-center mt-2'>
                        <p className='custom-text'>h-3</p>
                        <div className='card custom-card-bg h-3'></div>
                    </div>
                    <div className='display-f gap-2 align-i-center mt-2'>
                        <p className='custom-text'>h-4</p>
                        <div className='card custom-card-bg h-4'></div>
                    </div>
                    <div className='display-f gap-2 align-i-center mt-2'>
                        <p className='custom-text'>h-5</p>
                        <div className='card custom-card-bg h-5'></div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Breakpoints</h2>
                    <p className='custom-sub-text mt-1'>For each breakpoint, you can modify utility classes.</p>
                    <p className='custom-sub-text mt-1'>To learn more about breakpoints, check <Link href="/responsiveness"><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default widthHeight;