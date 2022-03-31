import Head from "next/head";
import Prism from "prismjs";
import { useEffect } from 'react';

const optimization = () => {
    
    useEffect(() => {
        Prism.highlightAll();
    });
    
    return (
        <>
            <Head>
                <title>Optimization - Lazy CSS</title>
            </Head>
            
            <div className="mt-4 p-4">

                <h1 className="custom-text">Optimization</h1>
                <p className="fw-md custom-sub-text mt-1">Lazy CSS can be optimized using PurgeCSS. This will remove unused CSS from your project.</p>

                <div className="mt-4">
                    <p className="font-lg fw-md custom-text">PurgeCSS</p>
                    <div className="pl-2">
                        <p className="custom-sub-text pt-1">1. Open gulpfile.js </p>
                        <p className="custom-sub-text pt-1">2. Comment on the first version and uncomment on the second version.</p>
                        <p className="custom-sub-text pt-1">3. Run gulp</p>
                    </div>
                    <p className="fw-md custom-sub-text mt-1">This will only generate the classes that are utilized in your project. However, if you import a new class, this may take a few seconds.</p>
                </div>

                <div className="mt-3">
                    <p className="font-lg fw-md custom-text">Lazy to wait?</p>
                    <p className="custom-sub-text pt-1">Generate every classes beforehand to avoid waiting! In gulpfile, uncomment the second version and comment the first version.</p>
                    <p className="custom-sub-text pt-1">But don{`'`}t forget to PurgeCSS before production.</p>
                </div>

                <div className="mt-3">
                    <p className="font-lg fw-md custom-text">Using a framework?</p>
                    <p className="custom-sub-text pt-1">Replace .html in the Content and Watch sections of the gulpfile with your directory, .js/jsx/ts/tsx.</p>
                    <p className="custom-sub-text pt-1">For example,</p>

                    <div className="mt-2">
                    <pre>
                        <code className="language-javascript">
{
`const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('styles/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(purgecss({
      content: ['pages/**/*.{js,jsx,ts,tsx}','components/**/*.{js,jsx,ts,tsx}']
    }))
    .pipe(dest('styles'))
}

function watchTask() {
  watch(['styles/**/*.scss', 'pages/**/*.{js,jsx,ts,tsx}','components/**/*.{js,jsx,ts,tsx}'], buildStyles)
}

exports.default = series(buildStyles, watchTask)`
}
                        </code>
                    </pre>
                    </div>

                </div>

            </div>
        </>
    );
}
 
export default optimization;