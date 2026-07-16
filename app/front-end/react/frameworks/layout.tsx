import styles from './frameworks.module.css';
import Subnav from '@/app/ui/shared/subnav/subnav';

const frameworksLinks = [
  {
    name: 'Next.js',
    href: '/front-end/react/frameworks/next-js',
  },
  {
    name: 'Vite',
    href: '/front-end/react/frameworks/vite',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.gridFrameworks}>
      <div className={styles.gridNav}>
        <Subnav links={frameworksLinks} />
      </div>
      <div className={styles.gridContent}>{children}</div>
    </div>
  );
}
