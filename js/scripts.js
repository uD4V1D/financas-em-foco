document.addEventListener("DOMContentLoaded", () => {
    const initializeAdmin = () => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const adminExists = users.some(user => user.username === 'admin' && user.isAdmin);

        if (!adminExists) {
            registerUser('admin', 'admin123', true);
        }
    };

    const registerUser = (username, password, isAdmin = false) => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push({
            username,
            password,
            isAdmin
        });
        localStorage.setItem('users', JSON.stringify(users));
    };

    const isUserRegistered = (username) => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        return users.some(user => user.username === username);
    };

    const validateLogin = (username, password) => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(user => user.username === username && user.password === password);
        return user ? user : null;
    };

    document.getElementById('cadastro').addEventListener('click', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        if (!username || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (isUserRegistered(username)) {
            alert('Usuário já cadastrado.');
            return;
        }

        registerUser(username, password);
        alert('Usuário cadastrado com sucesso.');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    });

    document.getElementById('acessar-botao').addEventListener('click', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        const user = validateLogin(username, password);
        if (user) {
            alert('Login bem sucedido!');
            localStorage.setItem('isAdminLoggedIn', user.isAdmin ? 'true' : 'false');
            window.location.href = '/home.html';
        } else {
            alert('Usuário ou senha inválidos.');
        }
    });

    const toggleAdminContent = () => {
        const isAdmin = localStorage.getItem('isAdminLoggedIn');
        
        if (isAdmin === 'true') {
            const cadastroNoticiasLink = document.getElementById('cadastroNoticiasLink');
            if (cadastroNoticiasLink) {
                cadastroNoticiasLink.style.display = 'block';
            }
        }
    };

    initializeAdmin();
    toggleAdminContent();
});
