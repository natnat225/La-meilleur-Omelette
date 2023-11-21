/* Créer un objet personne. Cette personne doit avoir des propriétés et des méthodes : 
nom(string)
lieu(string)
argent(number)
mainDroite(tableau) du coup main gauche(tableau)
seDeplacer(lieu)
payerArticle(article)
couper(ingredient, outil) */
let personne = {
    nom: "Nathan",
    lieu: "",
    argent: 100,
    mainDroite: [],
    mainGauche: [],
  
    seDeplacer(lieu) {
  
    },
  
    payerArticle(article) {

    },
  
    couper(ingredient, outil) {

    },
}
  
  
/* Créer un lieu "maison" (un objet) avec comme propriété " nom: 'maison' " et " personnes
 = [] " => qui sera un tableau de personnes présentes dans la maison : */
  let maison = {
    nom: "maison",
    personnes: [],
  };
  
 /*  Créer un outil (couteau) pour découper les ingrédients achetés */
  let couteau = {
    nom: "couteau",
    action: "coupe",
  }
 /*  Créer des produits (ingrédients) à mettre dans le magasin qui serviront
   à créer l'omelette (oignon, oeuf, epice, fromage, ...); */
  let oignon = { nom: "oignon", etat: "entier", prix: 2 };
  let oeuf = { nom: "oeuf", etat: "entier", prix: 1 };
  let epice = { nom: "epice", etat: "entier", prix: 3 };
  let fromage = { nom: "fromage", etat: "entier", prix: 4 };
  
 /*  Créer un lieu "epicerie" qui a comme propriétés : */
  let epicerie = {
    nom: "epicerie",
    personnes: [],
    paniers: [{ type: "panier", contenu: [] }],
    ingredients: [oignon, oeuf, epice, fromage],
  }
  
/*   Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, 
  après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000) */
  const poele = {
    contenu: [],
    cuir() {
        this.contenu[0].etat = "cuit";
      ;}
    },

  
    /* Créer un bol avec un tableau comme contenu
    ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. 
    cette méthode remplacera this.contenu par [l'obj newMelange] */
  let bol = {
    contenu: [],
    melanger(nomMelange) {
      const newMelange = { nom: nomMelange, etat: "pas cuit" };
      this.contenu = [newMelange];
    },
}
  


  
