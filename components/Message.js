export default function Message(props){
    return (
        <div className="text-center py-10 m-2 rounded-lg bg-red-500">
            <span className="font-bold text-xl text-white">{props.text}</span>
        </div>
    )
}