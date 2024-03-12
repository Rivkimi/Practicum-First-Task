import express from 'express';
import * as controllers from '../controllers/User.js';

const router = express.Router();

router.get("/",controllers.getAllUsers);
router.get("/:id",controllers.getUserById);
router.post("/", controllers.addUser);
router.put("/:id", controllers.updateUser); 
router.delete("/:id", controllers.delelteUser); 

export default router;