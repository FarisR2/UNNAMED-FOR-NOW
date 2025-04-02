import avatar from '/img/img_avatar2.png'; // Ruta externa ya que no puedo usarlo desde el mismo src idk

export const renderLogin = (element) => {
    const html = `
    <form class="modal-content animate" action="/action_page.php">
        <span class="close">&times;</span>
        <div class="imgcontainer">
            <img src="${avatar}" alt="Avatar" class="avatar">
        </div>
        <div class="container">
            <label for="email"><b>Correo Electrónico</b></label>
            <input type="text" placeholder="Ingrese su correo electrónico" name="email" required>
            <label for="psw"><b>Contraseña</b></label>
            <input type="password" placeholder="Ingresar su contraseña" name="psw" required>
            <button type="submit">Login</button>
            <label>
                <input type="checkbox" checked="checked" name="remember"> Recuerdame
            </label>           
        </div>
    </form>
    `; 
    element.innerHTML = html;

    const closeModal = element.querySelector('.close');
    closeModal.addEventListener('click', () => {
        element.style.display = 'none'; // Ocultar el modal al hacer clic
    });
}
