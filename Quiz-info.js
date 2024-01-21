const Questions = [
  {
    question: "Quel logiciel est utilisé pour créer des présentations?",
    propositions: ["Word", "Excel", "PowerPoint", "Access"],
    reponse: "PowerPoint",
  },
  {
    question: "Qu'est-ce que le terme 'Traitement de texte' signifie?",
    propositions: [
      "Un logiciel qui permet de créer et éditer des documents texte",
      "Un processus automatisé de correction de texte",
      "Un langage de programmation pour le traitement de données",
      "Une fonction de copier-coller dans un document",
    ],
    reponse: "Un logiciel qui permet de créer et éditer des documents texte",
  },
  {
    question:
      "Quel composant d'un ordinateur est souvent considéré comme le cerveau de la machine?",
    propositions: ["RAM", "Processeur", "Disque dur", "Carte graphique"],
    reponse: "Processeur",
  },
  {
    question: "Définissez le terme 'Tableur' en bureautique.",
    propositions: [
      "Un logiciel pour créer des présentations",
      "Un outil de gestion de bases de données",
      "Un logiciel pour effectuer des calculs sur des feuilles de calcul",
      "Un programme de messagerie électronique",
    ],
    reponse:
      "Un logiciel pour effectuer des calculs sur des feuilles de calcul",
  },
  {
    question:
      "Quelle fonctionnalité est utilisée pour organiser des données dans Excel?",
    propositions: ["Formules", "Fonctions", "Tableaux", "Graphiques"],
    reponse: "Tableaux", // L'index de la réponse correcte (dans ce cas, Tableaux)
  },
  {
    question:
      "Qu'est-ce que le 'système d'exploitation' dans le contexte informatique?",
    propositions: [
      "Le logiciel qui gère les ressources matérielles et fournit des services aux applications",
      "Un dispositif matériel essentiel pour le stockage de données",
      "Un langage de programmation populaire",
      "Un ensemble de règles pour la conception de logiciels",
    ],
    reponse:
      "Le logiciel qui gère les ressources matérielles et fournit des services aux applications",
  },
  {
    question:
      "Quelle technologie sans fil permet la communication à courte distance entre des appareils tels que les téléphones, les ordinateurs et les imprimantes?",
    propositions: ["Bluetooth", "Wi-Fi", "NFC", "3G"],
    reponse: "Bluetooth",
  },
  {
    question:
      "Dans Microsoft Word, quelle couleur est généralement associée aux corrections de fautes d'orthographe?",
    propositions: ["Rouge", "Bleu", "Vert", "Jaune"],
    reponse: "Rouge",
  },
  {
    question:
      "Qu'est-ce que le 'Publipostage' dans le contexte de la bureautique?",
    propositions: [
      "Un service de publication en ligne",
      "Un mode de transport de documents",
      "Un processus automatisé pour envoyer des courriers personnalisés",
      "Une fonction de partage de documents sur les réseaux sociaux",
    ],
    reponse: "Un processus automatisé pour envoyer des courriers personnalisés",
  },
  {
    question:
      "Quelle couleur est généralement utilisée pour surligner les suggestions de grammaire dans Word?",
    propositions: ["Rouge", "Bleu", "Vert", "Jaune"],
    reponse: "Bleu",
  },
  {
    question:
      "Quel type de mémoire est volatile et est utilisé pour le stockage temporaire des données en cours d'utilisation?",
    propositions: ["ROM", "Cache", "RAM", "Disque dur"],
    reponse: "RAM",
  },
  {
    question:
      "Dans Microsoft Word, qu'affiche généralement la barre d'état  de la fenêtre?",
    propositions: [
      "La taille de la police",
      "Le nombre d'onglet",
      "Le nombre de pages dans le document,Le nombre de mots dans le document,L'emplacement du curseur dans le document,Le pourcentage de complétion du document",
      "La correction des mots",
    ],
    reponse:
      "Le nombre de pages dans le document,Le nombre de mots dans le document,L'emplacement du curseur dans le document,Le pourcentage de complétion du document",
  },
  {
    question:
      "Définissez le terme 'Présentation' dans le contexte bureautique.",
    propositions: [
      "Une offre commerciale",
      "Un document texte formel",
      "Un fichier contenant des données structurées",
      "Un support visuel pour communiquer des informations",
    ],
    reponse: "Un support visuel pour communiquer des informations",
  },
  {
    question:
      "Quelle unité de mesure est utilisée pour exprimer la vitesse d'un processeur?",
    propositions: ["Gigahertz", "Gigaoctet", "Megabit", "Kilobyte"],
    reponse: "Gigahertz",
  },
  {
    question:
      "Qu'est-ce que le 'Courrier indésirable' dans le contexte des emails?",
    propositions: [
      "Un type de papier recyclé",
      "Des messages non sollicités ou non désirés",
      "Une catégorie de courriers officiels",
      "Un terme pour les messages urgents",
    ],
    reponse: "Des messages non sollicités ou non désirés",
  },
  {
    question: "Définissez le terme 'RAM' en informatique.",
    propositions: [
      "Read-Only Memory",
      "Random Access Memory",
      "Run-And-Manage",
      "Remote Administration Module",
    ],
    reponse: "Random Access Memory",
  },
  {
    question:
      "Quel type d'informations est généralement affiché dans la barre de titre de Microsoft Word?",
    propositions: [
      "Le nom du document etle nom du logiciel",
      "Le nombre de pages dans le document",
      "La date de création du document",
      "Le nombre de mots dans le document",
    ],
    reponse: "Le nom du document etle nom du logiciel",
  },
  {
    question:
      "Définissez le terme 'Fonction de recherche' dans les logiciels bureautiques.",
    propositions: [
      "Une capacité à effectuer des calculs complexes",
      "Un outil pour trouver des mots dans un document",
      "Une fonction de tri alphabétique",
      "Un programme de navigation sur internet",
    ],
    reponse: "Un outil pour trouver des mots dans un document",
  },

  {
    question:
      "Quel logiciel est principalement utilisé pour la création de feuilles de calcul numériques?",
    propositions: ["Word", "Excel", "PowerPoint", "Outlook"],
    reponse: "Excel",
  },
  {
    question:
      "Quelle fonctionnalité dans Word est utilisée pour mettre en forme le texte de manière hiérarchique?",
    propositions: [
      "Gras",
      "Italique",
      "Listes à puces",
      "Titres et sous-titres",
    ],
    reponse: "Titres et sous-titres",
  },
  {
    question:
      "Dans Microsoft Word, ou est situé généralement la barre d'état  de la fenêtre?",
    propositions: ["En bas", "Au centre", "A gauche", "En haut"],
    reponse: "En bas",
  },
  {
    question: "Définissez le terme 'LAN' en informatique.",
    propositions: [
      "Local Access Network",
      "Long Area Network",
      "Limited Area Network",
      "Local Area Network",
    ],
    reponse: "Local Area Network",
  },
  {
    question:
      "Quel composant est responsable du stockage permanent des données sur un ordinateur?",
    propositions: ["RAM", "Processeur", "Disque dur", "Carte mère"],
    reponse: "Disque dur",
  },
  {
    question:
      "Quel outil dans PowerPoint est utilisé pour créer des animations de diapositives?",
    propositions: ["Transition", "Effets spéciaux", "Animation", "Diaporama"],
    reponse: "Animation",
  },
  {
    question: "Qu'est-ce que le terme 'CPU' signifie?",
    propositions: [
      "Central Processing Unit",
      "Computer Processing Unit",
      "Central Processor Unit",
      "Central Power Unit",
    ],
    reponse: "Central Processing Unit",
  },
  {
    question:
      "Quel raccourci clavier commun est utilisé pour copier du texte dans la plupart des applications de bureautique?",
    propositions: ["Ctrl+C", "Ctrl+X", "Ctrl+V", "Ctrl+P"],
    reponse: "Ctrl+C",
  },
  {
    question:
      "Qu'est-ce que le 'périphérique d'entrée' dans le contexte informatique?",
    propositions: [
      "Un composant du processeur",
      "Un composant du système d'exploitation",
      "Un dispositif qui envoie des données à l'ordinateur",
      "Un type de mémoire volatile",
    ],
    reponse: "Un dispositif qui envoie des données à l'ordinateur",
  },
  {
    question:
      "Dans Word, quelle fonctionnalité est utilisée pour aligner le texte à la fois à gauche et à droite d'une page?",
    propositions: [
      "Justification",
      "Centrage",
      "Alignement gauche",
      "Espace de travail",
    ],
    reponse: "Justification",
  },
  {
    question:
      "Quelle extension de fichier est couramment associée aux documents créés dans Microsoft Word?",
    propositions: [".doc", ".xls", ".ppt", ".pdf"],
    reponse: ".doc",
  },
  {
    question:
      "Définissez le terme 'GPU' utilisé dans le contexte informatique.",
    propositions: [
      "General Processing Unit",
      "Graphics Processing Unit",
      "Global Power Unit",
      "Graphical Performance Unit",
    ],
    reponse: "Graphics Processing Unit",
  },
];
const app = document.querySelector("#app");
const btn = document.querySelector("#btn");
const TIMEOUTE = 4000;
function show(e) {
  const slider = document.querySelector(".slidebar");
  if (e === 1) {
    slider.style.display = "flex";
  }
  if (e === -1) {
    slider.style.display = "none";
  }
}
btn.addEventListener("click", fonction);

