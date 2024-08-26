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
        id: "8c2e3d39-c21d-493e-9962-618e82f2f6b9",
        peoresPeliculas: []
    },
    {
        nombre: "Harold P. Warren",
        fechaNacimiento: new Date("1925-06-12"),
        nacionalidad: "American",
        biografia: "Harold P. Warren was an American writer and director, known for his cult film Manos.",
        id: "4c2802e4-4e6c-4184-bc1e-8164d5bbbed1",
        peoresPeliculas: []
    },
    {
        nombre: "Emmett Alston",
        fechaNacimiento: new Date("1900-01-01"),
        nacionalidad: "American",
        biografia: "Emmett Alston is an American filmmaker, known for his work in the martial arts genre.",
        id: "b3b9ba9d-6802-42dc-ac9f-a0d2c3ea6148",
        peoresPeliculas: []
    },
    {
        nombre: "Woo-sang Park",
        fechaNacimiento: new Date("1900-01-01"),
        nacionalidad: "Korean",
        biografia: "Woo-sang Park is a Korean filmmaker, known for his work in the action genre.",
        id: "02be7d00-a581-43b6-baef-45f08e0fad70",
        peoresPeliculas: []
    },
    {
        nombre: "Amir Shervan",
        fechaNacimiento: new Date("1932-01-01"),
        nacionalidad: "Iranian",
        biografia: "Amir Shervan was an Iranian-American filmmaker, known for his cult action films.",
        id: "952f2993-1f03-4416-82d7-4f46d9ea2246",
        peoresPeliculas: []
    },
    {
        nombre: "David Kellogg",
        fechaNacimiento: new Date("1900-01-01"),
        nacionalidad: "American",
        biografia: "David Kellogg is an American filmmaker, known for his work in the musical genre.",
        id: "8b3b8fee-50e9-40fe-8570-b8832737f147",
        peoresPeliculas: []
    },
    {
        nombre: "Roger Christian",
        fechaNacimiento: new Date("1944-01-04"),
        nacionalidad: "British",
        biografia: "Roger Christian is a British filmmaker, known for his work in the science fiction genre.",
        id: "dd22e493-1958-427a-a58c-5d0453305148",
        peoresPeliculas: []
    }
];