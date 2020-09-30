const express = require('express');
const router = express.Router();
const Band = require('../models/Band');
const { check, param, body, validationResult } = require('express-validator');

router.get('/', async (req, res) => {
  try {
    const bands = await Band.findAll();

    if (!bands) return res.status(404).json({ message: 'Database is empty.' });

    res.json(bands);
  } catch (err) {
    console.error(err);

    res
      .status(403)
      .json({ message: 'Something went wrong. Try again later.' });
  }
});

router.get(
  '/:movieId',
  [param('movieId', 'Only integers are allowed.').isInt()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json(errors);

    const { movieId } = req.params;

    try {
      const band = await Band.findOne({ where: { id: movieId } });

      if (!band) return res.status(404).json({ message: 'Band not found.' });

      res.json(band);
    } catch (err) {
      console.error(err);

      return res
        .status(400)
        .json({ message: 'Something went wrong. Try again later.' });
    }
  }
);

router.post(
  '/',
  [
    body('name', 'Name is required.').not().isEmpty(),
    body('members', 'Members field is required.').not().isEmpty(),
    body('start_date', 'Start date is required.').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json(errors);

    try {
      const band = await Band.create(req.body);
      res.json({ message: 'New band inserted.', result: band.dataValues });
    } catch (err) {
      console.error(err);

      return res
        .status(400)
        .json({ message: 'Something went wrong. Try again later. ' });
    }
  }
);

router.patch(
  '/:movieId',
  [param('movieId', 'Only integers are allowed').isInt()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json(errors);

    const { movieId } = req.params;

    try {
      const updatedBand = await Band.update(req.body, {
        where: { id: movieId },
      });

      res.json(updatedBand);
    } catch (err) {
      console.log(err);

      return res
        .status(400)
        .json({ message: 'Something went wrong. Try again later.' });
    }
  }
);

module.exports = router;
