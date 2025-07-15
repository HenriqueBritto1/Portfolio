function showDetails(id) {
  document.getElementById(id).style.display = 'block';
}

function closeDetails(id) {
  document.getElementById(id).style.display = 'none';
}

function submitForm(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const resposta = document.getElementById('resposta');

  if (!nome || !email || !mensagem) {
    resposta.textContent = 'Por favor, preencha todos os campos.';
    resposta.style.color = 'red';
    return;
  }

  // Exemplo fictício: apenas exibe mensagem, não envia nada
  resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi recebida.`;
  resposta.style.color = 'green';

  // Limpa o formulário
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('mensagem').value = '';
}
