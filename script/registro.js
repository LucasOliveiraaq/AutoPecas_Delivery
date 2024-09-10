document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const login = document.getElementById('username').value;
    const senha = document.getElementById('password').value;
    const passwordConfirmed = document.getElementById('passwordConfirmed').value;
    const email = document.getElementById('email').value;

    if (senha !== passwordConfirmed) {
        alert('As senhas não coincidem');
        return;
    }

    try {
        const response = await fetch('http://localhost:8080/usuario/login/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login, senha, email })
        });

        const responseText = await response.text();  

        if (response.ok) {
            console.log('Registro bem-sucedido:', responseText);
            alert(responseText);

            window.location.href = 'login.html';
        } else {
            console.error('Falha no registro:', responseText);
            alert('Falha no registro: ' + responseText);
        }
    } catch (error) {
        console.error('Erro ao fazer o registro do usuário:', error);
        alert('Erro de conexão. Tente novamente mais tarde.');
    }
});
