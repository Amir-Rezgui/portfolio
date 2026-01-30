import styles from './About.module.css';

const About = () => {
  const expertise = [
    { title: 'Full-Stack Dev', desc: 'React, Spring Boot, PHP, REST APIs' },
    { title: 'Mobile Dev', desc: 'Flutter, Firebase, Cross-platform apps' },
    { title: 'AI & Data', desc: 'Python, Scikit-learn, Algorithms' },
    { title: 'Databases', desc: 'MySQL, Oracle, PostgreSQL, Firebase' },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>// ABOUT</span>
          <h2 className={styles.title}>
            FUTURE <span className={styles.gradient}>SOFTWARE ENGINEER</span><br />
            WITH A PASSION FOR BUILDING
          </h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.bio}>
            <p className={styles.lead}>
              Software Engineering student at <strong>ISI Tunisia</strong>, graduating in 2027.
              Passionate about creating impactful solutions that blend elegant design with powerful functionality.
            </p>
            <p>
              With hands-on experience from <strong>2 internships</strong> and multiple projects spanning 
              web, mobile, and AI development, I bring a versatile skill set and a hunger to learn.
            </p>
            <p>
              I thrive on solving complex problems - from implementing A* search algorithms 
              to building full-stack platforms. Currently exploring AI/ML while strengthening 
              my foundation in software architecture.
            </p>
            
            <div className={styles.techStack}>
              <span className={styles.techLabel}>CORE STACK:</span>
              <div className={styles.techTags}>
                <span>Java</span>
                <span>Python</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Spring Boot</span>
                <span>Flutter</span>
                <span>MySQL</span>
                <span>Git</span>
              </div>
            </div>
          </div>

          <div className={styles.expertiseGrid}>
            {expertise.map((item, index) => (
              <div key={index} className={styles.expertiseCard}>
                <h3 className={styles.expertiseTitle}>{item.title}</h3>
                <p className={styles.expertiseDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.metrics}>
          <div className={styles.metric}>
            <span className={styles.metricNumber}>2027</span>
            <span className={styles.metricLabel}>Graduation Year</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricNumber}>2</span>
            <span className={styles.metricLabel}>Internships</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricNumber}>6+</span>
            <span className={styles.metricLabel}>Projects</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricNumber}>4</span>
            <span className={styles.metricLabel}>Languages Spoken</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
