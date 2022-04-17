import Head from 'next/head'
import Link from 'next/link'

const minWidth = () => {
    return (
        <>
            <Head>
                <title>Min-Width - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Min-Width</h1>
                <p className='fw-md custom-sub-text mt-1'>To control an {`element's`} minimum width.</p>

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
                            <p className='custom-color'>min-w-0</p>
                            <p className='custom-color pt-2'>min-w-10p</p>
                            <p className='custom-color pt-2'>min-w-20p</p>
                            <p className='custom-color pt-2'>min-w-quarter</p>
                            <p className='custom-color pt-2'>min-w-30p</p>
                            <p className='custom-color pt-2'>min-w-40p</p>
                            <p className='custom-color pt-2'>min-w-half</p>
                            <p className='custom-color pt-2'>min-w-60p</p>
                            <p className='custom-color pt-2'>min-w-70p</p>
                            <p className='custom-color pt-2'>min-w-third</p>
                            <p className='custom-color pt-2'>min-w-80p</p>
                            <p className='custom-color pt-2'>min-w-90p</p>
                            <p className='custom-color pt-2'>min-w-full</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>min-width: 0;</p>
                            <p className='custom-variant-2 pt-2'>min-width: 10%;</p>
                            <p className='custom-variant-2 pt-2'>min-width: 20%;</p>
                            <p className='custom-variant-2 pt-2'>min-width: 25%;</p>
                            <p className='custom-variant-2 pt-2'>min-width: 30%;</p>
                            <p className='custom-variant-2 pt-2'>min-width: 40%;</p>
                            <p className='custom-variant-2 pt-2'>min-width: 50%;</p>
                            <p className='custom-variant-2 pt-2'>min-width: 60%;</p>
                            <p className='custom-variant-2 pt-2'>min-width: 70%;</p>
                            <p className='custom-variant-2 pt-2'>min-width: 75%;</p>
                            <p className='custom-variant-2 pt-2'>min-width: 80%;</p>
                            <p className='custom-variant-2 pt-2'>min-width: 90%;</p>
                            <p className='custom-variant-2 pt-2'>min-width: 100%;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Setting the min-width</h2>
                    <div className='display-f gap-2 mt-2 overflow-hidden'>
                        <p className='custom-text'>10%</p>
                        <div className='card custom-card-bg min-w-10p'></div>
                    </div>
                    <div className='display-f gap-2 mt-2 overflow-hidden'>
                        <p className='custom-text'>20%</p>
                        <div className='card custom-card-bg min-w-20p'></div>
                    </div>
                    <div className='display-f gap-2 mt-2 overflow-hidden'>
                        <p className='custom-text'>30%</p>
                        <div className='card custom-card-bg min-w-30p'></div>
                    </div>
                    <div className='display-f gap-2 mt-2 overflow-hidden'>
                        <p className='custom-text'>40%</p>
                        <div className='card custom-card-bg min-w-40p'></div>
                    </div>
                    <div className='display-f gap-2 mt-2 overflow-hidden'>
                        <p className='custom-text'>60%</p>
                        <div className='card custom-card-bg min-w-60p'></div>
                    </div>
                    <div className='display-f gap-2 mt-2 overflow-hidden'>
                        <p className='custom-text'>70%</p>
                        <div className='card custom-card-bg min-w-70p'></div>
                    </div>
                    <div className='display-f gap-2 mt-2 overflow-hidden'>
                        <p className='custom-text'>80%</p>
                        <div className='card custom-card-bg min-w-80p'></div>
                    </div>
                    <div className='display-f gap-2 mt-2 overflow-hidden'>
                        <p className='custom-text'>90%</p>
                        <div className='card custom-card-bg min-w-90p'></div>
                    </div>
                    <div className='display-f gap-2 mt-2 overflow-hidden'>
                        <p className='custom-text'>quarter</p>
                        <div className='card custom-card-bg min-w-quarter'></div>
                    </div>
                    <div className='display-f gap-2 mt-2 overflow-hidden'>
                        <p className='custom-text'>half</p>
                        <div className='card custom-card-bg min-w-half'></div>
                    </div>
                    <div className='display-f gap-2 mt-2 overflow-hidden'>
                        <p className='custom-text'>third</p>
                        <div className='card custom-card-bg min-w-third'></div>
                    </div>
                    <div className='display-f gap-2 mt-2 overflow-hidden'>
                        <p className='custom-text'>full</p>
                        <div className='card custom-card-bg min-w-full'></div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Breakpoints</h2>
                    <p className='custom-sub-text mt-1'>For each breakpoint, you can modify utility classes.</p>
                    <p className='custom-sub-text mt-1'>To learn more about breakpoints, check <Link href="/responsiveness" passHref><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default minWidth;