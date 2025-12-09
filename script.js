$(document).ready(function() {
    
    // --- Lógica de Toggle (Alternância) entre Login e Cadastro ---
    // Ao clicar em "Criar conta"
    $('#btn-show-register').click(function(e) {
        
        // Esconde o Login deslizando para cima
        $('#login-box').slideUp(400, function() {
            // Mostra o Cadastro deslizando para baixo após o login sumir
            $('#register-box').slideDown(400);
        });
    });

    // Ao clicar em "Já tenho login"
    $('#btn-show-login').click(function(e) {
        // Esconde o Cadastro
        $('#register-box').slideUp(400, function() {
            // Mostra o Login
            $('#login-box').slideDown(400);
        });
    });

    // --- Lógica de Validação de Login ---
    const loginForm = document.getElementById('form-login');

    if(loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const user = document.getElementById('login-user').value;
            const pass = document.getElementById('login-pass').value;

            // Validação fixa
            if (user === 'admin' && pass === '123456') {
                // Sucesso
                alert('Login realizado com sucesso! Redirecionando...');
                window.location = 'index.html';
            } else {
                // Erro
                alert('Dados incorretos. Tente: admin / 123456');
            }
        });
    }
});