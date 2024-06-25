import  Navabar  from "./components/navbar/Navbar"
import Footer from "./components/Footer/Footer";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast'
import { Outlet } from "react-router-dom";
import {qtifyContext} from "./components/Context/Context"
import { useState,useEffect } from "react";
 function Layout() {
  const [selectedAlbum,setSelectedAlbum]=useState(null)
  const [data1,setData1]=useState([]);
  const [data2,setData2]=useState([]);
  const [text,setText]=useState("")
  const [filteredSong,setFilteredSong]=useState([]);

 const value={
  selectedAlbum,
  setSelectedAlbum,
  data1,
  setData1,
  data2,
  setData2,
  text,setText,
  filteredSong,setFilteredSong
 }
 useEffect(() => {
  const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
          // Handle Escape key press here
          setText("")
          setFilteredSong([]);
          console.log('Escape key pressed!');
      }
  };

  document.addEventListener('keydown', handleKeyDown);

  return () => {
      document.removeEventListener('keydown', handleKeyDown);
  };
}, []);
 useEffect(()=>{
  function getData(){
      const req= axios.get("https://qtify-backend-labs.crio.do/albums/top")
       const res=req.then(res=>{
           setData1(()=>res.data)
       });
      }
      getData()

},[]) 
  
useEffect(()=>{
function getData(){
    const req= axios.get("https://qtify-backend-labs.crio.do/albums/new")
     const res=req.then(res=>{
         setData2(()=>res.data)
     });
    }
    getData()
},[])
  return (
    <div>
      <Toaster
      position="top-right"
      reverseOrder={false}
      />
      <qtifyContext.Provider value={value}>
      <Navabar/>
      <Outlet/>
      </qtifyContext.Provider>
      {/* <Hero/>
      <Cardbody data={data1} text="Top Albums"/>
      <Cardbody data={data2} text="New Albums"/>
<Songs/>
<Faq/> */}
<Footer/>
      </div>
  )
}
export default Layout;