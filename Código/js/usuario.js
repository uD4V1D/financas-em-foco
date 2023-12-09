function editarPerfil(event) {
  event.preventDefault();

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  let users = JSON.parse(localStorage.getItem('users'));

  if (currentUser && users) {
    const currentUserIndex = users.findIndex(user => user.username === currentUser.username);

    if (currentUserIndex !== -1) {
      const novoLogin = document.getElementById('novoLogin').value;
      const novaSenha = document.getElementById('novaSenha').value;

      users[currentUserIndex].username = novoLogin;
      users[currentUserIndex].password = novaSenha;

      localStorage.setItem('users', JSON.stringify(users));

      currentUser.username = novoLogin;
      currentUser.password = novaSenha;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));

      console.log('Informações do perfil atualizadas com sucesso!');
    } else {
      console.log('Usuário atual não encontrado no array de usuários.');
    }
  } else {
    console.log('Usuário atual ou array de usuários não encontrados.');
  }
}

const editForm = document.getElementById('editForm');
editForm.addEventListener('submit', editarPerfil);
