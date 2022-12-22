import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    //rest api
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);

    // router.get('/trantuananh', (req, res) => {
    //     return res.send('Hello world with trantuananh')
    // });

    return app.use("/", router);
}

module.exports = initWebRoutes;