import Animal from '../models/animal.model.js';

const animalDAO = {};

animalDAO.getAllAnimals = async () => {
    try {
        const animals = await Animal.find();
        return animals;
    } catch (error) {
        console.error('Error al obtener todos los animales:', error);
        throw error;
    }
};

animalDAO.getOneAnimal = async (animalId) => {
    const animal = await Animal.findOne({ _id: animalId });
    return animal;
};


animalDAO.insertAnimal = async (animalData) => {
    try {
        const animalSaved = new Animal(animalData);
        await animalSaved.save();
        return true;
    } catch (error) {
        console.error('Error al insertar un animal:', error);
        throw error;
    }
};

animalDAO.updateAnimal = async (animalId, animal) => {
    const updatedAnimal = await Animal.findOneAndUpdate({ _id: animalId }, animal);
    if (updatedAnimal !== null) {
        return true;
    } else {
        return false;
    }
};

animalDAO.deleteAnimal = async (animalId) => {
    try {
        const deletedAnimal = await Animal.findOneAndDelete({ _id: animalId });
        if (deletedAnimal !== null) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
};

animalDAO.homeAnimals = async () => {
    try {
        const animals = await Animal.find();
        return animals;
    } catch (error) {
        console.error('Error al obtener todos los animales:', error);
        throw error;
    }
};

animalDAO.info = async () => {
    try {
        const animals = await Animal.find();
        return animals;
    } catch (error) {
        console.error('Error al obtener toda la información de los animales:', error);
        throw error;
    }
};

export default animalDAO;
