document.addEventListener('DOMContentLoaded', function() {
    const formLogin = document.getElementById('form-login');
    const btnCadastrar = document.getElementById('btnCadastrar');

    btnLogin.addEventListener('click', function(event) {
        event.preventDefault();

        const email = document.getElementById('login-email').value;
        const senha = document.getElementById('login-senha').value;

        let usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];
        let usuarioEncontrado = usuariosCadastrados.find(usuario => usuario.email === email && usuario.senha === senha);

        if (usuarioEncontrado) {
            alert('Login bem-sucedido!');


            // ARedirecionar
            window.location.href = "../pages/voluntariado.html";
        } else {
            alert('E-mail ou senha incorretos. Por favor, tente novamente.');
        }
    });
});
