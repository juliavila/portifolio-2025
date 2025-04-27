import styles from './styles.module.scss';

function InfinityMarquee({ text }: { text: string }) {
  return <div className={styles['marquee']}>
    <p>
      <span className={styles['text-1']}>
        {text}
      </span>
    </p>
    <p>
      <span className={styles['text-2']}>
        {text}
      </span>
    </p>
  </div>
}

export default InfinityMarquee;