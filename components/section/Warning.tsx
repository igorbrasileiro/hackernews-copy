import { PropsWithChildren } from "react";

interface Props {
  className?: string
}

function Warning({ children, className }: PropsWithChildren<Props>) {
  return (
    <div className={`text-[10pt] text-[#828282] pl-[34px] py-2 ${className}`}>{children}</div>
  );
}
export default Warning;
