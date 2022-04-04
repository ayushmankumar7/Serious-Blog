export default function BlogCard(props){
    return (
        <div className="py-4 rounded overflow-hidden shadow-lg m-2">
            <img className="w-full object-cover object-top h-32" src={props.image} alt="Sunset in the mountains" />
            <div className="px-6 py-4 bg-gray-800">
                <div className="font-bold text-white text-xl mb-2">The Coldest Sunset</div>
                <p className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 border-inherit">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    )
}