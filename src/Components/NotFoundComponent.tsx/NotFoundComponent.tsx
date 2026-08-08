import {Text} from '../../Components/Text/Text'
import styles from './NotFoundComponent.module.css'

export const NotFoundComponent = () => {
  return (
    <div className={styles['not-found-cont']}>
        <Text variant={'h1'}>Page not found </Text>
    </div>
  )
}
