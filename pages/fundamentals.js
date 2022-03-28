import Head from 'next/head';

const fundamentals = () => {
    return (
        <>
            <Head>
                <title>Fundamentals - Lazy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                
                <h1 className="custom-text">Fundamentals</h1>
                <p className="fw-md custom-sub-text mt-1">Basic concepts to keep your project clean and more organized.</p>

                <div className="mt-4">
                    <p className="fw-md custom-text">When you need to style anything on the web, you usually write CSS.</p>
                    <p className="fw-md custom-text mt-1">Lazy CSS allows you to style components by simply adding pre-existing classes to your HTML.</p>
                </div>

                <div className="mt-3">
                    <p className="font-lg fw-md custom-text">Keep it organized</p>
                    <p className="custom-sub-text pt-1">Lazy CSS comes up with bunch of utility classes like margin, padding, width, height etc.</p>
                    <p className="custom-sub-text pt-1">To create bespoke designs without having to write CSS, use utility classes.</p>
                </div>

                <div className="mt-3">
                    <p className="font-lg fw-md custom-text">Using Components</p>
                    <p className="custom-sub-text pt-1">Lazy CSS also includes pre-made components, making your life much simpler.</p>
                </div>

                <div className="mt-3">
                    <p className="font-lg fw-md custom-text">Responsiveness</p>
                    <p className='custom-sub-text pt-1'>Lazy CSS includes features such as flexbox and grid system to make your project responsive from the start.</p>
                    <p className='custom-sub-text pt-1'>Every utility class may be applied conditionally at various breakpoints, making it easy to create complicated responsive interfaces without ever leaving your HTML.</p>
                    <p className='custom-sub-text pt-1'>For additional information, see the <a href="/responsiveness" className='custom-color'>Responsiveness</a> page.</p>
                </div>

                <div className="mt-3">
                    <p className="font-lg fw-md custom-text">Themes and Colors</p>
                    <p className='custom-sub-text pt-1'>Lazy CSS comes with a variety of themes and colors to help you create a visually appealing project.</p>
                </div>
                
            </div>
        </>
    );
}
 
export default fundamentals;