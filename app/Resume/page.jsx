
"use client";

import { FaHtml5,  FaCss3, FaNodeJs , FaReact,FaPython,FaJava,FaJs,FaFigma } from "react-icons/fa";
import {SiTailwindcss,SiNextdotjs, SiExpress, SiTypescript, SiJest, SiCypress, SiMongodb, SiPostgresql, SiMicrosoftsqlserver, SiNestjs, SiDjango, SiSelenium, SiPostman, SiJunit, SiCucumber, SiJenkins, SiGithubactions, SiGitlab, SiDocker, SiKubernetes, SiAmazonaws, SiMicrosoftazure, SiMocha, SiOwasp, SiCsharp}from "react-icons/si";

// about data

const about=
  {
    title:"about me",
    description:"",
  info:[
    {
      fielName:"Name",
      fieldValue:"Brian Tanui",
    },
    {
      fielName:"Name",
      fieldValue:"Brian Tanui",
    },
    {
      fielName:"Phone",
      fieldValue:"(+254)7 08 253 758",
    },
    {
      fielName:"Experience",
      fieldValue:"2 Years",
    },
   
    {
      fielName:"Natinality",
      fieldValue:"Kenyan",
    },
    {
      fielName:"Email",
      fieldValue:"bk.kibiwott@gmail.com",
    },
    {
      fielName:"Freelance",
      fieldValue:"Available",
    },
    {
      fielName:"Languages",
      fieldValue:"English",
    },
  ]

  }

