import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            {/* navbar */}
           <Navbar></Navbar>


           <Outlet></Outlet>

           
            {/* footer */}
           <Footer></Footer>
        </div>
    );
};

export default Root;