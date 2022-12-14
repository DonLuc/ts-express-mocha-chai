import express, {Application, Request, Response, NextFunction} from "express";
import routes from "routes/index";

export default function createServer() {
    const app: Application = express();

    app.get("/", (req: Request, res: Response, next: NextFunction) => {
        res.send("Express server started on the root path!");
    }); 

    app.use(routes);
    return app;
}