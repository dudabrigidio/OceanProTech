document.addEventListener('DOMContentLoaded', function() {
    const formCadastro = document.getElementById('form-cadastro');
    const btnCadastrar = document.getElementById('btnCadastrar');

    btnCadastrar.addEventListener('click', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const password = document.getElementById('password').value;

        const usuario = {
            nome: name,
            email: email,
            dataNascimento: date,
            senha: password
        };

        console.log('Usuário criado:', usuario);

       // Lista
       let usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];
       usuariosCadastrados.push(usuario);
       localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));

       console.log('Usuários cadastrados:', usuariosCadastrados);
        
        // Limpar campos
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('date').value = '';
        document.getElementById('password').value = '';

        alert('Usuário cadastrado, faça o login!')
    });
});