import { Director } from "src/directores/entities/director.entity";
import { v4 as uuidv4 } from 'uuid';

export const directoresSeed: Director[] = [
    {
        nombre: "Ed Wood",
        fechaNacimiento: new Date("1924-10-10"),
        nacionalidad: "American",
        biografia: "Ed Wood was an American filmmaker, actor, and writer, known for his low-budget cult films.",
        id: uuidv4(),
        peoresPeliculas: []
    },
    {
        nombre: "Tommy Wiseau",
        fechaNacimiento: new Date("1960-10-03"),
        nacionalidad: "Unknown",
        biografia: "Tommy Wiseau is a filmmaker, actor, and businessman, known for his cult film The Room.",
        id: uuidv4(),
        peoresPeliculas: []
    },
    {
        nombre: "James Nguyen",
        fechaNacimiento: new Date("1900-01-01"),
        nacionalidad: "American",
        biografia: "James Nguyen is a Vietnombrese-American filmmaker, known for his low-budget films.",
        id: uuidv4(),
        peoresPeliculas: []
    },
    {
        nombre: "Claudio Fragasso",
        fechaNacimiento: new Date("1954-01-01"),
        nacionalidad: "Italian",
        biografia: "Claudio Fragasso is an Italian filmmaker, known for his work in the horror genre.",
        id: uuidv4(),
        peoresPeliculas: []
    },
    {
        nombre: "Harold P. Warren",
        fechaNacimiento: new Date("1925-06-12"),
        nacionalidad: "American",
        biografia: "Harold P. Warren was an American writer and director, known for his cult film Manos.",
        id: uuidv4(),
        peoresPeliculas: []
    },
    {
        nombre: "Emmett Alston",
        fechaNacimiento: new Date("1900-01-01"),
        nacionalidad: "American",
        biografia: "Emmett Alston is an American filmmaker, known for his work in the martial arts genre.",
        id: uuidv4(),
        peoresPeliculas: []
    },
    {
        nombre: "Woo-sang Park",
        fechaNacimiento: new Date("1900-01-01"),
        nacionalidad: "Korean",
        biografia: "Woo-sang Park is a Korean filmmaker, known for his work in the action genre.",
        id: uuidv4(),
        peoresPeliculas: []
    },
    {
        nombre: "Amir Shervan",
        fechaNacimiento: new Date("1932-01-01"),
        nacionalidad: "Iranian",
        biografia: "Amir Shervan was an Iranian-American filmmaker, known for his cult action films.",
        id: uuidv4(),
        peoresPeliculas: []
    },
    {
        nombre: "David Kellogg",
        fechaNacimiento: new Date("1900-01-01"),
        nacionalidad: "American",
        biografia: "David Kellogg is an American filmmaker, known for his work in the musical genre.",
        id: uuidv4(),
        peoresPeliculas: []
    },
    {
        nombre: "Roger Christian",
        fechaNacimiento: new Date("1944-01-04"),
        nacionalidad: "British",
        biografia: "Roger Christian is a British filmmaker, known for his work in the science fiction genre.",
        id: uuidv4(),
        peoresPeliculas: []
    }
];