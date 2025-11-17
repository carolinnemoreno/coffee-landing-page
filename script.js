function mostrarCafe(tipo) {
  const cafes = document.querySelectorAll('.coffee');

  cafes.forEach(cafe => {
    if (cafe.classList.contains(tipo)) {
      cafe.style.display = 'block';
    } else {
      cafe.style.display = 'none';
    }
  });
}

function AddCarrinho(nome, preco,imagem){
   let order = JSON.parse(localStorage.getItem('order')) || [];

  // Adiciona o novo item
  order.push({ nome: nome, preco: preco, imagem: imagem });

  // Salva de volta no localStorage
  localStorage.setItem('order', JSON.stringify(order));

  alert('Produto adicionado ao carrinho!');

}
