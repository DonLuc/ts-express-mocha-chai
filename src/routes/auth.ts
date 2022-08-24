import { Router, Request, Response } from "express";

const router = Router();

// @route GET /auth
// @desc Authenticate a user
// @access PUBLIC 
router.get("/", (req: Request, res: Response) => {
    //res.status(200).send("Authenticating a USER");
    res.send(200);
});

export default router;
