import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import{ FiDownload} from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
       <div className="container mx-auto">
               <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
               <div className="text-center xl:text-left order-2 xl:order-none">
                  <span className="text-xl">Software Developer</span>
                  <h1 className="h1 mb-6">                    
                    Hello I'm <br /> <span className="text-accent">Brian Tanui</span>     
                  </h1>
                  <p className="max-w-[500px] mb-9 text-white/80">
                      I excel in crafting elegant digital experiences 
                      and I am proficient in various programming languages
                      and technologies.
                  </p>
                  <div className="flex flex-col xl:flex-row  items-center  gap-8"> 
                    <a href="/BrianTanuiCv.pdf" download>
                      <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                        <span>Download CV</span>
                        <FiDownload className="text-xl"/>
                      </Button>
                    </a>
                    <div className="mb-8 xl:mb-0 ">
                        <Social containerStyles="flex gap-6"
                        iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center
                         items-center text-center text-accent text-base  hover:bg-accent hover:text-primary 
                         hover:transition-all duration-500"
                         />
                    </div>
                  </div>
               </div>
               <div className="order-1 xl:order-none mb-8 xl:mb-0">
                  <Photo />
               </div>


               </div>
               
    </div>

    <Stats />
    </section>
  )
}

export default Home
