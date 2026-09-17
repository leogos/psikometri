export function createSubmission({ test, answers, totalScore, maxScore }) {
  const submission = {
    test: test.id,
    timestamp: new Date().toISOString(),
    totalScore,
    maxScore,
    answers: {},
  };

  test.questions.forEach(question => {
    submission.answers[`q${question.id}`] = answers[question.id] ?? null;
  });

  return submission;
}
