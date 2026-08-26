document.addEventListener("DOMContentLoaded", () => {
  // 1. Dicionário Completo de Traduções (PT / EN)
  const traducoes = {
    pt: {
      profissao: "Estudante de Sistemas de Informação",
      contato_titulo: "Contato",
      lbl_telefone: "Telefone:",
      lbl_cidade: "Cidade:",
      cidade: "Machado - MG",
      btn_copiar_title: "Copiar E-mail",
      copiado: "Copiado!",
      sobre_titulo: "Sobre Mim",
      sobre_texto:
        "Estudante de graduação no IFSULDEMINAS - Campus Machado. Focado em desenvolvimento web Front-End e evolução constante em programação.",
      menu_objetivo: "Objetivo",
      menu_formacao: "Formação",
      menu_projetos: "Projetos",
      menu_habilidades: "Habilidades",
      menu_outros: "Outros",
      btn_pdf: "Baixar PDF",
      obj_titulo: "Objetivo Profissional",
      obj_texto:
        "Estudante no 4º período com foco em desenvolvimento Web e Engenharia de Software. Busco oportunidades de estágio para aplicar conhecimentos em projetos práticos e evoluir na área de tecnologia.",
      form_titulo: "Formação Acadêmica",
      lbl_instituicao: "Instituição:",
      lbl_curso: "Curso:",
      curso: "Bacharelado em Sistemas de Informação",
      lbl_periodo: "Período:",
      periodo_tempo: "2025 - 2028 (Previsão de Término)",
      lbl_disciplinas: "Disciplinas Relevantes:",
      disciplinas:
        "Algoritmos e Estrutura de Dados, Engenharia de Software, Tecnologias Web I.",
      proj_titulo: "Projetos e Experiências",
      proj_1_nome: "Projeto: Currículo Web Interativo (2025)",
      proj_1_desc:
        "Desenvolvimento de página web responsiva em HTML5, CSS3 Grid e JS para a disciplina de Web I, contemplando alternância de temas e manipulação dinâmica do DOM.",
      hab_titulo: "Habilidades Técnicas",
      lbl_linguagens: "Linguagens:",
      hab_linguagens: "HTML5, CSS3, JavaScript (Intermediário), C/C++ (Básico)",
      lbl_ferramentas: "Ferramentas & Versionamento:",
      lbl_conceitos: "Conceitos:",
      hab_conceitos: "Layouts Responsivos (Grid/Flexbox), Manipulação de DOM",
      cert_titulo: "Idiomas & Certificações",
      lbl_idiomas: "Idiomas:",
      idiomas_texto: "Português (Nativo) | Inglês (Técnico / Básico)",
      lbl_cursos_extras: "Cursos Extras:",
      curso_1: "Carreira na era de Dados e IA",
      curso_2: "Como criar full-stack TypeScript AI apps",
      curso_4: "Informática Básica",
      ver_cert: "Ver Certificado",
      rodape: "© 2026 - Desenvolvido por Pablo Ruan Oliveira Chagas",
    },
    en: {
      profissao: "Information Systems Student",
      contato_titulo: "Contact",
      lbl_telefone: "Phone:",
      lbl_cidade: "City:",
      cidade: "Machado - MG, Brazil",
      btn_copiar_title: "Copy Email",
      copiado: "Copied!",
      sobre_titulo: "About Me",
      sobre_texto:
        "Undergraduate student at IFSULDEMINAS - Campus Machado. Focused on Front-End web development and continuous growth in programming.",
      menu_objetivo: "Objective",
      menu_formacao: "Education",
      menu_projetos: "Projects",
      menu_habilidades: "Skills",
      menu_outros: "Others",
      btn_pdf: "Download PDF",
      obj_titulo: "Professional Objective",
      obj_texto:
        "4th-semester student focusing on Web Development and Software Engineering. Seeking internship opportunities to apply knowledge in practical projects and grow in the tech industry.",
      form_titulo: "Academic Background",
      lbl_instituicao: "Institution:",
      lbl_curso: "Degree:",
      curso: "B.S. in Information Systems",
      lbl_periodo: "Period:",
      periodo_tempo: "2025 - 2028 (Expected Graduation)",
      lbl_disciplinas: "Relevant Coursework:",
      disciplinas:
        "Algorithms & Data Structures, Software Engineering, Web Technologies I.",
      proj_titulo: "Projects & Experience",
      proj_1_nome: "Project: Interactive Web Resume (2025)",
      proj_1_desc:
        "Responsive web page development built with HTML5, CSS3 Grid, and JS for Web I course, featuring theme toggling and dynamic DOM manipulation.",
      hab_titulo: "Technical Skills",
      lbl_linguagens: "Languages:",
      hab_linguagens: "HTML5, CSS3, JavaScript (Intermediate), C/C++ (Basic)",
      lbl_ferramentas: "Tools & Versioning:",
      lbl_conceitos: "Concepts:",
      hab_conceitos: "Responsive Layouts (Grid/Flexbox), DOM Manipulation",
      cert_titulo: "Languages & Certifications",
      lbl_idiomas: "Languages:",
      idiomas_texto: "Portuguese (Native) | English (Technical / Basic)",
      lbl_cursos_extras: "Additional Courses:",
      curso_1: "Career in the Age of Data & AI",
      curso_2: "Building Full-Stack TypeScript AI Apps",
      curso_4: "Computer Fundamentals",
      ver_cert: "View Certificate",
      rodape: "© 2026 - Developed by Pablo Ruan Oliveira Chagas",
    },
  };

  // 2. Alternador de Idioma
  const btnIdioma = document.getElementById("btn-idioma");
  let idiomaAtual = localStorage.getItem("idioma_preferido") || "pt";

  function aplicarIdioma(lang) {
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";

    // Atualiza todos os elementos que possuem data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const chave = el.getAttribute("data-i18n");
      if (traducoes[lang] && traducoes[lang][chave]) {
        el.innerText = traducoes[lang][chave];
      }
    });

    // Atualiza os títulos/dicas de botões (data-i18n-title)
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const chave = el.getAttribute("data-i18n-title");
      if (traducoes[lang] && traducoes[lang][chave]) {
        el.setAttribute("title", traducoes[lang][chave]);
      }
    });

    // Atualiza o texto do botão de alternância
    if (btnIdioma) {
      btnIdioma.innerText = lang === "pt" ? "EN" : "PT";
    }

    // Salva a preferência do usuário no navegador
    localStorage.setItem("idioma_preferido", lang);
  }

  if (btnIdioma) {
    btnIdioma.addEventListener("click", () => {
      idiomaAtual = idiomaAtual === "pt" ? "en" : "pt";
      aplicarIdioma(idiomaAtual);
    });
  }

  // Carrega o idioma salvo ou padrão ao abrir a página
  aplicarIdioma(idiomaAtual);

  // 3. Alternador de Tema (Modo Escuro / Claro)
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

  // 4. Copiar E-mail
  const btnCopiar = document.getElementById("btn-copiar");
  const avisoCopiado = document.getElementById("aviso-copiado");

  if (btnCopiar) {
    btnCopiar.addEventListener("click", () => {
      const emailTexto = document.getElementById("email-texto")?.innerText;
      if (emailTexto) {
        navigator.clipboard.writeText(emailTexto);
        if (avisoCopiado) {
          avisoCopiado.style.display = "inline";
          setTimeout(() => {
            avisoCopiado.style.display = "none";
          }, 2000);
        }
      }
    });
  }
});
