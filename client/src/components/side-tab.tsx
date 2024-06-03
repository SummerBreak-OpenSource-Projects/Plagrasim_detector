"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

export type SideTabProps = {
  icon: IconType;
  text: string;
  href: string;
};

export default function SideTab({ icon: Icon, text, href }: SideTabProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <button
        className={clsx(
          "flex gap-4 items-center px-7 py-3 hover:bg-[#131313] w-full rounded-s-md text-[#999999]",
          isActive && "bg-[#131313] text-[#ffffff]"
        )}
      >
        <Icon size={25} className={isActive ? "text-[#A02C74]" : ""} />
        {text}
      </button>
    </Link>
  );
}
