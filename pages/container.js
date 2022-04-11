import Head from 'next/head'

const container = () => {
    return (
        <>
            <Head>
                <title>Container - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Container</h1>
                <p className='fw-md custom-sub-text mt-1'>Containers are used to pad the content inside of them.</p>
                
                <div className="mt-4">
                <h2 className="custom-text">Class</h2>
                    <pre>
                        <code className="language-css font-f-code">
{
`.container {
    max-width: 95%;
    margin: 0 auto;
    padding: 0 50px;
}`
}
                        </code>
                    </pre>
                </div>

                <div className="mt-3">
                <h2 className="custom-text">Usage</h2>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="container m-auto">
    <!-- .. -->
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className="mt-3">
                    <h2 className="custom-text">Example</h2>
                    <p className='custom-text mt-1'>With container:</p>
                    <div className="card custom-sub-text-bg mt-1">
                        <div className='container'>
                            <p className='fw-md white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus et fuga harum labore quibusdam facilis aperiam nulla inventore, vero eos neque accusantium nobis ratione quaerat nostrum tempore necessitatibus alias quas maiores iusto consectetur quam quo aliquam. Consequatur culpa aspernatur reprehenderit.</p>
                        </div>
                    </div>
                    <p className='custom-text mt-1'>Without container:</p>
                    <div className="card custom-sub-text-bg mt-1">
                        <div>
                            <p className='fw-md white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus et fuga harum labore quibusdam facilis aperiam nulla inventore, vero eos neque accusantium nobis ratione quaerat nostrum tempore necessitatibus alias quas maiores iusto consectetur quam quo aliquam. Consequatur culpa aspernatur reprehenderit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default container;