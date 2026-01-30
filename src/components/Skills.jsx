import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'PHP', 'C/C++', 'SQL', 'Dart', 'HTML/CSS']
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Spring Boot', 'Flutter', 'Bootstrap', 'jQuery', 'Ajax']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'Oracle', 'Firebase', 'MongoDB']
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'VS Code', 'IntelliJ', 'Postman', 'SwaggerUI', 'DBeaver', 'Xampp']
  },
  {
    title: 'Data Science',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Data Analysis']
  },
  {
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Team Collaboration', 'Agile/Scrum', 'Project Management']
  }
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>// SKILLS</span>
          <h2 className={styles.sectionTitle}>
            TECHNICAL <span className={styles.gradient}>TOOLKIT</span>
          </h2>
        </div>
        
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <div className={styles.skillTags}>
                {category.skills.map((skill, i) => (
                  <span key={i} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
