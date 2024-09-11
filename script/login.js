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

        // Verifica se a resposta foi bem-sucedida (status 200-299)
        if (response.ok) {
            const data = await response.json();
            console.log('Login bem-sucedido:', data);

            localStorage.setItem('authToken', data.token);
            window.location.href = 'index.html';
        } else {
            const errorMessage = await response.text(); 
            const errorMessageDiv = document.getElementById('error-message');
            errorMessageDiv.textContent = errorMessage || 'Erro ao fazer login.';
            errorMessageDiv.classList.remove('hidden');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        const errorMessageDiv = document.getElementById('error-message');
        errorMessageDiv.textContent = 'Erro de conexão. Tente novamente mais tarde.';
        errorMessageDiv.classList.remove('hidden');
    }
});
