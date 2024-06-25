import { useState } from "react"
import icon from "../../images/icon.png"
import { Dialog } from '@headlessui/react'
import { IoClose } from "react-icons/io5";
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";
import { qtifyContext } from "../../components/Context/Context";
import { useContext } from "react";
function Navabar(){
    const [showModal,setShowModal]=useState(false)
    const {
      filteredSong,setFilteredSong,data1,data2,selectedAlbum,setSelectedAlbum,text,setText}=useContext(qtifyContext)
    const total=[...data1,...data2]
function filterAlbum(e){
  if(e.target.value=="") return setFilteredSong((c)=>[]);
  const a=total.filter((val)=>{
   return val.title.toLowerCase().includes(e.target.value)
  });
  setFilteredSong((c)=>[...a])
}
    return <div className="
    relative
    h-[auto] py-5 
    flex-row flex-wrap justify-around items-center gap-3
        md:w-[100vw] md:min-h-[74px] bg-green-500 flex
        md:flex-row md:justify-between md:items-center">
        <img className="
        order-1 inline-block ml-4" src={icon} alt="icon"/>
        <div className="
        order-last
        md:order-2
        w-[90%]
        relative md:w-[40%] h-[48px]">
            <input
            value={text}
            onChange={(e)=>{
              setText(e.target.value)
              filterAlbum(e)
            }}
            className=" w-[100%] h-[48px] rounded-lg border-s border-solid border-[#121212]
            placeholder:text-[16px] font-medium "
            type="text" placeholder="Search a album of your choice"/>
            <button
            className=" absolute right-1 top-0 h-[100%] text-center w-[40px] border-l-2"
            >🔍</button>
        </div>
        <div>
       {filteredSong.length>0 &&
        <div className="w-[60vw] h-[auto] text-white z-10 absolute
        top-[99%] left-[20%]
        border-[2px] border-green-500">
          <ul className="w-[100%] h-[auto]">
            {filteredSong.map((val)=>{
             return <Link to="/other">
             <li
             onClick={(e)=>setSelectedAlbum((c)=>val)}
             className="
             border-[1px] border-green-500
             gap-1
             pl-3 pr-3 bg-black flex justify-between  items-center h-[80px]
             ">
                <div className="">
                  <img
                  className=" h-[70px] w-[60px] rounded-md object-cover"
                  src={val.image} alt="" />
                </div>
                <div>
                  <p>{val.title}</p>
                </div>
                <p>
                {val.follows} follows
                </p>
              </li>
              </Link>

            })}
          </ul>
        </div>
       }
        </div>
        <button
        onClick={(e)=>setShowModal((c)=>true)}
        className="
        sm:order-2 order-3 mr-8 flex justify-center items-center text-green-400 rounded-xl  w-[170px] h-[47px] px-[10px] py-4  border-sm  border-green-400  bg-[#121212]
                            font-semibold text-base  text-center       
        ">Give Feedback</button>
        <MyDialog showModal={showModal} setShowModal={setShowModal}/>
    </div>
}

function MyDialog({showModal,setShowModal}) {
  function hanldeSubmit(e){
e.preventDefault();
if(e.target.name.value && e.target.email.value && e.target.subject.value && e.target.description.value){
    console.log("success")
    setShowModal((c)=>false)
    toast.success('Feedback Submitted!')
}
else{
    console.log("false")
    toast.error("Please fill in all required fields.")
}
  }
    return (
      <Dialog
        open={showModal}
        onClose={() => setShowModal(false)}
        className="relative z-50"
      >
        <div className=" fixed inset-0 bg-black/30" aria-hidden="true" />

{/* Full-screen container to center the panel */}
<div className=" fixed inset-0 flex w-screen items-center justify-center p-4">
  {/* The actual dialog panel  */}
  <Dialog.Panel className="  rounded bg-white">
    <div className="md:min-w-[50vw] sm:min-w-[80vw] h-[auto] bg-white border-[1px] border-white py-7 rounded-md overflow-hidden">
<form
    onSubmit={(e)=>hanldeSubmit(e)}

className="flex flex-col justify-between gap-4 items-center"
>
    <h2 className="flex w-[90%] justify-between items-center font-bold text-[40px] text-green-500" >Feedback  <span
    className="cursor-pointer"
    onClick={(e)=>setShowModal(false)}
    ><IoClose /></span> </h2>

    <input type="text" placeholder="Full name"

    name="name"
    className="min-h-[30px] w-[80%] placeholder:text-gray-500 border-[1px] border-green-500 rounded-sm"
    />
    
    <input type="email" placeholder="Email ID"
    name="email"
    className="min-h-[30px] w-[80%] placeholder:text-gray-500 border-[1px] border-green-500 rounded-sm"
    />
    
    <input type="text" placeholder="Subject"
    name="subject"
    className="min-h-[30px] w-[80%] placeholder:text-gray-500 border-[1px] border-green-500 rounded-sm"
    />
    <textarea 
    name="description"
    placeholder="Description"
    className="min-h-[30px] w-[80%] placeholder:text-gray-500 border-[1px] border-green-500 rounded-sm"
    rows="4" cols="50"></textarea>
    <button
    type="submit"
     className=" mr-4 flex justify-center items-center text-green-400 rounded-xl  w-[170px] h-[47px] px-[10px] py-4  border-sm  border-green-400  bg-[#121212]
                            font-semibold text-base  text-center" 
    >Submit Feedback</button>
</form>
</div>
  </Dialog.Panel>
</div>
      </Dialog>
    )
  }

function dropDown(data){
return<div></div>
}


export {Navabar}
export default Navabar