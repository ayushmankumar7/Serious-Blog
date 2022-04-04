import Head from "next/head";
import BlogCard from "../components/BlogCard";
import ImageCard from "../components/ImageCard";
import NavBar from "../components/NavBar";
import rocket from '../public/rocket.webp'
import elephants from '../public/elephants.webp'
import Message from "../components/Message";
import Title from "../components/Title";

export default function Home(){
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
        <BlogCard image="https://cdn.pixabay.com/photo/2022/03/25/17/54/sakura-7091532_960_720.jpg" />      


      </div>
    </div>
  )
}