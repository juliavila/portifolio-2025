import { useContext, useState } from 'react';
import BentoCard from '../../components/BentoCard'
import Header from '../../components/Header';
import styles from './styles.module.scss'
import texts from '../../internationalization/texts';
import { InternacionalizationContext } from '../../context/internacionalizationContext';

const ANIMATION_DURATION = 300;

type statusTypes = 'idle' | 'focused' | 'hidden';
type animationTypes = 'ease-in' | 'ease-out';
type cardsTypes = 'perfil' | 'links' | 'uiux' | 'development';
type cardConfig = Record<cardsTypes, { status: statusTypes, animation: animationTypes }>

function getAllCards(status: statusTypes, animation: animationTypes): cardConfig {
  return {
    perfil: {
      status,
      animation
    },
    links: {
      status,
      animation
    },
    uiux: {
      status,
      animation
    },
    development: {
      status,
      animation
    }
  }
};

export const BentoHome = () => {
  const { language } = useContext(InternacionalizationContext);

  const [cardStatus, setCardStatus] = useState<cardConfig>(getAllCards('idle', 'ease-in'));
  const [focused, setFocused] = useState<cardsTypes | undefined>();

  function getShowDetails(key: cardsTypes) {
    return cardStatus[key].status === 'focused'
  }

  function focusCard(key: cardsTypes) {
    setCardStatus(getAllCards('idle', 'ease-out'))

    setTimeout(() => {
      setFocused(key);
      setCardStatus({
        ...getAllCards('hidden', 'ease-out'), [key]: {
          status: 'focused',
          animation: 'ease-in'
        }
      })
    }, ANIMATION_DURATION);
  }

  function reestartCards() {
    if (focused) {
      setFocused(undefined);

      setCardStatus((current) => ({
        ...current, [focused]: {
          status: 'focused',
          animation: 'ease-out'
        }
      }));

      setTimeout(() => {
        setCardStatus(getAllCards('idle', 'ease-in'))
      }, ANIMATION_DURATION);
    }
  }

  return <div className={styles['bento-home']}>
    <div className={styles.content}>

      <Header goToHome={reestartCards} />

      <div className={styles['deck-container']}>
        <div className={styles.deck}>
          <div
            card-status={cardStatus.perfil.status}
            card-animation={cardStatus.perfil.animation}
            className={`${styles.card} ${styles.perfil}`}
          >
            <BentoCard.Perfil
              showDetails={getShowDetails('perfil')}
              onClose={reestartCards}
              onFocus={() => focusCard('perfil')}
            />
          </div>

          <div
            card-status={cardStatus.uiux.status}
            card-animation={cardStatus.uiux.animation}
            className={`${styles.card} ${styles.uiux}`}
          >
            <BentoCard.UIUX
              showDetails={getShowDetails('uiux')}
              onClose={reestartCards}
              onFocus={() => focusCard('uiux')}
            />
          </div>

          <div
            card-status={cardStatus.development.status}
            card-animation={cardStatus.development.animation}
            className={`${styles.card} ${styles.development}`}
          >
            <BentoCard.Development
              showDetails={getShowDetails('development')}
              onClose={reestartCards}
              onFocus={() => focusCard('development')}
            />
          </div>

          <div
            card-status={cardStatus.links.status}
            card-animation={cardStatus.links.animation}
            className={`${styles.card} ${styles.links}`}
          >
            <BentoCard.Links />
          </div>
        </div>
      </div>

      <p className={styles.footer}>
        {texts.foooter[language]}
      </p>
    </div>
  </div >
}