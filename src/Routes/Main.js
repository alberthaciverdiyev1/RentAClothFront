import express from 'express';

import viewController from "../Controllers/ViewController.js";
import visitorLogger from "../Middlewares/Visitors.js";
const router = express.Router();


//Load Views
router.get('/', viewController.home);
router.get('/shop', viewController.shopList);
// router.get('/auth', viewController.auth);
// router.get('/jobs',visitorLogger, viewController.jobs);
// router.get('/about-us',visitorLogger, viewController.aboutUs);
// router.get('/contact',visitorLogger, viewController.contactUs);
// router.get('/add-job',visitorLogger, viewController.addJob);
// router.get('/statistics',viewController.statistics)
// //Enums
// router.get('/education', viewController.education);
// router.get('/experience', viewController.experience);


export default router;
