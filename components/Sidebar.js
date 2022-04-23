import Link from "next/link";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const Sidebar = () => {

    const router = useRouter();

    const classRef1 = useRef(null);
    const classRef2 = useRef(null);
    const classRef3 = useRef(null);
    const classRef4 = useRef(null);
    const classRef5 = useRef(null);
    const classRef6 = useRef(null);
    const classRef7 = useRef(null);
    
    useEffect(() => {
        const url = router.asPath;
        if( url === '/components#avatars' ) {
            classRef1.current.classList.add('active');
            classRef2.current.classList.remove('active');
            classRef3.current.classList.remove('active');
            classRef4.current.classList.remove('active');
            classRef5.current.classList.remove('active');
            classRef6.current.classList.remove('active');
            classRef7.current.classList.remove('active');
        } else if( url === '/components#buttons' ) {
            classRef1.current.classList.remove('active');
            classRef2.current.classList.add('active');
            classRef3.current.classList.remove('active');
            classRef4.current.classList.remove('active');
            classRef5.current.classList.remove('active');
            classRef6.current.classList.remove('active');
            classRef7.current.classList.remove('active');
        } else if( url === '/components#cards' ) {
            classRef1.current.classList.remove('active');
            classRef2.current.classList.remove('active');
            classRef3.current.classList.add('active');
            classRef4.current.classList.remove('active');
            classRef5.current.classList.remove('active');
            classRef6.current.classList.remove('active');
            classRef7.current.classList.remove('active');
        } else if( url === '/components#forms' ) {
            classRef1.current.classList.remove('active');
            classRef2.current.classList.remove('active');
            classRef3.current.classList.remove('active');
            classRef4.current.classList.add('active');
            classRef5.current.classList.remove('active');
            classRef6.current.classList.remove('active');
            classRef7.current.classList.remove('active');
        } else if( url === '/components#modals' ) {
            classRef1.current.classList.remove('active');
            classRef2.current.classList.remove('active');
            classRef3.current.classList.remove('active');
            classRef4.current.classList.remove('active');
            classRef5.current.classList.add('active');
            classRef6.current.classList.remove('active');
            classRef7.current.classList.remove('active');
        } else if( url === '/components#tables' ) {
            classRef1.current.classList.remove('active');
            classRef2.current.classList.remove('active');
            classRef3.current.classList.remove('active');
            classRef4.current.classList.remove('active');
            classRef5.current.classList.remove('active');
            classRef6.current.classList.add('active');
            classRef7.current.classList.remove('active');
        } else if( url === '/components#toasts' ) {
            classRef1.current.classList.remove('active');
            classRef2.current.classList.remove('active');
            classRef3.current.classList.remove('active');
            classRef4.current.classList.remove('active');
            classRef5.current.classList.remove('active');
            classRef6.current.classList.remove('active');
            classRef7.current.classList.add('active');
        } else {
            classRef1.current.classList.remove('active');
            classRef2.current.classList.remove('active');
            classRef3.current.classList.remove('active');
            classRef4.current.classList.remove('active');
            classRef5.current.classList.remove('active');
            classRef6.current.classList.remove('active');
            classRef7.current.classList.remove('active');
        }
    }, [router]);

    return (
        <>
            <div className="mt-4 pl-2 pr-2 pt-4 pb-4">

                <h3 className="fw-bold custom-text">Getting Started</h3>
                <ul className="mt-2">
                    <li className="pl-2"><Link href="/installation" passHref><p className={router.pathname == "/installation" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Installation</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/optimization" passHref><p className={router.pathname == "/optimization" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Optimization</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/fundamentals" passHref><p className={router.pathname == "/fundamentals" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Fundamentals</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/contribute" passHref><p className={router.pathname == "/contribute" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Contribute</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Fundamentals</h3>
                <ul className="mt-2">
                    <li className="pl-2"><Link href="/responsiveness" passHref><p className={router.pathname == "/responsiveness" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Responsiveness</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/customization" passHref><p className={router.pathname == "/customization" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Customization</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/theme" passHref><p className={router.pathname == "/theme" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Theme</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Layout</h3>
                <ul className="mt-2">
                    <li className="pl-2"><Link href="/box-sizing" passHref><p className={router.pathname == "/box-sizing" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Box Sizing</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/container" passHref><p className={router.pathname == "/container" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Container</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/display" passHref><p className={router.pathname == "/display" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Display</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/floats" passHref><p className={router.pathname == "/floats" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Floats</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/overflow" passHref><p className={router.pathname == "/overflow" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Overflow</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/position" passHref><p className={router.pathname == "/position" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Position</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/z-index" passHref><p className={router.pathname == "/z-index" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Z-Index</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Flexbox & Grid</h3>
                <ul className="mt-2">
                    <li className="pl-2"><Link href="/flex-direction" passHref><p className={router.pathname == "/flex-direction" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Flex Direction</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/flex-wrap" passHref><p className={router.pathname == "/flex-wrap" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Flex Wrap</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/justify-content" passHref><p className={router.pathname == "/justify-content" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Justify Content</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/align-items" passHref><p className={router.pathname == "/align-items" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Align Items</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/grid" passHref><p className={router.pathname == "/grid" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Grid</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Spacing & Sizing</h3>
                <ul className="mt-2">
                    <li className="pl-2"><Link href="/padding" passHref><p className={router.pathname == "/padding" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Padding</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/margin" passHref><p className={router.pathname == "/margin" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Margin</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/width-height" passHref><p className={router.pathname == "/width-height" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Width {`&`} Height</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/min-width" passHref><p className={router.pathname == "/min-width" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Min-Width</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/max-width" passHref><p className={router.pathname == "/max-width" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Max-Width</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Components</h3>
                <ul className="mt-2">
                    <li className="pl-2"><Link href="/components#avatars" passHref><p ref={classRef1} className="fw-md pointer unselectable">Avatar</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/components#buttons" passHref><p ref={classRef2} className="fw-md pointer unselectable">Buttons</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/components#cards" passHref><p ref={classRef3} className="fw-md pointer unselectable">Cards</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/components#forms" passHref><p ref={classRef4} className="fw-md pointer unselectable">Forms</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/components#modals" passHref><p ref={classRef5} className="fw-md pointer unselectable">Modals</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/components#tables" passHref><p ref={classRef6} className="fw-md pointer unselectable">Tables</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/components#toasts" passHref><p ref={classRef7} className="fw-md pointer unselectable">Toasts</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Typography</h3>
                <ul className="mt-2">
                    <li className="pt-1 pl-2"><Link href="/font-family" passHref><p className={router.pathname == "/font-family" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Font Family</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/font-size" passHref><p className={router.pathname == "/font-size" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Font Size</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/font-style" passHref><p className={router.pathname == "/font-style" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Font Style</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/font-weight" passHref><p className={router.pathname == "/font-weight" ? "fw-md custom-color pointer unselectable" : "fw-md custom-sub-text pointer unselectable"}>Font Weight</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer unselectable">Letter Spacing</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer unselectable">Line Height</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer unselectable">Text Align</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer unselectable">Text Color</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer unselectable">Text Decoration</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer unselectable">Text Transform</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Borders</h3>
                <ul className="mt-2">
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer unselectable">Border Right</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer unselectable">Border Width</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer unselectable">Border Style</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Effects</h3>
                <ul className="mt-2">
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer unselectable">Box Shadow</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer unselectable">Opacity</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Interaction</h3>
                <ul className="mt-2">
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer unselectable">Cursor</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer unselectable">Scroll Behaviour</p></Link></li>
                </ul>

            </div>
        </>
    );
}
 
export default Sidebar;