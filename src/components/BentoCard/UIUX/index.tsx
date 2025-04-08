import { useState } from 'react';
import BentoCard from '..';
import styles from './styles.module.scss';
import BentoCardDetails from '../BentoCardDetails';

type Props = {
  showDetails: boolean,
  onFocus: () => void,
  onClose: () => void,
}

const text = 'uiux'.split('');

const colors = [
  'light',
  'dark',
]

const detailsParagraphs = [
  'Sou designer de experiência com 3 anos de atuação em projetos digitais, especialmente ferramentas corporativas. Tenho experiência com design systems, prototipação e criação de componentes que equilibram usabilidade e consistência visual.',
  'Me formei em Design Digital em 2024 e sigo combinando prática, pesquisa e empatia para criar experiências centradas nas pessoas.',];

const detailsFooter = <p>
  O design e a implementação deste site foram feitos por mim. Você pode visualizar o protótipo no Figma
  {' '}
  <a
    href='https://www.figma.com/design/nTXnycPlMPCrR4PExQNDAt/Portif%C3%B3lio-2025?m=auto&t=5xbWNlcnaovd4wky-6'
    target='_blank'>
    clicando aqui
  </a>.
</p>


function BentoCardUIUX({ showDetails, onFocus, onClose }: Props) {
  return <BentoCard>
    {
      showDetails
        ?
        <BentoCardDetails
          onClose={onClose}
          title={'UI&UX'}
          paragraphs={detailsParagraphs}
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

  return <p className={colorStyle} onMouseLeave={onMouseLeave}>
    {char}
  </p>

}

export default BentoCardUIUX;