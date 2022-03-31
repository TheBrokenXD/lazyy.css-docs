import Head from 'next/head';
import Link from 'next/link';
import Prism from "prismjs";
import { useEffect } from 'react';

const Index = () => {

    useEffect(() => {
        Prism.highlightAll();
    });

    return (
        <>
            <Head>
                <title>Lazy CSS - An open source sass-based CSS framework</title>
            </Head>

            {/* don't remove this empty div */}
            <div className='navbar-toggled navbar firebaseui-card-content hidden'></div>

            <div className="mt-4 p-4">

                <h1 className='custom-text'>Lazy CSS</h1>
                <p className='font-lg fw-md custom-sub-text mt-2'>A Utility-first CSS framework inspired by TailwindCSS with pre-made components.</p>
                
                <div className='display-f'>
                    <Link href="/installation" passHref><button className='custom-btn-rounded white mt-2'>Get Started!</button></Link>
                    <Link href="/contribute" passHref><button className='custom-btn-outlined br-full custom-text mt-2 ml-2'>Contribute</button></Link>
                </div>

                <p className='fw-md custom-sub-text mt-2'>Works with HTML, JS, or any other JS framework such as Next.js, Nuxt.js, and others!</p>
                
                <div className='mt-4'>
                    <p className='font-lg fw-md custom-text'>Quick start</p>
                    <p className='font-sub-text pt-1'>Looking to quickly add Lazy CSS to your project? To get started, Import our CDN.</p>

                    <pre>
                        <code className="language-html font-f-code">
{`<link rel="stylesheet" href="https://lazy-css-raw.vercel.app/index.css" />`}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <p className='font-lg fw-md custom-text'>Optimization</p>
                    <p className='font-sub-text pt-1'>Lazy CSS can be optimized using PurgeCSS. This will remove unused CSS from your project.</p>
                    <Link href="/optimization" passHref><button className='custom-btn-outlined br-full mt-1'>Learn More</button></Link>
                </div>

                <div className='mt-3'>
                    <p className='font-lg fw-md custom-text'>Components</p>
                    <p className='font-sub-text pt-1'>Lazy CSS has pre-made components for common UI elements. Check out the <Link href="/components" passhref><a className='custom-color'>Components</a></Link> page for more info.</p>
                </div>

                <div className='mt-3'>
                    <p className='font-lg fw-md custom-text'>Responsiveness</p>
                    <p className='font-sub-text pt-1'>Developing adaptable user interfaces via the usage of responsive utility variations. Build a mobile-first site without using bunch of media queries.</p>
                    <Link href="/responsive" passHref><button className='custom-btn-outlined br-full mt-1'>Learn More</button></Link>
                </div>

            </div>
        </>
    );
}
 
export default Index;