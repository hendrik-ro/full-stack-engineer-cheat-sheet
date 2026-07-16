import Link from "next/link";
import styles from "./subnav.module.css";

interface NavLinksProps {
  links: Array<{ name: string; href: string }>;
}

export default function Subnav({ links }: NavLinksProps) {
  return (
    <div className={styles.subnav}>
      <ul>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
          >
            <li className={styles.subnavLink}>{link.name}</li>
          </Link>
        );
      })}
      </ul>
    </div>
  );
}
