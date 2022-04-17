import Head from 'next/head'
import Link from 'next/link'

const position = () => {
    return (
        <>
            <Head>
                <title>Position - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Position</h1>
                <p className='fw-md custom-sub-text mt-1'>Controls the position of an element in the DOM.</p>

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
                            <p className='custom-color'>pos-static</p>
                            <p className='custom-color pt-2'>pos-fixed</p>
                            <p className='custom-color pt-2'>pos-absolute</p>
                            <p className='custom-color pt-2'>pos-relative</p>
                            <p className='custom-color pt-2'>pos-sticky</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>position: static;</p>
                            <p className='custom-variant-2 pt-2'>position: fixed;</p>
                            <p className='custom-variant-2 pt-2'>position: absolute;</p>
                            <p className='custom-variant-2 pt-2'>position: relative;</p>
                            <p className='custom-variant-2 pt-2'>position: sticky;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Static</h2>
                    <p className='custom-sub-text pt-1'>When an element is placed in a {`"static"`} position, it is always positioned according to the {`page's`} usual flow.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="pos-static">
    <p class="custom-text">This element is static.</p>
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Fixed</h2>
                    <p className='custom-sub-text pt-1'>Even if the page is scrolled, it remains in the same position.</p>
                    <div className='display-f justify-center mt-2 mb-2'>
                        <div className='card custom-main-bg w-700-px h-100-px overflow-y-auto p-2'>
                            <p className='fw-md custom-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, iure. Ratione, similique quaerat sapiente consequatur animi temporibus accusantium in architecto adipisci culpa totam distinctio repudiandae nemo repellendus minima consequuntur quibusdam esse. Possimus odit facilis quasi sit eum in esse officiis libero fuga, laudantium doloremque obcaecati omnis temporibus provident assumenda pariatur a reprehenderit aspernatur similique quia nulla culpa, magni aliquid. Cumque laudantium repellat perferendis consequuntur porro, excepturi dolorum quo id iste deleniti molestiae qui natus explicabo dolores, harum nobis autem vel! Please have a look in the bottom right corner.</p>
                            <div className='pos-fixed bottom-2 right-2 card custom-sub-text-bg p-2'>
                                <p className='custom-gray'>This element is fixed.</p>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='card custom-main-bg w-700-px h-80-px overflow-y-auto p-3'>
    <p class='fw-md custom-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, iure. Ratione, similique quaerat sapiente consequatur animi temporibus accusantium in architecto adipisci culpa totam distinctio repudiandae nemo repellendus minima consequuntur quibusdam esse. Possimus odit facilis quasi sit eum in esse officiis libero fuga, laudantium doloremque obcaecati omnis temporibus provident assumenda pariatur a reprehenderit aspernatur similique quia nulla culpa, magni aliquid. Cumque laudantium repellat perferendis consequuntur porro, excepturi dolorum quo id iste deleniti molestiae qui natus explicabo dolores, harum nobis autem vel!</p>
    <div class='pos-fixed bottom-2 right-2 card custom-sub-text-bg p-2'>
        <p class='custom-gray'>This element is fixed.</p>
    </div>
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Absolute</h2>
                    <p className='custom-sub-text pt-1'>To place an element outside of the regular flow of the page, use absolute, which causes nearby components to behave as if the element does not exist.</p>
                    <div className='display-f justify-center mt-2 mb-2'>
                        <div className='card custom-main-bg w-700-px h-100-px overflow-y-auto p-2'>
                            <div className='pos-relative'>
                                <div className='pos-absolute top-0 w-full custom-sub-text-bg display-f justify-between p-2'>
                                    <p className='custom-gray'>This element is absolute.</p>
                                    <div className='display-f'>
                                        <p className='custom-gray pr-1'>1</p>
                                        <p className='custom-gray'>2</p>
                                    </div>
                                </div>
                            </div>
                            <p className='custom-text pt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus quidem nam molestias delectus incidunt eligendi consectetur inventore cum voluptate? Ab distinctio repudiandae nihil deleniti nobis nisi temporibus vel officiis veniam explicabo, voluptatibus totam, hic odit et aperiam, quidem ipsum dolores pariatur at asperiores sint natus exercitationem laboriosam! Illo voluptatibus minima reprehenderit nihil quibusdam rem autem esse, beatae deserunt temporibus obcaecati ex ipsa et veniam praesentium architecto, non culpa exercitationem vel itaque? Voluptates dolorem magni recusandae doloribus. Nesciunt, illo cum?</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='card custom-main-bg w-700-px h-100-px overflow-y-auto p-2'>
    <div class='pos-relative'>
        <div class='pos-absolute top-0 w-full custom-sub-text-bg display-f justify-between p-2'>
            <p class='custom-gray'>This element is absolute.</p>
            <div class='display-f'>
                <p class='custom-gray pr-1'>1</p>
                <p class='custom-gray'>2</p>
            </div>
        </div>
    </div>
    <p class='custom-text pt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus quidem nam molestias delectus incidunt eligendi consectetur inventore cum voluptate? Ab distinctio repudiandae nihil deleniti nobis nisi temporibus vel officiis veniam explicabo, voluptatibus totam, hic odit et aperiam, quidem ipsum dolores pariatur at asperiores sint natus exercitationem laboriosam! Illo voluptatibus minima reprehenderit nihil quibusdam rem autem esse, beatae deserunt temporibus obcaecati ex ipsa et veniam praesentium architecto, non culpa exercitationem vel itaque? Voluptates dolorem magni recusandae doloribus. Nesciunt, illo cum?</p>
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Relative</h2>
                    <p className='custom-sub-text pt-1'>Use relative to place an element in accordance with the {`document's`} usual flow.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="pos-relative">
    <p class="custom-text">This element is relative.</p>
</div>`
}
                        </code>
                    </pre>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">Sticky</h2>
                    <p className='custom-sub-text pt-1'>The location of an element with the property sticky is determined by the {`user's`} scroll position.</p>
                    <div className='display-f justify-center mt-2 mb-2'>
                        <div className='card custom-main-bg w-700-px h-100-px overflow-y-auto p-2'>
                            <p className='custom-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores voluptatem distinctio natus, soluta veniam porro vel, impedit, laboriosam id voluptate amet molestiae? Obcaecati porro eius qui ea tempore unde doloribus vel autem, reiciendis voluptas commodi earum a fugit culpa.</p>  
                            <div className='pos-sticky top-0 w-full custom-sub-text-bg display-f justify-center p-2'>
                                <p className='custom-gray'>This element is sticky.</p>
                            </div>
                            <p className='custom-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates est! Corporis fugiat officiis explicabo suscipit debitis porro. Repellat sunt tenetur dolorum eius, recusandae corporis sapiente reiciendis fugit consectetur id minus sit tempore officiis enim in doloribus commodi facilis quaerat fuga cum accusantium unde. Laudantium quaerat quos sit dolor culpa fugiat sapiente, commodi nisi, repudiandae voluptate hic est omnis adipisci tempore ab, dolore suscipit. In magni possimus eligendi provident incidunt libero dicta eius vero iure! Quibusdam explicabo debitis sunt harum nulla reprehenderit nemo dignissimos doloremque ducimus cum voluptates commodi itaque, atque error, odit sed quas? Error cumque aliquam ex nihil!</p>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='card custom-main-bg w-700-px h-100-px overflow-y-auto p-2'>
    <p class='custom-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores voluptatem distinctio natus, soluta veniam porro vel, impedit, laboriosam id voluptate amet molestiae? Obcaecati porro eius qui ea tempore unde doloribus vel autem, reiciendis voluptas commodi earum a fugit culpa.</p>  
    <div class='pos-sticky top-0 w-full custom-sub-text-bg display-f justify-center p-2'>
        <p class='custom-gray'>This element is sticky.</p>
    </div>
    <p class='custom-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates est! Corporis fugiat officiis explicabo suscipit debitis porro. Repellat sunt tenetur dolorum eius, recusandae corporis sapiente reiciendis fugit consectetur id minus sit tempore officiis enim in doloribus commodi facilis quaerat fuga cum accusantium unde. Laudantium quaerat quos sit dolor culpa fugiat sapiente, commodi nisi, repudiandae voluptate hic est omnis adipisci tempore ab, dolore suscipit. In magni possimus eligendi provident incidunt libero dicta eius vero iure! Quibusdam explicabo debitis sunt harum nulla reprehenderit nemo dignissimos doloremque ducimus cum voluptates commodi itaque, atque error, odit sed quas? Error cumque aliquam ex nihil!</p>
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
`<div class='xs-pos-relative md-pos-absolute'>...</div>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text mt-1'>Will apply relative position as the default and absolute for medium and above-sized screens. To learn more about breakpoints, check <Link href="/responsiveness" passHref><span className='custom-color pointer'>responsiveness</span></Link>.</p>
                </div>
            </div>
        </>
    );
}
 
export default position;