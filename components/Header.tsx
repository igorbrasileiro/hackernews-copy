import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";
import yIcon from "../public/images/y18.gif";

interface MenuLinkProps {
  href: LinkProps["href"];
  withDivisor?: boolean;
}
function MenuLink({
  href,
  children,
  withDivisor,
}: PropsWithChildren<MenuLinkProps>) {
  return (
    <>
      <Link href={href}>
        <a className="align-middle">{children}</a>
      </Link>
      {withDivisor && <span className="align-middle">{" | "}</span>}
    </>
  );
}

const menuLinks = [
  {
    label: "new",
    href: "/newest",
  },
  {
    label: "past",
    href: "/front",
  },
  {
    label: "comments",
    href: "/newcomments",
  },
  {
    label: "ask",
    href: "/ask",
  },
  {
    label: "show",
    href: "/show",
  },
  {
    label: "jobs",
    href: "/jobs",
  },
  {
    label: "submit",
    href: "/submit",
  },
];

function Header() {
  return (
    <header className="bg-orange p-[2px] text-[10pt] leading-[12px] flex justify-between">
      <div>
        <Link href="/">
          <a className="w-[20px] mr-1">
            <img
              className="inline border-[1px] border-white"
              height={20}
              width={20}
              src={yIcon.src}
              loading="eager"
            />
          </a>
        </Link>

        <Link href="/news">
          <a className="font-bold align-middle mr-[10px]">Hacker News</a>
        </Link>

        {menuLinks.map(({ href, label }, index) => (
          <MenuLink
            key={index}
            href={href}
            withDivisor={index === menuLinks.length - 1 ? false : true}
          >
            {label}
          </MenuLink>
        ))}
      </div>
      <div>
        <span className="leading-[20px] align-middle mr-1">login</span>
      </div>
    </header>
  );
}

export default Header;
