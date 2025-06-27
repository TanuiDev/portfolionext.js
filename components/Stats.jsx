"use client"
import CountUp from "react-countup"
 

const stats=[
    {
        num: 3,
        name: "Years of experience",
    },
    {
        num: 15,
        name: "Projects completed",
    },
    {
        num: 10,
        name: "Technologies Mastered",
    },
    {
        num: 300,
        name: "Code commits",
    },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-outo ">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {
                    stats.map((item,index)=>{
                        return(
                            <div className="flex flex-1 gap-4  justify-between items-center xl:justify-start" key={index}>
                                <CountUp end={item.num} 
                                duration={5}
                                delay={2}
                                className="text-4xl  xl:text-6xl font-extrabold"                                
                                /> 
                                <p className={`${item.name.length < 15? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`} >{item.name}</p>  
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Stats
