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
    "My name is Ryan Miles. I’m a current Computer Science graduate student at Georgia Institute of Technology. As an Android Developer, my goal is to create mobile apps that people love to use. As a passionate developer, my mission is to further develop my skills to mentor the next generation of developers.",
  resume: require("../assets/pdf/Ryan Miles - Resume.pdf"),
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

const experiences = {
  show: true,
  heading: "Work Experience",
  data: [
    {
      company: 'bluefletch',
      companylogo: require('../assets/img/companies/bf_logo.png'),
      logoWidth: 300,
      logoHeight: 65,
      role: 'Intern Android Developer at BlueFletch Mobile',// Here Add Company Name
      date: 'May 2018 – April 2019 \& April 2020 - Present',
      description: ['After my three years of working at BlueFletch, I have had the opportunity to work on real products and get experience working professionally as an Android developer.',
        ' Every semester I have had a different focus of features \& patches to work on. Recently, my latest project was developing an AOSP platform service to run system level commands on manufacturer signed devices. ' +
        ' This feature was required since BlueFletch\'s apps require system level permissions to be able to reset the phone or grant app\'s permissions. This was one of my harder challenges because I had to dive into the AOSP source code and use Java\'s reflection to access some of the methods and services.', 'Another project I worked on was developing a secure communication channel for BlueFletch\'s apps to communicate through. ' +
        'The channel needed to be synchronous and encrypted, so it was implemented with AES encryption and used an AIDL interface. This process was more niche since most companies only deploy one main application, but was a fun problem to solve.',
        'A different feature I was tasked with was fixing a backdoor into the Android settings screen from the notification drawer. Clients noticed that the notification drawer allowed users the ability to click on notifications and privilege escalate into the settings screen and could then wipe the device. Therefore I designed and implemented a replacement for the Android notification drawer that has a custom configuration JSON file to allow/deny specific applications from sending notifications. The best part was working with designers to make sure the replacement drawer was intuitive and not cluttered.',
        'During my first summer, I worked on developing another platform: Android for Work. This platform allowed Bluefletch\'s Enterprise Mobility Services to communicate with non-rugged devices if a company already had a supply of Android devices.',
        'I also was given a task to theme BlueFletch’s sample retail applications for a client meeting. I noticed the process of theming 5-6 apps for every meeting is very tedious and costs upwards of 5-7 hours to complete. To save hours for each demo request, I wrote a library to instantly update the theme on runtime for BlueFletch\'s Android applications. During a demo, developers and managers can also quickly and easily change colors and logos to showcase the customization of BlueFletch\'s product. This process taught me how to inject theme data during an Android app’s onResume statically. At the end of the project, I used Confluence to write documentation for how to use the new demo set apps for internal reference.',
        'In between large projects I worked on bug fixes, small feature implementations, and wrote documentation. I also attended weekly code reviews and received feedback on my pull requests about how to improve the function and style of my code from the senior developers. ']
    },
    {
      company: 'gt-ta',
      logoWidth: 130,
      logoHeight: 80,
      companylogo: require('../assets/img/companies/gt_logo.png'),
      description: ['I had the opportunity to give back to my local computer science community by assisting my peers going through their own computer science course journey.','Currently, I am a graduate teaching assistant for CS 3451: Introduction to Computer Graphics, Focusing on WebGL.', 'As an undergraduate, I was a teaching assistant for CS 4803: 3D User Interface Design in VR and for CS 1331: Intro to Object Oriented Programming. My responsibilities were to teach a 1½ hour weekly recitation, hold office hours, grade tests \& homework, and help create assignments.'],
      role: 'Teaching Assistant at Georgia Tech',
      date: 'Jan 2019 – Present',
    },
    {
      company: 'gt-research',
      logoWidth: 130,
      logoHeight: 80,
      description: ['Before I graduated I wanted to also explore doing research. I reached out to past professors and had the opportunity to work with my graphics professor on implementing virtual reality into a virtual conferencing platform.',
        'I lead a team of three students through the process of integrating WebXR using Babylon.js into a react typescript ' +
        'virtual conferencing codebase. This was my first time working on a production ready web project, so I was able to ' +
        'learn about all the challenges of the web.', 'I also deployed the entire project to an EC2 instance with a backend PostgreSQL DB, NGINX web server, and used Auth0 for authentication.'],
      companylogo: require('../assets/img/companies/gt_logo.png'),
      role: 'Undergraduate Research Assistant at Georgia Tech',
      date: 'Jan 2021 – Aug 2021',
    },
    {
      company: 'cisco',
      logoWidth: 150,
      logoHeight: 80,
      description: ['Lead a selective 5-week STEM internship at Cisco for Rising' +
      ' Seniors and Freshmen in College. I facilitated 20 students in various activities and meetings regarding professional' +
      ' development, IOT solutions, and sales.',' During my time there, my main focus was on' +
      ' collecting feedback through talking with the students, on-site program coordinators,' +
      ' program managers, and mentors. I compiled all the comments to create a final' +
      ' presentation that outlines what the program excelled at and what changes to experiment with.'],
      companylogo: require('../assets/img/companies/cisco.png'),
      role: 'Intern Coordinator at Cisco Systems',
      date: 'May 2016 – July 2017',
    },
  ]
}
const UnfolditProject = {
  name: "Unfoldit",
  description: ['Creation of Unfoldit Android, a mobile app to test and enhance your spatial awareness abilities.', 'Developed a production ready Android game around spatial awareness with Kotlin, modern libraries, and tests.',
    'Finalists for Georgia Tech 2019 Inventure Prize with 1000+ Downloads and 100+ five-star reviews.'],
  playstore_link: "https://play.google.com/store/apps/details?id=com.unfoldit.unfoldit&hl=en_US&gl=US",
  image: require('../assets/img/android/unfoldit.jpg'),
  link: "https://www.unfolditapp.com/",
  codeLink: null,
  languages: [{
    name: "Kotlin",
    percent: "100%"
  }, {name: "Dagger"}, {name: 'Firebase Analytics'}, {name: 'Single Activity'}, {name: 'MVVM Architecture'}],
  date: "Aug 2018 - Present",
};

