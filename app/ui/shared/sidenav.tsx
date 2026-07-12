import NavLinks from '@/app/ui/shared/nav-links';

interface SideNavProps {
  links: Array<{ name: string; href: string }>;
}

export default function SideNav({ links }: SideNavProps) {
  return (
    <div>
      <p style={{margin: '25px 0px 0px 0px'}}></p>
      <NavLinks links={links} />
    </div>
  );
}
