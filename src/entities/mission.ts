import { MISSION_STATES } from '@/constants'
import Entity from './base'

interface Mission extends Entity {
  id: string
  title: string
  description: string
  status: MISSION_STATES
}

export default Mission
