const express = require('express');

const app = express();

app.use(express.json())

let courses = ["Curso 1", "Curso 2", "Curso 3", "Curso 4"];

app.get("/courses", (request, response) => {
    let { id } = request.query;
    if (id != undefined) {
        let filtrados = courses.filter((curso, indice) => indice == id);
        return response.json(filtrados);
    }
    return response.json(courses);
})

app.post("/courses", (request, response) => {
    const { descricao } = request.body;
    courses.push(descricao);
    return response.json(courses);
})

app.put("/courses/:id", (resquest, response) => {
    const { id } = resquest.params;
    const { descricao } = resquest.body;
    courses[id] = descricao;
    return response.json(courses)
})

app.patch("/courses/:id", (request, response) => {
    let cursos = ["Curso 1", "Curso 2", "Curso 3", "Curso 4"];
    return response.json(cursos);
})

app.delete("/courses/:id", (request, response) => {
    const { id } = request.params;
    courses.splice(id, 1);
    return response.json(courses);
})

app.listen(3333);