const LauncherIPC = {
  name: "BlueFletch Secure Communication between Apps",
  description: ['Used AES encryption to encrypt an inter-process communication channel through an AIDL interface for secure synchronous communication between BluFletch\'s apps.'],
  playstore_link: null,
  image: require('../assets/img/android/aidl.jpg'),
  link: 'https://emsdocs.bluefletch.com/products/launcher/launcher_provider.html',
  linkTitle: "View Feature's Documentation",
  codeLink: null,
  languages: [{
    name: "Java",
    percent: "100%"
  }, {name: 'Android AIDL'}, {name: 'AES Encryption'}],
  date: "Aug 2020 - Jan 2021",
};

const LauncherSecureNotifications = {
  name: "BlueFletch Launcher Secure Notifications",
  description: ['Designed a replacement Android notification drawer to lockdown access to system settings.', 'Reads from local configuration file to allow/deny specific applications from sending notifications.', 'After designing and testing, I wrote up documentation for the feature to be shared with clients.'],
  playstore_link: null,
  image: require('../assets/img/android/secure-notifications.jpg'),
  link: 'https://emsdocs.bluefletch.com/products/launcher/features/secureNotifications.html',
  linkTitle: "View Feature's Documentation",
  codeLink: null,
  languages: [{
    name: "Java",
    percent: "100%"
  }, {name: 'Data Structures'}, {name: 'JUnit Tests'}, {name: 'Recycler View'}],
  date: "Apr 2020 - Aug 2020",
};

const SpaceTrader = {
  name: "SpaceTrader",
  description: ['Lead my four person team to create: Space Trader Android, a retro complex strategy game, redesigned for Android.',
    'Programmed the Market Activity to calculate \& show market prices based on the player\'s inventory and skill level.',
    'Designed the backend Room database with serialization for saving \& restoring player game state.'],
  playstore_link: null,
  image: require('../assets/img/android/spacetrader.jpg'),
  link: null,
  codeLink: "https://github.com/Ryanm14/CS2340-SpaceTrader",
  languages: [{name: "Java", percent: "98%"}, {
    name: "Kotlin",
    percent: "2%"
  }, {name: 'Room'}, {name: 'UML'}, {name: 'JUnit'}, {name: 'GSON'}, {name: 'RecyclerView'}, {name: 'Travis.ci'}],
  date: "Jan 2019 - May 2019",
};

