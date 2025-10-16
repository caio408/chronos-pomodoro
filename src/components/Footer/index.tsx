import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro'>
        Entenda a técnica pomodoro 🍅
      </RouterLink>
      <RouterLink href='/'>
        Chronos pomodoro &copy; {new Date().getFullYear()} - Feito para
        maximizar o seu aprendizado 🔥🚀{' '}
      </RouterLink>
    </footer>
  );
}
