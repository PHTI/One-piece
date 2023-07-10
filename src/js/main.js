const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
  personagem.addEventListener('mouseenter', () => {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
    personagem.classList.add('selecionado');
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `src/Personagens/${idPersonagem}_full.png`
  console.log(idPersonagem);

  const nomePersongem = document.getElementById('nome-personagem');
  nomePersongem.innerText = personagem.getAttribute('data-name');

  const descricao = document.getElementById('descricao-personagem');
  descricao.innerText = personagem.getAttribute('data-description');
  })  
})