const LauncherTheme = {
  name: "BlueFletch Launcher Theming",
  description: ['Injected theme style data during an Android app’s onResume.', 'Allows clients to use a custom configuration file to specify their logo, primary \& accent colors, and background images.', 'Used Confluence to write documentation for how to use the library for the set of demo applications.'],
  playstore_link: null,
  image: require('../assets/img/android/bf-theme.jpg'),
  link: 'https://emsdocs.bluefletch.com/products/launcher/launcher_configurations.html#theme',
  linkTitle: "View Feature's Documentation",
  codeLink: null,
  languages: [{
    name: "Java",
    percent: "100%"
  }, {name: 'Glide'}],
  date: "Jun 2018 - Oct 2018",
};

const ParkHere = {
  name: "Park Here",
  description: ['Created for Georgia Tech\'s Appathon!','Similar to Airbnb, ParkHere allows people to create their own parking lots which users can pay for a timed spot.','Instead of relying on getting physical tickets, ParkHere identifies by user\'s license plates.'],
  playstore_link: null,
  image: require('../assets/img/android/parkhere.jpg'),
  link: 'https://github.com/Ryanm14/ParkHere/releases/tag/V1',
  codeLink: "https://github.com/Ryanm14/ParkHere",
  languages: [{
    name: "Java",
    percent: "100%"
  }, {name: 'Google Maps'}, {name: 'Bottom Navigation'}, {name: 'CardView'}, {name: 'EventBus'}],
  date: "October 2017",
};


const androidProjects = [UnfolditProject, LauncherIPC, LauncherSecureNotifications, SpaceTrader, LauncherTheme, ParkHere]

const personalWebsite = {
  name: "Personal Website",
  description: ['Added custom work experience, project tabs, hobbies, and main header to base react website from @hashirshoaeb.'],
  playstore_link: null,
  image: require('../assets/img/web/personal-website.jpg'),
  link: 'http://ryanmiles.me',
  codeLink: "https://github.com/Ryanm14/personal-website",
  languages: [{name: "Javascript", percent: "51.4%"}, {name: "SCSS", percent: "36.6%"}, {
    name: "HTML",
    percent: "12.0%"
  }, {name: 'React'}, {name: 'Bootstrap'}],
  date: "July 2021 - Present",
};

const clowdr = {
  name: "Clowdr in VR",
  description: ['Spearheaded integrating VR in a React conferencing platform using Babylon.js and WebXR with the AEL Lab.'],
  playstore_link: null,
  image: require('../assets/img/web/clowdr.jpg'),
  link: null,
  codeLink: "https://github.com/aelatgt/clowdr",
  languages: [{name: "Typescript", percent: "97.3%"}, {
    name: "PlpgSQL",
    percent: "2.7%"
  }, {name: "EC2 Instance"}, {name: 'React'}, {name: 'Babolyn.js'}, {name: 'WebXR'}, {name: 'NGINX'}],
  date: "Jan 2021 - Aug 2021",
};

const winterLetters = {
  name: "Winter Letters",
  description: ['Used Three.js to create my final web graphics project.',' When users type, hanging letters come down and sway in the air.',' If a user clicks the letter it will do a rotation with its speed dependent on where it was clicked.'],
  playstore_link: null,
  image: require('../assets/img/web/winter-project.jpg'),
  link: 'https://ryanm14.github.io/Graphics-Winter-Project/',
  codeLink: "https://github.com/Ryanm14/Graphics-Winter-Project/",
  languages: [{name: "Typescript", percent: "95.9%"}, {name: "HTML", percent: "3.2%"}, {
    name: "CSS",
    percent: "0.9%"
  }, {name: 'Three.js'}],
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
  description: ['Completed a research paper on using shake menus in Virtual Reality with Oculus hand tracking.'],
  playstore_link: null,
  image: require('../assets/img/graphics/shake-menu.jpg'),
  link: 'https://www.youtube.com/watch?v=BEcxxFQL5rg',
  linkTitle: 'View Video',
  codeLink: require('../assets/pdf/Shake Menu in VR - Research Paper.pdf'),
  codeLinkTitle: 'View Paper',
  languages: [{name: "C#", percent: "100.0%"}, {name: "Unity"}],
  date: "Apr 2020",
};

