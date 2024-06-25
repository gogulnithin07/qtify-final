import heroimage from "../../images/hero.png"
function Hero(){
    return <div
    className="flex py-5 justify-center items-center md:h-[270px] w-[100vw] bg-[#121212]"
    >
        <div className="w-[70%] h-[auto] md:w-[80%] flex flex-col
        justify-between items-center 
        md:flex-row md:justify-center md:items-center">
        <h2
        className="w-[100%]  md:max-w-[556px] md:max-h-[100px] text-white
        text-[32px] font-semibold text-center"
        >100 Thousand Songs, ad-free Over thousands podcast episodes</h2>
        <img
        className=" w-[212px] h-[212px]"
        src={heroimage} alt="headphoneimage"/>
    </div>
    </div>
}
export default Hero;
export {Hero}
