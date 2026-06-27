const radios = [
  {
    nome: "Cidade FM",
    url: "https://stream-ssl.arenaradiocast.com/cidade"
  },
  {
    nome: "Rádio Comercial",
    url: "https://stream-ssl.arenaradiocast.com/comercial"
  },
  {
    nome: "M80",
    url: "https://stream-ssl.arenaradiocast.com/m80"
  }
];

const lista = document.getElementById("listaRadios");
const player = document.getElementById("player");
const pesquisa = document.getElementById("pesquisa");

function mostrarRadios(filtro = "") {
  lista.innerHTML = "";

  radios
    .filter(r => r.nome.toLowerCase().includes(filtro.toLowerCase()))
    .forEach(radio => {

      const div = document.createElement("div");
      div.className = "radio";

      div.innerHTML = `
        <span>📻 ${radio.nome}</span>
        <button>Ouvir</button>
      `;

      div.querySelector("button").onclick = () => {
        player.src = radio.url;
        player.play();
      };

      lista.appendChild(div);
    });
}

pesquisa.addEventListener("input", e => {
  mostrarRadios(e.target.value);
});

mostrarRadios();