import Link from "next/link";
import { IconType } from "react-icons";
import { clsx } from "clsx";

export type SideTabProps = {
  icon: IconType;
  text: string;
  href: string;
};

export default function SideTab({ icon: Icon, text, href }: SideTabProps) {
  return (
    <Link href={href}>
      <button
        className={clsx(
          "flex gap-4 items-center px-7 py-3 hover:bg-[#131313] w-full rounded-s-md text-[#999999]"
        )}
      >
        <Icon size={25} />
        {text}
      </button>
    </Link>
  );
}
