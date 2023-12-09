document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("noticiaForm");
  const tituloInput = document.getElementById("titulo");
  const descricaoInput = document.getElementById("descricao");
  const urlVideoInput = document.getElementById("urlVideo");
  const editIndexInput = document.getElementById("editIndex");

  const getParameterByName = (name, url = window.location.href) => {
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };

  const carregarDadosParaEdicao = () => {
    const titulo = getParameterByName("titulo");
    if (titulo) {
      const noticias = JSON.parse(localStorage.getItem("noticias") || "[]");
      const noticiaIndex = noticias.findIndex((n) => n.titulo === titulo);
      if (noticiaIndex !== -1) {
        const noticia = noticias[noticiaIndex];
        tituloInput.value = noticia.titulo;
        descricaoInput.value = noticia.descricao;
        urlVideoInput.value = noticia.urlVideo;
        editIndexInput.value = noticiaIndex;
      }
    }
  };

  const salvarNoticia = () => {
    const titulo = tituloInput.value;
    const descricao = descricaoInput.value;
    const urlVideo = urlVideoInput.value;
    const editIndex = editIndexInput.value;
    const noticias = JSON.parse(localStorage.getItem("noticias") || "[]");

    if (editIndex !== "-1") {
      noticias[editIndex] = { titulo, descricao, urlVideo };
    } else {
      noticias.push({ titulo, descricao, urlVideo });
    }

    localStorage.setItem("noticias", JSON.stringify(noticias));
    alert("Notícia salva com sucesso!");
    form.reset();
    window.location.href = "../noticias.html";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    salvarNoticia();
  });

  carregarDadosParaEdicao();
});
