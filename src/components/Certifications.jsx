import styles from './Certifications.module.css';

const certifications = [
  {
    id: 1,
    title: 'Foundations of Project Management',
    issuer: 'Google',
    date: 'Jan 2026'
  },
  {
    id: 2,
    title: 'Project Initiation: Starting a Successful Project',
    issuer: 'Google',
    date: 'Jan 2026'
  },
  {
    id: 3,
    title: 'Project Planning: Putting It All Together',
    issuer: 'Google',
    date: 'Jan 2026'
  },
  {
    id: 4,
    title: 'AI and Machine Learning Fundamentals',
    issuer: 'CDOSS',
    date: 'Dec 2025'
  },
  {
    id: 5,
    title: 'Data Analytics Essentials',
    issuer: 'Cisco',
    date: 'Nov 2025'
  },
  {
    id: 6,
    title: 'Python For Data Science',
    issuer: 'CDOSS',
    date: 'May 2025'
  },
  {
    id: 7,
    title: 'English Communication B2+',
    issuer: 'OfCourse',
    date: '2024'
  }
];

const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Professional' },
  { name: 'English', level: 'Professional' },
  { name: 'German', level: 'Elementary' }
];

const Certifications = () => {
  return (
    <section id="certifications" className={styles.certifications}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>// CERTIFICATIONS</span>
          <h2 className={styles.sectionTitle}>
            CREDENTIALS & <span className={styles.gradient}>LANGUAGES</span>
          </h2>
        </div>
        
        <div className={styles.certsGrid}>
          {certifications.map((cert) => (
            <div key={cert.id} className={styles.certCard}>
              <div className={styles.certInfo}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certIssuer}>{cert.issuer} • {cert.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.languagesSection}>
          <h3 className={styles.langTitle}>Languages Spoken</h3>
          <div className={styles.langGrid}>
            {languages.map((lang, index) => (
              <div key={index} className={styles.langCard}>
                <span className={styles.langName}>{lang.name}</span>
                <span className={styles.langLevel}>{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
