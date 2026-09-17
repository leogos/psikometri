import styles from './Question.module.css';

function Question({
  question,
  options,
  selectedValue,
  onSelect,
  isOpen,
  questionNumber,
  onEdit,
}) {
  const selectedOption = options.find(option => option.value === selectedValue);

  return (
    <section
      className={`${styles.question} ${isOpen ? styles.open : styles.closed}`}
    >
      <button
        type="button"
        className={styles.header}
        onClick={() => {
          if (!isOpen) {
            onEdit(questionNumber - 1);
          }
        }}
      >
        <span className={styles.number}>{questionNumber}</span>

        <span className={styles.text}>{question.text}</span>
      </button>

      {isOpen && (
        <div className={styles.options}>
          {options.map(option => (
            <label key={option.value} className={styles.option}>
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option.value}
                checked={selectedValue === option.value}
                onChange={() => onSelect(question.id, option.value)}
              />

              <span>{option.label}</span>
            </label>
          ))}
        </div>
      )}

      {!isOpen && selectedOption && (
        <div className={styles.selectedAnswer}>
          Cevap: {selectedOption.label}
        </div>
      )}
    </section>
  );
}

export default Question;
