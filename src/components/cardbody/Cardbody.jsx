import { Card } from "../card/Card.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from "react";
function Cardbody({data,text,song}){
   const [show,setShow]=useState(false)
    return <div className="flex justify-center items-center bg-[#121212] w-[100vw] h-[auto]">
        <div className="w-[90%]">
       <div className="flex justify-between mb-3">
        <h3 className="w-[122px] h-[30px]
        font-semibold text-[20px] text-white
        ">{text}</h3>
        <button className="w-[85px] h-[30px] font-semibold text-center text-green-400" 
        onClick={(e)=>setShow((c)=>!c)}
        >{show?"Collapse":"Show all"}</button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-6 w-[100%]">
            {/* card body */}
       {show?data.map((val)=>{
        return <Card key={crypto.randomUUID()} data={val}/>
    })
       :     <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        loop={false}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper w-[100%]"
      >
{data.map((val)=>{
    return  <SwiperSlide  key={crypto.randomUUID()}>
    <Card
    song={song||false}
    key={crypto.randomUUID()} data={val}/>
    </SwiperSlide>
})}
  </Swiper>}
</div>
</div>
    </div>
}
export default Cardbody;
export {Cardbody}