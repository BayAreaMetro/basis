import { VStack, Card, Typography, HStack, clsx } from "@bayareametro/mtc-ui";
import Image, { StaticImageData } from "next/image";
import styles from "./index.module.css";

export interface SpecialFeatureCardProps extends Omit<Card.CardRootProps, "body"> {
  image: {
    src: string | StaticImageData;
    alt: string;
  };
  heading: string;
  body: string;
  children?: React.ReactNode;
}

export const SpecialFeatureCard = ({
  image,
  heading,
  body,
  children,
  className,
  ...rest
}: SpecialFeatureCardProps) => (
  <Card.Root className={clsx(styles.root, className)} {...rest}>
    <Card.Image
      as={Image}
      width={345}
      height={270}
      src={image.src as string}
      alt={image.alt}
      className={styles.image}
    />
    <Card.Body as={VStack} className={styles.body}>
      <VStack className={styles.textContent}>
        <Typography as="h2" variant={{ fontSize: "27px", fontWeight: 600, lineHeight: "30px" }}>
          {heading}
        </Typography>
        <Typography as="p" variant="paragraph2">
          {body}
        </Typography>
      </VStack>
      {children ? <HStack className={styles.ctaContainer}>{children}</HStack> : null}
    </Card.Body>
  </Card.Root>
);
