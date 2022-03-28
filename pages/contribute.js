import Head from "next/head";

const contribute = () => {
    return (
        <>
            <Head>
                <title>Contribute - Lazy CSS</title>
            </Head>

            <div className="mt-4 p-4">

                <h1 className="custom-text">Contribute</h1>
                <p className="fw-md custom-sub-text mt-1">Lazy CSS is open source. Feel free to submit a pull request if you find any bugs or wanna help me.</p>

                <div className="mt-3">
                    <p className="font-lg fw-md custom-text">GitHub</p>
                    <p className="custom-sub-text pt-1">You can find the repository on <a href="https://github.com/TheBrokenXD/lazy-css-raw" className="custom-color">GitHub</a>.</p>
                </div>

                <div className="mt-3">
                    <p className="font-lg fw-md custom-text">Thank you for using Lazy CSS!</p>
                </div>

            </div>
        </>
    );
}
 
export default contribute;