const pcg = {
  name: "Procedural Content Generation",
  description: ['Created a procedurally generated world using perlin noise in Unity.','Also created flocking boids and procedurally generated trees.', 'Move with the arrow keys and space/shift bar.'],
  playstore_link: null,
  image: require('../assets/img/graphics/pcg.jpg'),
  link: 'https://ryanm14.github.io/Unity-PCG-Build/',
  codeLink: null,
  languages: [{name: "C#", percent: "100.0%"}, {name: "Unity"}],
  date: "Jan - April 2020",
};

const animation = {
  name: "Animation Projects",
  description: ['Implemented different curves and splines (Catmull–Rom, Bezier, etc) in python.', 'Created a RK4 for constraint ball and ring simulation.', 'Implemented inverse kinematics to play a twister game.'],
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
  description: ['Implemented a Random Forest learner to decide when to buy/sell stocks based on technical indicators.',' Calculated technical indicators: Momentum, Bollinger Bands, and Volume Price Trend indicators.'],
  playstore_link: null,
  image: require('../assets/img/ai/ml4t.jpg'),
  link: null,
  codeLink: null,
  languages: [{
    name: "Python",
    percent: "100.0%"
  }, {name: "Pandas"}, {name: "Matplotlib"}, {name: "Numpy"}, {name: "LaTex"}],
  date: "Sep - Dec 2019",
};

const pacman = {
  name: "Pacman AI Projects",
  description: ['Implemented A* search in a pacman game.','Programmed Value iteration \& Q-learning for reinforcement learning to reach a goal state.','Implemented particle filtering to locate invisible agents.'],
  playstore_link: null,
  image: require('../assets/img/ai/pacman.jpg'),
  link: null,
  codeLink: null,
  languages: [{
    name: "Python",
    percent: "100.0%"
  }, {name: "Graph Search"}, {name: "Particle Filtering"}, {name: "Reinforcement Learning"}],
  date: "Jan - April 2019",
};


const aiProjects = [marioLevelGen, ml4t, pacman]

const trainSQL = {
  name: "Europe Train System Database Design",
  description: ['Designed an Enhanced Entity Relationship Diagram & Information Flow Diagram to model the system specification.',
    'Programmed the SQL create table & query statements per each specification.'],
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

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  programmingLanguages: {
      proficient: [
        {name: "Java", value: 90, loc: ">10k"},
        {name: "Python", value: 75},
        {name: "Kotlin", value: 85}
      ],
    exposedTo: [
      {name: "LaTeX", value: 65},
      {name: "Typescript", value: 90},
      {name: "SQL", value: 65},
      {name: "React", value: 55},
      {name: "C#", value: 80},
      {name: "C", value: 80},
    ]},
  androidLibraries: [
    {name: "LiveData"},
    {name: "Navigation Component"},
    {name: "Timber"},
    {name: "Firestore"},
    {name: "Firebase Analytics"},
    {name: "Dagger"},
    {name: "OkHttp"},
    {name: "Retrofit"},
    {name: "Picasso"},
    {name: "Fresco"},
    {name: "EventBus"},
  ],
  coursework: [
    {name: "Data Structures \& Algorithms",},
    {name: "Database Design"},
    {name: "Software Engineering"},
    {name: "Computer Graphics"},
    {name: "Artificial Intelligence"},
    {name: "Computer Animation"},
  ],
  concepts: [
    {name: "Test Driven Development"},
    {name: "Clean Code"},
    {name: "Git Workflow"},
    {name: "Agile/Jira Workflow"}
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Android Development opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "ryan.r.miles@gmail.com",
};


export {navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, projects};
