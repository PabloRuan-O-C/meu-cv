document.addEventListener("DOMContentLoaded", () => {
  // 1. Alternador de Tema (Modo Escuro / Claro)
  const btnTema = document.getElementById("btn-tema");

  if (btnTema) {
    const iconeTema = btnTema.querySelector("i");

    btnTema.addEventListener("click", () => {
      document.body.classList.toggle("modo-claro");

      // Troca o ícone de Lua para Sol
      if (document.body.classList.contains("modo-claro")) {
        iconeTema.classList.remove("fa-moon");
        iconeTema.classList.add("fa-sun");
      } else {
        iconeTema.classList.remove("fa-sun");
        iconeTema.classList.add("fa-moon");
      }
    });
  }

  // 2. Copiar E-mail
  const btnCopiar = document.getElementById("btn-copiar");
  const emailTexto = document.getElementById("email-texto")?.innerText;
  const avisoCopiado = document.getElementById("aviso-copiado");

  if (btnCopiar && emailTexto) {
    btnCopiar.addEventListener("click", () => {
      navigator.clipboard.writeText(emailTexto);
      if (avisoCopiado) {
        avisoCopiado.style.display = "inline";
        setTimeout(() => {
          avisoCopiado.style.display = "none";
        }, 2000);
      }
    });
  }
});
