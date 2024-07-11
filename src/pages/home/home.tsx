import useHome from './home.hook'
import * as styles from './home.styles'
import { MISSION_STATES } from '@/constants'
import MissionList from './components/mission-list'

const Home = () => {
  const { state, actions } = useHome()

  return (
    <div className={styles.page()}>
      <div className={styles.pageHeader()}>
        <div>
          Flight Mission Controll Tool
        </div>
        <button
          type="button"
          onClick={() => actions.setShowModal(true)}
          className="px-4 py-2 bg-gray-300 rounded-md text-gray-700 hover:bg-gray-400"
        >
           Add Mission
        </button>
      </div>

      {state.showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-lg font-semibold text-gray-700">Title - Mission</h2>
              <button onClick={() => actions.setShowModal(false)} className="text-gray-700 font-semibold hover:text-gray-900">&times;</button>
            </div>
            <form id="form" onSubmit={actions.onCreateMission} className="mt-4">
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <input
                  type="text"
                  name="description"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </form>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={() => actions.setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-md text-gray-700 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                form="form"
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={styles.container()}>
        <MissionList
          listTitle='Pre-Flight'
          identifier={MISSION_STATES.PRE_FLIGHT}
          onDrop={actions.onUpdateMission}
          onDelete={actions.onDeleteMission}
          missionsHasError={state.missionsHasError}
          missionsIsLoading={state.missionsIsLoading}
          missions={
            state.missions.filter(mission => mission.status == MISSION_STATES.PRE_FLIGHT)
          }
        />

        <MissionList
          listTitle='Flight'
          identifier={MISSION_STATES.FLIGHT}
          onDrop={actions.onUpdateMission}
          onDelete={actions.onDeleteMission}
          missionsHasError={state.missionsHasError}
          missionsIsLoading={state.missionsIsLoading}
          missions={
            state.missions.filter(mission => mission.status == MISSION_STATES.FLIGHT)
          }
        />

        <MissionList
          listTitle='Post-Flight'
          identifier={MISSION_STATES.POST_FLIGHT}
          onDrop={actions.onUpdateMission}
          onDelete={actions.onDeleteMission}
          missionsHasError={state.missionsHasError}
          missionsIsLoading={state.missionsIsLoading}
          missions={
            state.missions.filter(mission => mission.status == MISSION_STATES.POST_FLIGHT)
          }
        />
      </div>
    </div>
  )
}

export default Home
