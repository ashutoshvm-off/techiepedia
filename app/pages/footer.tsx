import { FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter, FaMediumM } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { useEffect, useState } from 'react';

interface SocialIconProps {
  Icon: IconType;
  href: string;
  label: string;
}

const SocialIcon = ({ Icon, href, label }: SocialIconProps) => (
  <a
    href={href}
    aria-label={label}
    style={{
      color: 'inherit',
      textDecoration: 'none'
    }}
  >
    <Icon />
  </a>
);

export function Footer() {

    const [isMobile, setIsMobile] = useState(false);
  
  
    useEffect(() => {
            const checkMobile = () => {
                setIsMobile(window.innerWidth <= 768);
            };
          checkMobile();
  
        }, []);
        
  return (
    <><section
      style={{
        width: "100%",
        padding: "24px 32px",
        alignItems: "center",
        backgroundColor: "#0A0118",
        color: "white",
        zIndex: 5,
        position: "relative",
        bottom: 0,
      }} 
      className='flex md:flex-row flex-col md:items-center md:justify-evenly justify-center md:gap-6 gap-3 md:height-[5rem] height-[7rem]]'>
      {/* Logo */}
      <div className='md:text-2xl text-sm font-bold'
       style={{
        letterSpacing: "0.05em"
      }}>
        techiepedia
      </div>

    <div className='flex items-center'
    
    style={{
      color: "#9B96B0",
      fontSize: "0.875rem",
      textAlign: "center",
    }}>
        ©2025 techiepedia. All rights reserved.
      </div>

      {/* Social Icons */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        color: "#9B96B0",
        fontSize: "1.125rem"
      }}>
        <SocialIcon Icon={FaInstagram} href="https://instagram.com" label="Instagram" />
        <SocialIcon Icon={FaYoutube} href="https://youtube.com" label="YouTube" />
        <SocialIcon Icon={FaLinkedinIn} href="https://linkedin.com" label="LinkedIn" />
        <SocialIcon Icon={FaTwitter} href="https://twitter.com" label="Twitter" />
        <SocialIcon Icon={FaMediumM} href="https://medium.com" label="Medium" />
      </div>
    </section>
    </>
  );
}

export default Footer;