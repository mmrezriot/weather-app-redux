import { useState } from 'react'
import Weather from './components/Weather'
import { Provider } from 'react-redux'
import Store from './redux/store.js'

function App() {

  return (
    <Provider store={Store} >
    <Weather/>
    </Provider>
  )
}

export default App
