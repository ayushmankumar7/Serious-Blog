import Link from "next/link";
import Modal from "./Modal";

export default function NavBar(){
    return(
        <div className="sticky top-0 z-50 bg-white rounded-lg m-2">
            <nav className="flex justify-between items-center px-2 py-4">
                <div className="left-side">
                    Serious Blog
                </div>
                {/* <div className="right-side">
                    Disclaimer
                </div> */}
                <div className="">
                    <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                        <Modal />
                    </button>
            
                </div>
            </nav>
    </div>
    )
}