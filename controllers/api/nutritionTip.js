const NutritionTip = require('../../models/NutritionTip');

async function getAllNutritionTips(req, res) {
  try {
    const nutritionTips = await NutritionTip.find({});
    res.status(200).json(nutritionTips);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  getAllNutritionTips,
};
