import { renderLogin } from "../render/renderLogin";
import '../styleModal.css';
import { renderRegister } from "../render/renderRegister";

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
                window.history.pushState({}, '', '/login')
        })

        btnRegistro.addEventListener('click', ()=>{
                renderRegister(divModal);
                divModal.style.display = 'flex';
                document.body.appendChild(divModal);
                window.history.pushState({}, '', '/register');
        })
       
        element.append(btnIngresar);
        element.append(btnRegistro);


        window.addEventListener('click', (event) => {
                if (event.target === document.body) { // Permite cerrar el modal, dando click en cualquier parte del body
                        divModal.style.display = 'none';
                }
        })

}




