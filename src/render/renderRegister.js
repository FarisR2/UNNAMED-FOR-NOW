export const renderRegister = (element) => {
    const html = `
    <form class="modal-content animate">
        <span class="close">&times;</span>
        <div class="container">
            <label for="user-name"><b>Nombre de usuario</b></label>
            <input type="text" placeholder="Ingrese su nombre de usuario" name="user-name" required></br>

            <label for="psw"><b>Contraseña nueva</b></label>
            <input type="password" placeholder="Ingrese la contraseña nueva" name="psw" required></br>

            <label for="rp-psw"><b>Repetir la contraseña</b></label>
            <input type="password" placeholder="Vuelva a ingresar la contraseña" name="rp-psw" required></br>

            <button type="submit">Registrar</button>
        </div>
    </form>
    `;

    element.innerHTML = html;

    const closeModal = element.querySelector('.close');
    closeModal.addEventListener('click', () => {
        element.style.display = 'none'; // Ocultar el modal al hacer clic
    });
}