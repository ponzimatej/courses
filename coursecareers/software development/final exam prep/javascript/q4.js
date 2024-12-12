function simplifyPlantObj(plants) {
  let simplified = {};

  for (const plant of plants) {
    let simplifiedSteps = {};
    
    let time = 0;
    for (const plantStep of plant.productionSteps) {
      time += plantStep.time;
      simplifiedSteps[plantStep.step] = time;
    }
    simplified[plant.id] = simplifiedSteps;
  }

  return simplified;
}

let plants = [];

console.log(simplifyPlantObj(plants));
