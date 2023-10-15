import { useState } from 'react'

import AuthState from './context/auth/authState'
import GruposState from './context/grupos/gruposState'

import Navigator from './navigator/Navigator'

function App() {

  return (
    <AuthState>
      <GruposState>
        
        <Navigator/>
        
      </GruposState>
    </AuthState> 
  )
}

export default App
