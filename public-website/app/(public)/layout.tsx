import { LegalFooter as LegalFooterPrimitives } from "@bayareametro/mtc-ui";
import { LegalFooter } from "@/components/legal-footer";
import { StandardFooter } from "@/components/standard-footer";
import { Header } from "@/components/header";
import { version } from "@/components/legal-footer/version";
import styles from "./layout.module.css";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LegalFooterPrimitives.BackToTopLocation />
      <Header />
      {children}
      <StandardFooter>
        <LegalFooter
          links={[
            {
              href: "#",
              text: "Project Documentation",
            },
            {
              href: "#",
              text: "Open Issues",
            },
            {
              href: "#",
              text: "Submit an Issue",
            },
          ]}
        >
          <span className={styles.extraFooterLine}>
            Version {version.code} ({version.date})
          </span>
        </LegalFooter>
      </StandardFooter>
    </>
  );
}
