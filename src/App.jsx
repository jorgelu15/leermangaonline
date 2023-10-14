import { useState } from 'react'

import AuthState from './context/auth/authState'

import Navigator from './navigator/Navigator'

function App() {

  return (
    <AuthState>
      <Navigator/>
    </AuthState> 
  )
}

export default App
