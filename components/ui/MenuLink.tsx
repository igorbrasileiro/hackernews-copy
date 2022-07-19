import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

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

export default MenuLink