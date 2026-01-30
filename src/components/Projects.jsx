import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'AI Image Classifier',
    description: 'Deep learning model for image classification using CNN architecture. Built with TensorFlow and deployed as a REST API. Achieves 94% accuracy on custom dataset.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'NumPy', 'REST API'],
    link: 'https://github.com/amirrezgui/image-classifier',
    category: 'AI'
  },
  {
    id: 2,
    title: 'Excellent Education Platform',
    description: 'Full-stack platform for training management with user authentication, course tracking, and admin dashboards. Built with modern Java and React stack.',
    technologies: ['Spring Boot', 'React', 'MySQL', 'REST API', 'JWT'],
    link: 'https://github.com/amirrezgui/education-platform',
    category: 'Full-Stack'
  },
  {
    id: 3,
    title: 'Workflow Management App',
    description: 'Cross-platform mobile application for workflow management with real-time sync. Features intuitive UI and Firebase backend integration.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore'],
    link: 'https://github.com/amirrezgui/workflow-app',
    category: 'Mobile'
  },
  {
    id: 4,
    title: 'Sliding Puzzle Solver',
    description: 'AI-powered puzzle solver implementing A* and BFS search algorithms. Visualizes the solving process and compares algorithm efficiency.',
    technologies: ['Python', 'Algorithms', 'A* Search', 'BFS', 'Pygame'],
    link: 'https://github.com/amirrezgui/puzzle-solver',
    category: 'AI'
  },
  {
    id: 5,
    title: 'TweeTN News Website',
    description: 'Functional news website inspired by Twitter and Tunisian culture. Features user accounts, post creation, and real-time feed updates.',
    technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'Ajax'],
    link: 'https://github.com/amirrezgui/tweetn',
    category: 'Web'
  },
  {
    id: 6,
    title: 'Labyrinthe Game',
    description: 'Interactive maze-solving game with pathfinding visualization. Player navigates through procedurally generated mazes with increasing difficulty.',
    technologies: ['C++', 'OOP', 'Game Logic', 'Algorithms'],
    link: 'https://github.com/amirrezgui/labyrinthe',
    category: 'Game'
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>// PROJECTS</span>
          <h2 className={styles.sectionTitle}>
            WHAT I'VE <span className={styles.gradient}>BUILT</span>
          </h2>
          <p className={styles.subtitle}>From AI algorithms to full-stack platforms - projects that showcase my skills.</p>
        </div>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
            >
              <div className={styles.cardTop}>
                <span className={styles.category}>{project.category}</span>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.technologies}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.tech}>{tech}</span>
                ))}
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.viewCode}>
                  View on GitHub
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
