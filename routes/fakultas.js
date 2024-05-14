const {createFakultas, getFakultas, getFakultasById, updateFakultas, destroyFakultas} = require('../controllers/fakultas');
const router = require('express').Router();

router.post('/fakultas', createFakultas);
router.get('/fakultas', getFakultas);
router.get('/fakultas/:id', getFakultasById);
router.put('/fakultas/:id', updateFakultas);
router.delete('/fakultas/:id', destroyFakultas);

module.exports = router;