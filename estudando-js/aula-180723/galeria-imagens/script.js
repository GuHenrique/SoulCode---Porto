const imagens = [
  "https://images.unsplash.com/photo-1689101298752-886c970ff200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1688670564879-239883a0e330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=663&q=80",
  "https://images.unsplash.com/photo-1683404633769-a33c656df6a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1688376672114-9f3e0861e195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  "https://images.unsplash.com/photo-1682188299490-1e6e9c98bac8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=690&q=80"
]


let imagem = document.querySelector("#galeria");
let indiceAtual = 1;


function galeria() {
  imagem.src = imagens[indiceAtual];
  if (indiceAtual == (imagens.length - 1)) {
    indiceAtual = 0;
  } else {
    indiceAtual++;
  }
}

setInterval(galeria, 2000);