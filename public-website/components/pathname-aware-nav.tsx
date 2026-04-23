"use client";

import { usePathname } from "next/navigation";
import BootstrapNav, { NavProps as BootstrapNavProps } from "react-bootstrap/Nav";

export type PathnameAwareNavProps = Omit<BootstrapNavProps, "activeKey">;

export const PathnameAwareNav = ({ ...rest }: PathnameAwareNavProps) => {
  const pathname = usePathname();

  return <BootstrapNav {...rest} activeKey={pathname} />;
};
