import { MISSION_STATES, dndItemTypes } from '@/constants'
import * as styles from './mission-list.styles'
import { useDrop } from 'react-dnd'
import { Mission } from '@/entities'
import { choose, otherwise, when } from '@/helpers'
import MissionCard from '../mission-card'
import { Empty } from '@/components'
import MissionCardsSkeleton from '../mission-cards-skeleton'

type Props = {
  missions: Mission[]
  listTitle: string,
  identifier: MISSION_STATES,
  onDrop: (id: string, missionStatus: MISSION_STATES) => void,
  onDelete: (id: string) => void,
  missionsIsLoading: boolean,
  missionsHasError: boolean
}

const MissionList = ({
  missions,
  listTitle,
  identifier,
  onDrop,
  onDelete,
  missionsIsLoading,
  missionsHasError
}: Props) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: dndItemTypes.MISSION,
    drop: () => ({ identifier }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  return (
    <div ref={drop} className={styles.column({ isOver })} data-testid="dustbin">
      <div className={styles.columnHeader()}>
        <h1 className={styles.columnTitle()}>{listTitle} ({missions.length})</h1>
      </div>
      <div className={styles.missionsList()}>
        {choose(
          when(missionsIsLoading, () => <MissionCardsSkeleton />),
          when(missionsHasError, () => <div>Error</div>),
          when(missions.length === 0, () => (
            <Empty
              className={styles.emptyMissions()}
              message='No missions yet.'
            />
          )),
          otherwise(() => (
            <>
              {missions.map(mission => (
                <MissionCard mission={mission} onDrop={onDrop} onDelete={() => onDelete(mission.id)} key={mission.id} />
              ))}
            </>
          ))
        )}
      </div>
    </div>
  )
}

export default MissionList
