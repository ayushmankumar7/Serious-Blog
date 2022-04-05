import { useRouter } from 'next/router'
import Image from 'next/image';

import NavBar from "../../components/NavBar";
import { blogs }  from "../../blogs/00001";

export const getStaticProps = async( { params } ) => {

    const blog = blogs.filter(b => b.id.toString() === params.id)
    return {
        props: {
            bloglist: blog[0],
        },
    }
}

export const getStaticPaths = async () => {
    const paths = blogs.map(b => ({
        params: {
            id: b.id.toString()
        }
    }))
    return {
        paths,
        fallback: false
    }
}


const myLoader = ({ src, width, height }) => {
    return `${src}`
}

const Post = ({ bloglist }) => {
    const router = useRouter()
    const { id } = router.query
    return(
        <div>
            <NavBar />
            <div className="container flex-1 mx-auto  max-w-xl">
                <span className="text-white text-5xl font-bold">{bloglist.title}</span>
                <br/> <br/>

                <span className="text-white text-xl">{bloglist.subtext}</span>
                <br/> <br/>                
                <Image
                    loader = { myLoader }
                    src = {bloglist.images[0]}
                    objectFit = "cover"
                    width={2250}
                    height={600}
                    layout="responsive"
                    priority
                />
            
            </div>
        </div>
    )
}

export default Post