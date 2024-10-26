const films = [
  {
    id: 1,
    titre: "Inception",
    annee: 2010,
    affiche: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/72/34/14/19476654.jpg",
    genre: ["Science-fiction", "Thriller"],
    realisateur: {
      nom: "Christopher Nolan",
      age: 50,
      autresFilms: [
        { titre: "Interstellar", annee: 2014 },
        { titre: "The Dark Knight", annee: 2008 }
      ]
    },
    acteurs: [
      {
        nom: "Leonardo DiCaprio",
        role: "Cobb",
        nominations: ["Oscar", "Golden Globe"]
      },
      {
        nom: "Elliot Page",
        role: "Ariadne",
        nominations: []
      }
    ],
    critiques: [
      { source: "IMDb", note: 8.8, critiqueText: "Un chef-d'œuvre de narration et d'effets visuels." },
      { source: "Rotten Tomatoes", note: 87, critiqueText: "Visuellement éblouissant, superbement construit." }
    ],
    sortie: {
      USA: "2010-07-16",
      France: "2010-07-21",
      Japon: "2010-07-23"
    }
  },
  {
    id: 2,
    titre: "Matrix",
    annee: 1999,
    affiche: "https://fr.web.img4.acsta.net/c_310_420/medias/04/34/49/043449_af.jpg",
    genre: ["Action", "Science-fiction"],
    realisateur: {
      nom: "Les Wachowski",
      age: null,
      autresFilms: [
        { titre: "Matrix Reloaded", annee: 2003 },
        { titre: "Matrix Revolutions", annee: 2003 }
      ]
    },
    acteurs: [
      {
        nom: "Keanu Reeves",
        role: "Neo",
        nominations: ["Saturn Award"]
      },
      {
        nom: "Carrie-Anne Moss",
        role: "Trinity",
        nominations: []
      }
    ],
    critiques: [
      { source: "IMDb", note: 8.7, critiqueText: "Révolutionnaire pour son époque, un classique instantané." },
      { source: "Metacritic", note: 73, critiqueText: "Innovant malgré certaines faiblesses narratives." }
    ],
    sortie: {
      USA: "1999-03-31",
      France: "1999-06-23",
      Japon: "1999-09-11"
    }
  },
  {
    id: 3,
    titre: "Parasite",
    annee: 2019,
    affiche: "https://fr.web.img5.acsta.net/c_310_420/pictures/20/02/12/13/58/3992754.jpg",
    genre: ["Thriller", "Drame"],
    realisateur: {
      nom: "Bong Joon-ho",
      age: 50,
      autresFilms: [
        { titre: "Snowpiercer", annee: 2013 },
        { titre: "The Host", annee: 2006 }
      ]
    },
    acteurs: [
      {
        nom: "Song Kang-ho",
        role: "Kim Ki-taek",
        nominations: ["Palme d'Or"]
      },
      {
        nom: "Choi Woo-shik",
        role: "Kim Ki-woo",
        nominations: []
      }
    ],
    critiques: [
      { source: "IMDb", note: 8.6, critiqueText: "Une satire sociale poignante avec une tension palpable." },
      { source: "Rotten Tomatoes", note: 98, critiqueText: "Un chef-d'œuvre moderne, parfaitement rythmé et émotionnellement engageant." }
    ],
    sortie: {
      USA: "2019-10-11",
      France: "2019-06-05",
      Japon: "2019-12-27"
    },
    studio: "CJ Entertainment"
  }
];

const test = document.getElementById("test");
test.innerHTML = "<h1>My Favorite Movies</h1>"

const film = document.getElementById("title");

const filmsContainer = document.getElementById('films-container');

films.forEach((film) => {
  const filmDiv = document.createElement("div");


    const acteursNoms = film.acteurs.map(acteur => 
      acteur.nom).join(', ');
      const acteursP = document.createElement('p');
      
    const critiquesNotes = film.critiques.map(critique => {
      return `${critique.source}, ${critique.note}/10`
    }).join(' , ');
      const critiquesNotesP = document.createElement('p');
      critiquesNotesP.textContent = critiquesNotes;


    filmDiv.innerHTML = 
    `<div class = "box"><figure class = "image is-128x128"><img src = "${film.affiche}"></figure>
    <div class = "content"><h3 class = "title is-5">${film.titre}</h3>
    <p><strong> Année :</strong>${film.annee}</p></strong>
    <p><strong> Genre :${film.genre}</p></strong>
    <p><strong> Sortie :${film.sortie.France}</p></strong>
    <p><strong> Réalisateur :${film.realisateur.nom}</p></strong>
    <p><strong> Acteurs : ${acteursNoms}</p></strong>
    <p><strong> Critiques : ${critiquesNotes}</p></strong>
    </div>
    </div>`
 

    filmsContainer.appendChild(filmDiv);
});
