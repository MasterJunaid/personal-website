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
  imageLink: require("../assets/img/me.jpg"),
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
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../assets/img/me.jpg"),
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../assets/img/me.jpg"),
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
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
      companylogo: require('../assets/img/bf_logo.png'),
      logoWidth: 100,
      logoHeight: 100,
      role: 'Intern Android Developer at BlueFletch',// Here Add Company Name
      date: 'June 2018 – Present',
      description: 'did work'
    },
    {
      company: 'gt-grad',
      logoWidth: 130,
      logoHeight: 80,
      companylogo: require('../assets/img/gt_logo.png'),
      role: 'Graduate Teaching Assistant (CS 3451: Introduction to Computer Graphics',
      date: 'May 2017 – May 2018',
    },
    {
      company: 'gt-research',
      logoWidth: 130,
      logoHeight: 80,
      companylogo: require('../assets/img/gt_logo.png'),
      role: 'Undergraduate Research Assistant (Clowdr in VR)',
      date: 'May 2017 – May 2018',
    },
    {
      company: 'gt-undergrad2',
      logoWidth: 130,
      logoHeight: 80,
      companylogo: require('../assets/img/gt_logo.png'),
      role: 'Undergraduate Teaching Assistant (CS4803: 3D User Interface Design in VR)',
      date: 'May 2017 – May 2018',
    },
    {
      company: 'gt-undergrad1',
      logoWidth: 130,
      logoHeight: 80,
      companylogo: require('../assets/img/gt_logo.png'),
      role: 'Undergraduate Teaching Assistant (CS 1331: Intro to Object Oriented Programming)',
      date: 'May 2017 – May 2018',
    },
  ]
}
const UnfolditProject = {
  name: "Unfoldit",
  description: ['Creation of Unfoldit Android, a mobile app to test and enhance your spatial awareness abilities', 'Developed a production ready Android game around spatial awareness with Kotlin, modern libraries, and tests',
 'Finalists for Georgia Tech 2019 Inventure Prize with 1000+ Downloads and 100+ five-star reviews'],
  playstore_link: "https://play.google.com/store/apps/details?id=com.unfoldit.unfoldit&hl=en_US&gl=US",
  image: require('../assets/img/unfoldit.jpg'),
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
  image: require('../assets/img/namechat.jpg'),
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
  image: require('../assets/img/spacetrader.jpg'),
  link: null,
  codeLink: "https://github.com/Ryanm14/CS2340-SpaceTrader",
  languages: [{name: "Java", percent: "98%"}, {name: "Kotlin", percent: "2%"}, {name: 'Room'}, {name: 'UML'}, {name: 'JUnit'}, {name: 'GSON'}, {name: 'RecyclerView'}, {name: 'Travis.ci'}],
  date: "Jan 2019 - May 2019",
};


const androidProjects = [UnfolditProject, NameChat, SpaceTrader]

const webProjects = []

const graphicsProjects = []

const aiProjects = []

const projects = {
  androidProjects: androidProjects,
  webProjects: webProjects,
  graphicsProjects: graphicsProjects,
  aiProjects: aiProjects
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
