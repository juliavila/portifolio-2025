export function concatClassName(styles: { [key: string]: string }, classes: string) {
  return classes.split(' ').reduce((previous, current) =>
    `${previous} ${styles[current]}`, ''
  )
}