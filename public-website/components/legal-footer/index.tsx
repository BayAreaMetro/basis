import { ExternalLink, LegalFooter as LegalFooterPrimitives } from "@bayareametro/mtc-ui";
import { Fragment } from "react";
import Link from "next/link";

export interface LegalFooterProps {
  links: { href: string; text: string }[];
  children?: React.ReactNode;
}

export const LegalFooter = ({ links, children }: LegalFooterProps) => (
  <LegalFooterPrimitives.Root>
    <LegalFooterPrimitives.Container>
      {links.length ? (
        <LegalFooterPrimitives.Row>
          {links.map(({ text, href, ...rest }, index) => {
            const Component = href.startsWith("/") || href.startsWith("#") ? Link : ExternalLink;
            return (
              <Fragment key={text}>
                {index !== 0 && links.length > 1 ? "|" : null}
                <Component key={text} href={href} {...rest}>
                  {text}
                </Component>
              </Fragment>
            );
          })}
        </LegalFooterPrimitives.Row>
      ) : null}
      {children}
    </LegalFooterPrimitives.Container>
    <LegalFooterPrimitives.BackToTopLink />
  </LegalFooterPrimitives.Root>
);
