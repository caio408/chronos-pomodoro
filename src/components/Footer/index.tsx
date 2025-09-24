import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda a técnica pomodoro 🍅</a>
      <a href=''>
        Chronos pomodoro &copy; {new Date().getFullYear()} - Feito para
        maximizar o seu aprendizado 🔥🚀{' '}
      </a>
    </footer>
  );
}
