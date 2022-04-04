import Image from "next/image";


export default function ImageCard(props){

    return (
        <div className="relative py-2 overflow-hidden m-2">

          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <Image 
              src={props.image}
              objectFit="cover"
              alt="Rocket Blogger"
              priority  
            />
          </div>

          <div className="absolute mx-auto max-w-xl px-4 py-5 bottom-0 text-white">
            <h4 className=" text-3xl font-semibold tracking-tight">{props.title}</h4>
            <p className="leading-normal">{props.sub}</p>
          </div>

        </div>
    )
}