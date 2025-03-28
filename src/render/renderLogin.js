

export const renderModal = (element) => {
    const html = `
        <form class="modal-content animate" action="/action_page.php">
            <div class="imgcontainer">
            <img src="img_avatar2.png" alt="Avatar" class="avatar">
            </div>
        <div class="container">
            <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required>
            <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>
            <button type="submit">Login</button>
            <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
            <span class="close">&times;</span>
        </div>
    `
    element.innerHTML = html;
}