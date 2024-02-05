import asyncHandler from '../middleware/asyncHandler.js'

import Simulation from '../models/simulationModel.js'

// @desc    Fetch all simulations
// @route   GET /api/simulations
// @access  Public
const getSimulations = asyncHandler(async (req, res) => {
  const simulations = await Simulation.find({})
  res.json(simulations)
})

// @desc    Fetch single simulation
// @route   GET /api/simulations/:id
// @access  Public
const getSimulationById = asyncHandler(async (req, res) => {
  const simulation = await Simulation.findById(req.params.id)

  if (simulation) {
    return res.json(simulation)
  } else {
    res.status(404)
    throw new Error('❌ Simulation non trouvée ❌')
  }
})

export { getSimulations, getSimulationById }
