import Head from 'next/head'
import Link from 'next/link'

const fontFamily = () => {
    return (
        <>
            <Head>
                <title>Font Family - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <p className="custom-color">Typography</p>
                <h1 className="custom-text mt-1">Font Family</h1>
                <p className='fw-md custom-sub-text mt-1'>To control an {`element's`} font family.</p>

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
                            <p className='custom-color'>font-f-base</p>
                            <p className='custom-color pt-2'>font-f-alt</p>
                            <p className='custom-color pt-2'>font-f-code</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>font-family: {`"Google Sans Display", "Roboto"`}, sans-serif;</p>
                            <p className='custom-variant-2 pt-2'>font-family: {`"Roboto",`} sans-serif;</p>
                            <p className='custom-variant-2 pt-2'>font-family: {`"Source Code Pro"`}, monospace;</p>
                        </div>
                    </div>
                </div>
                
                <div className='mt-3'>
                    <h2 className="custom-text">Base</h2>
                    <p className='custom-sub-text pt-1'>Combination of {`"Google Sans Display"`} and {`"Roboto"`}.</p>
                    <div className="card custom-sub-text-bg display-f flex-row justify-center p-2 mt-1">
                        <p className='custom-main font-f-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus voluptatem, sequi neque harum fuga ratione earum repudiandae cupiditate eos, soluta architecto, et autem corporis vero blanditiis officiis reprehenderit dignissimos tenetur pariatur praesentium delectus quod quibusdam! Cupiditate inventore minima nobis nihil.</p>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Alt</h2>
                    <p className='custom-sub-text pt-1'>Roboto Font.</p>
                    <div className="card custom-sub-text-bg display-f flex-row justify-center p-2 mt-1">
                        <p className='custom-main font-f-alt ls-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus voluptatem, sequi neque harum fuga ratione earum repudiandae cupiditate eos, soluta architecto, et autem corporis vero blanditiis officiis reprehenderit dignissimos tenetur pariatur praesentium delectus quod quibusdam! Cupiditate inventore minima nobis nihil.</p>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Base</h2>
                    <p className='custom-sub-text pt-1'>Source Code Pro Font.</p>
                    <div className="card custom-sub-text-bg display-f flex-row justify-center p-2 mt-1">
                        <p className='custom-main font-f-code ls-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus voluptatem, sequi neque harum fuga ratione earum repudiandae cupiditate eos, soluta architecto, et autem corporis vero blanditiis officiis reprehenderit dignissimos tenetur pariatur praesentium delectus quod quibusdam! Cupiditate inventore minima nobis nihil.</p>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Custom Fonts</h2>
                    <p className='custom-sub-text pt-1'>By default, Lazyy CSS provides three font families. You can change the font families in your custom SCSS file.</p>
                    <pre>
                        <code className="language-css font-f-code">
{
`@font-face {
    font-family: 'your-font';
    src: url('source');
    font-weight: 400;
    font-style: normal;
}

.font-f-base {
    font-family: 'your-font';
}`
}
                        </code>
                    </pre>
                </div>
            </div>
        </>
    );
}
 
export default fontFamily;