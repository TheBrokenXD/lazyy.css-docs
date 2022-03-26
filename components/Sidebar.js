import Link from "next/link";

const Sidebar = () => {
    return (
        <>
            <div className="p-3">

                <h3 className="fw-bold custom-text">Getting Started</h3>
                <ul className="mt-2">
                    <li className="pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Installation</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Optimization</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Fundamentals</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Contribute</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Customization</h3>
                <ul className="mt-2">
                    <li className="pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Adding Custom Styles</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Configuration</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Variables</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Theme</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Colors</p></Link></li>
                </ul>

                <h3 className="fw-bold custom-text mt-3">Layout</h3>
                <ul className="mt-2">
                    <li className="pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Box Sizing</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Container</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Display</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Floats</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Overflow</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Position</p></Link></li>
                    <li className="pt-1 pl-2"><Link href="#"><p className="fw-md custom-sub-text pointer">Z-Index</p></Link></li>
                </ul>

            </div>
        </>
    );
}
 
export default Sidebar;