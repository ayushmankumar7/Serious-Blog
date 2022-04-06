import NavBar from "../../components/NavBar";
import BlogCard from "../../components/BlogCard";
import { blogs } from "../../blogs/00001";
import Footer from "../../components/Footer";

export const getStaticProps = async() => {
    return {
        props: {
            bloglist: blogs
        },
    }
}



export default function Blogs({ bloglist }){

    return (
        <div>
            <NavBar />
            <div className="container flex-1 mx-auto  max-w-xl">
                <span className="text-white text-5xl font-bold">Blogs</span>
                <br/> <br/>
                <span className="text-white text-xl">Hello Viewers! Welcome to my Library! I am the only Author whoes books you are gonna find here. Explore the most unique blogs here. I hope you like it! Enjoy!</span>
                <br/> <br/>
                <div className="flex justify-center">
                    <div className="mb-3 ">
                        <div className="input-group relative flex   w-full mb-4">
                        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3" />
                        <button className="btn inline-block px-6 py-2  text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                        </div>
                    </div>
                </div>

                {
                    bloglist.map(blog => (
                        <BlogCard 
                            key={blog.id}
                            title={blog.title} 
                            subtext = {blog.subtext} 
                            image={blog.images[0]} 
                            link = {"blogs/" + blog.id.toString()}/>
                    ))

                }

            </div>
            <Footer />
        </div>
    )
}