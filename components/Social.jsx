//'use client';
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/k-i-b-i-wott' },
    { icon: <FaYoutube />, path: 'https://www.youtube.com/@tanuicreme8056' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/briantanui/' },
    { icon: <FaXTwitter /> , path: 'https://x.com/BrianKi6021343' },
    { icon: <FaInstagram />, path: '#' },
    { icon: <FaFacebook />, path: '#' }
];

const Social = ({ containerStyles, iconStyles }) => {    
  return (
    <div className={containerStyles}>
       {socials.map((item, index) => (
          <Link key={index} href={item.path} className={iconStyles} target="_blank">
            {item.icon}
          </Link>
       ))}
    </div>
  );
};

export default Social;
