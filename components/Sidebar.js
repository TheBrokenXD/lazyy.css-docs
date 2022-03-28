import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {

    const router = useRouter();

    return (
        <>
            <div className="mt-4 pl-2 pr-2 pt-4 pb-4">

                <h3 className="fw-bold custom-text">Getting Started</h3>
                <ul className="mt-2">
                    <li className="pl-2"><Link href="/installation" passHref><p className={router.pathname == "/installation" ? "fw-md custom-color pointer" : "fw-md custom-sub-text pointer"}>Installation</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/optimization" passHref><p className={router.pathname == "/optimization" ? "fw-md custom-color pointer" : "fw-md custom-sub-text pointer"}>Optimization</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/fundamentals" passHref><p className={router.pathname == "/fundamentals" ? "fw-md custom-color pointer" : "fw-md custom-sub-text pointer"}>Fundamentals</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/contribute" passHref><p className={router.pathname == "/contribute" ? "fw-md custom-color pointer" : "fw-md custom-sub-text pointer"}>Contribute</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Customization</h3>
                <ul className="mt-2">
                    <li className="pl-2"><Link href="/responsiveness" passHref><p className={router.pathname == "/responsiveness" ? "fw-md custom-color pointer" : "fw-md custom-sub-text pointer"}>Responsiveness</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/configuration" passHref><p className={router.pathname == "/configuration" ? "fw-md custom-color pointer" : "fw-md custom-sub-text pointer"}>Configuration</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/theme" passHref><p className={router.pathname == "/theme" ? "fw-md custom-color pointer" : "fw-md custom-sub-text pointer"}>Theme</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="/colors" passHref><p className={router.pathname == "/colors" ? "fw-md custom-color pointer" : "fw-md custom-sub-text pointer"}>Colors</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Layout</h3>
                <ul className="mt-2">
                    <li className="pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Box Sizing</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Container</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Display</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Floats</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Overflow</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Position</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Z-Index</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Flexbox & Grid</h3>
                <ul className="mt-2">
                    <li className="pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Flex Direction</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Flex Wrap</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Flex Grow</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Flex Shrink</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Gap</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Justify Content</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Justify Items</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Justify Self</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Align Content</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Align Items</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Align Self</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Spacing & Sizing</h3>
                <ul className="mt-2">
                    <li className="pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Padding</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Margin</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Width</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Min-Width</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Max-Width</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Height</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Min-Height</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Max-Height</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Components</h3>
                <ul className="mt-2">
                    <li className="pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Avatar</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Buttons</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Cards</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Forms</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">List</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Modals</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Navbar</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Tables</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Toasts</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Typography</h3>
                <ul className="mt-2">
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Font Family</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Font Size</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Font Style</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Font Weight</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Letter Spacing</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Line Height</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Text Align</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Text Color</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Text Decoration</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Text Transform</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Borders</h3>
                <ul className="mt-2">
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Border Right</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Border Width</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Border Style</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Effects</h3>
                <ul className="mt-2">
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Box Shadow</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Opacity</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Interaction</h3>
                <ul className="mt-2">
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Cursor</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#" passHref><p className="fw-md custom-sub-text pointer">Scroll Behaviour</p></Link></li>
                </ul>

            </div>
        </>
    );
}
 
export default Sidebar;