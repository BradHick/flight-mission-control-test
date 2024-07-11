const ApiEndpoints = {
  missions: '/api/v1/missions',
  createMission: () => `/api/v1/missions`,
  findMissionById: (missionId: string) => `/api/v1/missions/${missionId}`,
  deleteMission: (missionId: string) => `/api/v1/missions/${missionId}`,
  updateMission: (missionId: string) => `/api/v1/missions/${missionId}`
}

export default ApiEndpoints
