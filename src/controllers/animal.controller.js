import animalDAO from '../dao/animal.dao.js';


export const getAllAnimals = (req, res) => {
    animalDAO.getAllAnimals()
        .then(animals => res.render('../src/views/index.ejs', { animals }))
        .catch(err => res.json({ status: "Servidor no disponible" }));
};

export const getOneAnimal = (req, res) => {
    animalDAO.getOneAnimal(req.params.animalId)
        .then(animal => res.render('../src/views/edit.ejs', { animal }))
        .catch(err => res.json({ status: "Servidor no disponible" }));
};

export const insertAnimal = (req, res) => {
    animalDAO.insertAnimal(req.body)
        .then(result => {
            if (result) res.redirect('/api/animals');
        })
        .catch(err => {
            res.json({ status: "Servidor no disponible" });
        });
};

export const updateAnimal = (req, res) => {
    animalDAO.updateAnimal(req.params.animalId, req.body)
        .then(result => {
            if (result) res.redirect('/api/animals/');
        })
        .catch(err => {
            res.json({ status: "Servidor no disponible" });
        });
};

export const deleteAnimal = (req, res) => {
    animalDAO.deleteAnimal(req.params.animalId)
        .then(result => {
            if (result) {
                res.redirect('/api/animals/');
            } else {
                res.json({ status: "Servicio no disponible" });
            }
        })
        .catch(error => {
            console.error(error);
            res.json({ status: "Servidor no disponible" });
        });
};

export const homeAnimals = (req, res) => {
    animalDAO.homeAnimals()
        .then(animals => res.render('../src/views/inicio.ejs', { animals }))
        .catch(err => res.json({ status: "Servidor no disponible" }));
};

export const info = (req, res) => {
    animalDAO.info()
        .then(animals => res.render('../src/views/info.ejs', { animals }))
        .catch(err => res.json({ status: "Servidor no disponible" }));
};
