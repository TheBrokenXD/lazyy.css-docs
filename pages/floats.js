import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const floats = () => {
    return (
        <>
            <Head>
                <title>Floats - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Floats</h1>
                <p className='fw-md custom-sub-text mt-1'>The float property controls whether an element floats to the left, right, or not at all.</p>

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
                            <p className='custom-color'>float-right</p>
                            <p className='custom-color pt-2'>float-left</p>
                            <p className='custom-color pt-2'>float-none</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>float: right;</p>
                            <p className='custom-variant-2 pt-2'>float: left;</p>
                            <p className='custom-variant-2 pt-2'>float: none;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Float right</h2>
                    <div className='card custom-sub-text-bg mt-1 p-2'>
                        <div className='float-right pl-2'><Image src="/demo.png" width={80} height={80}/></div>
                        <p className='custom-gray fw-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias earum amet et autem odit consectetur error facilis quo aspernatur, ut obcaecati debitis ab deleniti, animi adipisci enim vero fugit quibusdam? Nostrum sapiente consectetur qui inventore! Soluta, autem! Ducimus odio tempora excepturi corrupti, commodi dolores dolorem inventore eum. Earum incidunt culpa natus officiis sit dolor, consequuntur accusamus nihil libero cupiditate delectus?</p>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='card custom-sub-text-bg p-2'>
    <div class='float-right pl-2'><img src="demo.png" alt="image"></div>
    <p class='custom-gray fw-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, animi.</p>
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Float left</h2>
                    <div className='card custom-sub-text-bg mt-1 p-2'>
                        <div className='float-left pr-2'><Image src="/demo.png" width={80} height={80}/></div>
                        <p className='custom-gray fw-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias earum amet et autem odit consectetur error facilis quo aspernatur, ut obcaecati debitis ab deleniti, animi adipisci enim vero fugit quibusdam? Nostrum sapiente consectetur qui inventore! Soluta, autem! Ducimus odio tempora excepturi corrupti, commodi dolores dolorem inventore eum. Earum incidunt culpa natus officiis sit dolor, consequuntur accusamus nihil libero cupiditate delectus?</p>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='card custom-sub-text-bg p-2'>
    <div class='float-left pl-2'><img src="demo.png" alt="image"></div>
    <p class='custom-gray fw-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, animi.</p>
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Float none</h2>
                    <div className='card custom-sub-text-bg mt-1 p-2'>
                        <div className='float-none pb-2'><Image src="/demo.png" width={80} height={80}/></div>
                        <p className='custom-gray fw-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias earum amet et autem odit consectetur error facilis quo aspernatur, ut obcaecati debitis ab deleniti, animi adipisci enim vero fugit quibusdam? Nostrum sapiente consectetur qui inventore! Soluta, autem! Ducimus odio tempora excepturi corrupti, commodi dolores dolorem inventore eum. Earum incidunt culpa natus officiis sit dolor, consequuntur accusamus nihil libero cupiditate delectus?</p>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='card custom-sub-text-bg p-2'>
    <div class='float-none pl-2'><img src="demo.png" alt="image"></div>
    <p class='custom-gray fw-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, animi.</p>
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Breakpoints</h2>
                    <p className='custom-sub-text mt-1'>For each breakpoint, you can modify utility classes. For example,</p>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='xs-float-right xl-float-none pl-2'><img src="demo.png" alt="image"></div>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>Will float right on the xs breakpoint and float none on the xl breakpoint. To learn more about breakpoints, check <Link href="/responsiveness"><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default floats;