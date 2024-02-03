"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < sampleSize; i++) {
    let randomInteger = Math.ceil(Math.random() * 6);
    valueCounts[randomInteger - 1] += 1;
  }

  const results = [];

  for (let value of valueCounts) {
    results.push(((value / sampleSize) * 100).toFixed(2));
  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];

  for (let value of sampleSizes) {
    console.log(runExperiment(value), value);
  }
}

main();
