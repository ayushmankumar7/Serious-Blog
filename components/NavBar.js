import Link from "next/link";
import Modal from "./Modal";

export default function NavBar(){
    return(
        <div className="sticky top-0 z-50 rounded-lg m-2">
            <nav className="flex justify-between items-center px-2 py-4">
                <div className="left-side">
                    <span className="text-white font-bold">Serious Blog</span>
                </div>
                {/* <div className="right-side">
                    Disclaimer
                </div> */}
                <div className="">
                        <Modal />
                    
            
                </div>
            </nav>
    </div>
    )
}