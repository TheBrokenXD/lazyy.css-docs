import Head from 'next/head'
import Link from 'next/link'

const overflow = () => {
    return (
        <>
            <Head>
                <title>Overflow - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Overflow</h1>
                <p className='fw-md custom-sub-text mt-1'>If the content of an {`element's`} box is filled to its maximum height or width, the overflow property specifies what should happen.</p>

                <div className='mt-4'>
                    <div className="row">
                        <div className="col-6-xs">
                            <h3>Class</h3>
                        </div>
                        <div className="col-6-xs">
                            <h3>Properties</h3>
                        </div>
                    </div>

                    <div className="row pt-2 max-h-250-px overflow-y-scroll">
                        <div className="col-6-xs">
                            <p className='custom-color'>overflow-hidden</p>
                            <p className='custom-color pt-2'>overflow-visible</p>
                            <p className='custom-color pt-2'>overflow-scroll</p>
                            <p className='custom-color pt-2'>overflow-auto</p>
                            <p className='custom-color pt-2'>overflow-x-hidden</p>
                            <p className='custom-color pt-2'>overflow-x-visible</p>
                            <p className='custom-color pt-2'>overflow-x-scroll</p>
                            <p className='custom-color pt-2'>overflow-x-auto</p>
                            <p className='custom-color pt-2'>overflow-y-hidden</p>
                            <p className='custom-color pt-2'>overflow-y-visible</p>
                            <p className='custom-color pt-2'>overflow-y-scroll</p>
                            <p className='custom-color pt-2'>overflow-y-auto</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>overflow: hidden;</p>
                            <p className='custom-variant-2 pt-2'>overflow: visible;</p>
                            <p className='custom-variant-2 pt-2'>overflow: scroll;</p>
                            <p className='custom-variant-2 pt-2'>overflow: auto;</p>
                            <p className='custom-variant-2 pt-2'>overflow-x: hidden;</p>
                            <p className='custom-variant-2 pt-2'>overflow-x: visible;</p>
                            <p className='custom-variant-2 pt-2'>overflow-x: scroll;</p>
                            <p className='custom-variant-2 pt-2'>overflow-x: auto;</p>
                            <p className='custom-variant-2 pt-2'>overflow-y: hidden;</p>
                            <p className='custom-variant-2 pt-2'>overflow-y: visible;</p>
                            <p className='custom-variant-2 pt-2'>overflow-y: scroll;</p>
                            <p className='custom-variant-2 pt-2'>overflow-y: auto;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Overflow Visible</h2>
                    <p className='custom-sub-text pt-1'>Using the overflow-visible attribute, you can see when an element has gone beyond its allowed maximum size. The scrollbar {`isn't`} necessary if you want to display an {`element's`} overflow.</p> 
                    <div className='display-f justify-center'>
                        <div className='card custom-main-bg w-700-px h-100-px overflow-visible mt-1 p-2'>
                            <p className='custom-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quidem omnis dolore nostrum, repellat ex commodi, ab, placeat laborum eaque saepe odit eos dolores in atque asperiores explicabo vitae facere eius. Rem suscipit corporis aperiam maxime explicabo amet cupiditate! Fugit vitae omnis totam incidunt mollitia deleniti nihil repellendus, nesciunt reiciendis dolorum assumenda, quo possimus beatae dolorem soluta. Sunt placeat aliquam asperiores impedit hic accusantium. Reprehenderit, quisquam. Quaerat placeat iste numquam nesciunt nulla pariatur cumque inventore porro soluta distinctio. Cupiditate, ut.</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <pre>
                            <code className="language-html font-f-code">
{
`<div class='card custom-main-bg w-700-px h-100-px overflow-visible p-2'>
    <p class='custom-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quidem omnis dolore nostrum, repellat ex commodi, ab, placeat laborum eaque saepe odit eos dolores in atque asperiores explicabo vitae facere eius. Rem suscipit corporis aperiam maxime explicabo amet cupiditate! Fugit vitae omnis totam incidunt mollitia deleniti nihil repellendus, nesciunt reiciendis dolorum assumenda, quo possimus beatae dolorem soluta. Sunt placeat aliquam asperiores impedit hic accusantium. Reprehenderit, quisquam. Quaerat placeat iste numquam nesciunt nulla pariatur cumque inventore porro soluta distinctio. Cupiditate, ut.</p>
</div>`
}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Overflow Hidden</h2>
                    <p className='custom-sub-text pt-1'>The overflow is clipped, and the remainder of the text is hidden.</p> 
                    <div className='display-f justify-center'>
                        <div className='card custom-main-bg w-700-px h-100-px overflow-hidden mt-1 p-2'>
                            <p className='custom-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quidem omnis dolore nostrum, repellat ex commodi, ab, placeat laborum eaque saepe odit eos dolores in atque asperiores explicabo vitae facere eius. Rem suscipit corporis aperiam maxime explicabo amet cupiditate! Fugit vitae omnis totam incidunt mollitia deleniti nihil repellendus, nesciunt reiciendis dolorum assumenda, quo possimus beatae dolorem soluta. Sunt placeat aliquam asperiores impedit hic accusantium. Reprehenderit, quisquam. Quaerat placeat iste numquam nesciunt nulla pariatur cumque inventore porro soluta distinctio. Cupiditate, ut.</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <pre>
                            <code className="language-html font-f-code">
    {
    `<div class='card custom-main-bg w-700-px h-100-px overflow-hidden p-2'>
        <p class='custom-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quidem omnis dolore nostrum, repellat ex commodi, ab, placeat laborum eaque saepe odit eos dolores in atque asperiores explicabo vitae facere eius. Rem suscipit corporis aperiam maxime explicabo amet cupiditate! Fugit vitae omnis totam incidunt mollitia deleniti nihil repellendus, nesciunt reiciendis dolorum assumenda, quo possimus beatae dolorem soluta. Sunt placeat aliquam asperiores impedit hic accusantium. Reprehenderit, quisquam. Quaerat placeat iste numquam nesciunt nulla pariatur cumque inventore porro soluta distinctio. Cupiditate, ut.</p>
    </div>`
    }
                            </code>
                        </pre>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Overflow Scroll</h2>
                    <p className='custom-sub-text pt-1'>Overflow is clipped and a scrollbar appears within the box after setting the value to scroll.</p> 
                    <div className='display-f justify-center'>
                        <div className='card custom-main-bg w-700-px h-100-px overflow-scroll mt-1 p-2'>
                            <p className='custom-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quidem omnis dolore nostrum, repellat ex commodi, ab, placeat laborum eaque saepe odit eos dolores in atque asperiores explicabo vitae facere eius. Rem suscipit corporis aperiam maxime explicabo amet cupiditate! Fugit vitae omnis totam incidunt mollitia deleniti nihil repellendus, nesciunt reiciendis dolorum assumenda, quo possimus beatae dolorem soluta. Sunt placeat aliquam asperiores impedit hic accusantium. Reprehenderit, quisquam. Quaerat placeat iste numquam nesciunt nulla pariatur cumque inventore porro soluta distinctio. Cupiditate, ut.</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <pre>
                            <code className="language-html font-f-code">
    {
    `<div class='card custom-main-bg w-700-px h-100-px overflow-scroll p-2'>
        <p class='custom-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quidem omnis dolore nostrum, repellat ex commodi, ab, placeat laborum eaque saepe odit eos dolores in atque asperiores explicabo vitae facere eius. Rem suscipit corporis aperiam maxime explicabo amet cupiditate! Fugit vitae omnis totam incidunt mollitia deleniti nihil repellendus, nesciunt reiciendis dolorum assumenda, quo possimus beatae dolorem soluta. Sunt placeat aliquam asperiores impedit hic accusantium. Reprehenderit, quisquam. Quaerat placeat iste numquam nesciunt nulla pariatur cumque inventore porro soluta distinctio. Cupiditate, ut.</p>
    </div>`
    }
                            </code>
                        </pre>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Overflow Auto</h2>
                    <p className='custom-sub-text pt-1'>The auto value is identical to scrolling, except it only adds scrollbars when required.</p> 
                    <div className='display-f justify-center'>
                        <div className='card custom-main-bg w-700-px h-100-px overflow-auto mt-1 p-2'>
                            <p className='custom-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quidem omnis dolore nostrum, repellat ex commodi, ab, placeat laborum eaque saepe odit eos dolores in atque asperiores explicabo vitae facere eius. Rem suscipit corporis aperiam maxime explicabo amet cupiditate! Fugit vitae omnis totam incidunt mollitia deleniti nihil repellendus, nesciunt reiciendis dolorum assumenda, quo possimus beatae dolorem soluta. Sunt placeat aliquam asperiores impedit hic accusantium. Reprehenderit, quisquam. Quaerat placeat iste numquam nesciunt nulla pariatur cumque inventore porro soluta distinctio. Cupiditate, ut.</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <pre>
                            <code className="language-html font-f-code">
    {
    `<div class='card custom-main-bg w-700-px h-100-px overflow-auto p-2'>
        <p class='custom-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quidem omnis dolore nostrum, repellat ex commodi, ab, placeat laborum eaque saepe odit eos dolores in atque asperiores explicabo vitae facere eius. Rem suscipit corporis aperiam maxime explicabo amet cupiditate! Fugit vitae omnis totam incidunt mollitia deleniti nihil repellendus, nesciunt reiciendis dolorum assumenda, quo possimus beatae dolorem soluta. Sunt placeat aliquam asperiores impedit hic accusantium. Reprehenderit, quisquam. Quaerat placeat iste numquam nesciunt nulla pariatur cumque inventore porro soluta distinctio. Cupiditate, ut.</p>
    </div>`
    }
                            </code>
                        </pre>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Overflow-x-auto {`&`} Overflow-y-auto</h2>
                    <p className='custom-sub-text pt-1'>The overflow-x and overflow-y attributes specify whether the overflow of content should be changed just horizontally or vertically (or both).</p> 
                    <div className='display-f justify-center'>
                        <div className='card custom-main-bg w-700-px h-100-px overflow-x-hidden overflow-y-scroll mt-1 p-2'>
                            <p className='custom-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quidem omnis dolore nostrum, repellat ex commodi, ab, placeat laborum eaque saepe odit eos dolores in atque asperiores explicabo vitae facere eius. Rem suscipit corporis aperiam maxime explicabo amet cupiditate! Fugit vitae omnis totam incidunt mollitia deleniti nihil repellendus, nesciunt reiciendis dolorum assumenda, quo possimus beatae dolorem soluta. Sunt placeat aliquam asperiores impedit hic accusantium. Reprehenderit, quisquam. Quaerat placeat iste numquam nesciunt nulla pariatur cumque inventore porro soluta distinctio. Cupiditate, ut.</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <pre>
                            <code className="language-html font-f-code">
    {
    `<div class='card custom-main-bg w-700-px h-100-px overflow-x-hidden overflow-y-scroll p-2'>
        <p class='custom-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quidem omnis dolore nostrum, repellat ex commodi, ab, placeat laborum eaque saepe odit eos dolores in atque asperiores explicabo vitae facere eius. Rem suscipit corporis aperiam maxime explicabo amet cupiditate! Fugit vitae omnis totam incidunt mollitia deleniti nihil repellendus, nesciunt reiciendis dolorum assumenda, quo possimus beatae dolorem soluta. Sunt placeat aliquam asperiores impedit hic accusantium. Reprehenderit, quisquam. Quaerat placeat iste numquam nesciunt nulla pariatur cumque inventore porro soluta distinctio. Cupiditate, ut.</p>
    </div>`
    }
                            </code>
                        </pre>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Breakpoints</h2>
                    <p className='custom-sub-text mt-1'>For each breakpoint, you can modify utility classes. For example,</p>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='xs-overflow-x-hidden md-overflow-x-scroll'>...</div>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>Will hide the overflow for small screens and set the overflow to scroll for medium and above-sized screens. To learn more about breakpoints, check <Link href="/responsiveness" passHref><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}

export default overflow;