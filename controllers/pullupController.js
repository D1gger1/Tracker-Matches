const PullupSet = require('../models/PullupSet');

async function addPullupSet(req, res) {
    try {

        const { reps } = req.body;
        const userId = req.user.userId;

        const newPullupSet = new PullupSet({ userId, reps });
        await newPullupSet.save();
        res.status(201).json(newPullupSet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function getPullupSet(req, res) {

    try {
        const userId = req.user.userId;
        const pullupSets = await PullupSet.find({ userId });
        res.status(200).json(pullupSets);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

}


module.exports = { addPullupSet, getPullupSet };

