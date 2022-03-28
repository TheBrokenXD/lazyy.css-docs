import Head from "next/head";

const installation = () => {
    return (
        <>
            <Head>
                <title>Installation - Lazy CSS</title>
            </Head>

            <div className="mt-4 p-4">

                <p className="custom-color">Installation</p>
                <h1 className="custom-text mt-1">Get Started!</h1>
                <p className="fw-md custom-sub-text mt-1">Lazy CSS can be installed using CDN, CLI (soon?) or Locally</p>

                <div className="mt-4">
                    <p className="font-lg fw-md custom-text">CDN</p>
                    <p className="custom-sub-text pt-1">Import our CDN to your project. This will add Lazy CSS to your project.</p>
                    <div className="card custom-variant-1-bg max-w-third p-2 mt-2">
                        <p className="white">{`<link rel="stylesheet" href="https://lazy-css-raw.vercel.app/index.css" />`}</p>
                    </div>
                </div>

                <div className="mt-3">
                    <p className="font-lg fw-md custom-text">Import locally</p>
                    <div className="display-f align-i-center pt-1 pl-2">
                        <p className="custom-sub-text">1. Download the source files from here: </p>
                        <a href="https://github.com/TheBrokenXD/lazy-css-raw" target="_blank" className="custom-color pl-1">Github</a>
                        <p className="custom-sub-text pl-1">and import it in your project.</p>
                    </div>
                    <div className="display-f align-i-center pt-1 pl-2">
                        <p className="custom-sub-text">2. Install the dependencies: </p>
                        <a href="https://www.npmjs.com/package/gulp" target="_blank" className="custom-color pl-1">gulp,</a>
                        <a href="https://www.npmjs.com/package/gulp-sass" target="_blank" className="custom-color pl-1">gulp-sass,</a>
                        <a href="https://www.npmjs.com/package/gulp-purgecss" target="_blank" className="custom-color pl-1">gulp-purgecss,</a>
                        <a href="https://www.npmjs.com/package/sass" target="_blank" className="custom-color pl-1">sass</a>
                    </div>
                    <div className="display-f align-i-center pt-1 pl-2">
                        <p className="custom-sub-text">3. Configure Gulpfile. For more info, open </p>
                        <a href="https://github.com/TheBrokenXD/lazy-css-raw/blob/main/gulpfile.js" target="_blank" className="custom-color pl-1">gulpfile.js</a>
                    </div>
                    <div className="display-f align-i-center pt-1 pl-2">
                        <p className="custom-sub-text">4. Run the following command in the VS Code terminal: </p>
                        <p className="custom-color pl-1">gulp</p>
                        <p className="fw-md custom-sub-text pl-1">(or)</p>
                    </div>
                    <div className="display-f align-i-center pt-1 pl-3">
                        <p className="custom-sub-text">If it doesn't work,</p>
                        <p className="pl-1">open package.json and add <span className="custom-color pl-1">"gulp": "gulp"</span> in scripts and run: </p>
                        <p className="custom-color pl-1">npm run gulp</p>
                    </div>
                    <div className="display-f align-i-center pt-1 pl-2">
                        <p className="custom-sub-text">5. Go live! </p>
                    </div>
                </div>

                <div className="mt-3">
                    <p className="font-lg fw-md custom-text">CLI</p>
                    <p className="custom-sub-text pt-1">Not available yet {`:(`}</p>
                </div>

            </div>
        </>
    );
}
 
export default installation;