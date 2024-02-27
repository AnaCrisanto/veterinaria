import { Router } from "express";
import { getAllAnimals, getOneAnimal, insertAnimal, updateAnimal, deleteAnimal, homeAnimals, info } from "../controllers/animal.controller.js";

const router = Router();

router.get('/', getAllAnimals);
router.get('/home2', homeAnimals);
router.get('/info', info);
router.get('/:animalId', getOneAnimal);
router.post('/', insertAnimal);
router.post('/:animalId', updateAnimal);
router.get('/delete/:animalId', deleteAnimal);

export default router;
