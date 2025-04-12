import { useContext } from "react";
import BentoCard from "..";
import { InternacionalizationContext } from "../../../context/internacionalizationContext";
import texts from "../../../internationalization/texts";
import BentoCardDetails from "../BentoCardDetails";
import styles from './styles.module.scss'

type Props = {
  showDetails: boolean,
  onClose: () => void;
  onFocus: () => void;
}

const word = 'development'

function BentoCardDevelopment({ showDetails, onClose, onFocus }: Props) {
  const { language } = useContext(InternacionalizationContext);

  const [var1, var2] = texts.bentoCard.development.details.footer.text[language].split('#replace#');

  const detailsFooter =
    <p>
      {var1}
      <a
        href="https://github.com/juliavila/portifolio-2025"
        target="_blank"
      >
        Github
      </a>
      {var2}
    </p>

  return <BentoCard>
    {showDetails
      ?
      <BentoCardDetails
        onClose={onClose}
        title={texts.bentoCard.development.details.title[language]}
        paragraphs={texts.bentoCard.development.details.paragraphs[language]}
        footer={detailsFooter}
      />
      :
      <button className={styles.content} onClick={onFocus}>
        <span className={`${styles.word} ${styles.one}`}>{word}</span>
        <span className={`${styles.word} ${styles.two}`}>{word}</span>
      </button>
    }
  </BentoCard>
}

export default BentoCardDevelopment