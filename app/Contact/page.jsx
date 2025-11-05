"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select,SelectLabel, SelectContent,SelectGroup,SelectItem,SelectTrigger,SelectValue } from "@/components/ui/select";
import { FaPhoneAlt,FaEnvelope,FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const info=[
  {
    icon:<FaPhoneAlt />,
    title:"Phone",
    description:"(+254) 718105315",    
  },
  {
    icon:<FaEnvelope />,
    title:"Email",
    description:"bk.kibiwott@gmail.com",    
  },
  {
    icon:<FaMapMarkedAlt />,
    title:"Address",
    description:"2509-30100,ELDORET",    
  },
]

const Contact =()=>{
  const [form, setForm] = useState({ firstname: '', lastname: '', email: '', phone: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value) => {
    setForm((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setResult({ success: true, message: 'Message sent successfully!' });
        setForm({ firstname: '', lastname: '', email: '', phone: '', service: '', message: '' });
      } else {
        setResult({ success: false, message: data.error || 'Failed to send message.' });
      }
    } catch (err) {
      setResult({ success: false, message: err.message });
    }
    setLoading(false);
  };

  return (
    <motion.section initial={{opacity:0}} animate={{
      opacity:1,
      transition:{delay:2.4, duration:0.4, ease:'easeIn'}
    }}  className="py-6">
      <div className="container max-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[40%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10  bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">Whether you're looking to collaborate on a creative project, <br />
              in need of professional services, or just want to get in touch, <br /> I'm here to help. 
              Let's discuss how we can bring your ideas to life and work together to achieve your goals.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* input */}
                <Input type="text" name="firstname" value={form.firstname} onChange={handleChange} placeholder="FirstName" required />
                <Input type="text" name="lastname" value={form.lastname} onChange={handleChange} placeholder="LastName" required />
                <Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" required />
                <Input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" />                
              </div>
              <Select value={form.service} onValueChange={handleServiceChange} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="select a service" />
                </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>
                        Select a service
                      </SelectLabel>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                      <SelectItem value="Logo Design">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
              </Select>
              <Textarea className="h-[200px]" name="message" value={form.message} onChange={handleChange} placeholder="Type your message here" required></Textarea>
              {/* button */}
              <Button size="md" className=" max-w-40" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
              {result && (
                <div className={`text-sm ${result.success ? 'text-green-400' : 'text-red-400'}`}>{result.message}</div>
              )}
            </form>
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
                <ul className="flex flex-col gap-10">
                  {info.map((item,index)=>{
                    return(
                       <li key={index} className="flex items-center gap-6">
                          <div className="w-[52px] h-[52px] xl:w-[72px]  xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                              <div  className="text-[28px]">{item.icon}</div>
                          </div>
                            <div className="flex-1">
                              <p className="text-white/60">{item.title}</p>
                              <h3 className="text-xl">{item.description}</h3>
                            </div>                         
                        </li>
                    );
                  })}
                </ul>
            </div>
          
        </div>
      </div>             
    </motion.section>
  );
};

export default Contact
