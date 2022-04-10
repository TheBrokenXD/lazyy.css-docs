import Head from "next/head";

const Optimization = () => {
    return (
        <>
            <Head>
                <title>Optimization - Lazyy CSS</title>
            </Head>
            
            <div className="mt-4 p-4">

                <h1 className="custom-text">Optimization</h1>
                <p className="fw-md custom-sub-text mt-1">Lazyy CSS can be optimized using PurgeCSS. This will remove unused CSS from your project.</p>

                <div className="mt-4">
                    <p className="font-lg fw-md custom-text">Scripts</p>
                    <div>
                        <p className="custom-sub-text pt-1">1. Install the npm package as described on the Installation page. Create an index.scss file and import the index.scss file from node modules. </p>
                        <pre>
                            <code className="language-css font-f-code">
{
`@import '../node_modules/lazyy-css/src/sass/index.scss';`
}
                            </code>
                        </pre>
                        <p className="custom-sub-text pt-1">2. Open package.json </p>
                        <p className="custom-sub-text pt-1">3. Add the following scripts.</p>
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
                        <p className="custom-sub-text pt-1">4. Install these dependencies.</p>
                        <pre>
                            <code className="language-cli font-f-code">
{
`npm i @fullhuman/postcss-purgecss autoprefixer cssnano postcss-cli purgecss sass`
}
                            </code>
                        </pre>
                        <p className="custom-sub-text pt-1">5. Run this command.</p>
                        <pre>
                            <code className="language-cli font-f-code">
{
`npm run lazyy`
}
                            </code>
                        </pre>
                    </div>
                    <p className="fw-md custom-sub-text pt-2">This will import every class available. To watch constant changes in the index.scss file, run this command.</p>
                    <pre>
                        <code className="language-cli font-f-code">
{
`npm run watch:lazyy`
}
                        </code>
                    </pre>
                </div>

                <div className="mt-3">
                    <p className="font-lg fw-md custom-text">Optimizing for Production</p>
                    <p className="custom-sub-text pt-1">To purge the unused styles, run the following command before production.</p>
                    <pre>
                        <code className="language-cli font-f-code">
{
`npm run build:lazyy`
}
                        </code>
                    </pre>
                </div>

                <div className="mt-3">
                    <p className="font-lg fw-md custom-text">Using a framework?</p>
                    <p className="custom-sub-text pt-1">Replace .html in the scripts with your directory, .js/jsx/ts/tsx.</p>
                    <p className="custom-sub-text pt-1">For example,</p>

                    <div className="mt-2">
                    <pre>
                        <code className="language-json">
{
`"lazyy": "sass  --no-source-map styles/index.scss:styles/index.css",
"watch:lazyy": "sass  --no-source-map styles/index.scss:styles/index.css --watch",
"purge:lazyy": "purgecss --css styles/index.css --content \"pages/**/*.js\" --output styles/",
"build:lazyy": "npm run purge:lazyy && postcss styles/index.css -u autoprefixer cssnano -r --no-map"`
}
                        </code>
                    </pre>
                    </div>

                </div>

            </div>
        </>
    );
}
 
export default Optimization;