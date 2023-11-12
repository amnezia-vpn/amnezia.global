import TextLink from '@src/shared/ui/TextLink/TextLink';
import HostingSlider from '@src/pages/instructions/ui/HostingInstructions/ui/HostingSlider/HostingSlider';
import styles from './SingleHostingInstruction.module.scss';

export interface StepItem {
  image: string;
  text: string;
}

interface InstructionItem {
  recommend: boolean;
  logo: string;
  link: string;
  linkName: string;
  desc: string;
  serversLabel: string;
  serversText: string;
  legalAddressLabel: string;
  legalAddressText: string;
  priceLabel: string;
  priceText: string;
  priceInfo: string;
  steps: StepItem[];
}

interface SingleHostingInstructionProps {
  data: InstructionItem;
}

const SingleHostingInstruction = ({ data }: SingleHostingInstructionProps) => {
  const {
    recommend,
    logo,
    link,
    linkName,
    desc,
    serversLabel,
    serversText,
    legalAddressLabel,
    legalAddressText,
    priceLabel,
    priceText,
    priceInfo,
    steps,
  } = data;

  return (
    <div className={styles.root}>
      <TextLink variant="light" to={link} text={linkName} className={styles.link} openInNewTab />
      <section className={styles.section}>
        <div className={styles.text}>{desc}</div>
      </section>
      <section className={styles.section}>
        <div className={styles.subtext}>{serversLabel}</div>
        <div className={styles.text}>{serversText}</div>
      </section>
      <section className={styles.section}>
        <div className={styles.subtext}>{legalAddressLabel}</div>
        <div className={styles.text}>{legalAddressText}</div>
      </section>
      <section className={styles.section}>
        <div className={styles.subtext}>{priceLabel}</div>
        <div className={styles.text}>{priceText}</div>
        <div className={styles.text}>{priceInfo}</div>
      </section>
      <HostingSlider steps={steps} />
    </div>
  );
};

export default SingleHostingInstruction;
