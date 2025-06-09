import {
  AbagLogo,
  ExternalLink,
  MtcLogo,
  StandardFooter as StandardFooterPrimitives,
} from "@bayareametro/mtc-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Col from "react-bootstrap/Col";

export interface StandardFooterProps {
  children?: React.ReactNode;
}

export const StandardFooter = ({ children }: StandardFooterProps) => (
  <StandardFooterPrimitives.Root>
    <StandardFooterPrimitives.Container>
      <StandardFooterPrimitives.Row>
        <StandardFooterPrimitives.Col>
          <ExternalLink
            href="https://mtc.ca.gov"
            title="Metropolitan Transportation Commission"
            RightAdornment={null}
          >
            <StandardFooterPrimitives.Logo as={MtcLogo} />
          </ExternalLink>

          <h3>Metropolitan Transportation Commission</h3>
          <p>
            MTC is responsible for planning, financing and coordinating transportation for the
            nine-county San Francisco Bay Area.
          </p>

          <StandardFooterPrimitives.ExternalLink href="https://mtc.ca.gov">
            mtc.ca.gov
          </StandardFooterPrimitives.ExternalLink>

          <StandardFooterPrimitives.SocialsContainer>
            <StandardFooterPrimitives.SocialIconLink
              href="https://www.twitter.com/mtcbata"
              title="Find Metropolitan Transportation Commission on Twitter"
            >
              <FontAwesomeIcon icon={["fab", "x-twitter"]} size="lg" />
            </StandardFooterPrimitives.SocialIconLink>
            <StandardFooterPrimitives.SocialIconLink
              href="https://www.linkedin.com/company/metropolitan-transportation-commission"
              title="Find Metropolitan Transportation Commission on LinkedIn"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
            </StandardFooterPrimitives.SocialIconLink>
            <StandardFooterPrimitives.SocialIconLink
              href="https://www.facebook.com/MTCBATA"
              title="Find Metropolitan Transportation Commission on Facebook"
            >
              <FontAwesomeIcon icon={["fab", "facebook-square"]} size="lg" />
            </StandardFooterPrimitives.SocialIconLink>
            <StandardFooterPrimitives.SocialIconLink
              href="https://www.instagram.com/mtcbata"
              title="Find Metropolitan Transportation Commission on Instagram"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
            </StandardFooterPrimitives.SocialIconLink>
            <StandardFooterPrimitives.SocialIconLink
              href="https://www.youtube.com/user/mtcabaglibrary"
              title="Find Metropolitan Transportation Commission on YouTube"
            >
              <FontAwesomeIcon icon={["fab", "youtube"]} size="lg" />
            </StandardFooterPrimitives.SocialIconLink>
          </StandardFooterPrimitives.SocialsContainer>
        </StandardFooterPrimitives.Col>
        <StandardFooterPrimitives.Col>
          <ExternalLink href="https://abag.ca.gov/" RightAdornment={null}>
            <StandardFooterPrimitives.Logo as={AbagLogo} />
          </ExternalLink>

          <h3>Association of Bay Area Governments</h3>
          <p>
            ABAG supports regional planning and cooperation among the cities and counties of the San
            Francisco Bay Area.
          </p>
          <StandardFooterPrimitives.ExternalLink href="http://abag.ca.gov">
            abag.ca.gov
          </StandardFooterPrimitives.ExternalLink>
        </StandardFooterPrimitives.Col>
        <Col md={{ span: 3, offset: 1 }}>
          <StandardFooterPrimitives.ContactDetails>
            <h3>Contact Us</h3>
            <p>
              Bay Area Metro Center
              <br />
              375 Beale Street
              <br />
              San Francisco, CA 94105
            </p>
            <p>
              Main Phone Number: <a href="tel:1-415-778-6700">(415) 778-6700</a>
              <br />
              Public Information Line: <a href="tel:1-415-778-6757">(415) 778-6757</a>
              <br />
              Main Fax Number: <a href="tel:1-415-536-9800">(415) 536-9800</a>
            </p>
            <p>
              <ExternalLink href="mailto:info@bayareametro.gov">info@bayareametro.gov</ExternalLink>
            </p>
          </StandardFooterPrimitives.ContactDetails>
        </Col>
      </StandardFooterPrimitives.Row>
      {children}
    </StandardFooterPrimitives.Container>
  </StandardFooterPrimitives.Root>
);
