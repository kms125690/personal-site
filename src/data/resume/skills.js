const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL/Redshift',
    competency: 2,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'FastAPI',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git/',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Docker',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Typescript',
    competency: 1,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C/C++',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'C#',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'ROS 2',
    competency: 5,
    category: ['Robotics Engineering'],
  },
  {
    title: 'Moveit 2',
    competency: 3,
    category: ['Robotics Engineering'],
  },
  {
    title: 'Open-RMF',
    competency: 4,
    category: ['Robotics Engineering'],
  },
  {
    title: 'Nav2',
    competency: 4,
    category: ['Robotics Engineering'],
  },
  {
    title: 'Circuit Design',
    competency: 4,
    category: ['Electronic Engineering'],
  },
  {
    title: 'Altium Designer',
    competency: 4,
    category: ['Electronic Engineering', 'Tools'],
  },
  {
    title: 'STM32',
    competency: 4,
    category: ['Electronic Engineering', 'Microcontrollers'],
  },
  {
    title: 'PIC Microcontrollers',
    competency: 3,
    category: ['Electronic Engineering', 'Microcontrollers'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
