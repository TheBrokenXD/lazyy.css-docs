import Head from 'next/head'
// components
import Avatars from '../components/lazy-components/Avatars';
import Buttons from '../components/lazy-components/Buttons';
import Cards from '../components/lazy-components/Cards';
import Forms from '../components/lazy-components/Forms';
import Modals from '../components/lazy-components/Modals';
import Tables from '../components/lazy-components/Tables';
import Toasts from '../components/lazy-components/Toasts';

const components = () => {
    return (
        <>
            <Head>
                <title>Components - Lazyy CSS</title>
            </Head>

            <div className="mt-4 p-4">
                <h1 className="custom-text">Components</h1>
                <p className='fw-md custom-sub-text mt-1'>Make your UI on the go using ready-made components.</p>

                <div id='avatars' className='mt-4'>
                    <h2 className="custom-text">Avatars</h2>
                    <div><Avatars /></div>
                </div>

                <div id='buttons' className='mt-4'>
                    <h2 className="custom-text">Buttons</h2>
                    <div className='mt-2'><Buttons /></div>
                </div>

                <div id='cards' className='mt-4'>
                    <h2 className="custom-text">Cards</h2>
                    <div className='mt-2'><Cards /></div>
                </div>

                <div id='forms' className='mt-3'>
                    <h2 className="custom-text">Forms</h2>
                    <div className='mt-2'><Forms /></div>
                </div>

                <div id='modals' className='mt-3'>
                    <h2 className="custom-text">Modals</h2>
                    <div className='mt-2'><Modals /></div>
                </div>
                
                <div id='tables' className='mt-3'>
                    <h2 className="custom-text">Tables</h2>
                    <div className='mt-2 p-3'><Tables /></div>
                </div>
                
                <div id='toasts' className='mt-3'>
                    <h2 className="custom-text">Toasts</h2>
                    <div className='mt-2 p-3'><Toasts /></div>
                </div>
                
            </div>
        </>
    );
}
 
export default components;