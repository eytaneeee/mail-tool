const copiebutton = document.getElementById("copie-button");
fields1 = document.getElementById("fields1");
fields2 = document.getElementById("fields2");
fields3 = document.getElementById("fields3");
fields4 = document.getElementById("fields4");
fields5 = document.getElementById("fields-date");
fields6 = document.getElementById("fields-user");

copiebutton.addEventListener("click", () => {
  if (fields1.value && fields2.value && fields3.value && fields4.value) {
    navigator.clipboard
      .writeText(fields1.value) // copier dans le presse papier
      .then(() => {
        console.log("Text copied to clipboard...");
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
    // alert(`
    // fields 1 : ${fields1.value}
    // fields 2 : ${fields2.value}
    // fields 3 : ${fields3.value}
    // fields 4 : ${fields4.value}
    // fields 5 : ${fields5.value}
    // fields 6 : ${fields6.value}
    // `);
    var fieldNameElement = document.getElementById('replace');
    fieldNameElement.innerHTML = `Madame, Monsieur,<br/><br/>

    Suite à l'absence de ${fields1.value} ce ${fields5.value}, les élèves du groupe ${fields2.value} pourront sortir à ${fields4.value} le ${fields5.value}.
    <br/><br/>
    Vous souhaitant bonne réception,<br/>
    Cordialement,<br/>
    ${fields6.value}<br/>
    Référent Vie Scolaire Niveau 1ère`;
  }
});
