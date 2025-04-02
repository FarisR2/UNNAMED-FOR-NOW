import './style.css'
import unasLogo from './unasLogo.svg'
import { modalStart } from './render/modal'

document.querySelector('#app').innerHTML = `
    <a href="https://portalweb.unas.edu.pe/" target="_blank">
      <img src="${unasLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>UNAS</h1>
    <div class="card">
    </div>
    <p class="read-the-docs">
      Sistema Academico Universidad Agraria de la Selva
    </p>
  </div>
`
modalStart('.card')
