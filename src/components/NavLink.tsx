"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<LinkProps, "href"> {
  to: LinkProps["href"];
  className?: string;
  activeClassName?: string;
  pendingClassName?: string; // kept for API compatibility, not used in Next.js
  children?: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    {
      className,
      activeClassName,
      pendingClassName: _pending,
      to,
      children,
      ...props
    },
    ref
  ) => {
    const pathname = usePathname();
    const toString = typeof to === "string" ? to : String(to);
    const isActive =
      pathname === toString ||
      (toString !== "/" && pathname?.startsWith(toString));

    return (
      <Link
        ref={ref}
        href={to}
        className={cn(className, isActive && activeClassName)}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
