import Link from "next/link";
import yIcon from "../../public/images/y18.gif";
import MenuLink from "../MenuLink";

const MENU_LINK = [
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
    <header className="bg-main p-[2px] text-[12px] sm:text-[10pt] leading-[normal] sm:leading-[12px] flex justify-between">
      <div className="flex items-center">
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

        <div className="flex sm:flex-row flex-col sm:items-center">
          <Link href="/news">
            <a className="font-bold align-middle mr-[10px]">Hacker News</a>
          </Link>

          <span>
            {MENU_LINK.map(({ href, label }, index) => (
              <MenuLink
                key={index}
                href={href}
                withDivisor={index === MENU_LINK.length - 1 ? false : true}
              >
                {label}
              </MenuLink>
            ))}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <span className="leading-[20px] align-middle mr-1">login</span>
      </div>
    </header>
  );
}

export default Header;
