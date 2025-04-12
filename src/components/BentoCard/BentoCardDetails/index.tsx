import { ReactElement } from 'react';
import Button from '../../Button';
import styles from './styles.module.scss';

type Props = {
  onClose: () => void;
  title: string;
  paragraphs: string[];
  footer?: ReactElement;
}

function BentoCardDetails({ onClose, title, paragraphs, footer }: Props) {
  return <div className={styles.details}>
    <div className={styles.header}>
      <Button onClick={onClose}>back</Button>
    </div>
    <div className={styles.content}>
      <h2>{title}</h2>
      {paragraphs.map(p => <p key='p'>{p}</p>)}
      {footer &&
        <div className={styles.footer}>{footer}</div>
      }
    </div>
  </div>
}

export default BentoCardDetails;