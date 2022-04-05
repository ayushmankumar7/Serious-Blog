import NavBar from "../../components/NavBar";
import BlogCard from "../../components/BlogCard";

export default function Blogs(props){

    return (
        <div>
            <NavBar />
            <div className="container flex-1 mx-auto  max-w-xl">
                <span className="text-white text-5xl font-bold">Blogs</span>
                <br/> <br/>
                <span className="text-white text-xl">Hello Viewers! Welcome to my Library! I am the only Author whoes books you're gonna find here. Explore the most unique blogs here. I hope you like it! Enjoy!</span>
                <br/> <br/>
                <div class="flex justify-center">
                    <div class="mb-3 ">
                        <div class="input-group relative flex   w-full mb-4">
                        <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3" />
                        <button class="btn inline-block px-6 py-2  text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                        </div>
                    </div>
                </div>

                <BlogCard 
                    image="https://cdn.pixabay.com/photo/2022/03/25/17/54/sakura-7091532_960_720.jpg" 
                    link=""
                />      
                <BlogCard 
                    image="https://cdn.pixabay.com/photo/2022/03/25/17/54/sakura-7091532_960_720.jpg" 
                    link=""
                />  


            </div>
        </div>
    )
}