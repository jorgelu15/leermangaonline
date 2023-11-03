import { useState } from 'react'

import AuthState from './context/auth/authState'
import GruposState from './context/grupos/gruposState'

import Navigator from './navigator/Navigator'
import PerfilState from './context/perfil/perfilState'

function App() {

  return (
    <AuthState>
      <GruposState>
        <PerfilState>

          <Navigator />

        </PerfilState>
      </GruposState>
    </AuthState>
  )
}

export default App
