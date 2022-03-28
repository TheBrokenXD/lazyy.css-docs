import React, { useRef } from "react";
import Link from "next/link";
// assets
import Lottie from "lottie-react";
import Data from "../public/data.json";
// framer motion
import { motion } from "framer-motion";

const Navbar = () => {

  const lottieRef = useRef();
  const animationData = useRef();

  const handleClick = () => {

    if(animationData.current.className == "sidebar") {
      animationData.current.className = 'sidebar-toggled';
      lottieRef.current.setDirection(1);
      lottieRef.current.playSegments(1, 21, true);
    } else {
      animationData.current.className = "sidebar";
      lottieRef.current.setDirection(-1);
      lottieRef.current.play();
    }
    
  }

  const closeFunc = () => {
    animationData.current.className = "sidebar";
    lottieRef.current.setDirection(-1);
    lottieRef.current.play();
  }

  return (
    <div className="nav shadow-base">

      <div className="nav-content">
        <Link href="/" passHref><p className="nav-brand unselectable">lazycss</p></Link>
        <div className="display-f align-i-center">
          <div className="nav-burger">
            <div className="lottie" onClick={handleClick}>
              <Lottie lottieRef={lottieRef} animationData={Data} loop={false} autoplay={false} />
            </div>
          </div>
        </div>
      </div>

      <div ref={animationData} className="sidebar">
        <ul>
          <li><Link href="/" passHref><a className="font-xl custom-main" onClick={closeFunc}>Home</a></Link></li>
          <li><Link href="/installation" passHref><a className="font-xl custom-main" onClick={closeFunc}>Installation</a></Link></li>
          <li><Link href="/optimization" passHref><a className="font-xl custom-main" onClick={closeFunc}>Optimization</a></Link></li>
          <li><Link href="/contribute" passHref><a className="font-xl custom-main" onClick={closeFunc}>Contribute</a></Link></li>
        </ul>
      </div>

    </div>
  );

}
 
export default Navbar;