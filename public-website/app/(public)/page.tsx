import {
  AbagIcon,
  createHashLink,
  ExternalLink,
  HStack,
  Link,
  MtcIcon,
  Typography,
  VStack,
} from "@bayareametro/mtc-ui";
import NextLink from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import backgroundImage from "./background.png";
import aboutImage from "./about.png";
import { SpecialFeatureCard } from "@/components/special-feature-card";
import vitalSignsImage from "./vital-signs.png";
import { CSSProperties } from "react";
import { AnimatedArrow } from "@/components/animated-arrow";

const [AboutSection, ScrollToAboutSectionLink] = createHashLink("about");

export default function Home() {
  return (
    <VStack>
      <VStack className={styles.heroSection}>
        <Image
          src={backgroundImage}
          className={styles.backgroundImage}
          priority
          alt="Bay Area Spatial Information System"
          fill
        />
        <HStack className={styles.logos}>
          <AbagIcon
            title="Association of Bay Area Governments"
            desc="Association of Bay Area Governments logo"
            color="var(--dv-midnight-blue)"
            width={96}
          />
          <MtcIcon
            title="Metropolitan Transportation Commission"
            desc="Metropolitan Transportation Commission logo"
            color="var(--dv-midnight-blue)"
            width={96}
          />
        </HStack>
        <VStack className={styles.text}>
          <Typography as="h1" variant="display2" className={styles.title}>
            Bay Area Spatial Information System
          </Typography>
          <Typography as="h2" variant="h2" className={styles.subtitle}>
            Building a Digital Landscape for Regional Planning in the Bay Area
          </Typography>
        </VStack>
        <ScrollToAboutSectionLink className={styles.arrowDown}>
          <AnimatedArrow />
        </ScrollToAboutSectionLink>
      </VStack>
      <AboutSection className={styles.aboutSection}>
        <HStack className={styles.aboutSectionContent}>
          <VStack className={styles.aboutSectionLeftContent}>
            <Typography as="h2" variant="h2">
              About BASIS
            </Typography>
            <VStack style={{ rowGap: "24px", alignItems: "flex-start" }}>
              <Image src={aboutImage} alt="About BASIS" style={{ width: "100%", height: "auto" }} />
              <Typography as="p" variant="paragraph2">
                The Bay Area Spatial Information System (BASIS) was created to give public agencies
                and planning professionals a reliable foundation for data-informed decision-making.
                Developed by the Association of Bay Area Governments (ABAG) and the Metropolitan
                Transportation Commission (MTC), BASIS reflects a regional effort to improve access
                to critical spatial information.
              </Typography>
              <Typography as="p" variant="paragraph2">
                As a centralized platform, BASIS is built to reduce duplication, promote
                transparency and help jurisdictions work together toward shared goals. It offers
                curated datasets submitted by local governments and standardized by ABAG and MTC to
                support coordinated planning at every scale.
              </Typography>
              <Typography as="p" variant="paragraph2">
                BASIS is part of a larger commitment to modernize how we share data, build tools and
                respond to regional challenges in housing, transportation, environmental resilience
                and equity.
              </Typography>
              <Link
                as={NextLink}
                href="/"
                className={styles.aboutSectionLearnMoreLink}
                RightAdornment="circle-arrow-right"
                RightAdornmentProps={
                  {
                    className: styles.aboutSectionLearnMoreLinkIcon,
                    color: "#009EDD",
                  } as unknown as undefined // TODO: fix type in component lib
                }
              >
                Learn more
              </Link>
            </VStack>
          </VStack>
          <SpecialFeatureCard
            style={
              {
                "--dv-card-border-color": "var(--dv-white)",
                position: "sticky",
                top: "calc(var(--utility-header-height) + 24px)",
                minWidth: 345,
                maxWidth: 345,
              } as CSSProperties
            }
            orientation="vertical"
            image={{ src: vitalSignsImage, alt: "Vital Signs" }}
            heading="Vital Signs"
            body="Vital Signs is an interactive platform from MTC that tracks key data on transportation, land use, economy, and the environment in the Bay Area. It provides visualizations and analysis to help policymakers, researchers, and the public understand regional trends and inform planning decisions."
          >
            <Link
              as={NextLink}
              href="https://vitalsigns.mtc.ca.gov"
              RightAdornment="circle-arrow-right"
              RightAdornmentProps={
                {
                  color: "#009EDD",
                } as unknown as undefined // TODO: fix type in component lib
              }
            >
              Learn more
            </Link>
          </SpecialFeatureCard>
        </HStack>
      </AboutSection>
      <section className={styles.poweredBySection}>
        <VStack className={styles.poweredBySectionContent}>
          <Typography as="h4" variant="h4" style={{ textAlign: "center" }}>
            Powered by BASIS
          </Typography>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            <SpecialFeatureCard
              orientation="vertical"
              image={{ src: vitalSignsImage, alt: "Vital Signs" }}
              heading="Transit Oriented Communities Compliance Portal"
              body=""
            >
              <ExternalLink as={NextLink} href="https://toc.mtcanalytics.org">
                toc.mtcanalytics.org
              </ExternalLink>
            </SpecialFeatureCard>
            <SpecialFeatureCard
              orientation="vertical"
              image={{ src: vitalSignsImage, alt: "Vital Signs" }}
              heading="Regional Transit Capital Inventory Portal"
              body=""
            >
              <ExternalLink as={NextLink} href="https://rtci.bayareametro.gov">
                rtci.bayareametro.gov
              </ExternalLink>
            </SpecialFeatureCard>
            <SpecialFeatureCard
              orientation="vertical"
              image={{ src: vitalSignsImage, alt: "Vital Signs" }}
              heading="Housing and Land Use Viewer"
              body=""
            >
              <ExternalLink as={NextLink} href="https://housing.abag.ca.gov">
                housing.abag.ca.gov
              </ExternalLink>
            </SpecialFeatureCard>
            <SpecialFeatureCard
              orientation="vertical"
              image={{ src: vitalSignsImage, alt: "Vital Signs" }}
              heading="Lorem Ipsum Product Integration Network"
              body=""
            >
              <ExternalLink as={NextLink} href="https://toc.mtcanalytics.org">
                toc.mtcanalytics.org
              </ExternalLink>
            </SpecialFeatureCard>
            <SpecialFeatureCard
              orientation="vertical"
              image={{ src: vitalSignsImage, alt: "Vital Signs" }}
              heading="Ipsum Lorem Central Configuration Strategy Portal"
              body=""
            >
              <ExternalLink as={NextLink} href="https://ipsumcentralstrategy.org">
                ipsumcentralstrategy.org
              </ExternalLink>
            </SpecialFeatureCard>
            <SpecialFeatureCard
              orientation="vertical"
              image={{ src: vitalSignsImage, alt: "Vital Signs" }}
              heading="Lorem Ipsum Legacy Tactics Administration System"
              body=""
            >
              <ExternalLink as={NextLink} href="https://lorem.ipsumlegacy.org">
                lorem.ipsumlegacy.org
              </ExternalLink>
            </SpecialFeatureCard>
          </div>
        </VStack>
      </section>
    </VStack>
  );
}
