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

async function getDailyStats(req, res) {
    try {
        const userId = req.user.userId;

        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        const sets = await PullupSet.find({
            userId,
            performedAt: { $gte: startOfDay, $lte: endOfDay }
        })

        const totalReps = sets.reduce((sum, set) => sum + set.reps, 0);

        res.status(200).json({ totalReps, sets });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function getWeeklyStats(req, res) {
    try {
        const userId = req.user.userId;

        const startOfWeek = new Date();
        const dayOfWeek = startOfWeek.getDay();
        const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
        startOfWeek.setDate(startOfWeek.getDate() - diff);
        startOfWeek.setHours(0, 0, 0, 0);

        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);

        const sets = await PullupSet.find({
            userId,
            performedAt: { $gte: startOfWeek, $lte: endOfWeek }
        });

        const totalReps = sets.reduce((sum, set) => sum + set.reps, 0);

        res.status(200).json({ totalReps, sets });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = { addPullupSet, getPullupSet, getDailyStats, getWeeklyStats };

