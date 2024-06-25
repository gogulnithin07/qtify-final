import { RiArrowLeftSLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { qtifyContext } from "../../components/Context/Context";
import { RiArrowRightSLine } from "react-icons/ri";
function Other(){
    const navigate = useNavigate();
const {selectedAlbum,setSelectedAlbum,filteredSong,setFilteredSong,text,setText}=useContext(qtifyContext)
const [songsArr,setSongsArr]=useState([...selectedAlbum.songs])
const [tableVal,setTableVal]=useState(10);
const [active,setActive]=useState(0);
let time=selectedAlbum.songs.reduce((acc,val)=>acc+val.durationInMs,0);
let formatedTime="";
function handleClick(e){
    navigate('/'); 
}
useEffect(()=>{
    setFilteredSong([])
    setText("")
},[selectedAlbum])

function convertMillisecondsToMinutesAndSeconds(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    // Ensure seconds are two digits
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}min ${formattedSeconds}sec`;
}
formatedTime= convertMillisecondsToMinutesAndSeconds(time)
for(let i=0;i<selectedAlbum?.songs.length;i++){
time=time+selectedAlbum?.songs[i].durationInMs;
}
    return <div className="bg-[#121212] w-[100%] h-[auto] flex flex-col justify-center items-center">
        <button
        onClick={(e)=>handleClick(e)}
        className="self-start ml-10 mt-10 cursor-pointer flex text-white text-center justify-center items-center w-[40px] h-[40px] rounded-[50%] bg-green-500">
        <RiArrowLeftSLine style={{width:"100%",height:"100%",fontSize:"30px"}}/>
        </button>
      <div className="gap-4 py-10 flex flex-col md:flex-row justify-between items-center w-[90%] md:min-h-[329px]">
        <img
        className="w-[60%] md:max-w-[288px] h-[329px] rounded-[10px]"
        src={selectedAlbum?.image}  alt="selctedAlbum"/>
        <div className=" w-[95%] justify-center items-center gap-8 md:w-[60%] text-white flex flex-col md:justify-around md:gap-2">
            <h3
            className="text-[40px] w-[100%] font-semibold text-left"
            >Best of{selectedAlbum?.title}in 2024</h3>
            <h5 className="w-[80%] text-[30px] ">{selectedAlbum?.description}</h5>
            <ul className="flex justify-between items-center w-[80%]">
                <li>{selectedAlbum?.songs.length} Songs</li>
                <li>{formatedTime}</li>
                <li>{selectedAlbum?.follows} Followers</li>
            </ul>
            <div className="w-[80%] flex justify-between gap-4">
                <button
                className="
                hover:bg-white
                hover:text-green-500
                hover:border-white
                w-[131px] h-[46px] rounded-xl text-white bg-green-500"
                >Shuffle</button>
                <button
                className="
                  hover:bg-white
                hover:text-green-500
                hover:border-white
                w-[207px] h-[47px] rounded-xl text-green-500 bg-[#121212]
                border-green-500 border-[1px]
                "
                >P Add to library</button>

            </div>
        </div>
      </div>
      {/* pagination */}
      <ul className="my-10 rounded-xl gap-1 px-2
       min-w-[320px] h-[60px] bg-green-500 flex justify-around items-center">
      <button
        onClick={(e)=>{
            if(tableVal===10) 
                {
                    setActive((c)=>0)
                return;

                }
            else{
                setActive((c)=>c-1)

                setTableVal((c)=>c-10);
            }
        }}
        className="
        hover:text-green-500 hover:border-green-500 
        hover:bg-black
        cursor-pointer flex text-black border-black border-[1px]  justify-center items-center w-[40px] h-[40px] rounded-[50%] bg-green-500">
        <RiArrowLeftSLine style={{width:"100%",height:"100%",fontSize:"30px"}}/>
        </button>
      {Array.from({ length: Math.ceil(songsArr.length/10) }, (_, index) => index + 1).map((val,i)=>{
        return <li
        key={crypto.randomUUID()}
        onClick={(e)=>{
            if(i===0){
                setTableVal(10)
                setActive((c)=>e.target.innerText-1);
            }else{
                setTableVal((i+1)*10)
                setActive((c)=>e.target.innerText-1);
            }
        }}
        className={`${active==i ?"bg-slate-950 text-white":null}
          hover:text-green-500 hover:border-green-500 
        hover:bg-black
        cursor-pointer
        w-[40px] text-center h-[40px] flex justify-center items-center border-black border-[1px]
        text-black bg-green-500 rounded-[50%]
        `}>{val}</li>
      })}
      <button
        onClick={(e)=>
            {setTableVal((c)=>{
                    if(songsArr.length>=tableVal){
                        return c+10;
                    }else{
                        return c;
                    }
        })
        if(songsArr.length.toString()[0]>active){
            setActive((c)=>Number(tableVal.toString()[0]));
        }
            }
    }
        className={`
           hover:text-green-500 hover:border-green-500 
        hover:bg-black
        cursor-pointer flex text-black border-black border-[1px]  justify-center items-center w-[40px] h-[40px] rounded-[50%] bg-green-500`}>
        <RiArrowRightSLine style={{width:"100%",height:"100%",fontSize:"30px"}}/>
        </button>
      </ul>
      <div className="md:w-[90%] flex justify-center mb-20">
        {/*  */}
      <table className="w-[90%] md:w-[100%] bg-black border-[1px] border-black">
            <thead className="text-white bg-green-500 border-[1px] border-black">
                <tr className="border-[1px] border-black">
                    <th className="w-[25%] py-2 px-4 border-b border-[1px] border-black">Title</th>
                    <th className="w-[50%] py-2 px-4 border-b border-[1px] border-black">Artists</th>
                    <th className="w-[25%] py-2 px-4 border-b border-[1px] border-black">Duration</th>
                </tr>
            </thead>
            <tbody className="text-white border-[1px] border-black">
                {songsArr.slice(tableVal-10,tableVal).map((song, index) => (
                    <tr
                    className="cursor-pointer hover:bg-green-500 h-[64px]"
                    key={index}>
                        <td className="w-[25%] py-2 px-4 border-b border-[1px] border-black">
                            {song.title}</td>
                        <td className="w-[50%] py-2 px-4 border-b border-[1px] border-black">{song.artists}</td>
                        <td className="w-[25%] py-2 px-4 border-b border-[1px] border-black">{convertMillisecondsToMinutesAndSeconds(song.durationInMs)}</td>
                    </tr>
                ))}
            </tbody>
        </table>

      </div>
    </div>
}
export default Other;

