import { useClipboard } from '@mantine/hooks';
import { Check, Copy } from 'lucide-react';
import styles from './CopyButton.module.scss';

interface CopyButtonProps {
  copyValue: string;
}

const CopyButton = ({ copyValue }: CopyButtonProps) => {
  const clipboard = useClipboard({ timeout: 1000 });

  return (
    <button onClick={() => clipboard.copy(copyValue)} type="button" className={styles.button}>
      {clipboard.copied ? <Check size={20} color="#FBB26A" /> : <Copy size={20} />}
    </button>
  );
};

export default CopyButton;
