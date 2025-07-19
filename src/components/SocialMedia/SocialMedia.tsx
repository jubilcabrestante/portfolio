import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import styles from "./social-media.module.css";

type SocialLink = {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
};

const SocialMedia = () => {
  const socialLinks: SocialLink[] = [
    {
      href: "https://www.facebook.com/jubil18",
      icon: <FaFacebookF className="w-4 h-4" />,
      ariaLabel: "Facebook",
    },
    {
      href: "https://www.linkedin.com/in/jubil-cabrestante-4a06b4363/",
      icon: <FaLinkedinIn className="w-4 h-4" />,
      ariaLabel: "LinkedIn",
    },
  ];

  return (
    <ul>
      <li>
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label={link.ariaLabel}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </li>
    </ul>
  );
};

export default SocialMedia;
