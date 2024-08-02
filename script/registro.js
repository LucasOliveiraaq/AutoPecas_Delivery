/*
   Validar se os password tem coincidência, se estiver tudo certo vai salvar no localstorage 
   e direcionar para pagina de login.
   
   registro.html
*/
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirmed = document.getElementById('passwordConfirmed').value;

    if (password !== passwordConfirmed) {
        alert('As senhas não coincidem');
        return;
    }

    const user = { username, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Usuário registrado com sucesso');
    window.location.href = 'login.html';
});