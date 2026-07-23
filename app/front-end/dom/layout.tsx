import SideNav from "@/app/ui/shared/sidenav";

const reactLinks = [
  {
    name: "DOM",
    href: "/front-end/dom",
  },
  {
    name: "Document",
    href: "/front-end/dom/document",
  },
  {
    name: "Properties",
    href: "/front-end/dom/properties",
  },
  {
    name: "Style",
    href: "/front-end/dom/style",
  },
  {
    name: "Traversing",
    href: "/front-end/dom/traversing",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="gridLevelTwo">
      <div className="itemSidebar">
        <SideNav links={reactLinks} />
      </div>
      <div className="itemContent">{children}</div>
    </div>
  );
}
