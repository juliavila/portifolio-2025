import { useState } from 'react';
import BentoCard from '..';
import styles from './styles.module.scss';

const text = 'uiux'.split('');

const colors = [
  'light',
  'dark',
]


function BentoCardUIUX({ showDetails }: { showDetails: boolean }) {
  return <BentoCard>
    {
      showDetails ? <div>details</div> :
        <div className={styles.container}>
          {text.map(characeter)}
        </div>
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