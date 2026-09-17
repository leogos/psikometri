export function calculateTotalScore(answers) {
  return Object.values(answers).reduce(
    (total, value) => total + Number(value),
    0
  );
}

export function calculateMaxScore(test) {
  return test.questions.length * test.maxValue;
}

export function calculatePercentage(totalScore, maxScore) {
  if (!maxScore) {
    return 0;
  }

  return Math.round((totalScore / maxScore) * 100);
}
