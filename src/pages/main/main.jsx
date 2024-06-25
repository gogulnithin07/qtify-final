import Hero from "../../components/Hero/Hero"
import Cardbody from "../../components/cardbody/Cardbody"
import { Songs } from "../../components/songs/Songs";
import Faq from "../../components/faq/Faq";
import { qtifyContext } from "../../components/Context/Context";
import { useContext } from "react";

function Main(){
    const {data1,data2}=useContext(qtifyContext)
    return <div>
            <Hero/>
      <Cardbody data={data1} text="Top Albums"/>
      <Cardbody data={data2} text="New Albums"/>
<Songs/>
<Faq/>
    </div>
}
export default Main;