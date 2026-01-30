import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.name}>AMIR BEN REZGUI</span>
            <span className={styles.title}>Software Engineer</span>
          </div>

          <nav className={styles.nav}>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2025 Amir Ben Rezgui. Built with React.</p>
          
          <div className={styles.socials}>
            <a href="https://linkedin.com/in/amir-rezgui" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:amir.benrezgui@etudiant-isi.utm.tn" className={styles.socialLink}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
