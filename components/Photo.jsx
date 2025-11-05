"use client";
import {motion} from "framer-motion";
import Image from "next/image";
const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div 
      initial={{ opacity: 0}}

      animate={{
        opacity:1,
        transition:{
            delay:2,
            duration:0.4,
            ease:"easeIn"
        }
      }}>
           <motion.div  initial={{ opacity: 0}}

                animate={{
                opacity:1,
                transition:{
                    delay:2.4,
                    duration:0.4,
                    ease:"easeOut"
                    }
                    }}
                    className="w-[150px] h-[150px] xl:w-[300px]  xl:h-[300px] mix-blend-lighten absolute rounded-full overflow-hidden">


                               <Image  src="/assets/bb.jpg" priority quality={100} fill
                                    alt="Image" className="object-cover"
                             />
           </motion.div>

           {/* circle */}

           <motion.svg className="w-[180px] xl:w-[306px] h-[180px] xl:h-[306px] font-extrabold"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"          
           >
                    <motion.circle
                     cx="243"
                    cy="243"
                    r="280"
                    stroke="#00ff99"
                    strokeWidth="4"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray:" 24 10 0 0"}}
                    animate={{
                        strokeDasharray:["15 120 25 25", "16 25 72 92","4 250 22 22"],
                        rotate:[120,360],

                    }}
                    transition={{
                        duration:20,
                        repeat:Infinity,
                        repeatType: "reverse",
                    }}
                    />

           </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo
