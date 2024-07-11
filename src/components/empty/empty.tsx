import emptyImage from '@/assets/images/empty.svg'

import * as styles from './empty.styles'

type Props = {
  image?: string
  className?: string
  message: string
}

const Empty = ({ image, className, message }: Props) => (
  <div className={styles.container({ class: className })}>
    <img src={image ?? emptyImage} alt='Empty' />
    <p className={styles.message()}>{message}</p>
  </div>
)

export default Empty
