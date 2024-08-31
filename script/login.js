document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    //campo precisa ser o mesmo nome que vai receber por parametro no back-end
    const login = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:8080/usuario/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login, senha })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Login bem-sucedido:', data);

            localStorage.setItem('authToken', data.token);
            window.location.href = 'index.html';
        } else {
            alert('Falha no login. Verifique seu usuário e senha.');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Erro de conexão. Tente novamente mais tarde.');
    }
});
