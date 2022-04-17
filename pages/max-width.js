import Head from 'next/head'
import Link from 'next/link'

const maxWidth = () => {
    return (
        <>
            <Head>
                <title>Max-Width - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Max-Width</h1>
                <p className='fw-md custom-sub-text mt-1'>To control an {`element's`} maximum width.</p>

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
                            <p className='custom-color'>max-w-0</p>
                            <p className='custom-color pt-2'>max-w-10p</p>
                            <p className='custom-color pt-2'>max-w-20p</p>
                            <p className='custom-color pt-2'>max-w-quarter</p>
                            <p className='custom-color pt-2'>max-w-30p</p>
                            <p className='custom-color pt-2'>max-w-40p</p>
                            <p className='custom-color pt-2'>max-w-half</p>
                            <p className='custom-color pt-2'>max-w-60p</p>
                            <p className='custom-color pt-2'>max-w-70p</p>
                            <p className='custom-color pt-2'>max-w-third</p>
                            <p className='custom-color pt-2'>max-w-80p</p>
                            <p className='custom-color pt-2'>max-w-90p</p>
                            <p className='custom-color pt-2'>max-w-full</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>max-width: 0;</p>
                            <p className='custom-variant-2 pt-2'>max-width: 10%;</p>
                            <p className='custom-variant-2 pt-2'>max-width: 20%;</p>
                            <p className='custom-variant-2 pt-2'>max-width: 25%;</p>
                            <p className='custom-variant-2 pt-2'>max-width: 30%;</p>
                            <p className='custom-variant-2 pt-2'>max-width: 40%;</p>
                            <p className='custom-variant-2 pt-2'>max-width: 50%;</p>
                            <p className='custom-variant-2 pt-2'>max-width: 60%;</p>
                            <p className='custom-variant-2 pt-2'>max-width: 70%;</p>
                            <p className='custom-variant-2 pt-2'>max-width: 75%;</p>
                            <p className='custom-variant-2 pt-2'>max-width: 80%;</p>
                            <p className='custom-variant-2 pt-2'>max-width: 90%;</p>
                            <p className='custom-variant-2 pt-2'>max-width: 100%;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Setting the min-width</h2>
                    <div className='mt-2 overflow-hidden'>
                        <div className='card custom-card-bg max-w-10p'>
                            <p className='custom-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum.</p>
                        </div>
                    </div>
                    <div className='mt-2 overflow-hidden'>
                        <div className='card custom-card-bg max-w-20p'>
                            <p className='custom-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum.</p>
                        </div>
                    </div>
                    <div className='mt-2 overflow-hidden'>
                        <div className='card custom-card-bg max-w-quarter'>
                            <p className='custom-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum.</p>
                        </div>
                    </div>
                    <div className='mt-2 overflow-hidden'>
                        <div className='card custom-card-bg max-w-30p'>
                            <p className='custom-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum.</p>
                        </div>
                    </div>
                    <div className='mt-2 overflow-hidden'>
                        <div className='card custom-card-bg max-w-40p'>
                            <p className='custom-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum.</p>
                        </div>
                    </div>
                    <div className='mt-2 overflow-hidden'>
                        <div className='card custom-card-bg max-w-half'>
                            <p className='custom-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum.</p>
                        </div>
                    </div>
                    <div className='mt-2 overflow-hidden'>
                        <div className='card custom-card-bg max-w-60p'>
                            <p className='custom-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum.</p>
                        </div>
                    </div>
                    <div className='mt-2 overflow-hidden'>
                        <div className='card custom-card-bg max-w-70p'>
                            <p className='custom-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum.</p>
                        </div>
                    </div>
                    <div className='mt-2 overflow-hidden'>
                        <div className='card custom-card-bg max-w-third'>
                            <p className='custom-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum.</p>
                        </div>
                    </div>
                    <div className='mt-2 overflow-hidden'>
                        <div className='card custom-card-bg max-w-80p'>
                            <p className='custom-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum.</p>
                        </div>
                    </div>
                    <div className='mt-2 overflow-hidden'>
                        <div className='card custom-card-bg max-w-90p'>
                            <p className='custom-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum.</p>
                        </div>
                    </div>
                    <div className='mt-2 overflow-hidden'>
                        <div className='card custom-card-bg max-w-full'>
                            <p className='custom-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum.</p>
                        </div>
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
 
export default maxWidth;