import BentoCard from "..";
import { concatClassName } from "../../../util/style";
import BentoCardDetails from "../BentoCardDetails";
import styles from './styles.module.scss'

type Props = {
  showDetails: boolean,
  onClose: () => void;
  onFocus: () => void;
}

const word = 'development'

const className = (names: string) => concatClassName(styles, names);

const detailsParagraphs = ['Tenho 9 anos de experiência em desenvolvimento de software, atuando principalmente com foco em front-end web.',
  'Tenho amplo domínio de HTML, CSS, JavaScript e TypeScript, além de experiência com frameworks como React e Angular. Trabalho com metodologias ágeis, possuo conhecimento em testes unitários e versionamento com Git. ',
  'Ah, e este site que você está navegando foi desenvolvido por mim. 😊 O projeto está diponível no Github.'
];

function BentoCardDevelopment({ showDetails, onClose, onFocus }: Props) {
  return <BentoCard>
    {showDetails
      ?
      <BentoCardDetails
        onClose={onClose}
        title={"Desenvolvimento"}
        paragraphs={detailsParagraphs} />
      :
      <button className={styles.content} onClick={onFocus}>
        <span className={className('word one')}>{word}</span>
        <span className={className('word two')}>{word}</span>
      </button>
    }
  </BentoCard>
}

export default BentoCardDevelopment