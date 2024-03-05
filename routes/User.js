import express from 'express';
import * as controllers from '../controllers/User';

const router = express.Router();

router.get("/",controllers.getAllUsers);
router.post("/", controllers.addUser); // יצירת משתמש חדש
router.put("/:id", controllers.updateUser); // עדכון פרטי משתמש
router.delete("/:id", controllers.delelteUser); // מחיקת משתמש 

export default router;