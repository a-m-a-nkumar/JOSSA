const express = require('express');
const router = express.Router();
const extractController = require('../controllers/collagePredictor');
const distinctController = require('../controllers/getDistinct');
const dataAnalysisController = require('../controllers/dataAnalysis');

router.get('/graph_data_roundwise', extractController.getGraphDataRoundwise);
router.get('/Distinct', distinctController.getDistinct);
router.get('/dataAnalysis', dataAnalysisController.dataAnalysis);
// other routes...

module.exports = router;
