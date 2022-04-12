import Head from 'next/head';
import Link from 'next/link';

const Responsiveness = () => {
    return (
        <>
            <Head>
                <title>Responsiveness - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                
                <p className="custom-color">Fundamentals</p>
                <h1 className="custom-text mt-1">Responsiveness</h1>
                <p className="fw-md custom-text mt-1">Lazyy CSS includes features such as flexbox and grid system to make your project responsive from the start.</p>

                <div className="mt-4">
                    <p className='custom-sub-text'>Breakpoints may be used with any utility class in lazyy CSS.</p>
                    <p className='custom-sub-text pt-1'>Here are the default breakpoints.</p>
                </div>

                <div className="mt-3">
                    <div className="row">
                        <div className="col-6-xs">
                            <p className='fw-bold custom-text'>Breakpoint</p>
                        </div>
                        <div className="col-6-xs">
                        <p className='fw-bold custom-text'>Min Width</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6-xs">
                            <p className='custom-color pt-2'>`XS`</p>
                            <p className='custom-color pt-2'>`SM`</p>
                            <p className='custom-color pt-2'>`MD`</p>
                            <p className='custom-color pt-2'>`LG`</p>
                            <p className='custom-color pt-2'>`XL`</p>
                            <p className='custom-color pt-2'>`XXL`</p>
                            <p className='custom-color pt-2'>`XXXL`</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2 pt-2'>0</p>
                            <p className='custom-variant-2 pt-2'>320px</p>
                            <p className='custom-variant-2 pt-2'>768px</p>
                            <p className='custom-variant-2 pt-2'>1024px</p>
                            <p className='custom-variant-2 pt-2'>1440px</p>
                            <p className='custom-variant-2 pt-2'>1536px</p>
                            <p className='custom-variant-2 pt-2'>1920px</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <p className='fw-md custom-sub-text pb-2'>The best way to use breakpoints is to implement grid system. For example,</p>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="row gap-2 justify-center">

<div class="col-12-xs col-6-md col-3-xl">
    <div class="card black-bg">
        <h1 class="card-title white">Card Title</h1>
        <div class="card-body">
            <p class="emerald-text">This is the card body</p>
        </div>
    </div>
</div>

<div class="col-12-xs col-6-md col-3-xl">
    <div class="card black-bg">
        <h1 class="card-title white">Card Title</h1>
        <div class="card-body">
            <p class="emerald-text">This is the card body</p>
        </div>
    </div>
</div>

<div class="col-12-xs col-6-md col-3-xl">
    <div class="card black-bg">
        <h1 class="card-title white">Card Title</h1>
        <div class="card-body">
            <p class="emerald-text">This is the card body</p>
        </div>
    </div>
</div>

<div class="col-12-xs col-6-md col-3-xl">
    <div class="card black-bg">
        <h1 class="card-title white">Card Title</h1>
        <div class="card-body">
            <p class="emerald-text">This is the card body</p>
        </div>
    </div>
</div>

</div>`
}
                        </code>
                    </pre>
                </div>

                <div className="row gap-2 justify-center">

                    <div className="col-12-xs col-6-md col-3-xl">
                        <div className="card black-bg">
                            <h1 className="card-title white">Card Title</h1>
                            <div className="card-body">
                                <p className="emerald-text">This is the card body</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12-xs col-6-md col-3-xl">
                        <div className="card black-bg">
                            <h1 className="card-title white">Card Title</h1>
                            <div className="card-body">
                                <p className="emerald-text">This is the card body</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12-xs col-6-md col-3-xl">
                        <div className="card black-bg">
                            <h1 className="card-title white">Card Title</h1>
                            <div className="card-body">
                                <p className="emerald-text">This is the card body</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12-xs col-6-md col-3-xl">
                        <div className="card black-bg">
                            <h1 className="card-title white">Card Title</h1>
                            <div className="card-body">
                                <p className="emerald-text">This is the card body</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-3">
                    <h2 className="custom-text">Utility Classes</h2>
                    <p className='fw-md custom-sub-text pt-1'>Breakpoints can also be used with utility classes like font size, padding, margin etc. For example,</p>
                    <pre>
                        <code className="language-html font-f-code">
{
`<p class="xs-font-md md-font-lg lg-font-xl">
    This is a paragraph with font size of medium at minimum width of 0, large at 768px, extra large at 1024px.
</p>`
}
                        </code>
                    </pre>
                </div>

                <div className="mt-3">
                    <p className='font-lg fw-md custom-text'>Customize breakpoints</p>
                    <p className='fw-md custom-sub-text pt-1 display-f'>{`Don't`} want the default breakpoints? See <Link href="/customization" passHref><p className='custom-color pl-1 pr-1 pointer'> Customization </p></Link>to learn more about it.</p>
                </div>

            </div>

        </>
    );
}
 
export default Responsiveness;