import Head from "next/head";
import BlogCard from "../components/BlogCard";
import ImageCard from "../components/ImageCard";
import NavBar from "../components/NavBar";
import rocket from '../public/rocket.webp'
import elephants from '../public/elephants.webp'
import Message from "../components/Message";
import Title from "../components/Title";
import Link from "next/link";
import { blogs } from "../blogs/00001";
import Footer from "../components/Footer";

export const getStaticProps = async() => {
  return {
      props: {
          bloglist: blogs
      },
  }
}



export default function Home({ bloglist }){
  return (
    <div>
      <Head>
        <title>Serious Blog</title>
        <meta name="description" content="Serious Blog - ayushmankumar7" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <div className="container flex-1 mx-auto  max-w-xl">
        <ImageCard image={rocket} title="Isn't this a nice image?" sub = "This is the nicest thing you are gonna see here" />        

        <div className="grid place-items-center py-5">
          <div className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path fill="white" strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
          </div>
        </div>


        <ImageCard image={elephants} title="Not Anymore" sub="Please Read the Disclaimer before proceeding..." />  
        <Message text="I hope you have read the disclaimer" />
        <Title text="Latest Blogs" />
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

        <Link href="/blogs"><span className="text-white cursor-pointer py-3">View All.. </span></Link>

      </div>
      <br/>
      <Footer />

    </div>
  )
}