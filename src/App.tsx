import { Provider } from 'react-redux'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Home from './pages/home'
import store from './store'



const App = () => (
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <Home />
    </DndProvider>
  </Provider>
)

export default App
