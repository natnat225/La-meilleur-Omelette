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
    lieu: "Molengeek",
    argent: 100,
    mainDroite: [],
    mainGauche: [],
  
    seDeplacer(lieu) {
        this.lieu = lieu.nom;
        console.log(`${this.nom} est actuellement a la ${this.lieu}`);
  
    },
  
    payerArticle(article) {
        this.argent -= article.prix;
        console.log(`${this.nom} a paye ${article.prix}
         pour ${article.nom} Argent restant : ${this.argent}`);

    },
  
    couper(ingredient, outil) {
        if (ingredient.etat === "entier") {
          ingredient.etat = outil.action;
          console.log(`${this.nom} a couper ${ingredient.nom} avec un ${outil.nom}`);
        } else {
          console.log(`${ingredient.nom} est deja couper`);
        }
      }
    };
  
  
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
/* Pour dire que le personnage est à la maison :
Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet maison
Afficher un message tel que :
console.log(personnage.nom + " est actuellement à la " + personnage.lieu); */
  personne.seDeplacer(maison);
  personne.seDeplacer(epicerie);
  
/*   Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie
  Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.) */
/*   Il doit y avoir un objet dans la main droite de personnage et un panier en moins. Vérifier avec des console.log() ensuite afficher un message du type :
console.log(`${personnage.nom} a pris un ${type du panier}`) */
  let panier = epicerie.paniers.pop();
  personne.mainDroite.push(panier);
  console.log(`${personne.nom} a pris un ${panier.type}`);
  
/*   Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire une COPIE dans le panier du personnage
  Afficher un message à chaque ingrédient pris */
/*   Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()
Afficher un message de ce qu'il reste d'argent sur le personnage.
rentrer à la maison (comme ça on pourra cuisiner) */
  for (let ingredient of epicerie.ingredients) {
    personne.mainDroite[0].contenu.push({ ingredient })
    console.log(`${personne.nom} a pris ${ingredient.nom} dans l'epicerie`)
    personne.payerArticle(ingredient)
  }
  console.log(`${personne.nom} a ${personne.argent} d'argent restant.`);
  
  
  personne.seDeplacer(maison);
  
/*   mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)
Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)
Afficher un petit message de chaque ingrédient qu'on met dans le bol. */
  for (let ingredient of personne.mainDroite[0].contenu) {
    bol.contenu.push({ ingredient });
    console.log(`${ingredient.nom} a ete mis dans le bol`);
  }
  
  console.log(`${personne.nom} a fini de mettre les ingredients dans le bol`);
  
/*   Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)
  Afficher un petit message
  Retourner à la maison pour continuer l'omelette */
  personne.seDeplacer(epicerie);
  epicerie.paniers.push(personne.mainDroite.pop());
  console.log(`${personne.nom} a rapporté le panier à l'epicerie`);
  
 
  personne.seDeplacer(maison);
  
/*   Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! 
  Pour ça on utilise la méthode couper de personnage */
  for (let ingredient of bol.contenu) {
    personne.couper(ingredient, couteau);
  }
  
  
