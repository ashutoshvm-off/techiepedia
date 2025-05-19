import { FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter, FaMediumM } from 'react-icons/fa';
import { IconType } from 'react-icons';

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
  return (
    <><section
      style={{
        width: "100%",
        height: "auto",
        padding: "24px 32px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#0A0118",
        color: "white",
        gap: "24px",
        zIndex: 5,
      }}>
      {/* Logo */}
      <div style={{
        fontSize: "26px",
        fontWeight: "bold",
        letterSpacing: "0.05em"
      }}>
        techiepedia
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
    </section><div style={{
      color: "#9B96B0",
      fontSize: "0.875rem",
      marginTop: "auto",
      textAlign: "center",
      marginBottom: "1rem",
    }}>
        ©2025 techiepedia. All rights reserved.
      </div></>
  );
}

export default Footer;