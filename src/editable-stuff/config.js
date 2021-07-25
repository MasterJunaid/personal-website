// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ryan",
  middleName: "",
  lastName: "Miles",
  message: "Android Developer | CS @ Georgia Tech",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ryanm14",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ryanrmiles/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/general/me.jpg"),
  imageSize: 300,
  message:
    "My name is Ryan Miles. I’m a current Computer Science graduate student at Georgia Institute of Technology. As an Android Developer, my passion is to create mobile apps that people love to use. As a passionate developer, I aim to mentor the next generation of developers by furthering my skills.",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "ryanm14", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  // heading: "Leadership",
  // message:
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  // images: [
  //   {
  //     img: require("../assets/img/me.jpg"),
  //     label: "First slide label",
  //     paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
  //   },
  //   {
  //     img: require("../assets/img/me.jpg"),
  //     label: "Second slide label",
  //     paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
  //   },
  // ],
  // imageSize: {
  //   width:"615",
  //   height:"450"
  // }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90, loc: ">10k" },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "Java", value: 65 },
    { name: "Kotlin", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

const experiences = {
  show: true,
  heading: "Work Experiences",
  data: [
    {
      company: 'bluefletch',
      companylogo: require('../assets/img/companies/bf_logo.png'),
      logoWidth: 100,
      logoHeight: 100,
      role: 'Intern Android Developer at BlueFletch',// Here Add Company Name
      date: 'June 2018 – Present',
      description: '· Developed an AOSP platform service to run system level commands on Manufacturer signed devices\n' +
        '· Programmed an AES encrypted IPC channel with for secure data transfer between multiple apps through AIDL · Designed a customizable & secure Android replacement notification drawer to allow/deny specific notifications ' +
        '· Developed an Android for Work platform in Java that increased supported devices by 1500%\n' +
        '· Increased Android projects code coverage from 0% to 70% using Espresso, JUnit, Mockito, and Robolectric\n' +
        '· Implemented a unified theming library in Java to save 6-7 development hours per demo request'
    },
    {
      company: 'gt-ta',
      logoWidth: 130,
      logoHeight: 80,
      companylogo: require('../assets/img/companies/gt_logo.png'),
      description: 'TA for CS 3451 - Introduction to Computer Graphics, CS4803: 3D User Interface Design in VR, CS 1331: Intro to Object Oriented Programming',
      role: 'Teaching Assistant',
      date: 'Jan 2019 – Present',
    },
    {
      company: 'gt-research',
      logoWidth: 130,
      logoHeight: 80,
      description: '· Spearheaded integrating VR in a React conferencing platform using Babylon.js and WebXR with the AEL Lab\n' +
        '· Deployed the project to an EC2 instance with backend PostgreSQL, NGINX web server, and Typescript codebase',
      companylogo: require('../assets/img/companies/gt_logo.png'),
      role: 'Undergraduate Research Assistant (Clowdr in VR)',
      date: 'Jan 2021 – Aug 2021',
    },
  ]
}
const UnfolditProject = {
  name: "Unfoldit",
  description: ['Creation of Unfoldit Android, a mobile app to test and enhance your spatial awareness abilities', 'Developed a production ready Android game around spatial awareness with Kotlin, modern libraries, and tests',
 'Finalists for Georgia Tech 2019 Inventure Prize with 1000+ Downloads and 100+ five-star reviews'],
  playstore_link: "https://play.google.com/store/apps/details?id=com.unfoldit.unfoldit&hl=en_US&gl=US",
  image: require('../assets/img/android/unfoldit.jpg'),
  link: "https://www.unfolditapp.com/",
  codeLink: null,
  languages: [{name: "Kotlin", percent: "100%"}, {name: "Dagger"}, {name: 'Firebase Analytics'}, {name: 'Single Activity'}, {name: 'MVVM Architecture'}],
  date: "Aug 2018 - July 2020",
};

const NameChat = {
  name: "NameChat",
  description: ['Creation of Name Chat Android, a network to find & chat with all the people in the world with your name',
  'Implemented a Firestore backend with caching reducing calls by 70% and used Live Data to update the UI'],
  playstore_link: null,
  image: require('../assets/img/android/namechat.jpg'),
  link: null,
  codeLink: null,
  languages: [{name: "Kotlin", percent: "100%"}, {name: 'Firestore'}, {name: 'Firebase Auth'}, {name: 'LiveData'}, {name: 'Navigation Component'}],
  date: "Aug 2020 - Dec 2020",
};

const SpaceTrader = {
  name: "SpaceTrader",
  description: ['Collaborated on Space Trader Android, a retro complex strategy game, redesigned for Android',
    'item Programmed the Market Activity to calculate \& show buy/sell prices from player\'s inventory and skill level' +
    'item Designed backend Room database with serialization for saving \& restoring player state'],
  playstore_link: null,
  image: require('../assets/img/android/spacetrader.jpg'),
  link: null,
  codeLink: "https://github.com/Ryanm14/CS2340-SpaceTrader",
  languages: [{name: "Java", percent: "98%"}, {name: "Kotlin", percent: "2%"}, {name: 'Room'}, {name: 'UML'}, {name: 'JUnit'}, {name: 'GSON'}, {name: 'RecyclerView'}, {name: 'Travis.ci'}],
  date: "Jan 2019 - May 2019",
};

const ParkHere = {
  name: "Park Here",
  description: ['Created for Georgia Tech\'s Appathon! Similar to Airbnb, ParkHere allows people to create their own parking lots which users can pay for a timed spot. Instead of relying on getting physical tickets, ParkHere identifies by user\'s license plates. Parking lots are organized by the number of spots available, approximation to the user, and cost per hour. '],
  playstore_link: 'https://github.com/Ryanm14/ParkHere/releases/tag/V1',
  image: require('../assets/img/android/parkhere.jpg'),
  link: null,
  codeLink: "https://github.com/Ryanm14/ParkHere",
  languages: [{name: "Java", percent: "100%"}, {name: 'Google Maps'}, {name: 'Bottom Navigation'}, {name: 'CardView'}, {name: 'EventBus'}],
  date: "October 2017",
};


const androidProjects = [UnfolditProject, NameChat, SpaceTrader, ParkHere]

const personalWebsite = {
  name: "Personal Website",
  description: ['Added custom work experience, project tabs, and main header to base react website from @hashirshoaeb'],
  playstore_link: null,
  image: require('../assets/img/web/personal-website.jpg'),
  link: 'http://ryanmiles.me',
  codeLink: "https://github.com/Ryanm14/personal-website",
  languages: [{name: "Javascript", percent: "51.4%"}, {name: "SCSS", percent: "36.6%"}, {name: "HTML", percent: "12.0%"}, {name: 'React'}, {name: 'Bootstrap'}],
  date: "July 2021 - Present",
};

const clowdr = {
  name: "Clowdr in VR",
  description: ['Spearheaded integrating VR in a React conferencing platform using Babylon.js and WebXR with the AEL Lab'],
  playstore_link: null,
  image: require('../assets/img/web/clowdr.jpg'),
  link: null,
  codeLink: "https://github.com/aelatgt/clowdr",
  languages: [{name: "Typescript", percent: "97.3%"}, {name: "PlpgSQL", percent: "2.7%"}, {name: "EC2 Instance"}, {name: 'React'}, {name: 'Babolyn.js'}, {name: 'WebXR'}, {name: 'NGINX'}],
  date: "Jan 2021 - Aug 2021",
};

const winterLetters = {
  name: "Winter Letters",
  description: ['Used Three.js to create my final web graphics project. User\'s can type and hanging letters come down and sway in the air. If a user clicks the letter it will do a rotation'],
  playstore_link: null,
  image: require('../assets/img/web/winter-project.jpg'),
  link: 'https://ryanm14.github.io/Graphics-Winter-Project/',
  codeLink: "https://github.com/Ryanm14/Graphics-Winter-Project/",
  languages: [{name: "Typescript", percent: "95.9%"}, {name: "HTML", percent: "3.2%"}, {name: "CSS", percent: "0.9%"}, {name: 'Three.js'}],
  date: "Dec 2019",
};

const collegeFinder = {
  name: "College Finder",
  description: ['Used D3.js to filter and chart a college dataset to help students find colleges that meet their requirements.'],
  playstore_link: null,
  image: require('../assets/img/web/d3-project.jpg'),
  link: null,
  codeLink: null,
  languages: [{name: "Javascript", percent: "95.0%"}, {name: "HTML", percent: "5.0%"}, {name: "D3.js"}],
  date: "Apr 2019",
};

const webProjects = [personalWebsite, clowdr, winterLetters, collegeFinder]

const shakeMenu = {
  name: "Shake Menu in VR",
  description: ['Completed a research paper on using shake menus in Virtual Reality with Oculus hand tracking'],
  playstore_link: null,
  image: require('../assets/img/graphics/shake-menu.jpg'),
  link: 'https://www.youtube.com/watch?v=BEcxxFQL5rg',
  codeLink: null,
  languages: [{name: "C#", percent: "100.0%"}, {name: "Unity"}],
  date: "Apr 2020",
};

const pcg = {
  name: "Procedural Content Generation",
  description: ['Created a procedurally generated world using perlin noise in Unity. Also created flocking boids and generated trees'],
  playstore_link: null,
  image: require('../assets/img/graphics/pcg.jpg'),
  link: 'https://ryanm14.github.io/Unity-PCG-Build/',
  codeLink: null,
  languages: [{name: "C#", percent: "100.0%"}, {name: "Unity"}],
  date: "Jan - April 2020",
};

const animation = {
  name: "Animation Projects",
  description: ['Using python implemented different curves and splines (Catmull–Rom, Bezier, etc).', 'Created a RK4 for constraint ball and ring simulation.', 'Implemented inverse kinematics to play a twister game'],
  playstore_link: null,
  image: require('../assets/img/graphics/anim.jpg'),
  link: null,
  codeLink: null,
  languages: [{name: "Python", percent: "100.0%"}],
  date: "Jan - April 2020",
};

const phongLighting = {
  name: "Phong Lighting in WebGL",
  description: ['Implemented Phong Lighting in WebGL'],
  playstore_link: null,
  image: require('../assets/img/graphics/phong.jpg'),
  link: null,
  codeLink: null,
  languages: [{name: "Typescript", percent: "95.0%"}, {name: "GLSL", percent: "5.0%"}, {name: "WebGL"}],
  date: "October 2019",
};


const graphicsProjects = [shakeMenu, pcg, animation, phongLighting]

const marioLevelGen = {
  name: "Mario Level Generation",
  description: ['Implemented a Mario level generator using a genetic algorithm in Java.'],
  playstore_link: null,
  image: require('../assets/img/ai/mario.jpg'),
  link: null,
  codeLink: null,
  languages: [{name: "Java", percent: "100.0%"}, {name: "Genetic Algorithms"}],
  date: "April 2021",
};

const ml4t = {
  name: "Machine Learning For Trading",
  description: ['Implemented a Random Forest learner to decide when to buy/sell stocks based on: Momentum, Bollinger Bands, and Volume Price Trend indicators'],
  playstore_link: null,
  image: require('../assets/img/ai/ml4t.jpg'),
  link: null,
  codeLink: null,
  languages: [{name: "Python", percent: "100.0%"}, {name: "Pandas"}, {name: "Matplotlib"}, {name: "Numpy"}, {name: "LaTex"}],
  date: "Sep - Dec 2019",
};

const pacman = {
  name: "Pacman AI Projects",
  description: ['Implemented A* search in a pacman game, value iteration/q-learning for reinforcement learning to reach a goal, and  particle filtering to locate invisible agents.'],
  playstore_link: null,
  image: require('../assets/img/ai/pacman.jpg'),
  link: null,
  codeLink: null,
  languages: [{name: "Python", percent: "100.0%"}, {name: "Graph Search"}, {name: "Particle Filtering"}, {name: "Reinforcement Learning"}],
  date: "Jan - April 2019",
};


const aiProjects = [marioLevelGen, ml4t, pacman]

const trainSQL = {
  name: "Europe Train System Database Design",
  description: ['Designed an Enhanced Entity Relationship Diagram & Information Flow Diagram to model the system specification',
 'Programmed the SQL create table & query statements per each specification'],
  playstore_link: null,
  image: require('../assets/img/other/train.jpg'),
  link: null,
  codeLink: null,
  languages: [{name: "SQL", percent: "100.0%"}, {name: "EER Diagram"}, {name: "IF Diagram"}],
  date: "May - July 2019",
};

const otherProjects = [trainSQL]

const projects = {
  androidProjects: androidProjects,
  webProjects: webProjects,
  graphicsProjects: graphicsProjects,
  aiProjects: aiProjects,
  otherProjects: otherProjects
}

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Android Development opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "ryan.r.miles(at)gmail.com",
};



export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, projects };