function fonction() {
  let index = 0;
  let score = 0;

  AfficherTitreEtQuestion(index);

  function AfficherTitreEtQuestion(index) {
    clean();
    const quest = Questions[index];
    if (!quest) {
      MessageFi();
      return;
    }
    const question = RecupererQuestion(index);
    const titre = CreerTitreQuestion(question);
    app.appendChild(titre);
    const tableaux = RecupererTableauxProposition(index);
    const ContainerPropo = RecupererToutesLesProposition(tableaux);
    app.appendChild(ContainerPropo);
    const btnSubmite = btnSubmit();
    app.appendChild(btnSubmite);
    btnSubmite.addEventListener("click", ClickSublit);

    function RecupererQuestion(index) {
      const quest = Questions[index].question;
      return quest;
    }

    function RecupererTableauxProposition(index) {
      const tableaux = Questions[index].propositions;
      return tableaux;
    }
  }
  function MessageFi() {
    const h1 = document.createElement("h1");
    h1.innerText = "Bravo ! Vous avez terminé le quiz";
    const p = document.createElement("p");
    p.innerText = `Vous avez eu ${score} sur ${Questions.length} `;
    app.appendChild(h1);
    app.appendChild(p);
  }

  function RecupererToutesLesProposition(tableaux) {
    const containerPropositions = document.createElement("div");
    for (const tableau of tableaux) {
      const label = RecupereruneQuestion(tableau);
      containerPropositions.appendChild(label);
    }
    return containerPropositions;
  }

  function RecupereruneQuestion(proposition) {
    const label = document.createElement("label");
    label.innerHTML = proposition;
    const input = document.createElement("input");
    let id = formatId(proposition);
    label.htmlFor = id;
    input.id = id;
    input.setAttribute("type", "radio");
    input.setAttribute("name", "question");
    input.setAttribute("value", proposition);
    label.appendChild(input);
    return label;
  }
  function ClickSublit() {
    const InputSelection = app.querySelector('input[name="question"]:checked');
    const ValeurReponse = InputSelection.value;
    const BonneResponse = RecupererResponse(index);
    const VerificationResponse = BonneResponse === ValeurReponse;
    disableAllAnswers();
    if (VerificationResponse) {
      score++;
    }
    GestionReponse(VerificationResponse, BonneResponse, ValeurReponse);
    /* const Mess = message(VerificationResponse, BonneResponse);
    app.appendChild(Mess); */
    BtnSuivant();
  }
  function BtnSuivant() {
    let remainingtimeout = TIMEOUTE;

    app.querySelector("button").remove();
    const NextBtn = document.createElement("button");
    NextBtn.innerText = `Allez au suivant (${remainingtimeout / 1000}s) `;
    const interval = setInterval(() => {
      remainingtimeout -= 1000;
      NextBtn.innerText = `Allez au suivant (${remainingtimeout / 1000}s) `;
    }, 1000);
    const handleNextQuestion = () => {
      index++;
      clearInterval(interval);
      clearTimeout(timeout);
      AfficherTitreEtQuestion(index);
    };
    const timeout = setTimeout(() => {
      handleNextQuestion();
    }, TIMEOUTE);
    app.appendChild(NextBtn);
    NextBtn.addEventListener("click", () => {
      handleNextQuestion();
    });
  }

  function RecupererResponse(index) {
    const reponses = Questions[index].reponse;
    return reponses;
  }
  function GestionReponse(bool, BonneResponse, Reponse) {
    const reponseCorrecteId = formatId(BonneResponse);
    const RecupererCorrectLabel = document.querySelector(
      `label[for="${reponseCorrecteId}"]`
    );
    const ChoixReponseId = formatId(Reponse);
    const RecupererChoixLabel = document.querySelector(
      `label[for="${ChoixReponseId}"]`
    );
    RecupererCorrectLabel.classList.add("correct");
    RecupererChoixLabel.classList.add(bool ? "correct" : "incorrect");
  }

  function message(bool, BonneResponse) {
    const para = document.createElement("p");
    if (bool) {
      para.innerText = " Bravo ! Tu as eu la bonne réponse";
    } else {
      para.innerText = `Désolé... mais la bonne était ${BonneResponse} `;
    }
    return para;
  }
  function clean() {
    while (app.firstElementChild) {
      app.firstElementChild.remove();
    }
    const progress = BarreProgress(Questions.length, index);
    app.appendChild(progress);
  }
}
function btnSubmit() {
  const btnSubmite = document.createElement("button");
  btnSubmite.innerText = "Suivant";
  return btnSubmite;
}

function formatId(text) {
  return text.replaceAll(" ", "-").replaceAll('"', "'").toLowerCase();
}

function CreerTitreQuestion(texte) {
  const titre = document.createElement("h3");
  titre.innerText = texte;
  return titre;
}

function BarreProgress(max, value) {
  const progress = document.createElement("progress");
  progress.setAttribute("max", max);
  progress.setAttribute("value", value);
  return progress;
}
function disableAllAnswers() {
  const radioInputs = document.querySelectorAll('input[type="radio"]');

  for (const radio of radioInputs) {
    radio.disabled = true;
  }
}
