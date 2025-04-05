import BentoCard from "..";
import { concatClassName } from "../../../util/style";
import styles from './styles.module.scss'

const word = 'development'

const className = (names: string) => concatClassName(styles, names);

function BentoCardDevelopment() {
  return <BentoCard className={styles.content}>
    <span className={className('word one')}>{word}</span>
    <span className={className('word two')}>{word}</span>
  </BentoCard>
}

export default BentoCardDevelopment