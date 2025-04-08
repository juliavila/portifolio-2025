import Button from '../../Button';
import styles from './styles.module.scss';

type Props = {
  onClose: () => void;
  title: string;
  paragraphs: string[]
}

function BentoCardDetails({ onClose, title, paragraphs }: Props) {
  return <div className={styles.details}>
    <div className={styles.header}>
      <Button onClick={onClose}>back</Button>
    </div>
    <div className={styles.content}>
      <h2>{title}</h2>
      {paragraphs.map(p => <p>{p}</p>)}
    </div>
  </div>
}

export default BentoCardDetails;