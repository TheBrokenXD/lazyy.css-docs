import Head from 'next/head';
import Link from 'next/link';

const fundamentals = () => {
    return (
        <>
            <Head>
                <title>Fundamentals - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                
                <h1 className="custom-text">Fundamentals</h1>
                <p className="fw-md custom-sub-text mt-1">Fundamental ideas for keeping your project clean and organized.</p>

                <div className="mt-4">
                    <p className="fw-md custom-text">When you need to style anything on the web, you usually write CSS.</p>
                    <p className="fw-md custom-text mt-1">Lazyy CSS allows you to style components by simply adding pre-existing classes to your HTML.</p>
                </div>

                <div className="mt-3">
                    <p className="font-lg fw-md custom-text">Keep it organized</p>
                    <p className="custom-sub-text pt-1">Lazyy CSS comes up with a bunch of utility classes like margin, padding, width, height, etc.</p>
                    <p className="custom-sub-text pt-1">Use utility classes to build unique designs without having to write CSS. You {`don't`} have to create a CSS file at all.</p>
                </div>

                <div className="mt-3">
                    <p className="font-lg fw-md custom-text">Using Components</p>
                    <p className="custom-sub-text pt-1">Lazyy CSS also includes pre-made components, making your life much simpler.</p>
                </div>

                <div className="mt-3">
                    <p className="font-lg fw-md custom-text">Responsiveness</p>
                    <p className='custom-sub-text pt-1'>Lazyy CSS includes features such as flexbox and a grid system to make your project responsive from the start.</p>
                    <p className='custom-sub-text pt-1'>Every utility class may be applied conditionally at various breakpoints, making it easy to create complicated responsive interfaces without ever leaving your HTML.</p>
                    <p className='custom-sub-text pt-1 display-f align-i-center'>For additional information, see the <Link href="/responsiveness" passHref><p className='custom-color pl-1 pointer'>Responsiveness</p></Link><span className='pl-1'>page.</span></p>
                </div>

                <div className="mt-3">
                    <p className="font-lg fw-md custom-text">Themes and Colors</p>
                    <p className='custom-sub-text pt-1'>Lazyy CSS comes with a variety of themes and colors to help you create a visually appealing project.</p>
                </div>

                <div className="mt-3">
                    <p className="font-lg fw-md custom-text">Customization</p>
                    <p className='custom-sub-text pt-1'>You can customize everything if you {`don't`} like the default ones. You can have different breakpoints, themes, and also pixel-based class names like width, height, and max-width.</p>
                </div>
                
            </div>
        </>
    );
}
 
export default fundamentals;