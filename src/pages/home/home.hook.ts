import { useState } from 'react'
import api from '../../api'

import { MISSION_STATES } from '@/constants'

const useHome = () => {
  const [showModal, setShowModal] = useState(false)

  const {
    data: missions = [],
    isError: missionsHasError,
    isLoading: missionsIsLoading
  } = api.useMissionsQuery()


  const [
    updateMissionState
  ] = api.useUpdateMissionStateMutation({})

  const onUpdateMission = async (
    id: string,
    missionStatus: MISSION_STATES
  ) => {
    updateMissionState({
      id,
      missionStatus
    })
  }

  const [
    createMissionState
  ] = api.useCreateMissionMutation({})

  const onCreateMission = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    await createMissionState({
      title: data.get('title') as string,
      description: data.get('description') as string
    })

    setShowModal(false)
  }

  const [
    deleteMission
  ] = api.useDeleteMissionMutation({})

  return {
    state: {
      showModal,
      missionsIsLoading: missionsIsLoading,
      missionsHasError: missionsHasError,
      missions: missions,
    },
    actions: {
      onUpdateMission,
      onDeleteMission: deleteMission,
      onCreateMission,
      setShowModal
    }
  }
}

export default useHome
