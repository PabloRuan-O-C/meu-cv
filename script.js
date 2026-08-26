document.addEventListener("DOMContentLoaded", () => {
  // Dicionário de Traduções
  const traducoes = {
    pt: {
      profissao: "Estudante de Sistemas de Informação",
      "titulo-contato": "Contato",
      "label-email": "Email:",
      "label-telefone": "Telefone:",
      "label-cidade": "Cidade:",
      "val-cidade": "Machado - MG",
      "aviso-copiado": "Copiado!",
      "titulo-sobre": "Sobre Mim",
      "texto-sobre":
        "Estudante de graduação no IFSULDEMINAS - Campus Machado. Focado em desenvolvimento web Front-End e evolução constante em programação.",
      "menu-objetivo": "Objetivo",
      "menu-formacao": "Formação",
      "menu-projetos": "Projetos",
      "menu-habilidades": "Habilidades",
      "menu-outros": "Outros",
      "btn-pdf": "Baixar PDF",
      "titulo-objetivo": "Objetivo Profissional",
      "texto-objetivo":
        "Estudante no 4º período com foco em desenvolvimento Web e Engenharia de Software. Busco oportunidades de estágio para aplicar conhecimentos em projetos práticos e evoluir na área de tecnologia.",
      "titulo-formacao": "Formação Acadêmica",
      "label-instituicao": "Instituição:",
      "label-curso": "Curso:",
      "val-curso": "Bacharelado em Sistemas de Informação.",
      "label-periodo": "Período:",
      "val-periodo": "2025 - 2028 (Previsão de Término)",
      "label-disciplinas": "Disciplinas Relevantes:",
      "val-disciplinas":
        "Algoritmos e Estrutura de Dados, Engenharia de Software, Tecnologias Web I.",
      "titulo-projetos": "Projetos e Experiências",
      "proj-titulo": "Projeto: Currículo Web Interativo (2025)",
      "proj-desc":
        "Desenvolvimento de página web responsiva em HTML5, CSS3 Grid e JS para a disciplina de Web I, contemplando alternância de temas e manipulação dinâmica do DOM.",
      "titulo-habilidades": "Habilidades Técnicas",
      "label-linguagens": "Linguagens:",
      "val-linguagens":
        "HTML5, CSS3, JavaScript (Intermediário), C/C++ (Básico)",
      "label-ferramentas": "Ferramentas & Versionamento:",
      "label-conceitos": "Conceitos:",
      "val-conceitos": "Layouts Responsivos (Grid/Flexbox), Manipulação de DOM",
      "titulo-idiomas": "Idiomas & Certificações",
      "label-idiomas": "Idiomas:",
      "val-idiomas": "Português (Nativo) | Inglês (Técnico / Básico)",
      "label-cursos": "Cursos Extras:",
      "curso-1": "Carreira na era de Dados e IA",
      "curso-2": "Como criar full-stack TypeScript AI apps",
      "curso-4": "Informática Básica",
      "texto-rodape": "© 2026 - Desenvolvido por Pablo Ruan Oliveira Chagas",
      "tooltip-copiar": "Copiar E-mail",
      "tooltip-cert": "Ver Certificado",
      "btn-idioma-title": "Mudar para Inglês",
    },
    en: {
      profissao: "Information Systems Student",
      "titulo-contato": "Contact",
      "label-email": "Email:",
      "label-telefone": "Phone:",
      "label-cidade": "City:",
      "val-cidade": "Machado - MG, Brazil",
      "aviso-copiado": "Copied!",
      "titulo-sobre": "About Me",
      "texto-sobre":
        "Undergraduate student at IFSULDEMINAS - Campus Machado. Focused on Front-End web development and continuous growth in programming.",
      "menu-objetivo": "Objective",
      "menu-formacao": "Education",
      "menu-projetos": "Projects",
      "menu-habilidades": "Skills",
      "menu-outros": "Other",
      "btn-pdf": "Download PDF",
      "titulo-objetivo": "Professional Objective",
      "texto-objetivo":
        "4th-semester Information Systems student focused on Web Development and Software Engineering. Seeking internship opportunities to apply knowledge in practical projects and advance in tech.",
      "titulo-formacao": "Academic Background",
      "label-instituicao": "Institution:",
      "label-curso": "Degree:",
      "val-curso": "B.S. in Information Systems.",
      "label-periodo": "Period:",
      "val-periodo": "2025 - 2028 (Expected Completion)",
      "label-disciplinas": "Relevant Coursework:",
      "val-disciplinas":
        "Algorithms and Data Structures, Software Engineering, Web Technologies I.",
      "titulo-projetos": "Projects & Experience",
      "proj-titulo": "Project: Interactive Web Resume (2025)",
      "proj-desc":
        "Development of a responsive web page in HTML5, CSS3 Grid, and JS for Web I course, featuring theme toggling and dynamic DOM manipulation.",
      "titulo-habilidades": "Technical Skills",
      "label-linguagens": "Languages:",
      "val-linguagens": "HTML5, CSS3, JavaScript (Intermediate), C/C++ (Basic)",
      "label-ferramentas": "Tools & Version Control:",
      "label-conceitos": "Concepts:",
      "val-conceitos": "Responsive Layouts (Grid/Flexbox), DOM Manipulation",
      "titulo-idiomas": "Languages & Certifications",
      "label-idiomas": "Languages:",
      "val-idiomas": "Portuguese (Native) | English (Technical / Basic)",
      "label-cursos": "Additional Courses:",
      "curso-1": "Career in the Era of Data & AI",
      "curso-2": "How to Build Full-Stack TypeScript AI Apps",
      "curso-4": "Computer Fundamentals",
      "texto-rodape": "© 2026 - Developed by Pablo Ruan Oliveira Chagas",
      "tooltip-copiar": "Copy Email",
      "tooltip-cert": "View Certificate",
      "btn-idioma-title": "Switch to Portuguese",
    },
  };

  // 1. Alternador de Idioma
  const btnIdioma = document.getElementById("btn-idioma");
  const labelIdioma = document.getElementById("label-idioma");
  let idiomaAtual = localStorage.getItem("idioma") || "pt";

  function aplicarIdioma(lang) {
    idiomaAtual = lang;
    localStorage.setItem("idioma", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

    // Atualiza os textos com atributo data-i18n
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (traducoes[lang][key]) {
        element.textContent = traducoes[lang][key];
      }
    });

    // Atualiza atributos de title/tooltip
    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
      const key = element.getAttribute("data-i18n-title");
      if (traducoes[lang][key]) {
        element.setAttribute("title", traducoes[lang][key]);
      }
    });

    // Atualiza o botão de idioma
    if (labelIdioma) {
      labelIdioma.textContent = lang === "pt" ? "EN" : "PT";
    }
    if (btnIdioma) {
      btnIdioma.setAttribute("title", traducoes[lang]["btn-idioma-title"]);
    }
  }

  if (btnIdioma) {
    btnIdioma.addEventListener("click", () => {
      const novoIdioma = idiomaAtual === "pt" ? "en" : "pt";
      aplicarIdioma(novoIdioma);
    });
  }

  // Aplica o idioma salvo na inicialização
  aplicarIdioma(idiomaAtual);

  // 2. Alternador de Tema (Modo Escuro / Claro)
  const btnTema = document.getElementById("btn-tema");

  if (btnTema) {
    const iconeTema = btnTema.querySelector("i");

    btnTema.addEventListener("click", () => {
      document.body.classList.toggle("modo-claro");

      if (document.body.classList.contains("modo-claro")) {
        iconeTema.classList.remove("fa-moon");
        iconeTema.classList.add("fa-sun");
      } else {
        iconeTema.classList.remove("fa-sun");
        iconeTema.classList.add("fa-moon");
      }
    });
  }

  // 3. Copiar E-mail
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
