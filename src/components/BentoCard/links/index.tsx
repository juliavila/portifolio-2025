import BentoCard from "..";

import styles from './styles.module.scss';

type Links = Record<'name' | 'url', string>

const links: Links[] = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/juliavila/'
  },
  {
    name: 'github',
    url: 'https://github.com/juliavila'
  },
  {
    name: 'behance',
    url: 'https://www.behance.net/julia_vila'
  },
  {
    name: 'codepen',
    url: 'https://codepen.io/juliavila'
  }
]

function BentoCardLinks() {

  return <BentoCard className={styles.links}>
    <div className={styles.content}>
      {links.map(link =>
        <a key={link.name} className={styles.link} target="_blank" href={link.url}>
          {link.name}
        </a>
      )}
    </div>
  </BentoCard>
}

export default BentoCardLinks