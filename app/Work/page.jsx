"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/css";
  import {BsArrowUpRight,BsGithub} from 'react-icons/bs';
  import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
  import Link from "next/link";
  import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";


  const projects=   
      [
        
        {
          num: "01",
          title: "Frontend",
          category: "Village Hub",
          description: "A modern frontend application developed with Next.js and styled using Tailwind CSS. This project focuses on creating a highly interactive user interface with clean and reusable code.",
          stack: [{ name: "Next.js" }, { name: "CSS 3" }, { name: "Tailwind.css" }],
          image: "/assets/work/img4.jpg", 
          live: " ", 
          github: "https://github.com/k-i-b-i-wott/telemed",
        },
        {
          num: "02",
          title: "VeryDorm",
          category: "Real Estate Website",
          description: "VeryDorm is a modern real estate platform for listing and finding dormitories and apartments. Built with React and Material-UI for a sleek UI, Node.js (Express) for the backend, and Firestore for real-time data storage. Features include property search, user authentication, and secure messaging between tenants and landlords.",
          stack: [
            { name: "React" },
            { name: "Javascript" },
            { name: "Material-UI" },
            { name: "Node.js (Express)" },
            { name: "Firestore" }
          ],
          image: "/assets/work/verydorm.png",
          live: "https://verydorm.com",
          github: "https://github.com/k-i-b-i-wott/VeryDorm"
        },
        {
          num: "03",
          title: "Remote Doctor",
          category: "Doctor Consultation & E-Prescription",
          description: "A remote doctor consultation and e-prescription web application built with React for the frontend, Material-UI for a modern and accessible UI, and Node.js for backend services. The platform enables patients to consult with doctors online, receive digital prescriptions, and manage appointments securely.",
          stack: [
            { name: "React" },
            { name: "Typescript" },
            { name: "Material-UI" },
            { name: "Node.js" }
          ],
          image: "/assets/work/telemed.png",
          live: "https://telemed-seven.vercel.app/",
          github: "https://github.com/k-i-b-i-wott/telemed"
        },
        {
          num: "04",
          title: "BlogIt",
          category: "Blog Application",
          description: "A full-featured blog application built with React and TypeScript for the frontend, styled with Material-UI, and powered by a Node.js (Express) backend with PostgreSQL for robust data storage. Features include user authentication, post creation/editing, comments, and responsive design.",
          stack: [
            { name: "React" },
            { name: "TypeScript" },
            { name: "Material-UI" },
            { name: "Node.js" },
            { name: "Express" },
            { name: "PostgreSQL" }
          ],
          image: "/assets/work/blogit.png",
          live: "https://blogit-front-end-eesk.vercel.app/",
          github: "https://github.com/k-i-b-i-wott/BlogitFrontEnd"
        },
  ];

const Work= () => {
  const [project, setProjects]= useState(projects[0]);
  const handleSlideChange= (swiper)=>{
    //get the current slide index
    const currentIndex= swiper.activeIndex
    //update the slide change based on the current slide
    setProjects(projects[currentIndex])
  }
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:'easeIn'}}}  className="min-h-[80vh] flex flex-col justify-center py-12 xl:pl-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
         <div className="flex flex-col gap-[30px] h-[50%]">
          <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
            {project.num}
          </div>
          <h2 className="text-[42px] leading-none text-white  font-bold group-hover:text-accent transition-all duration-500 capitalize">
            {project.title} Project
          </h2>
          <p className="text-white">{project.description}</p>
          <ul className="flex gap-4">
            {project.stack.map((item,index)=>{
              return(
                <li key={index} className="text-xl  text-accent">
                  {item.name}
                  {/* removes the last , in the list */}
                  {index !== project.stack.length-1 && ","}
                </li>
              );
            })}
          </ul>
          {/* border */}
          <div className="border border-white/20"></div>
          </div>
          <div className="flex text-center gap-4">
            {/* live projects */}
           <Link href={project.live}>
           <TooltipProvider delayDuration={100}>
              <Tooltip >
                <TooltipTrigger className="w-[70px] h-[70px] rounded-full  bg-white/20 flex justify-center items-center group">
                  <BsArrowUpRight  className=" text-white text-3xl group-hover:text-accent"/>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Live project</p>
                </TooltipContent>
               </Tooltip>
           </TooltipProvider>           
           </Link>
           {/* github */}
           <Link href={project.github}>
           <TooltipProvider delayDuration={100}>
              <Tooltip >
                <TooltipTrigger className="w-[70px] h-[70px] rounded-full  bg-white/20 flex justify-center items-center group">
                  <BsGithub  className=" text-white text-3xl group-hover:text-accent"/>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github Repository</p>
                </TooltipContent>
               </Tooltip>
           </TooltipProvider>           
           </Link>
          </div>
          
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper spaceBetween={50} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project,index)=>{
                return(<SwiperSlide key={index} className="">
                    <div className="h-[460px] relative flex  justify-center items-center bg-pink-50/20">
                        {/* overlay */}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative w-full h-full">                          {/* image */}
                          
                            <Image src={project.image} fill className="object-cover w-[100px] h-[100px]" alt="" />
                          
                        </div>
                        
                     </div>
                </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2  absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
               btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"  />
          </Swiper>
        </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work
