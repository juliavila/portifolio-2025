import { useContext, useState } from 'react';
import BentoCard from '..';
import styles from './styles.module.scss';
import BentoCardDetails from '../BentoCardDetails';
import texts from '../../../internationalization/texts';
import { InternacionalizationContext } from '../../../context/internacionalizationContext';

type Props = {
  showDetails: boolean,
  onFocus: () => void,
  onClose: () => void,
}

const text = 'uiux'.split('');

const colors = [
  'light',
  'dark',
];

function BentoCardUIUX({ showDetails, onFocus, onClose }: Props) {
  const { language } = useContext(InternacionalizationContext);

  const [var1, var2] = texts.bentoCard.uiux.details.footer.text[language].split('#replace#');

  const detailsFooter = <p>
    {var1}
    <a
      href='https://www.figma.com/design/nTXnycPlMPCrR4PExQNDAt/Portif%C3%B3lio-2025?m=auto&t=5xbWNlcnaovd4wky-6'
      target='_blank'>
      {texts.bentoCard.uiux.details.footer.link[language]}
    </a>{var2}
  </p>

  return <BentoCard>
    {
      showDetails
        ?
        <BentoCardDetails
          onClose={onClose}
          title={'UI&UX'}
          paragraphs={texts.bentoCard.uiux.details.paragraphs[language]}
          footer={detailsFooter}
        />
        :
        <button className={styles.container} onClick={onFocus}>
          {text.map(characeter)}
        </button>
    }
  </BentoCard>
}

function characeter(char: string, index: number) {
  const [isDark, setIsDark] = useState<boolean>(index > 1);

  const colorStyle = styles[colors[Number(isDark)]]

  const onMouseLeave = () => setIsDark(current => !current)

  return <p
    key={`${char}${index}`}
    className={colorStyle}
    onMouseLeave={onMouseLeave}>
    {char}
  </p>

}

export default BentoCardUIUX;