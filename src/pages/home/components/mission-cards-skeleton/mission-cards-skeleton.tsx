import * as styles from './mission-cards-skeleton.styles'

const MissionCardSkeleton = () => (
  <div className={styles.container()} data-testid='post-card-skeleton'>
    <div className={styles.title()} />
    <div className={styles.body()} />
    <div className={styles.body()} />

    <div className={styles.userInfoContainer()}>
      <div className={styles.userPhotoContainer()}>
        <div className={styles.userPhoto()} />
      </div>

      <div className={styles.userNameContainer()}>
        <div className={styles.userName()} />
      </div>
    </div>
  </div>
)

const MissionCardsSkeleton = () =>
  Array(4)
    .fill('')
    .map((_, index) => <MissionCardSkeleton key={index} />)

export default MissionCardsSkeleton
