import { Button, HStack, Link, StandardHeader, UtilityHeader, VStack } from "@bayareametro/mtc-ui";
import BootstrapNavbar from "react-bootstrap/Navbar";
import BootstrapNavbarCollapse from "react-bootstrap/NavbarCollapse";
import BootstrapNavItem from "react-bootstrap/NavItem";
import BootstrapNavLink from "react-bootstrap/NavLink";
import styles from "./index.module.scss";
import { PathnameAwareNav } from "@/components/pathname-aware-nav";
import { faArrowRight } from "@fortawesome/pro-light-svg-icons";
import NextLink from "next/link";

const items = [
  { href: "/data-inventory", text: "Data Inventory" },
  { href: "/about-us", text: "About Us" },
  { href: "/contact-us", text: "Contact Us" },
];

export const Header = () => (
  <UtilityHeader.Root className={styles.utilityHeaderRoot}>
    <HStack className={styles.utilityHeaderContainer}>
      <UtilityHeader.LeftContent>
        <NextLink href="/" title="Home page" className={styles.headerTitleLink}>
          <StandardHeader.Logo id="standard-header-logo" className={styles.headerLogo} width={40} />
        </NextLink>
        <UtilityHeader.Title className={styles.headerTitle} as={"span"} style={{ color: "white" }}>
          Bay Area Spatial Information System
        </UtilityHeader.Title>
      </UtilityHeader.LeftContent>
      <UtilityHeader.RightContent className={styles.rightContent}>
        <BootstrapNavbar className={styles.rightContentNavbar} aria-label="Primary navigation">
          <BootstrapNavbarCollapse className={styles.rightContentNavbarCollapse}>
            <PathnameAwareNav variant="pills" className={styles.rightContentNav}>
              {items.map(({ href, text }) => (
                <BootstrapNavItem key={text}>
                  <BootstrapNavLink
                    as={NextLink}
                    href={href}
                    className={styles.rightContentNavLink}
                  >
                    {text}
                  </BootstrapNavLink>
                </BootstrapNavItem>
              ))}
              <BootstrapNavItem
                as={VStack}
                style={{ alignItems: "center", justifyContent: "center", paddingRight: "8px" }}
              >
                <Link as={Button} href="/login" RightAdornment={faArrowRight}>
                  Log In
                </Link>
              </BootstrapNavItem>
            </PathnameAwareNav>
          </BootstrapNavbarCollapse>
        </BootstrapNavbar>
      </UtilityHeader.RightContent>
    </HStack>
  </UtilityHeader.Root>
);
