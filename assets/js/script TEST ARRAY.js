const copiebutton = document.getElementById("copie-button"); //Initialiser boutton en focus pr EventListener
//D'ici : insertion des fields dans les variables
textes = []
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
    date_m = date.toString().substring(5,7);
    date_d = date.toString().substring(8,10);
    date = `${date_d}/${date_m}`
    //Tout les types de mails  
    textes = [ ` 
Madame, Monsieur,
<br>
<br>
${prof.value} n'est pas en mesure d'assurer ses cours ce ${date}.
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
<br>
Référent Vie Scolaire
    `, `
Madame, Monsieur,
<br>
<br>
Suite à l'absence de ${prof.value} ce ${date}, les élèves externes du groupe ${groupe.value} finiront les cours de la matinée à ${heure_fin.value} ce ${date}.
<br>
<br>
Vous souhaitant bonne réception,
<br>
Cordialement,
<br>
${cpe.value}
<br>
Référent Vie Scolaire
    `, `
Madame, Monsieur,
<br>
<br>
Suite à l'absence de ${prof.value} ce ${date}, les élèves externes du groupe ${groupe.value} commenceront les cours de l'après-midi à ${heure_deb.value} ce ${date}.
<br>
<br>
Vous souhaitant bonne réception,
<br>
Cordialement,
<br>
${cpe.value}
<br>
Référent Vie Scolaire
    `, `
Madame, Monsieur,
<br>
<br>
Suite à l'absence de ${prof.value} ce ${date}, les élèves du groupe ${groupe.value} termineront les cours de l'après-midi à ${heure_fin.value} ce ${date}.
<br>
<br>
Vous souhaitant bonne réception,
<br>
Cordialement,
<br>
${cpe.value}
<br>
Référent Vie Scolaire
    `,
    ];
    texte_var = textes[type.value-1];
    // if (type.value == 1) {
    //     texte_var = texte1_html
    // }
    // else if (type.value == 2) {
    //     texte_var = texte2
    // }
    navigator.clipboard
        .writeText(texte_var.replace(/<br>/g,'')) // copier dans le presse papier en supprimant tt les occurences de <br>
            .then(() => {
                console.log("Text copied to clipboard...");
            })
            .catch((err) => {
                console.log("Something went wrong", err);
            });  
    // selectionner la cible du remplacement
    // remplace contenu du div ciblé
    fieldNameElement.innerHTML = texte_var;

});

