let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub: '50%',
    Discord: '15%',
}

// 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
// - Tu dois utiliser un querySelectorAll
// - Tu dois ciblé la div et plus précicément son id "liste-soft-skills"
let elements = document.querySelectorAll("#liste-soft-skills > h2");
console.log(elements);

// 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
// - Utilise une boucle "for in" pour parcourir ton objet
