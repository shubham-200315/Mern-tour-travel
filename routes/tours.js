import express from 'express'
// import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../Controllers/tourControllers.js'
import { createTour, getFeaturedTour, getTourBySearch, getTourCount } from '../Controllers/tourControllers.js'
import { updateTour } from '../Controllers/tourControllers.js'
import { deleteTour } from '../Controllers/tourControllers.js'
import { getSingleTour } from '../Controllers/tourControllers.js'
import { getAllTour } from '../Controllers/tourControllers.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()






//Create new tour  
router.post('/', verifyAdmin, createTour)

// //Update tour 
router.put('/:id', verifyAdmin, updateTour)

// //Delete tour 
router.delete('/:id', verifyAdmin, deleteTour)

// //Get single tour
router.get('/:id', getSingleTour)

// //Get all tour 
router.get('/', getAllTour)

//Get tour by search
router.get("/search/getTourBySearch", getTourBySearch)

router.get("/search/getFeaturedTours", getFeaturedTour)
router.get("/search/getTourCount", getTourCount)




export default router