const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://betawars.github.io/betawars_portfolio',
  title: 'SB.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shashank Sanjay Betawar',
  role: 'Full-stack developer | Software engineer | Tech Enthusiast',
  description:
    'I’m a passionate Fullstack Developer and a grad student at OSU. My expertise lies in creating intuitive user interfaces using React and developing robust backend solutions with Spring Boot. I thrive on the challenge of transforming ideas into functional products, embracing every opportunity to learn and grow in this fast-paced field. Committed to staying updated with the latest technologies, I enjoy collaborating with others who share my enthusiasm for software engineering. Let’s connect and explore how we can innovate together!',
  resume: 'https://drive.google.com/file/d/1VICwnFeqzInWz-N48V7brACJBK5DAAFZ/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/shashank-betawar-0600b9147',
    github: 'https://github.com/betawars',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'betawars@oregonstate.edu',
}

export { header, about, projects, skills, contact }
