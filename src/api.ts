import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ApiEndpoints, BASE_URL } from './constants'
import { CreateMissionRequest, Mission } from './entities'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*/*');
      return headers;
    }
  }),
  endpoints: builder => ({
    missions: builder.query<Mission[], void>({
      query: () => ApiEndpoints.missions
    }),

    findMissionById: builder.query<Mission[], string>({
      query: (missionId: string) => ApiEndpoints.findMissionById(missionId)
    }),

    createMission: builder.mutation<Mission, Omit<CreateMissionRequest, 'id'>>({
      query: (newMission) => ({
        url: ApiEndpoints.createMission(),
        method: 'POST',
        body: newMission
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        const { data: newMission } = await queryFulfilled
        dispatch(
          api.util.updateQueryData('missions', undefined, state =>
            state.concat([newMission])
          )
        )
      },
    }),

    deleteMission: builder.mutation<void, string>({
      query: (missionId) => {
        return ({
          url: ApiEndpoints.deleteMission(missionId),
          method: 'DELETE'
        })
      },
      async onQueryStarted(id, { queryFulfilled, dispatch }) {
        await queryFulfilled
        dispatch(
          api.util.updateQueryData('missions', undefined, state =>
            state.filter(mission => mission.id !== id)
          )
        )
      }
    }),

    updateMissionState: builder.mutation<Mission, { id: string; missionStatus: string }>({
      query: ({ id, missionStatus }) => {
        return ({
          url: ApiEndpoints.updateMission(id),
          method: 'PUT',
          body: { status: missionStatus }
        })
      },
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        const { data: updatedMission } = await queryFulfilled
        dispatch(
          api.util.updateQueryData('missions', undefined, state =>
            state.map(mission =>
              mission.id === updatedMission.id ? updatedMission : mission
            )
          )
        )
      },
    })
  })
})

export default api
