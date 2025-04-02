export const renderRegister = (element) => {
    const html = `
    <form class="modal-content animate">
        <span class="close">&times;</span>
        <div class="container">
            <label for="email-reg"><b>Correo Electrónico</b></label>
            <input type="text" placeholder="Ingrese su correo electrónico" name="email-reg" required></br>

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