const experience={
  icon:'',
  title:"My Experience",
  description:"",

  items:[
    {
      company:"Teach2Give",
      position:"Software Engineer Intern",
      duration:"Feb - May 2025",
    },
    {
      company:"Teach2Give",
      position:"Quality Assurance Engineering Trainee",
      duration:"Sep - Dec 2025",
    },

  ]
}
const education={
  icon:'',
  title:"My Experience",
  description:"",
  items:[
    {
      institution:"Online Course Platform",
      degree:"Web Development BootCamp",
      duration:"2023",
    },
    {
      institution:"CodeAcademy",
      degree:"Front-End development",
      duration:"2022",
    },
    {
      institution:"Online Course",
      degree:"Programming Course",
      duration:"2021-2022",
    },
    {
      institution:"Tech Institute",
      degree:"Certified Web developer",
      duration:"2020",
    },
    {
      institution:"Design School",
      degree:"Diploma in Graphic design",
      duration:"2019",
    },
    {
      institution:"Community College",
      degree:"Diploma in Computer Science",
      duration:"2018-2019",
    },

  ]  
}
const skills={
  title:"My Skills",
  description:"Here are technologies and tools I work with across development, QA, DevOps, and cloud:",
  skillList:[
    { icon:<FaReact/>, name:"React.js" },
    { icon:<FaNodeJs/>, name:"Node.js" },
    { icon:<SiExpress/>, name:"Express.js" },
    { icon:<SiNestjs/>, name:"Nest.js" },
    { icon:<SiNextdotjs/>, name:"Next.js" },

    { icon:<FaJs/>, name:"JavaScript" },
    { icon:<SiTypescript/>, name:"TypeScript" },
    { icon:<FaPython/>, name:"Python" },
    { icon:<SiCsharp/>, name:"C#" },
    { icon:<FaJava/>, name:"Java" },

    { icon:<SiJest/>, name:"Jest" },
    { icon:<SiMocha/>, name:"Mocha" },
    { icon:<SiCypress/>, name:"Cypress" },
    { icon:<SiSelenium/>, name:"Selenium WebDriver" },
    { icon:<SiPostman/>, name:"Postman" },
    { icon:<SiJunit/>, name:"JUnit" },
    { icon:<SiCucumber/>, name:"Cucumber" },
    { icon:<SiOwasp/>, name:"OWASP ZAP" },

    { icon:<SiMicrosoftsqlserver/>, name:"SQL Server" },
    { icon:<SiMongodb/>, name:"MongoDB" },
    { icon:<SiPostgresql/>, name:"PostgreSQL" },

    { icon:<SiJenkins/>, name:"Jenkins" },
    { icon:<SiGithubactions/>, name:"GitHub Actions" },
    { icon:<SiGitlab/>, name:"GitLab CI" },
    { icon:<SiDocker/>, name:"Docker" },
    { icon:<SiKubernetes/>, name:"Kubernetes" },

    { icon:<SiAmazonaws/>, name:"AWS" },
    { icon:<SiMicrosoftazure/>, name:"Microsoft Azure" },

    { icon:<FaHtml5/>, name:"HTML5" },
    { icon:<FaCss3/>, name:"CSS3" },
    { icon:<SiTailwindcss/>, name:"Tailwind CSS" },
    { icon:<FaFigma/>, name:"Figma" },
  ]
}
const skillsByCategory={
  Languages:[
    { icon:<FaJs/>, name:"JavaScript" },
    { icon:<SiTypescript/>, name:"TypeScript" },
    { icon:<FaPython/>, name:"Python" },
    { icon:<SiCsharp/>, name:"C#" },
    { icon:<FaJava/>, name:"Java" },
  ],
  "Frameworks & Libraries":[
    { icon:<FaNodeJs/>, name:"Node.js" },
    { icon:<SiExpress/>, name:"Express.js" },
    { icon:<SiNestjs/>, name:"Nest.js" },
    { icon:<SiNextdotjs/>, name:"Next.js" },
    { icon:<FaReact/>, name:"React.js" },
    { icon:<SiDjango/>, name:"Django" },
  ],
  "Testing & QA":[
    { icon:<SiJest/>, name:"Jest" },
    { icon:<SiMocha/>, name:"Mocha" },
    { icon:<SiCypress/>, name:"Cypress" },
    { icon:<SiSelenium/>, name:"Selenium WebDriver" },
    { icon:<SiPostman/>, name:"Postman" },
    { icon:<SiJunit/>, name:"JUnit" },
    { icon:<SiCucumber/>, name:"Cucumber" },
  ],
  "Performance & Security":[
    { icon:null, name:"JMeter" },
    { icon:null, name:"LoadRunner" },
    { icon:<SiOwasp/>, name:"OWASP ZAP" },
    { icon:<SiJest/>, name:"Jest" },
  ],
  Databases:[
    { icon:<SiMicrosoftsqlserver/>, name:"SQL Server" },
    { icon:<SiMongodb/>, name:"MongoDB" },
    { icon:<SiPostgresql/>, name:"PostgreSQL" },
  ],
  "Automation & CI/CD":[
    { icon:<SiJenkins/>, name:"Jenkins" },
    { icon:<SiGithubactions/>, name:"GitHub Actions" },
    { icon:<SiGitlab/>, name:"GitLab CI" },
    { icon:<SiDocker/>, name:"Docker" },
    { icon:<SiKubernetes/>, name:"Kubernetes" },
  ],
  Cloud:[
    { icon:<SiAmazonaws/>, name:"AWS" },
    { icon:<SiMicrosoftazure/>, name:"Microsoft Azure" },
  ],
  Methodologies:[
    { icon:null, name:"Agile (Scrum/Kanban)" },
    { icon:null, name:"Waterfall" },
    { icon:null, name:"TDD" },
    { icon:null, name:"BDD" },
  ],
}
import { Tabs, TabsContent, TabsTrigger,TabsList } from "@/components/ui/tabs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1 ,transition:{
      delay:2.4, duration:0.4, ease:"easeIn"
    }}}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >

      <div className="container max-auto">
        <Tabs defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] gap-6 mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                    <ScrollArea className="h-[400px]">
                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                          {experience.items.map((item,index)=>{
                            return(
                              <li onKeyUp={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col  justify-center items-center lg:items-start gap-1">
                                <span className="text-accent">{item.duration}</span>
                                <h3 className="text-xl mx-w-[260px] mn-h-[60px] text-center lg:text-left">{item.position}</h3>
                                <div className="flex gap-3 items-center">
                                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                  <p className="text-white/60">{item.company}</p>
                                </div>
                              </li>
                            );

                          })}
                        </ul>
                    </ScrollArea>
                </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                    <ScrollArea className="h-[400px]">
                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                          {education.items.map((item,index)=>{
                            return(
                              <li onKeyUp={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col  justify-center items-center lg:items-start gap-1">
                                <span className="text-accent">{item.duration}</span>
                                <h3 className="text-xl mx-w-[260px] mn-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                <div className="flex gap-3 items-center">
                                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                  <p className="text-white/60">{item.institution}</p>
                                </div>
                              </li>
                            );

                          })}
                        </ul>
                    </ScrollArea>
                </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
                <div className="flex flex-col gap-[30px]">
                   <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h3 className="text-4xl font-bold">{skills.title}</h3>
                      <p className="mx-w[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                    </div>
                  <Tabs defaultValue="Languages" className="flex flex-col gap-[30px]">
                    <TabsList className="flex flex-wrap gap-2 w-full max-w-full">
                      {Object.keys(skillsByCategory).map((category)=> (
                        <TabsTrigger key={category} value={category} className="capitalize">
                          {category}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {Object.entries(skillsByCategory).map(([category, items])=> (
                      <TabsContent key={category} value={category} className="w-full">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                          {items.map((skill,index)=> (
                              <li key={index}>
                               <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                      <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                                    {skill.icon ? (
                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                          {skill.icon}
                                        </div>
                                    ) : (
                                      <div className="text-base px-4 text-center text-white/80">
                                        {skill.name}
                                      </div>
                                    )}
                                      </TooltipTrigger>
                                      <TooltipContent>
                                    <div className="capitalize">{skill.name}</div>
                                      </TooltipContent>
                                  </Tooltip>
                               </TooltipProvider>
                              </li>
                          ))}
                    </ul>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-center">
                <div className="flex flex-col gap-[30px]">
                  <h2 className="text-4xl font-bold ">
                    {skills.title}
                  </h2>
                  <p className="max-w[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] max-auto xl:max-0">
                    {
                      about.info.map((items,index)=>{
                        return(
                          <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                            <span className="text-white/60">{items.fielName}</span>
                            <span className="text-xl">{items.fieldValue}</span>
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
         
    </motion.div>
  )
}

export default Resume
