// components
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// nprogress
import { Router, router, useRouter } from "next/dist/client/router";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => { NProgress.start(); });
Router.events.on("routeChangeComplete", () => { NProgress.done(); });
Router.events.on("routeChangeError", () => { NProgress.done(); });

const Layout = ({ children }) => {

    const router = useRouter();
    
    return (
      <>

        <Navbar />
        <div className="row">
            <div className="col-2-xs h-screen overflow-y-scroll">
              <Sidebar />
            </div>
            <div className="col-10-xs h-screen overflow-y-scroll">
              {children}
            </div>
        </div>

      </>
    );
}
 
export default Layout;