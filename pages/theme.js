import Head from 'next/head'
import Link from 'next/link'
import 'prismjs/components/prism-sass'

const Themes = () => {
    return (
        <>
            <Head>
                <title>Theme - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">

                <h1 className="custom-text">Theme</h1>
                <p className="fw-md custom-sub-text mt-1">Lazyy CSS comes with a selection of professionally-designed themes if you {`don't`} have a certain brand already in mind.</p>

                <div className="mt-4">
                    <h2 className="custom-text">Palettes</h2>
                    <div className="row justify-center gap-1 mt-2">
                        <div className="col-2-xl col-4-md col-6-xs">
                            <div className="card emerald-color-bg p-1"><p className='fw-md emerald-text'>Emerald</p></div>
                        </div>
                        <div className="col-2-xl col-4-md col-6-xs">
                            <div className="card pearl-color-bg p-1"><p className='fw-md pearl-text'>Pearl</p></div>
                        </div>
                        <div className="col-2-xl col-4-md col-6-xs">
                            <div className="card royal-color-bg p-1"><p className='fw-md royal-text'>Royal</p></div>
                        </div>
                        <div className="col-2-xl col-4-md col-6-xs">
                            <div className="card coffee-color-bg p-1"><p className='fw-md coffee-text'>Coffee</p></div>
                        </div>
                        <div className="col-2-xl col-4-md col-6-xs">
                            <div className="card honey-color-bg p-1"><p className='fw-md honey-text'>Honey</p></div>
                        </div>
                        <div className="col-2-xl col-4-md col-6-xs">
                            <div className="card dracula-color-bg p-1"><p className='fw-md dracula-text'>Dracula</p></div>
                        </div>
                        <div className="col-2-xl col-4-md col-6-xs">
                            <div className="card spring-color-bg p-1"><p className='fw-md spring-text'>Spring</p></div>
                        </div>
                        <div className="col-2-xl col-4-md col-6-xs">
                            <div className="card thanos-color-bg p-1"><p className='fw-md thanos-text'>Thanos</p></div>
                        </div>
                        <div className="col-2-xl col-4-md col-6-xs">
                            <div className="card lemon-color-bg p-1"><p className='fw-md lemon-text'>Lemon</p></div>
                        </div>
                        <div className="col-2-xl col-4-md col-6-xs">
                            <div className="card ruby-color-bg p-1"><p className='fw-md ruby-text'>Ruby</p></div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h2 className="custom-text">Emerald</h2>
                    <div className="row justify-center gap-1 mt-2">
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card emerald-color-bg p-3"><p className='fw-md emerald-text'>Color</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card emerald-main-bg p-3"><p className='fw-md emerald-text'>Main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card emerald-on-main-bg p-3"><p className='fw-md emerald-text'>On-main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card emerald-text-bg p-3"><p className='fw-md emerald-main'>Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card emerald-sub-text-bg p-3"><p className='fw-md emerald-main'>Sub Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card emerald-error-bg p-3"><p className='fw-md emerald-text'>Error</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card emerald-disabled-bg p-3"><p className='fw-md emerald-text'>Disabled</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card emerald-active-bg p-3"><p className='fw-md emerald-text'>Active</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card emerald-card-bg p-3"><p className='fw-md emerald-text'>Card</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card emerald-hover-bg p-3"><p className='fw-md emerald-text'>Hover</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card emerald-gray-bg p-3"><p className='fw-md emerald-text'>Gray</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card emerald-notification-bg p-3"><p className='fw-md emerald-text'>Notification</p></div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h2 className="custom-text">Pearl</h2>
                    <div className="row justify-center gap-1 mt-2">
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card pearl-color-bg p-3"><p className='fw-md pearl-text'>Color</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card pearl-main-bg p-3"><p className='fw-md pearl-text'>Main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card pearl-on-main-bg p-3"><p className='fw-md pearl-text'>On-main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card pearl-text-bg p-3"><p className='fw-md pearl-main'>Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card pearl-sub-text-bg p-3"><p className='fw-md pearl-main'>Sub Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card pearl-error-bg p-3"><p className='fw-md pearl-text'>Error</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card pearl-disabled-bg p-3"><p className='fw-md pearl-text'>Disabled</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card pearl-active-bg p-3"><p className='fw-md pearl-text'>Active</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card pearl-card-bg p-3"><p className='fw-md pearl-main'>Card</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card pearl-hover-bg p-3"><p className='fw-md pearl-main'>Hover</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card pearl-gray-bg p-3"><p className='fw-md pearl-text'>Gray</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card pearl-notification-bg p-3"><p className='fw-md pearl-text'>Notification</p></div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h2 className="custom-text">Royal</h2>
                    <div className="row justify-center gap-1 mt-2">
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card royal-color-bg p-3"><p className='fw-md royal-text'>Color</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card royal-main-bg p-3"><p className='fw-md royal-text'>Main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card royal-on-main-bg p-3"><p className='fw-md royal-text'>On-main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card royal-text-bg p-3"><p className='fw-md royal-main'>Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card royal-sub-text-bg p-3"><p className='fw-md royal-main'>Sub Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card royal-error-bg p-3"><p className='fw-md royal-text'>Error</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card royal-disabled-bg p-3"><p className='fw-md royal-text'>Disabled</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card royal-active-bg p-3"><p className='fw-md royal-text'>Active</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card royal-card-bg p-3"><p className='fw-md royal-text'>Card</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card royal-hover-bg p-3"><p className='fw-md royal-main'>Hover</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card royal-gray-bg p-3"><p className='fw-md royal-text'>Gray</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card royal-notification-bg p-3"><p className='fw-md royal-text'>Notification</p></div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h2 className="custom-text">Coffee</h2>
                    <div className="row justify-center gap-1 mt-2">
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card coffee-color-bg p-3"><p className='fw-md coffee-text'>Color</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card coffee-main-bg p-3"><p className='fw-md coffee-card'>Main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card coffee-on-main-bg p-3"><p className='fw-md coffee-text'>On-main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card coffee-text-bg p-3"><p className='fw-md coffee-card'>Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card coffee-sub-text-bg p-3"><p className='fw-md coffee-main'>Sub Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card coffee-error-bg p-3"><p className='fw-md coffee-text'>Error</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card coffee-disabled-bg p-3"><p className='fw-md coffee-card'>Disabled</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card coffee-active-bg p-3"><p className='fw-md coffee-text'>Active</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card coffee-card-bg p-3"><p className='fw-md coffee-text'>Card</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card coffee-hover-bg p-3"><p className='fw-md coffee-card'>Hover</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card coffee-gray-bg p-3"><p className='fw-md coffee-text'>Gray</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card coffee-notification-bg p-3"><p className='fw-md coffee-text'>Notification</p></div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h2 className="custom-text">Honey</h2>
                    <div className="row justify-center gap-1 mt-2">
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card honey-color-bg p-3"><p className='fw-md honey-text'>Color</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card honey-main-bg p-3"><p className='fw-md honey-text'>Main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card honey-on-main-bg p-3"><p className='fw-md honey-text'>On-main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card honey-text-bg p-3"><p className='fw-md honey-main'>Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card honey-sub-text-bg p-3"><p className='fw-md honey-main'>Sub Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card honey-error-bg p-3"><p className='fw-md honey-text'>Error</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card honey-disabled-bg p-3"><p className='fw-md honey-gray'>Disabled</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card honey-active-bg p-3"><p className='fw-md honey-text'>Active</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card honey-card-bg p-3"><p className='fw-md honey-text'>Card</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card honey-hover-bg p-3"><p className='fw-md honey-text'>Hover</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card honey-gray-bg p-3"><p className='fw-md honey-text'>Gray</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card honey-notification-bg p-3"><p className='fw-md honey-text'>Notification</p></div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h2 className="custom-text">Dracula</h2>
                    <div className="row justify-center gap-1 mt-2">
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card dracula-color-bg p-3"><p className='fw-md dracula-text'>Color</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card dracula-main-bg p-3"><p className='fw-md dracula-text'>Main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card dracula-on-main-bg p-3"><p className='fw-md dracula-text'>On-main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card dracula-text-bg p-3"><p className='fw-md dracula-main'>Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card dracula-sub-text-bg p-3"><p className='fw-md dracula-main'>Sub Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card dracula-error-bg p-3"><p className='fw-md dracula-text'>Error</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card dracula-disabled-bg p-3"><p className='fw-md dracula-text'>Disabled</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card dracula-active-bg p-3"><p className='fw-md dracula-main'>Active</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card dracula-card-bg p-3"><p className='fw-md dracula-text'>Card</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card dracula-hover-bg p-3"><p className='fw-md dracula-text'>Hover</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card dracula-gray-bg p-3"><p className='fw-md dracula-main'>Gray</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card dracula-notification-bg p-3"><p className='fw-md dracula-text'>Notification</p></div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h2 className="custom-text">Spring</h2>
                    <div className="row justify-center gap-1 mt-2">
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card spring-color-bg p-3"><p className='fw-md spring-text'>Color</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card spring-main-bg p-3"><p className='fw-md spring-text'>Main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card spring-on-main-bg p-3"><p className='fw-md spring-text'>On-main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card spring-text-bg p-3"><p className='fw-md spring-main'>Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card spring-sub-text-bg p-3"><p className='fw-md spring-main'>Sub Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card spring-error-bg p-3"><p className='fw-md spring-text'>Error</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card spring-disabled-bg p-3"><p className='fw-md spring-text'>Disabled</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card spring-active-bg p-3"><p className='fw-md spring-text'>Active</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card spring-card-bg p-3"><p className='fw-md spring-main'>Card</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card spring-hover-bg p-3"><p className='fw-md spring-text'>Hover</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card spring-gray-bg p-3"><p className='fw-md spring-main'>Gray</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card spring-notification-bg p-3"><p className='fw-md spring-text'>Notification</p></div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-4">
                    <h2 className="custom-text">Thanos</h2>
                    <div className="row justify-center gap-1 mt-2">
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card thanos-color-bg p-3"><p className='fw-md thanos-text'>Color</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card thanos-main-bg p-3"><p className='fw-md thanos-text'>Main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card thanos-on-main-bg p-3"><p className='fw-md thanos-text'>On-main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card thanos-text-bg p-3"><p className='fw-md thanos-main'>Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card thanos-sub-text-bg p-3"><p className='fw-md thanos-main'>Sub Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card thanos-error-bg p-3"><p className='fw-md thanos-text'>Error</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card thanos-disabled-bg p-3"><p className='fw-md thanos-text'>Disabled</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card thanos-active-bg p-3"><p className='fw-md thanos-text'>Active</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card thanos-card-bg p-3"><p className='fw-md thanos-text'>Card</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card thanos-hover-bg p-3"><p className='fw-md thanos-text'>Hover</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card thanos-gray-bg p-3"><p className='fw-md thanos-text'>Gray</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card thanos-notification-bg p-3"><p className='fw-md thanos-text'>Notification</p></div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h2 className="custom-text">Lemon</h2>
                    <div className="row justify-center gap-1 mt-2">
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card lemon-color-bg p-3"><p className='fw-md lemon-main'>Color</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card lemon-main-bg p-3"><p className='fw-md lemon-text'>Main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card lemon-on-main-bg p-3"><p className='fw-md lemon-main'>On-main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card lemon-text-bg p-3"><p className='fw-md lemon-main'>Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card lemon-sub-text-bg p-3"><p className='fw-md lemon-main'>Sub Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card lemon-error-bg p-3"><p className='fw-md lemon-text'>Error</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card lemon-disabled-bg p-3"><p className='fw-md lemon-text'>Disabled</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card lemon-active-bg p-3"><p className='fw-md lemon-text'>Active</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card lemon-card-bg p-3"><p className='fw-md lemon-text'>Card</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card lemon-hover-bg p-3"><p className='fw-md lemon-text'>Hover</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card lemon-gray-bg p-3"><p className='fw-md lemon-text'>Gray</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card lemon-notification-bg p-3"><p className='fw-md lemon-main'>Notification</p></div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h2 className="custom-text">Ruby</h2>
                    <div className="row justify-center gap-1 mt-2">
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card ruby-color-bg p-3"><p className='fw-md ruby-text'>Color</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card ruby-main-bg p-3"><p className='fw-md ruby-text'>Main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card ruby-on-main-bg p-3"><p className='fw-md ruby-text'>On-main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card ruby-text-bg p-3"><p className='fw-md ruby-main'>Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card ruby-sub-text-bg p-3"><p className='fw-md ruby-main'>Sub Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card ruby-error-bg p-3"><p className='fw-md ruby-text'>Error</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card ruby-disabled-bg p-3"><p className='fw-md ruby-text'>Disabled</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card ruby-active-bg p-3"><p className='fw-md ruby-text'>Active</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card ruby-card-bg p-3"><p className='fw-md ruby-main'>Card</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card ruby-hover-bg p-3"><p className='fw-md ruby-text'>Hover</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card ruby-gray-bg p-3"><p className='fw-md ruby-main'>Gray</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card ruby-notification-bg p-3"><p className='fw-md ruby-text'>Notification</p></div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h2 className="custom-text">Usage</h2>
                    <p className='custom-sub-text pt-1'>To access the colors, use the name of the palette first, then add the property name. For example,</p>
                    <pre>
                        <code className="language-html font-f-code">
{
`<p class='emerald-text'>The Emerald Palette's text property.</p>`
}
                        </code>
                    </pre>
                    <p className='custom-sub-text pt-1'>To assign the color to the background, add BG at last.</p>
                    <pre>
                        <code className="language-html font-f-code">
{
`<div class="card emerald-card-bg"></div>`
}
                        </code>
                    </pre>
                </div>

                <div className="mt-4">
                    <h2 className="custom-text">Customization</h2>
                    <p className='custom-sub-text pt-1'>Check <Link href="/customization" passHref><span className='custom-color pointer'>customization</span></Link> to create a custom palette. {`Here's`} our custom palette.</p>
                    <div className="row justify-center gap-1 mt-2">
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card custom-color-bg p-3"><p className='fw-md custom-text'>Color</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card custom-main-bg p-3"><p className='fw-md custom-text'>Main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card custom-on-main-bg p-3"><p className='fw-md custom-main'>On-main</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card custom-text-bg p-3"><p className='fw-md custom-main'>Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card custom-sub-text-bg p-3"><p className='fw-md custom-main'>Sub Text</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card custom-error-bg p-3"><p className='fw-md custom-text'>Error</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card custom-disabled-bg p-3"><p className='fw-md custom-main'>Disabled</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card custom-active-bg p-3"><p className='fw-md custom-text'>Active</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card custom-card-bg p-3"><p className='fw-md custom-main'>Card</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card custom-hover-bg p-3"><p className='fw-md custom-main'>Hover</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card custom-gray-bg p-3"><p className='fw-md custom-text'>Gray</p></div>
                        </div>
                        <div className="col-2-md col-6-sm col-12-xs">
                            <div className="card custom-notification-bg p-3"><p className='fw-md custom-text'>Notification</p></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
 
export default Themes;