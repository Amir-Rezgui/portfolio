import styles from './Experience.module.css';

const experiences = [
  {
    id: 1,
    company: 'Nextira',
    role: 'Full Stack Developer',
    period: 'Jul 2024 - Sep 2024',
    location: 'Tunisia',
    description: 'Built and enhanced internal web platforms handling both frontend and backend development. Developed features using PHP and JavaScript with Bootstrap, jQuery, and Ajax. Wrote optimized SQL queries and integrated database tools like DBeaver.',
    technologies: ['PHP', 'JavaScript', 'Bootstrap', 'jQuery', 'Ajax', 'MySQL', 'DBeaver'],
    impact: 'Internship'
  },
  {
    id: 2,
    company: 'Kromberg & Schubert',
    role: 'Mobile Developer',
    period: 'Mar 2024 - May 2024',
    location: 'Tunisia',
    description: 'Developed a cross-platform workflow management application using Flutter and Firebase. Designed intuitive UI/UX and implemented real-time data synchronization for seamless user experience.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Mobile UI/UX'],
    impact: 'Internship'
  },
  {
    id: 3,
    company: 'Higher Institute of Computer Science (ISI)',
    role: 'Software Engineering Student',
    period: 'Sep 2024 - Present',
    location: 'Ariana, Tunisia',
    description: 'Pursuing Engineer\'s Degree in Software Engineering. Building projects in AI, web development, and mobile applications. Previously graduated with Bachelor\'s in CS with High Honors.',
    technologies: ['Java', 'Python', 'React', 'Spring Boot', 'Algorithms'],
    impact: 'Graduating 2027'
  }
];

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>// EXPERIENCE</span>
          <h2 className={styles.sectionTitle}>
            WHERE I'VE <span className={styles.gradient}>LEARNED</span>
          </h2>
        </div>
        
        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineLeft}>
                <span className={styles.period}>{exp.period}</span>
                <span className={styles.impact}>{exp.impact}</span>
              </div>
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                <div className={styles.markerLine}></div>
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.contentHeader}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <h4 className={styles.company}>@ {exp.company}</h4>
                </div>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.technologies}>
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className={styles.tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
