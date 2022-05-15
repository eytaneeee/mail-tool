const copiebutton = document.getElementById("copie-button"); //Initialiser boutton en focus pr EventListener
//D'ici : insertion des fields dans les variables
type = document.getElementById("mail-type");
prof = document.getElementById("fields1");
groupe = document.getElementById("fields2");
heure_deb = document.getElementById("fields3");
heure_fin = document.getElementById("fields4");
date = document.getElementById("fields-date");
cpe = document.getElementById("fields-user");


copiebutton.addEventListener("click", () => {
    var fieldNameElement = document.getElementById('replace'); 
    date = date.value;
    date = date.toString().substring(5);
    //Tout les types de mails  
    texte1_html = ` 
Madame, Monsieur,
<br>
<br>
${prof.value} n'est pas en mesure d'assurer ses cours ce ${date.value}.
<br>
<br>
Ainsi, les élèves du groupe ${groupe.value} pourront débuter les cours à ${heure_deb.value} ce ${date}.
<br>
<br>
Vous souhaitant bonne réception,
<br>
Cordialement,
<br>
${cpe.value}
<br> Référent Vie Scolaire Niveau 1ère 
`;
    texte_var = '';
    if (type.value == 1) {
        texte_var = texte1_html
    }
    else if (type.value == 2) {
        texte_var = texte2
    }
    navigator.clipboard
        .writeText(texte_var.replace(/<br>/g,'')) // copier dans le presse papier en supprimant tt les occurences de <br>
            .then(() => {
                console.log("Text copied to clipboard...");
            })
            .catch((err) => {
                console.log("Something went wrong", err);
            });  
    //selectionner la cible du remplacement
    //remplace contenu du div ciblé
    fieldNameElement.innerHTML = ` ${texte_var} `;

});

