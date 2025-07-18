import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import styles from "./social-media.module.css";

const SocialMedia = () => {
  return (
    <ul>
      <li>
        <div className="flex space-x-4">
          <Link
            href="https://www.facebook.com/jubil18"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="Facebook"
          >
            <FaFacebookF className="w-4 h-4" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/jubil-cabrestante-4a06b4363/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default SocialMedia;
