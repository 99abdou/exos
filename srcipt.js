// Vous devez, à partir d'une chaîne, remplacer chaque lettre par sa position dans l'alphabet. Si quelque
// chose dans le texte n'est pas une lettre, ignorez-la et ne la renvoyez pas. On considère que « a » vaut 1,
// « b » vaut 2, etc. Par exemple :
// alphabet_position("The sunset sets at twelve o' clock.") 
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
function remplacerParPositionAlphabet(chaine) {
    // Fonction pour obtenir la position d'une lettre dans l'alphabet
    function positionDansAlphabet(lettre) {
        return lettre.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }

    let resultat = '';

    for (let i = 0; i < chaine.length; i++) {
        const caractere = chaine[i];

        if (caractere.match(/[a-zA-Z]/)) {
            const position = positionDansAlphabet(caractere);
            resultat += position + ' ';
        }
    }

    return resultat.trim(); // Pour supprimer l'espace final
}

// Exemple d'utilisation
const texte = prompt("Veillez mettre un texte ici");
const resultat = remplacerParPositionAlphabet(texte);
alert( "position Dans Alphabet :" + resultat );
// console.log(`${resultat}`);
