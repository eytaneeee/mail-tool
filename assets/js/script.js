const copiebutton = document.getElementById("copie-button"); //Initialiser boutton en focus pr EventListener
//D'ici : insertion des fields dans les variables
type = document.getElementById("mail-type");
fields1 = document.getElementById("fields1");
fields2 = document.getElementById("fields2");
fields3 = document.getElementById("fields3");
fields4 = document.getElementById("fields4");
fields5 = document.getElementById("fields-date");
fields6 = document.getElementById("fields-user");

//fonction qui verifie si les champs sont completes
copiebutton.addEventListener("click", () => {
  if (type.value == 1) {
    navigator.clipboard
      .writeText(texte1) // copier dans le presse papier
      .then(() => {
        console.log("Text copied to clipboard...");
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });  
    //selectionner la cible du remplacement
    var fieldNameElement = document.getElementById('replace'); 
    //remplace contenu du div ciblé
    fieldNameElement.innerHTML = ` ${texte1} `;
  }
  else if (type.value == 2) {
    navigator.clipboard
      .writeText(texte2) // copier dans le presse papier
      .then(() => {
        console.log("Text copied to clipboard...");
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });  
    //selectionner la cible du remplacement
    var fieldNameElement = document.getElementById('replace'); 
    //remplace contenu du div ciblé
    fieldNameElement.innerHTML = ` ${texte2} `;
  }
  else if (type.value == 2) {
    navigator.clipboard
      .writeText(texte2) // copier dans le presse papier
      .then(() => {
        console.log("Text copied to clipboard...");
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });  
    //selectionner la cible du remplacement
    var fieldNameElement = document.getElementById('replace'); 
    //remplace contenu du div ciblé
    fieldNameElement.innerHTML = ` ${texte2} `;
  }
  else if (type.value == 2) {
    navigator.clipboard
      .writeText(texte2) // copier dans le presse papier
      .then(() => {
        console.log("Text copied to clipboard...");
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });  
    //selectionner la cible du remplacement
    var fieldNameElement = document.getElementById('replace'); 
    //remplace contenu du div ciblé
    fieldNameElement.innerHTML = ` ${texte2} `;
  }
  
});

//Tout les types de mails 
texte1 = ` Madame, Monsieur,<br/><br/>Suite à l'absence de ${fields1.value} ce ${fields5.value}, les élèves du groupe ${fields2.value} pourront sortir à ${fields4.value} le ${fields5.value}.<br/><br/>Vous souhaitant bonne réception,<br/>Cordialement,<br/>${fields6.value}<br/>Référent Vie Scolaire Niveau 1ère`

texte2 = `, Monsieur,<br/><br/>Suite à l'absence de ${fields1.value} ce ${fields5.value}, les élèves du groupe ${fields2.value} pourront sortir à ${fields4.value} le ${fields5.value}.<br/><br/>Vous souhaitant bonne réception,<br/>Cordialement,<br/>${fields6.value}<br/>Référent Vie Scolaire Niveau 1ère`
