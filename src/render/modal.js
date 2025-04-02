import { renderLogin } from "./renderLogin";
import '../styleModal.css';
import { renderRegister } from "./renderRegister";

export const modalStart = (elementbyId) => {

  const element = document.querySelector(elementbyId),
        btnIngresar = document.createElement('button'),
        btnRegistro = document.createElement('button'),
        divModal = document.createElement('div');
        
        btnIngresar.id = 'openModal';
        btnIngresar.innerText = 'Ingresar';
        divModal.className = 'modal';  

        btnRegistro.id = 'RegisterModal';
        btnRegistro.innerHTML = 'Registrate';


        btnIngresar.addEventListener('click', () => {
                renderLogin(divModal);
                divModal.style.display = 'flex';
                document.body.appendChild(divModal);
        })

        btnRegistro.addEventListener('click', ()=>{
                renderRegister(divModal);
                divModal.style.display = 'flex';
                document.body.appendChild(divModal);
        })
       
        element.append(btnIngresar);
        element.append(btnRegistro);


        window.addEventListener('click', (event) => {
                if (event.target === divModal) {
                        divModal.style.display = 'none';
                }
        })

}




