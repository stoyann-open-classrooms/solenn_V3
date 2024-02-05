import express from 'express'

const router = express.Router()
import {
  getSimulations,
  getSimulationById,
} from '../controllers/simulationController.js'

router.route('/').get(getSimulations)
router.route('/:id').get(getSimulationById)

export default router
