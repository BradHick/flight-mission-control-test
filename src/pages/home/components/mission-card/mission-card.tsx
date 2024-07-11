import { Mission } from '@/entities'
import { FiTrash2 } from 'react-icons/fi';
import * as styles from './mission-card.styles'

import { useDrag } from 'react-dnd'
import { MISSION_STATES, dndItemTypes } from '@/constants';

type Props = {
  mission: Mission,
  onDrop: (id: string, missionStatus: MISSION_STATES) => void
  onDelete: () => void
}

interface DropResult {
  identifier: MISSION_STATES
}

const MissionComponent = ({
  mission,
  onDrop,
  onDelete
}: Props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: dndItemTypes.MISSION,
    item: { missionId: mission.id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>()
      if (item && dropResult) {
        onDrop(mission.id, dropResult.identifier)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  return (
    <div
      ref={drag}
      className={styles.container({ status: mission.status })}
      data-testid={`box`}
    >
      <div className={styles.header()}>
        <div>{mission.title}</div>
        <div onClick={onDelete}><FiTrash2 size={14}></FiTrash2></div>
      </div>
      <div>
        {mission.description}
      </div>
    </div>
  )
}

export default MissionComponent
