const recommendations = {
  soilTexture: {
    sandy: "Improve water retention by adding organic matter suchas compost or peat moss. Use mulch to reduce evaporations.",
    silty: "Improve drainage and structure by adding organic matter. Consider planting cover crops to prevent erosion.",
    clay: "Improve aeration and drainage by adding organic matter and coarse. Avoid compaction by minimizing heavy traffic on the soil when wet."
  },
  soilStructure: {
    wellAggregated: "Maintain with regular addition of organic matter. Practice no-till farming to preserve structure.",
    poorlyAggregated: "Add organic matter like compost or green manure. Implement cover cropping and reduce tillage."
  },
  soilPH: {
    acidic: "Add lime (calcium carbonate) to raise pH. Use plants that tolerate or prefer acidic conditions (e.g., blueberries).",
    neutral: "Maintain pH by adding balanced fertilizers and organic matter.",
    alkaline: "Add sulfur or acidic organic matter (e.g., pine needles) to lower pH. Use plants that tolerate alkaline conditions (e.g., lavender)."
  },
  soilMoisture: {
    dry: "Increase organic matter to improve water retention. Use mulch to reduce evaporation. Install irrigation systems if necessary.",
    moderatelyMoist: "Maintain current practices and monitor regularly. Adjust irrigation based on seasonal needs.",
    waterlogged: "Improve drainage by adding organic matter and creating raised beds. Avoid overwatering and ensure proper runoff."
  },
  organicMatter: {
    low: "Regularly add compost, green manure, or well-rotted manure. Practice crop rotation and cover cropping.",
    moderate: "Maintain levels by adding compost annually. Use mulch and avoid burning organic residues.",
    high: "Monitor for nutrient imbalances. Maintain with organic amendments and avoid over-application."
  },
  nutrientLevels: {
    low: "Apply balanced fertilizers or specific nutrients based on soil test results. Incorporate organic matter to improve nutrient availability.",
    moderate: "Maintain with regular application of compost and organic fertilizers. Use crop rotation to balance nutrient use.",
    high: "Avoid over-fertilization. Grow nutrient demanding crops to utilize excess nutrients and prevent runoff."
  },
  microbialActivity: {
    low: "Increase organic matter and provide a food source for microbes. Avoid synthetic chemicals that that can harm soil life.",
    moderate: "Maintain with compost and organic amendments. Use diverse crop rotations and cover crops.",
    high: "Monitor for signs of excessive decomposition. Maintain with organic practices and avoid disturbing soil unnecessarily."
  },
  cec: {
    low: "Add organic matter to improve nutrient retention. Use clay amendments if appropriate for the soil type.",
    moderate: "Maintain with compost and organic amendments. Use diverse crop rotations and cover crops.",
    high: "Monitor for signs of excessive decomposition. Maintain with organic practices and avoid disturbing soil unnecessarily."
  },
  salinity: {
    low: "Maintain current practices. Ensure proper drianage to prevent salt buildup.",
    moderate: "Improve drainage and leach salts from the soil by applying excess water. Use salt-tolerant plants if necessary.",
    high: "Leach salts from the soil with heavy irrigation (if wateris non-saline). Improve drainage and avoid using saline water for irrigation."
  },
  heavyMetals: {
    low: "Monitor regularly. Avoid using contaminated water or amendments.",
    moderate: "Implement phytoremediation by growing plants that accumulate heavy metals. Avoid growing edible crops in contaminated areas.",
    high: "Avoid using soil for food production. Consider soil removal or isolation and use heavy metal-tolerant plants for remediation."
  },
  soilColor: {
    dark: "Indicates high organic matter. Maintain with regular organic amendments.",
    redYellow: "Indicates oxyidation of iron. Ensure proper drainage and consider adding organic matter to improve fertility.",
    light: "Indicates low orgnaic matter. Increase organic amendments and monitor for nutrient deficiencies."
  },
  soilDepth: {
    shallow: "Use raised bed or add topsoil to increase depth. Avoid deep tillage that can bring subsoil to the surface.",
    moderate: "Maintain with regular addition of organic matter. Avoid practices that cause erosion.",
    deep: "Optimize for deep-rooting plants. Maintain with organic amendments and monitor for nutrient levels throughout the soil profile."
  }
};

function generateRecommendations() {
  
  const soilTexture = document.getElementById("soilTexture").value;
  const soilStructure = document.getElementById("soilStructure").value;
  const soilPH = document.getElementById("soilPH").value;
  const soilMoisture = document.getElementById("soilMoisture").value;
  const organicMatter = document.getElementById("organicMatter").value;
  const nutrientLevels = document.getElementById("nutrientLevels").value;
  const cec = document.getElementById("cec").value; 
  const microbialActivity = document.getElementById("microbialActivity").value;
  const salinity = document.getElementById("salinity").value;
  const heavyMetals = document.getElementById("heavyMetals").value;
  const soilColor = document.getElementById("soilColor").value;
  const soilDepth = document.getElementById("soilDepth").value;

  const output = `
    <h2>Recommendations</h2>
    <p><strong>Soil Texture:</strong> ${recommendations.soilTexture[soilTexture]}</p>
    <p><strong>Soil Structure:</strong> ${recommendations.soilStructure[soilStructure]}</p>
    <p><strong>Soil pH:</strong> ${recommendations.soilPH[soilPH]}</p>
    <p><strong>Soil Moisture:</strong> ${recommendations.soilMoisture[soilMoisture]}</p>
    <p><strong>Organic Matter:</strong> ${recommendations.organicMatter[organicMatter]}</p>
    <p><strong>Nutrient Levels:</strong> ${recommendations.nutrientLevels[nutrientLevels]}</p>
    <p><strong>Cation Exchange Capacity:</strong> ${recommendations.cec[cec]}</p>
    <p><strong>Microbial Activity:</strong> ${recommendations.microbialActivity[microbialActivity]}</p>
    <p><strong>Salinity:</strong> ${recommendations.salinity[salinity]}</p>
    <p><strong>Heavy Metals and Contaminants:</strong> ${recommendations.heavyMetals[heavyMetals]}</p>
    <p><strong>Soil Color:</strong> ${recommendations.soilColor[soilColor]}</p>
    <p><strong>Soil Depth:</strong> ${recommendations.soilDepth[soilDepth]}</p>

  `;

  document.getElementById("recommendations").innerHTML = output;
}