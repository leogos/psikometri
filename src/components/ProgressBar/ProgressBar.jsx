import styles from './ProgressBar.module.css';

function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div className={styles.wrapper}>
      <div className={styles.progress} style={{ width: `${percentage}%` }} />
    </div>
  );
}

export default ProgressBar;
