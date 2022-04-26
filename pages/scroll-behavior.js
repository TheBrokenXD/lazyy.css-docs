import Head from 'next/head'

const scrollBehavious = () => {
    return (
        <>
            <Head>
                <title>Scroll Behavior - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Scroll Behavior</h1>
                <p className='fw-md custom-sub-text mt-1'>To control the scroll behavior of an element.</p>

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
                            <p className='custom-color'>scroll-smooth</p>
                            <p className='custom-color pt-2'>scroll-auto</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-variant-2'>scroll-behavior: smooth;</p>
                            <p className='custom-variant-2 pt-2'>scroll-behavior: auto;</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className="custom-text">With Smooth Scrolling</h2>
                    <div className='display-f justify-center mt-1'>
                        <div className='card custom-sub-text-bg p-3 h-400-px overflow-y-scroll scroll-smooth'>
                            <div className='display-f justify-center'>
                                <button className='custom-btn'><a href="#one" className='custom-main'>Click One</a></button>
                                <button className='custom-btn ml-2'><a href="#two" className='custom-main'>Click Two</a></button>
                            </div>
                            <div id='one' className='mt-3'>
                                <p className='custom-main'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat porro hic sint minus obcaecati quidem ipsa incidunt autem maiores alias id illo animi, odio sit beatae quo perferendis doloribus. Perspiciatis quas unde cum porro, quos, iure aperiam voluptate eaque repudiandae iste facere. Fugit ullam sapiente cum voluptatem exercitationem saepe dignissimos aliquid doloremque maxime quasi facere et id tempore aperiam eius voluptas pariatur, eos ex veniam nostrum? Facilis illo consequuntur autem doloremque dolor enim nobis, molestiae amet, architecto delectus necessitatibus! Eum doloribus nesciunt enim et nostrum adipisci laudantium quia, molestias magnam harum, distinctio similique cumque aspernatur facilis ipsa! Adipisci saepe quibusdam libero quia nulla, voluptates accusantium dolore a expedita neque odit maxime ipsam sint animi quam laboriosam recusandae illo fuga harum odio assumenda repudiandae. Perferendis ad delectus, maxime distinctio laborum accusantium labore commodi veniam dolore quidem eligendi. Possimus porro voluptates similique molestiae nulla voluptatem dicta sit rerum! Libero nesciunt ex beatae dolore, architecto odio vel nemo. Delectus, ab? Omnis, dolor. Odit quidem suscipit magni ullam reprehenderit dolore tempora aperiam quae excepturi magnam, facilis inventore modi iste! Ut cum reprehenderit odit magni pariatur? Vero cum culpa quod at quisquam asperiores numquam quae non odio dolores dignissimos harum eligendi illo, possimus quos ipsam necessitatibus, provident nisi ullam fuga ipsum quidem. Aliquam a fugit soluta corrupti cumque voluptates maiores minus quod voluptatibus molestiae harum ducimus eos dolorum impedit eveniet et, delectus commodi suscipit? Natus ex libero esse odio, placeat minus dignissimos labore accusamus unde, architecto iusto enim! Voluptatibus ad nesciunt voluptate natus illo, ullam itaque. Similique blanditiis fuga illo repellat dicta, nisi, impedit veritatis voluptas aut perferendis necessitatibus doloribus, culpa modi labore! Sint maiores pariatur ullam, ea mollitia in, iste quis dolore nesciunt obcaecati minus earum perspiciatis omnis facere cumque error molestias asperiores sequi dolorem reiciendis ipsum laudantium architecto minima quisquam. Similique, sapiente.</p>
                            </div>
                            <div id='two' className='mt-3'>
                                <p className='custom-main'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus officia saepe vel velit quam, ducimus aut dolor itaque ad. Natus rerum sed maxime vero voluptatem nobis tempore, commodi quisquam tempora at vel, mollitia veniam id aperiam sapiente? Quasi voluptatem maiores, ut quia eveniet voluptatibus nobis eum, fuga odit laboriosam natus aut perspiciatis ipsa dolorum velit possimus amet accusamus. Ipsum fugiat eum iure animi iusto inventore, perferendis ducimus laborum necessitatibus consequuntur quibusdam alias! Aliquam corrupti quae aperiam optio ad ex recusandae eos dolore mollitia eveniet ullam tempore, aut doloribus illum repellendus, necessitatibus excepturi vitae quisquam placeat. Iure minus recusandae qui nisi molestiae atque non dolore numquam alias. Nulla, molestias error. Molestiae commodi pariatur minus, rerum saepe expedita quod, quisquam officia suscipit unde eaque magnam odio nihil dolore minima adipisci non. Esse iure perferendis eos accusantium asperiores aspernatur repudiandae consectetur pariatur minus, nesciunt voluptatum similique quaerat eius veritatis obcaecati sapiente dicta illum minima quos unde aperiam? Eaque facilis ut aliquam architecto at libero natus omnis culpa neque corrupti aspernatur dolor laboriosam tempora voluptatum quasi, nesciunt quibusdam rem, vel dolore voluptates voluptatibus provident porro repudiandae! Quia quidem facilis expedita? Ullam ipsam harum labore ipsa omnis error, optio cupiditate incidunt culpa unde quam non! Doloribus, natus enim dignissimos nemo debitis consequuntur at temporibus totam ipsum recusandae maiores laudantium vero earum, repellat eveniet soluta fugit voluptas explicabo qui cumque corporis. Assumenda animi similique unde maxime doloremque, aliquam dicta ipsum non rem aut at tempore eius quisquam harum itaque adipisci. Ea sed laudantium quae suscipit a facilis vel aut minima consequuntur nisi ratione quas culpa animi fuga sunt enim rerum incidunt delectus beatae, nostrum dolor voluptate. Sequi ipsam distinctio facilis molestias similique praesentium commodi veniam ex, officia quasi labore laudantium adipisci, quaerat esse aperiam iusto molestiae eos perferendis voluptatem beatae vero nam. Commodi maiores consequuntur animi?</p>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class='display-f justify-center'>
    <button class='custom-btn'><a href="#one" class='custom-main'>Click One</a></button>
    <button class='custom-btn ml-2'><a href="#two" class='custom-main'>Click Two</a></button>
</div>
<div id='one' class='mt-3'>
    <p class='custom-main'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat porro hic sint minus obcaecati quidem ipsa incidunt autem maiores alias id illo animi, odio sit beatae quo perferendis doloribus. Perspiciatis quas unde cum porro, quos, iure aperiam voluptate eaque repudiandae iste facere. Fugit ullam sapiente cum voluptatem exercitationem saepe dignissimos aliquid doloremque maxime quasi facere et id tempore aperiam eius voluptas pariatur, eos ex veniam nostrum? Facilis illo consequuntur autem doloremque dolor enim nobis, molestiae amet, architecto delectus necessitatibus! Eum doloribus nesciunt enim et nostrum adipisci laudantium quia, molestias magnam harum, distinctio similique cumque aspernatur facilis ipsa! Adipisci saepe quibusdam libero quia nulla, voluptates accusantium dolore a expedita neque odit maxime ipsam sint animi quam laboriosam recusandae illo fuga harum odio assumenda repudiandae. Perferendis ad delectus, maxime distinctio laborum accusantium labore commodi veniam dolore quidem eligendi. Possimus porro voluptates similique molestiae nulla voluptatem dicta sit rerum! Libero nesciunt ex beatae dolore, architecto odio vel nemo. Delectus, ab? Omnis, dolor. Odit quidem suscipit magni ullam reprehenderit dolore tempora aperiam quae excepturi magnam, facilis inventore modi iste! Ut cum reprehenderit odit magni pariatur? Vero cum culpa quod at quisquam asperiores numquam quae non odio dolores dignissimos harum eligendi illo, possimus quos ipsam necessitatibus, provident nisi ullam fuga ipsum quidem. Aliquam a fugit soluta corrupti cumque voluptates maiores minus quod voluptatibus molestiae harum ducimus eos dolorum impedit eveniet et, delectus commodi suscipit? Natus ex libero esse odio, placeat minus dignissimos labore accusamus unde, architecto iusto enim! Voluptatibus ad nesciunt voluptate natus illo, ullam itaque. Similique blanditiis fuga illo repellat dicta, nisi, impedit veritatis voluptas aut perferendis necessitatibus doloribus, culpa modi labore! Sint maiores pariatur ullam, ea mollitia in, iste quis dolore nesciunt obcaecati minus earum perspiciatis omnis facere cumque error molestias asperiores sequi dolorem reiciendis ipsum laudantium architecto minima quisquam. Similique, sapiente.</p>
</div>
<div id='two' class='mt-3'>
    <p class='custom-main'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus officia saepe vel velit quam, ducimus aut dolor itaque ad. Natus rerum sed maxime vero voluptatem nobis tempore, commodi quisquam tempora at vel, mollitia veniam id aperiam sapiente? Quasi voluptatem maiores, ut quia eveniet voluptatibus nobis eum, fuga odit laboriosam natus aut perspiciatis ipsa dolorum velit possimus amet accusamus. Ipsum fugiat eum iure animi iusto inventore, perferendis ducimus laborum necessitatibus consequuntur quibusdam alias! Aliquam corrupti quae aperiam optio ad ex recusandae eos dolore mollitia eveniet ullam tempore, aut doloribus illum repellendus, necessitatibus excepturi vitae quisquam placeat. Iure minus recusandae qui nisi molestiae atque non dolore numquam alias. Nulla, molestias error. Molestiae commodi pariatur minus, rerum saepe expedita quod, quisquam officia suscipit unde eaque magnam odio nihil dolore minima adipisci non. Esse iure perferendis eos accusantium asperiores aspernatur repudiandae consectetur pariatur minus, nesciunt voluptatum similique quaerat eius veritatis obcaecati sapiente dicta illum minima quos unde aperiam? Eaque facilis ut aliquam architecto at libero natus omnis culpa neque corrupti aspernatur dolor laboriosam tempora voluptatum quasi, nesciunt quibusdam rem, vel dolore voluptates voluptatibus provident porro repudiandae! Quia quidem facilis expedita? Ullam ipsam harum labore ipsa omnis error, optio cupiditate incidunt culpa unde quam non! Doloribus, natus enim dignissimos nemo debitis consequuntur at temporibus totam ipsum recusandae maiores laudantium vero earum, repellat eveniet soluta fugit voluptas explicabo qui cumque corporis. Assumenda animi similique unde maxime doloremque, aliquam dicta ipsum non rem aut at tempore eius quisquam harum itaque adipisci. Ea sed laudantium quae suscipit a facilis vel aut minima consequuntur nisi ratione quas culpa animi fuga sunt enim rerum incidunt delectus beatae, nostrum dolor voluptate. Sequi ipsam distinctio facilis molestias similique praesentium commodi veniam ex, officia quasi labore laudantium adipisci, quaerat esse aperiam iusto molestiae eos perferendis voluptatem beatae vero nam. Commodi maiores consequuntur animi?</p>
</div>`
}
                        </code>
                    </pre>
                </div>
            </div>
        </>
    );
}
 
export default scrollBehavious;