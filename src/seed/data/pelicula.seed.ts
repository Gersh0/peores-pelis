import { Pelicula } from "src/peliculas/entities/pelicula.entity";
import { directoresSeed } from "./directores.seed";
import { v4 as uuid } from "uuid";

export const peliculasSeed: Pelicula[] = [
    {
        id: uuid(),
        titulo: "Plan 9 from Outer Space",
        anioLanzamiento: 1959,
        genero: "Sci-Fi",
        descripcion: "Plan 9 from Outer Space is a 1959 American independent black-and-white science fiction film, written, produced, directed, and edited by Ed Wood, that stars Gregory Walcott, Mona McKinnon, Tor Johnson, and Vampira.",
        director: directoresSeed[0]
    },
    {
        id: uuid(),
        titulo: "The Room",
        anioLanzamiento: 2003,
        genero: "Drama",
        descripcion: "The Room is a 2003 American independent drama film written, produced, and directed by Tommy Wiseau, who stars in the film alongside Juliette Danielle and Greg Sestero.",
        director: directoresSeed[1]
    },
    {
        id: uuid(),
        titulo: "Birdemic: Shock and Terror",
        anioLanzamiento: 2010,
        genero: "Horror",
        descripcion: "Birdemic: Shock and Terror is a 2010 American independent romantic horror film written, directed, and produced by James Nguyen.",
        director: directoresSeed[2]
    },
    {
        id: uuid(),
        titulo: "Troll 2",
        anioLanzamiento: 1990,
        genero: "Horror",
        descripcion: "Troll 2 is a 1990 Italian horror comedy film directed by Claudio Fragasso (under the pseudonym Drake Floyd) and starring Michael Stephenson, George Hardy, Margo Prey, Connie McFarland, Deborah Reed, and Jason Wright.",
        director: directoresSeed[3]
    },
    {
        id: uuid(),
        titulo: "Manos: The Hands of Fate",
        anioLanzamiento: 1966,
        genero: "Horror",
        descripcion: "Manos: The Hands of Fate is a 1966 American independent horror film written, directed, and produced by Harold P. Warren, who also starred in the film.",
        director: directoresSeed[4],
    },
    {
        id: uuid(),
        titulo: "Gymkata",
        anioLanzamiento: 1985,
        genero: "Martial Arts",
        descripcion: "A gymnast uses his skills to fight in a deadly competition.",
        director: directoresSeed[5],
    },
    {
        id: uuid(),
        titulo: "Miami Connection",
        anioLanzamiento: 1987,
        genero: "Action",
        descripcion: "A rock band battles drug-dealing motorcycle ninjas.",
        director: directoresSeed[6],
    },
    {
        id: uuid(),
        titulo: "Samurai Cop",
        anioLanzamiento: 1991,
        genero: "Action",
        descripcion: "A cop with a samurai sword takes on the Japanese mafia.",
        director: directoresSeed[7],
    },
    {
        id: uuid(),
        titulo: "Cool as Ice",
        anioLanzamiento: 1991,
        genero: "Musical",
        descripcion: "A rapper falls in love with a girl while on the run from the law.",
        director: directoresSeed[8],
    },
    {
        id: uuid(),
        titulo: "Battlefield Earth",
        anioLanzamiento: 2000,
        genero: "Science Fiction",
        descripcion: "In the year 3000, a man leads a rebellion against alien overlords.",
        director: directoresSeed[9],
    },
    {
        id: uuid(),
        titulo: "Bride of the Monster",
        anioLanzamiento: 1955,
        genero: "Horror",
        descripcion: "A mad scientist builds an atomic monster and captures a woman to be his mate.",
        director: directoresSeed[0],
    },
    {
        id: uuid(),
        titulo: "Orgy of the Death",
        anioLanzamiento: 1965,
        genero: "Adult",
        descripcion: "A writer and his girlfriend are captured by a mummy and forced to watch a series of bizarre stripteases.",
        director: directoresSeed[0],
    },
    {
        id: uuid(),
        titulo: "Night of the Ghouls",
        anioLanzamiento: 1959,
        genero: "Horror",
        descripcion: "A psychic medium raises the dead and causes chaos at a local cemetery.",
        director: directoresSeed[0],
    },
    {
        id: uuid(),
        titulo: "Jail Bait",
        anioLanzamiento: 1954,
        genero: "Crime",
        descripcion: "A young man gets involved in a life of crime and is pursued by the police.",
        director: directoresSeed[0],
    }
]