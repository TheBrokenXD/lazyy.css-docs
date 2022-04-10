import Head from 'next/head'
import Link from 'next/link'
import 'prismjs/components/prism-sass'

const customization = () => {
    return (
        <>
            <Head>
                <title>Customization - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">

                <h1 className="custom-text">Customization</h1>
                <p className="fw-md custom-sub-text mt-1">The best techniques for overriding lazyy CSS{`'`}s default styles.</p>

                <div className="mt-4">
                    <h2 className="custom-text">Customizing your theme</h2>
                    <p className='custom-sub-text pt-1'>Lazyy CSS comes with a few pre-installed <Link href="/theme"><span className='custom-color pointer'>themes</span></Link>. Follow these instructions to create your own theme.</p>
                    <p className='custom-sub-text pt-2'>1. Navigate to your index.scss file.</p>
                    <p className='custom-sub-text pt-1'>2. Add the following code:</p>
                    <pre>
                        <code className="language-sass font-f-code">
{
`$custom: #007AFF !default;

$custom-palette: (
    "color": $custom,
    "main": #FFFFFF,
    "on-main": $custom,
    "text": #1D1D1D,
    "sub-text": #2D3748,
    "error": #CA195A,
    "disabled": #535353,
    "active": #5588FF,
    "card": #000000,
    "hover": #202020,
    "gray": #D1D1D1,
    //additional
    "notification": #007AFF,
    "misc": #bfbfbf
);`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text pt-1'>Customize the colors according to your wishes. This will add a few new classes, like</p>
                    <pre>
                        <code className="language-css font-f-code">
{
`.custom-color-bg, custom-card-bg, custom-text`
}
                        </code>
                    </pre>
                </div>

                <div className="mt-3">
                    <h2 className="custom-text">Customizing breakpoints</h2>
                    <p className='custom-sub-text pt-1'>You can completely customize your breakpoints in your index.scss file:</p>
                    <pre>
                        <code className="language-sass font-f-code">
{
`$breakpoints: (
    "xs": 0,
    "sm": 320px,
    "md": 768px,
    "lg": 1024px,
    "xl": 1440px,
    "xxl": 1536px,
    "xxxl": 1920px
);`
}
                    </code>
                </pre>
                </div>

                <div className="mt-3">
                    <h2 className="custom-text">Customizing a single class</h2>
                    <p className='custom-sub-text pt-1'>In the same way as the above procedure, you may modify any specific class or variable.</p>
                </div>

            </div>
        </>
    );
}
 
export default customization;