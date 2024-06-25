import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { qtifyContext } from "../Context/Context";
function Card({data,song}){
    const {selectedAlbum,setSelectedAlbum}=useContext(qtifyContext)
if(!song){
    return <div
    onClick={(e)=>setSelectedAlbum((c)=>data)}
    key={crypto.randomUUID()}
    className="w-[159px] h-[244px] cursor-pointer ">
        <Link to="/other">
                <div className="w-[159px] h-[205px] rounded-[10px] overflow-hidden">
        <img
        className="w-[159px] h-[170px]  object-cover object-center obj"
        src={data.image} alt=""/>
        <div className=" flex items-center justify-start h-[32px] w-[100%] bg-white rounded-b-[10px]">
            <span className="inline-block ml-2 h-[23px] py-[4px] px-[8px] rounded-[10px] bg-[#121212] 
            text-[10px] font-normal text-white
            ">{song?data.likes:data.follows+"  Followers"}</span>
        </div>
        </div>
        <h5 className="rounded-[10px] w-[auto] h-[auto] text-sm text-center text-white">{data.title}</h5>
        </Link>
    </div>
}
else{
    return <div 
    key={crypto.randomUUID()}
    className="w-[159px] h-[244px] cursor-pointer ">
        <div className="w-[159px] h-[205px] rounded-[10px] overflow-hidden">
        <img
        className="w-[159px] h-[170px]  object-cover object-center obj"
        src={data.image} alt=""/>
        <div className=" flex items-center justify-start h-[32px] w-[100%] bg-white rounded-b-[10px]">
            <span className="inline-block ml-2 h-[23px] py-[4px] px-[8px] rounded-[10px] bg-[#121212] 
            text-[10px] font-normal text-white
            ">{song?data.likes:data.follows+"  Followers"}</span>
        </div>
        </div>
        <h5 className="rounded-[10px] w-[auto] h-[auto] text-sm text-center text-white">{data.title}</h5>
    </div>
}
}
export {Card};
export default Card;

