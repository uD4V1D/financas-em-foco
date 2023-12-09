document.addEventListener("DOMContentLoaded", () => {
    const noticiasContainer = document.getElementById("noticias-container");

    const exibirNoticias = () => {
        const noticias = JSON.parse(localStorage.getItem("noticias") || "[]");
        noticiasContainer.innerHTML = "";

        noticias.forEach(noticia => {
            const divNoticia = document.createElement("div");
            divNoticia.className = "noticia";

            const iframe = document.createElement("iframe");
            iframe.src = noticia.urlVideo;
            iframe.title = noticia.titulo;

            const h2 = document.createElement("h2");
            h2.textContent = noticia.titulo;

            const p = document.createElement("p");
            p.textContent = noticia.descricao;

            const btnEditar = document.createElement("button");
            btnEditar.textContent = "Editar";
            btnEditar.onclick = () => carregarNoticiaParaEdicao(noticia.titulo);

            const btnRemover = document.createElement("button");
            btnRemover.textContent = "Remover";
            btnRemover.onclick = () => removerNoticia(noticia.titulo);

            divNoticia.appendChild(iframe);
            divNoticia.appendChild(h2);
            divNoticia.appendChild(p);
            divNoticia.appendChild(btnEditar);
            divNoticia.appendChild(btnRemover);
            noticiasContainer.appendChild(divNoticia);
        });
    };

    const removerNoticia = titulo => {
        const noticias = JSON.parse(localStorage.getItem("noticias") || "[]");
        const noticiasAtualizadas = noticias.filter(n => n.titulo !== titulo);
        localStorage.setItem("noticias", JSON.stringify(noticiasAtualizadas));
        exibirNoticias();
    };

    const carregarNoticiaParaEdicao = titulo => {
        window.location.href = '../noticeForm.html?titulo=' + encodeURIComponent(titulo);
    };

    exibirNoticias();
});
