import Head from 'next/head'

const customization = () => {
    return (
        <>
            <Head>
                <title>Customization - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">

                <h1 className="custom-text">Customization</h1>
                <p className="fw-md custom-sub-text mt-1">The best techniques for overriding lazyy CSS's default styles.</p>

                <div className="mt-4">
                    <h2 className="custom-text">Customize the theme</h2>
                    <p className='custom-sub-text pt-1'></p>
                </div>

            </div>
        </>
    );
}
 
export default customization;