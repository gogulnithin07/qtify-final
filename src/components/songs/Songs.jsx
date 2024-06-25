import { useState ,useEffect} from "react"
import axios from "axios"
import Cardbody from "../cardbody/Cardbody";
function Songs(){
    const [type,setType]=useState("all");
    const [selectedSong,setSong]=useState([])
    const [songData,setSongData]=useState([]);
    const [filteredData,setFilteredData]=useState([]);
useEffect(()=>{
    function getData(){
let req=axios.get("https://qtify-backend-labs.crio.do/genres");
let res=req.then(res=>{
    setSong(()=>[{key:"all"},...res.data.data]);
});
    }
    getData()
},[])
useEffect(()=>{
    function getData(){
let req=axios.get("https://qtify-backend-labs.crio.do/songs");
let res=req.then(res=>{
    setSongData((c)=>res.data);
    setFilteredData((c)=>res.data)
});
    }
    getData()
},[])
useEffect(()=>{
    if(type==="all"){
        setFilteredData((c)=>[...songData])
        return;
    }
    else{
    function hanldeFilter(){
        const arr=songData.slice().filter((val)=>{
            console.log(val.genre,type)
            if( val.genre.key === type ){
                return val;
            }
        })
        setFilteredData((c)=>[...arr])
    }
    hanldeFilter()
}
},[type])
    return <div className=" w-[100vw] pb-14 min-h-[381px] border-2 border-green-400 bg-[#121212]">
        <h3 className="pt-5 pl-[40px] w-[63px] h-[30px] text-xl text-white text-[48px] ">Songs</h3>
    <ul className="pl-[100px] mt-14 flex justify-betwee gap-4 items-center w-[334px] h-[34px] ">
{selectedSong.map((val)=>{
    return <li key={crypto.randomUUID()}>
        <button 
        onClick={(e)=>{
            setType((c)=>val.key)
        }}
        className={`mb-2 w-[40px] h-[24px] font-semibold text-base ${type===val.key ?'text-green-500' : 'text-white'}`}
        >{val.key.toUpperCase()}</button>
        {val.key === type?<div className=" w-[42px] h-[2px] bg-green-500"></div>:<div></div>}
    </li>
})}
    </ul>
    <div>
        <Cardbody data={filteredData} song={true}/>
        {/* {songData.length?songData.map((val)=>{
            console.log(val)
            // const data={
            //     image:val.image,
            //     title:val.title,
            //     follows:val.likes,
            // }
return <Cardbody data={data}/>
        }):""} */}
    </div>
    </div>
}
export {Songs}