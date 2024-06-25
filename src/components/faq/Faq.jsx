import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
function Faq(){
const [display,setDisplay]=useState(null)
const data=[{
    question:"IS QTIFY free to use?",
    answer:"Yes! It is 100% free, and it has 0% ads!",
    id:1
},
{
      question:"Can I download and listen to songs offline?",
    answer:"Sorry, unfortunately we don't provide service to download any songs.",
    id:2
}]
    return <div className="w-[100vw] h-[350px] bg-[#121212] flex  flex-col items-center ">
        <h2 className="text-green-500 font-bold text-[52px]">FAQS</h2>
        <ul className="w-[60%]
        ">
         {
            data.map((val,i)=>{
                return <li 
                key={i}
                className=" w-[100%]
                border-white border-[1px]
                rounded-md
                overflow-hidden
                cursor-pointer
                mb-[20px]
                "
                onClick={(e)=>{
                    if(display===val.id){
                        setDisplay((c)=>null)
                    }else{
                    setDisplay((c)=>val.id)}
                }
                    }>
                    <p
                    className="
                    p-4
                    flex justify-between items-center
                 text-lg min-h-10 text-white font-medium bg-[#121212]"
                    >{val.question} 
                          {display===val.id?
                           <span
                           >
                        <IoIosArrowUp
                           style={{ fontSize: '2rem', color: 'white' }} 
                           /></span>
                          :
                          <span
                          >
                       <IoIosArrowDown 
                          style={{ fontSize: '2rem', color: 'white' }} 
                          /></span>}

                    </p>
                    {display===val.id &&
                    <p
                    className="text-black bg-white text-lg py-4 text-center "
                    >{val.answer}</p>}
                </li>
            })
         }
        </ul>
    </div>
}


export default Faq;