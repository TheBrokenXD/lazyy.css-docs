import Head from "next/head";
import Link from 'next/link';

const Installation = () => {
    return (
        <>
            <Head>
                <title>Installation - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">

                <p className="custom-color">Installation</p>
                <h1 className="custom-text mt-1">Get Started!</h1>
                <p className="fw-md custom-sub-text mt-1">Lazyy CSS can be installed via CDN or command line.</p>

                <div className="mt-4">
                    <p className="font-lg fw-md custom-text">CLI</p>
                    <p className="custom-sub-text pt-1">The best way to import Lazyy CSS is to use CLI.</p>
                    <pre>
                        <code className="language-js font-f-code">
{
`npm install lazyy-css`
}
                        </code>
                    </pre>
                    <p className="custom-sub-text pt-1">Create an index.scss file and import the index.scss file from node modules.</p>
                    <pre>
                        <code className="language-css font-f-code">
{
`@import '../node_modules/lazyy-css/src/sass/index.scss';`
}
                        </code>
                    </pre>
                    <p className="custom-sub-text pt-1">Generally, browsers are incapable of parsing sass files. It must be converted to CSS. You may do this by using the <a href="https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass" className="custom-color" target="_blank" rel="noreferrer">watch-sass</a> plugin in VS Code. Still, the preferable method is to use scripts. Add these scripts to your <span className="custom-sub-text fw-md">package.json</span> file.</p>
                    <pre>
                        <code className="language-json font-f-code">
{
`"lazyy": "sass  --no-source-map styles/index.scss:styles/index.css",
"watch:lazyy": "sass  --no-source-map styles/index.scss:styles/index.css --watch",
"purge:lazyy": "purgecss --css styles/index.css --content \"./**/*.html\" --output styles/",
"build:lazyy": "npm run purge:lazyy && postcss styles/index.css -u autoprefixer cssnano -r --no-map"`
}
                        </code>
                    </pre>
                    <div className="display-f pt-1">
                        <p className="fw-md custom-sub-text">You should change the directories of .scss and .css files according to yours.</p>
                        <p className="custom-sub-text pl-1">Install these dependencies.</p>
                    </div>
                    <pre>
                        <code className="language-json font-f-code">
{
`npm i @fullhuman/postcss-purgecss autoprefixer cssnano postcss-cli purgecss sass`
}
                        </code>
                    </pre>
                    <pre>
                        <code className="language-json font-f-code">
{
`npm run lazyy`
}
                        </code>
                    </pre>
                    <p className="custom-sub-text pt-1">This will import every class available. To optimize CSS for production, check <Link href="/optimization" passhref><a className='custom-color'>optimization</a></Link>.</p>
                </div>

                <div className="mt-3">
                    <p className="font-lg fw-md custom-text">CDN</p>
                    <p className="custom-sub-text pt-1">Import our CDN into your project. This will add lazyy CSS to your project.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
`<link rel="stylesheet" href="https://lazyy-css.vercel.app/dist/css/index.css" />`
}
                        </code>
                    </pre>
                </div>

            </div>
        </>
    );
}
 
export default Installation;