import MenuLink from "../ui/MenuLink";

const FOOTER_LINKS = [
  {
    label: "Guidelines",
    href: "https://news.ycombinator.com/newsguidelines.html",
  },
  {
    label: "FAQ",
    href: "https://news.ycombinator.com/newsfaq.html",
  },
  {
    label: "Lists",
    href: "https://news.ycombinator.com/lists",
  },
  {
    label: "API",
    href: "https://github.com/HackerNews/API",
  },
  {
    label: "Security",
    href: "https://news.ycombinator.com/security.html",
  },
  {
    label: "Legal",
    href: "http://www.ycombinator.com/legal/",
  },
  {
    label: "Apply to YC",
    href: "http://www.ycombinator.com/apply/",
  },
  {
    label: "Contact",
    href: "mailto:hn@ycombinator.com",
  },
];

function Footer() {
  return (
    <footer className="bg-secondary leading-[normal] boorder border-t-2 border-main pt-4">
      <div className="mx-auto w-fit text-[8pt]">
        {FOOTER_LINKS.map(({ label, href }, index) => (
          <MenuLink
            key={index}
            href={href}
            withDivisor={index === FOOTER_LINKS.length - 1 ? false : true}
          >
            {label}
          </MenuLink>
        ))}
      </div>

      <div className="h-4" />

      <form
        className="mx-auto pb-[10pt] w-fit text-[10pt] text-[#828282]"
        method="get"
        action="//hn.algolia.com/"
      >
        <label>Search:</label>
        <input
          className="text-black border border-[#767676] rounded-[2px] py-[1px] px-[2px]"
          type="text"
          name="q"
          size={17}
          autoCorrect="off"
          spellCheck="false"
          autoCapitalize="off"
          autoComplete="false"
        />
      </form>
    </footer>
  );
}

export default Footer;
