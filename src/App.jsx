import { useState } from 'react'

import AuthState from './context/auth/authState'
import GruposState from './context/grupos/gruposState'

import Navigator from './navigator/Navigator'
import PerfilState from './context/perfil/perfilState'
import DirectorioState from './context/directorio/directorioState'
import SerieState from './context/serie/serieState'
import GeneroState from './context/genero/generoState'

function App() {

  return (
    <AuthState>
      <GruposState>
        <PerfilState>
          <DirectorioState>
            <SerieState>
              <GeneroState>

                <Navigator />

              </GeneroState>
            </SerieState>
          </DirectorioState>
        </PerfilState>
      </GruposState>
    </AuthState>
  )
}

export default App
