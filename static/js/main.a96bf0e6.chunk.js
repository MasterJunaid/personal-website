(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{127:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(32),i=t.n(o),l=(t(77),t(14)),s=t(49),c=t(7),m=!0,d={gradientColors:"#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",firstName:"Ryan",middleName:"",lastName:"Miles",message:"Android Developer | CS @ Georgia Tech",icons:[{image:"fa-github",url:"https://github.com/ryanm14"},{image:"fa-linkedin",url:"https://www.linkedin.com/in/ryanrmiles/"}]},u={show:!0,heading:"About Me",imageLink:t(54),imageSize:300,message:"My name is Ryan Miles. I\u2019m a current Computer Science graduate student at Georgia Institute of Technology. As an Android Developer, my goal is to create mobile apps that people love to use. As a passionate developer, my mission is to further develop my skills to mentor the next generation of developers.",resume:t(78)},p=!0,g={show:!1},h={show:!0,heading:"Work Experiences",data:[{company:"bluefletch",companylogo:t(79),logoWidth:300,logoHeight:65,role:"Intern Android Developer at BlueFletch Mobile",date:"June 2018 \u2013 Present",description:["After my three years of working at BlueFletch, I have had the opportunity to work on real products and get experience working professionally. My years of work focused on BlueFletch's Android Applications."," Every semester I have a different focus for features or patches to be developed. Most recently I worked on developing an AOSP platform service to run system level commands on manufacturer signed devices.The mobile suite of apps BlueFletch deploys requires system level permissions to be able to reset the phone or grant app's permissions. This was one of my harder challenges because I had to dive into the AOSP source code and use reflection to access some of the services.","Another project I worked on was developing a secure communication channel for BlueFletch's apps to be able to communicate over.The channel needed to be synchronous and encrypted, so it was implemented with AES encryption and used an AIDL interface. This process was more niche since most companies only deploy one main application, but was a fun problem to solve.","Another project I was tasked with was about fixing a backdoor into the Android settings screen. Clients noticed that the notification drawer allowed user's to click on notifications and escape into the settings screen and being able to wipe the device. Therefore I designed and implemented a replace for the Android notification drawer that has a custom config file to allow/deny specific applications from sending notifications. The best part was working with designers to make sure the replace drawer was intuitive and not cluttered.","During my first summer I worked on around developing another platform for Android for Work. This platform allowed Bluefletch's Enterprise Mobility Services to communicate with non-rugged devices if a company already had a supply of Android devices. I was able to get first-hand experience in proper application architecture and using background services.","I also was given a task to theme BlueFletch\u2019s sample retail applications for a client meeting. I noticed the process of theming 5-6 apps for every meeting is very tedious and costs upwards of 5-7 hours to complete. To save hours for each demo request, I wrote a library to instantly update the theme on runtime for BlueFletch's Android applications. During a demo, developers and managers can also quickly and easily change colors and logos to showcase the customization of BlueFletch's product. This process taught me how to inject theme data during an Android app\u2019s onResume statically. At the end of the project, I used Confluence to write documentation for how to use the new demo set apps for internal reference.","In between large projects I worked on bug fixes, small feature implementations, and wrote documentation. I also attended weekly code reviews and received feedback on my pull requests about how to improve the function and style of my code from the senior developers. "]},{company:"gt-ta",logoWidth:130,logoHeight:80,companylogo:t(55),description:["I the opportunity to give back to my local computer science community through assistanting my peers going through their computer science course journey.","Currently I am a graduate teaching assistant for CS 3451: Introduction to Computer Graphics, Focusing on WebGL.","As an undergraduate I was a teaching assistant for CS 4803: 3D User Interface Design in VR and for CS 1331: Intro to Object Oriented Programming. My responsibilities were to teach a 1\xbd hour weekly recitation, grade tests and homework, and help create assignments."],role:"Teaching Assistant at Georgia Tech",date:"Jan 2019 \u2013 Present"},{company:"gt-research",logoWidth:130,logoHeight:80,description:["Before I graduated I wanted to also explore doing research. I reached out to past professors and had the opportunity to work with my graphics professor on implementing virtual reality into a virtual conferencing platform.","I lead a team of three students through the process of integrating WebXR using Babylon.js into a react typescript virtual conferencing codebase. This was my first time working on a production ready web project, so I was able to learn a lot about web tools.","I also deployed the entire project to an EC2 instance with a backend PostgreSQL DB, NGINX web sever, and Auth0 for authentication."],companylogo:t(55),role:"Undergraduate Research Assistant at Georgia Tech",date:"Jan 2021 \u2013 Aug 2021"},{company:"cisco",logoWidth:150,logoHeight:80,description:["Lead a selective 5-week STEM internship at Cisco for Rising Seniors and Freshman in College. I facilitated 20 students in various activities and meetings regarding professional development, IOT solutions, and sales."," During my time there, my main focus was on collecting feedback through talking with the students, on-site program coordinators, program manager, and mentors. I compiled all the comments to create a final presentation that outlines what the program excelled at and what changes to experiment with.","My time as an intern coordinator gave me experience in leading a medium sized group and handling all the needed logistics around a program while assimilating me to a professional environment. I was also able to learn from my mentors and peers what areas I should focus on that reflect my character."],companylogo:t(80),role:"Intern Coordinator at Cisco Systems",date:"May 2016 \u2013 July 2017"}]},f={androidProjects:[{name:"Unfoldit",description:["Creation of Unfoldit Android, a mobile app to test and enhance your spatial awareness abilities.","Developed a production ready Android game around spatial awareness with Kotlin, modern libraries, and tests.","Finalists for Georgia Tech 2019 Inventure Prize with 1000+ Downloads and 100+ five-star reviews."],playstore_link:"https://play.google.com/store/apps/details?id=com.unfoldit.unfoldit&hl=en_US&gl=US",image:t(81),link:"https://www.unfolditapp.com/",codeLink:null,languages:[{name:"Kotlin",percent:"100%"},{name:"Dagger"},{name:"Firebase Analytics"},{name:"Single Activity"},{name:"MVVM Architecture"}],date:"Aug 2018 - Present"},{name:"BlueFletch Secure Communication between Apps",description:["Used AES encryption to encrypt IPC channel through AIDL for secure synchronous data transfer between BluFletch's apps"],playstore_link:null,image:t(82),link:"https://emsdocs.bluefletch.com/products/launcher/launcher_provider.html",linkTitle:"View Feature's Documentation",codeLink:null,languages:[{name:"Java",percent:"100%"},{name:"Android AIDL"},{name:"AES Encryption"}],date:"Aug 2020 - Jan 2021"},{name:"BlueFletch Launcher Secure Notifications",description:["Designed a replacement Android notification drawer to lockdown access to system settings.","Reads from local configuration file to allow/deny specific applications from sending notifications.","After desiging and testing, I wrote up documentation for the feature to be shared with clients."],playstore_link:null,image:t(83),link:"https://emsdocs.bluefletch.com/products/launcher/features/secureNotifications.html",linkTitle:"View Feature's Documentation",codeLink:null,languages:[{name:"Java",percent:"100%"},{name:"Data Structures"},{name:"JUnit Tests"},{name:"Recycler View"}],date:"Apr 2020 - Aug 2020"},{name:"SpaceTrader",description:["Lead my four person team on to create: Space Trader Android, a retro complex strategy game, redesigned for Android.","Programmed the Market Activity to calculate & show buy/sell prices from player's inventory and skill level.","Designed the backend Room database with serialization for saving & restoring player state."],playstore_link:null,image:t(84),link:null,codeLink:"https://github.com/Ryanm14/CS2340-SpaceTrader",languages:[{name:"Java",percent:"98%"},{name:"Kotlin",percent:"2%"},{name:"Room"},{name:"UML"},{name:"JUnit"},{name:"GSON"},{name:"RecyclerView"},{name:"Travis.ci"}],date:"Jan 2019 - May 2019"},{name:"BlueFletch Launcher Theming",description:["Injected theme data during an Android app\u2019s onResume statically.","Allows clients to use a custom configuration file to specify their logo, primary & accent colors, and background images.","Used Confluence to write documentation for how to use the new demo set apps for internal reference."],playstore_link:null,image:t(85),link:"https://emsdocs.bluefletch.com/products/launcher/launcher_configurations.html#theme",linkTitle:"View Feature's Documentation",codeLink:null,languages:[{name:"Java",percent:"100%"},{name:"Glide"}],date:"Jun 2018 - Oct 2018"},{name:"Park Here",description:["Created for Georgia Tech's Appathon!","Similar to Airbnb, ParkHere allows people to create their own parking lots which users can pay for a timed spot.","Instead of relying on getting physical tickets, ParkHere identifies by user's license plates."],playstore_link:null,image:t(86),link:"https://github.com/Ryanm14/ParkHere/releases/tag/V1",codeLink:"https://github.com/Ryanm14/ParkHere",languages:[{name:"Java",percent:"100%"},{name:"Google Maps"},{name:"Bottom Navigation"},{name:"CardView"},{name:"EventBus"}],date:"October 2017"}],webProjects:[{name:"Personal Website",description:["Added custom work experience, project tabs, and main header to base react website from @hashirshoaeb."],playstore_link:null,image:t(87),link:"http://ryanmiles.me",codeLink:"https://github.com/Ryanm14/personal-website",languages:[{name:"Javascript",percent:"51.4%"},{name:"SCSS",percent:"36.6%"},{name:"HTML",percent:"12.0%"},{name:"React"},{name:"Bootstrap"}],date:"July 2021 - Present"},{name:"Clowdr in VR",description:["Spearheaded integrating VR in a React conferencing platform using Babylon.js and WebXR with the AEL Lab."],playstore_link:null,image:t(88),link:null,codeLink:"https://github.com/aelatgt/clowdr",languages:[{name:"Typescript",percent:"97.3%"},{name:"PlpgSQL",percent:"2.7%"},{name:"EC2 Instance"},{name:"React"},{name:"Babolyn.js"},{name:"WebXR"},{name:"NGINX"}],date:"Jan 2021 - Aug 2021"},{name:"Winter Letters",description:["Used Three.js to create my final web graphics project."," When users type, hanging letters come down and sway in the air."," If a user clicks the letter it will do a rotation with its speed dependent on where it was clicked."],playstore_link:null,image:t(89),link:"https://ryanm14.github.io/Graphics-Winter-Project/",codeLink:"https://github.com/Ryanm14/Graphics-Winter-Project/",languages:[{name:"Typescript",percent:"95.9%"},{name:"HTML",percent:"3.2%"},{name:"CSS",percent:"0.9%"},{name:"Three.js"}],date:"Dec 2019"},{name:"College Finder",description:["Used D3.js to filter and chart a college dataset to help students find colleges that meet their requirements."],playstore_link:null,image:t(90),link:null,codeLink:null,languages:[{name:"Javascript",percent:"95.0%"},{name:"HTML",percent:"5.0%"},{name:"D3.js"}],date:"Apr 2019"}],graphicsProjects:[{name:"Shake Menu in VR",description:["Completed a research paper on using shake menus in Virtual Reality with Oculus hand tracking."],playstore_link:null,image:t(91),link:"https://www.youtube.com/watch?v=BEcxxFQL5rg",linkTitle:"View Video",codeLink:t(92),codeLinkTitle:"View Paper",languages:[{name:"C#",percent:"100.0%"},{name:"Unity"}],date:"Apr 2020"},{name:"Procedural Content Generation",description:["Created a procedurally generated world using perlin noise in Unity.","Also created flocking boids and procedurally generated trees."],playstore_link:null,image:t(93),link:"https://ryanm14.github.io/Unity-PCG-Build/",codeLink:null,languages:[{name:"C#",percent:"100.0%"},{name:"Unity"}],date:"Jan - April 2020"},{name:"Animation Projects",description:["Implemented different curves and splines (Catmull\u2013Rom, Bezier, etc) in python.","Created a RK4 for constraint ball and ring simulation.","Implemented inverse kinematics to play a twister game."],playstore_link:null,image:t(94),link:null,codeLink:null,languages:[{name:"Python",percent:"100.0%"}],date:"Jan - April 2020"},{name:"Phong Lighting in WebGL",description:["Implemented Phong Lighting in WebGL"],playstore_link:null,image:t(95),link:null,codeLink:null,languages:[{name:"Typescript",percent:"95.0%"},{name:"GLSL",percent:"5.0%"},{name:"WebGL"}],date:"October 2019"}],aiProjects:[{name:"Mario Level Generation",description:["Implemented a Mario level generator using a genetic algorithm in Java."],playstore_link:null,image:t(96),link:null,codeLink:null,languages:[{name:"Java",percent:"100.0%"},{name:"Genetic Algorithms"}],date:"April 2021"},{name:"Machine Learning For Trading",description:["Implemented a Random Forest learner to decide when to buy/sell stocks based on technical indicators."," Calculated technical indicators: Momentum, Bollinger Bands, and Volume Price Trend indicators."],playstore_link:null,image:t(97),link:null,codeLink:null,languages:[{name:"Python",percent:"100.0%"},{name:"Pandas"},{name:"Matplotlib"},{name:"Numpy"},{name:"LaTex"}],date:"Sep - Dec 2019"},{name:"Pacman AI Projects",description:["Implemented A* search in a pacman game.","Programmed Value iteration & Q-learning for reinforcement learning to reach a goal state.","Implemented particle filtering to locate invisible agents."],playstore_link:null,image:t(98),link:null,codeLink:null,languages:[{name:"Python",percent:"100.0%"},{name:"Graph Search"},{name:"Particle Filtering"},{name:"Reinforcement Learning"}],date:"Jan - April 2019"}],otherProjects:[{name:"Europe Train System Database Design",description:["Designed an Enhanced Entity Relationship Diagram & Information Flow Diagram to model the system specification.","Programmed the SQL create table & query statements per each specification."],playstore_link:null,image:t(99),link:null,codeLink:null,languages:[{name:"SQL",percent:"100.0%"},{name:"EER Diagram"},{name:"IF Diagram"}],date:"May - July 2019"}]},b={show:!0,heading:"Skills",programmingLanguages:{proficient:[{name:"Java",value:90,loc:">10k"},{name:"Python",value:75},{name:"Kotlin",value:85}],exposedTo:[{name:"LaTeX",value:65},{name:"Typescript",value:90},{name:"SQL",value:65},{name:"React",value:55},{name:"C#",value:80},{name:"C",value:80}]},androidLibraries:[{name:"LiveData"},{name:"Navigation Component"},{name:"Timber"},{name:"Firestore"},{name:"Firebase Analytics"},{name:"Dagger"},{name:"OkHTTP"},{name:"Retrofit"},{name:"Picasso"},{name:"Fresco"},{name:"EventBus"}],coursework:[{name:"Data Structures & Algorithms"},{name:"Database Design"},{name:"Computer Graphics"},{name:"Game AI"},{name:"Computer Animation"}],concepts:[{name:"Test Driven Development"},{name:"Clean Code"},{name:"Git Workflow"},{name:"Agile/Jira Workflow"}]},y=!0,w="Get In Touch",k="I'm currently looking for full-time Software Engineering or Android Development opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",E="ryan.r.miles(at)gmail.com",v=t(65),x=t.n(v),N=t(29),j=t(36),A=r.a.forwardRef((function(e,a){var n=e.gradient,o=e.title,i=e.message,l=e.icons,s=e.resume;e.showGoals;return r.a.createElement(j.a,{fluid:!0,id:"home",style:{background:"linear-gradient(136deg,".concat(n,")"),backgroundSize:"1200% 1200%"},className:"title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement(N.a,{className:"text-center"},r.a.createElement("img",{className:"border border-secondary rounded-circle",src:t(54),alt:"profilepicture",width:150,height:150}),r.a.createElement("h1",{ref:a,className:"display-1"},o),r.a.createElement(x.a,{className:"lead typist",cursor:{show:!1}}," ",i),r.a.createElement("div",{className:"p-5"},l.map((function(e,a){return r.a.createElement("a",{key:"social-icon-".concat(a),target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x socialicons")}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg ",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me"),r.a.createElement("a",{className:"btn btn-outline-light btn-lg ",style:{marginLeft:"16px"},href:s,target:"_blank",role:"button","aria-label":"View my resume"},"R\xe9sum\xe9")))})),I=t(50),L=t.n(I),S=t(66),P=t(47),C=t.n(P),T=new RegExp(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),R=function(e){var a=e.heading,t=e.message,n=e.link,o=e.imgSize,i=e.resume,s=r.a.useState(""),c=Object(l.a)(s,2),m=c[0],d=c[1],u=r.a.useState(Boolean(n)),p=Object(l.a)(u,2),g=p[0],h=p[1];r.a.useEffect((function(){n&&!T.test(n)?f():d(n)}),[n]);var f=function(){var e=Object(S.a)(L.a.mark((function e(){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.instagram.com/","/?__a=1",e.prev=2,e.next=5,C.a.get("https://www.instagram.com/"+n+"/?__a=1");case 5:a=e.sent,d(a.data.graphql.user.profile_pic_url_hd),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),h(!1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},g&&r.a.createElement("img",{className:"border border-secondary rounded-circle",src:m,alt:"profilepicture",width:o,height:o})),r.a.createElement("div",{className:"col-lg-".concat(g?"7":"12")},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a),r.a.createElement("p",{className:"lead text-center"},t),i&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:i,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"R\xe9sum\xe9"),r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",style:{marginLeft:"16px"},href:"impossible.html",role:"button",target:"_blank","aria-label":"impossible list"},"Impossible List"))))))},D=t(18),_=t(22),F=t(33),M=t(130),G=function(e){var a=e.languages;return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",a.length?a.map((function(e){return r.a.createElement("a",{key:e,className:"badge badge-light"},e.name,e.percent?": ":"",e.percent)})):"code yet to be deployed.")},B=function(e){var a=e.date;return r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"},"Date: ",a))},W=function(e){var a=e.value,t=a.name,n=a.description,o=a.playstore_link,i=a.image,l=a.link,s=a.linkTitle,c=a.codeLink,m=a.codeLinkTitle,d=a.languages,u=a.date;return r.a.createElement(_.a,{md:4},r.a.createElement(F.a,{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement(F.a.Img,{variant:"top",src:i}),r.a.createElement(F.a.Body,null,r.a.createElement(F.a.Title,{as:"h2"},t," "),r.a.createElement(F.a.Text,null,n.map((function(e){return r.a.createElement("p",null,"\u2022 ",e)}))),r.a.createElement("hr",null),r.a.createElement(G,{languages:d}),r.a.createElement(B,{date:u})),o?r.a.createElement(M.a,{href:o,target:"_blank",variant:"success"},"Google Play Store"):r.a.createElement(r.a.Fragment,null),o?r.a.createElement("br",null):r.a.createElement(r.a.Fragment,null),l?r.a.createElement(M.a,{href:l,target:"_blank",variant:"primary"},s||"View Project"):r.a.createElement(r.a.Fragment,null),c?r.a.createElement("br",null):r.a.createElement(r.a.Fragment,null),c?r.a.createElement(M.a,{href:c,target:"_blank",variant:"outline-dark"},m||"View Code"):r.a.createElement(r.a.Fragment,null)))},J=t(19),O=t(67),V=function(e){var a=e.projects;return r.a.createElement(j.a,{fluid:!0,id:"projects",className:"bg-light m-0"},r.a.createElement(N.a,{className:""},r.a.createElement(O.a,{defaultActiveKey:"android",id:"uncontrolled-tab-example",className:"mb-3"},r.a.createElement(J.a,{eventKey:"android",title:"Android Projects"},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},"Android Projects"),r.a.createElement(D.a,null,a.androidProjects.map((function(e,a){return r.a.createElement(W,{key:"project-card-".concat(a),id:"project-card-".concat(a),value:e})})))),r.a.createElement(J.a,{eventKey:"web",title:"Web Projects"},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},"Web Projects"),r.a.createElement(D.a,null,a.webProjects.map((function(e,a){return r.a.createElement(W,{key:"project-card-".concat(a),id:"project-card-".concat(a),value:e})})))),r.a.createElement(J.a,{eventKey:"graphics",title:"Graphics Projects"},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},"Graphics Projects"),r.a.createElement(D.a,null,a.graphicsProjects.map((function(e,a){return r.a.createElement(W,{key:"project-card-".concat(a),id:"project-card-".concat(a),value:e})})))),r.a.createElement(J.a,{eventKey:"ai",title:"AI Projects"},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},"AI Projects"),r.a.createElement(D.a,null,a.aiProjects.map((function(e,a){return r.a.createElement(W,{key:"project-card-".concat(a),id:"project-card-".concat(a),value:e})})))),r.a.createElement(J.a,{eventKey:"other",title:"Other Projects"},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},"Other Projects"),r.a.createElement(D.a,null,a.otherProjects.map((function(e,a){return r.a.createElement(W,{key:"project-card-".concat(a),id:"project-card-".concat(a),value:e})})))))))},z=function(e){return r.a.createElement("footer",{style:{backgroundColor:"#f5f5f5"},className:"mt-auto py-5 text-center "},r.a.createElement(N.a,null,e.children,r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/ryanm14","aria-label":"My GitHub"},"Ryan Miles")," ","using ",r.a.createElement("i",{className:"fab fa-react"}),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"},"Project code is open source. Feel free to fork and make your own version (Forked from ",r.a.createElement("a",{href:"https://github.com/hashirshoaeb/home"},"hashirshoaeb"),")."),r.a.createElement("br",null),r.a.createElement("small",{className:"text-muted"},"Interest icons from: ",r.a.createElement("a",{href:"https://icons8.com"},"icons8.com.")))))},U="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,K="undefined"!==typeof window;function H(e){var a=e.element,t=e.useWindow;if(!K)return{x:0,y:0};var n=(a?a.current:document.body).getBoundingClientRect();return t?{x:window.scrollX,y:window.scrollY}:{x:n.left,y:n.top}}function q(e,a,t,r,o){var i=Object(n.useRef)(H({useWindow:r})),l=null,s=function(){var a=H({element:t,useWindow:r});e({prevPos:i.current,currPos:a}),i.current=a,l=null};U((function(){if(K){var e=function(){o?null===l&&(l=setTimeout(s,o)):s()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e),l&&clearTimeout(l)}}}),a)}q.defaultProps={deps:[],element:!1,useWindow:!1,wait:null};var Q=function(e){var a=r.a.useState(null),t=Object(l.a)(a,2),n=t[0],o=t[1];return r.a.useEffect((function(){var a=e.current,t=new ResizeObserver((function(e){e.forEach((function(e){o(e.contentRect)}))}));return t.observe(a),function(){t.unobserve(a)}}),[e]),n},X=t(34),Y=t(15),Z=r.a.forwardRef((function(e,a){var t=Object(n.useState)(!0),o=Object(l.a)(t,2),i=o[0],s=o[1],c=Object(n.useState)(0),m=Object(l.a)(c,2),g=m[0],h=m[1],f=r.a.useRef(),y=Q(f),w=y?y.bottom:0;return q((function(e){e.prevPos;var t=e.currPos;y&&(t.y+a.current.offsetTop-y.bottom>5?s(!0):s(!1),h(t.y))}),[w]),r.a.useEffect((function(){y&&(w-g>=a.current.offsetTop?s(!1):s(!0))}),[w,y,a,g]),r.a.createElement(X.a,{ref:f,className:" fixed-top  ".concat(i?"navbar-transparent":"navbar-white"),expand:"lg"},r.a.createElement(X.a.Brand,{className:"brand",href:"/#home"},"<".concat(d.firstName," />")),r.a.createElement(X.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"toggler"}),r.a.createElement(X.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Y.a,{className:"mr-auto"},r.a.createElement(Y.a.Link,{className:"nav-link lead",href:u.resume,target:"_blank",rel:"noreferrer noopener"},"Resume"),u.show&&r.a.createElement(Y.a.Link,{className:"nav-link lead",href:"/#aboutme"},"About"),r.a.createElement(Y.a.Link,{className:"nav-link lead",href:"/#work-experience"},"Work Experience"),p&&r.a.createElement(Y.a.Link,{className:"nav-link lead",href:"/#projects"},"Projects"),b.show&&r.a.createElement(Y.a.Link,{className:"nav-link lead",href:"/#skills"},"Skills"),r.a.createElement(Y.a.Link,{className:"nav-link lead",href:"/#hobbies"},"Hobbies"),r.a.createElement(Y.a.Link,{className:"nav-link lead",href:"/#contact"},"Contact"))))}));function $(e){var a=e.skills;e.isScrolled;return r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",{className:"lead mb-1 mt-2"},e.name)})))}function ee(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{xs:12,md:6},r.a.createElement($,{skills:a.slice(0,Math.floor(a.length/2)),isScrolled:t})),r.a.createElement(_.a,{xs:12,md:6},r.a.createElement($,{skills:a.slice(Math.floor(a.length/2),a.length),isScrolled:t})))}function ae(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{xs:12,md:6},r.a.createElement("h4",null,"Proficient In:"),r.a.createElement($,{skills:a.proficient,isScrolled:t})),r.a.createElement(_.a,{xs:12,md:6},r.a.createElement("h4",null,"Experience With:"),r.a.createElement($,{skills:a.exposedTo,isScrolled:t})))}var te=function(e){var a=e.heading,t=e.skills,n=r.a.useRef(),o=r.a.useState(!1),i=Object(l.a)(o,2),s=i[0],c=i[1];return q((function(e){e.prevPos;var a=e.currPos;!s&&a.y-400<0&&c(!0)}),[],n),r.a.createElement(j.a,{ref:n,fluid:!0,className:"bg-white m-0",id:"skills"},r.a.createElement(N.a,{className:"p-5 "},r.a.createElement("h2",{ref:n,className:"display-4 pb-5 text-center"},a),r.a.createElement(O.a,{className:"skills-tabs",defaultActiveKey:"programming-skills",id:"skills-tabs"},r.a.createElement(J.a,{tabClassName:"skills-tab lead",eventKey:"programming-skills",title:"Programming Languages"},r.a.createElement(D.a,{className:"pt-3 px-1"},r.a.createElement(ae,{skills:t.programmingLanguages,isScrolled:s}))),r.a.createElement(J.a,{tabClassName:"skills-tab lead",eventKey:"android-lib-skills",title:"Android Libraries"},r.a.createElement(D.a,{className:"pt-3 px-1"},r.a.createElement(ee,{skills:t.androidLibraries,isScrolled:s}))),r.a.createElement(J.a,{tabClassName:"skills-tab lead",eventKey:"coursework-skills",title:"Coursework"},r.a.createElement(D.a,{className:"pt-3 px-1"},r.a.createElement(ee,{skills:t.coursework,isScrolled:s}))),r.a.createElement(J.a,{tabClassName:"skills-tab lead",eventKey:"concepts-skills",title:"Concepts"},r.a.createElement(D.a,{className:"pt-3 px-1"},r.a.createElement(ee,{skills:t.concepts,isScrolled:s}))))))},ne=function(e){var a=e.heading,t=e.message,n=e.email;return r.a.createElement("div",{id:"contact"},r.a.createElement("h2",{className:"display-4 pb-3 text-center"},a),r.a.createElement("p",{className:"lead text-center pb-3"},t,", ",r.a.createElement("a",{href:"mailto:".concat(n.replace(" (at) ","@"))},n),"."))},re=t(45),oe=function(e){var a=e.heading,t=e.message,n=e.img,o=e.imageSize;return r.a.createElement("div",{id:"leadership",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("p",{className:"lead"},t)),r.a.createElement("div",{className:"col-md-7"},r.a.createElement(re.a,null,n.map((function(e,a){return r.a.createElement(re.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:e.img,alt:"First slide",width:o.width,height:o.height}),r.a.createElement(re.a.Caption,null,r.a.createElement("h3",null,e.label),r.a.createElement("p",null,e.paragraph)))})))))))},ie=function(e){var a=e.data;return r.a.createElement(_.a,{lg:"12"},r.a.createElement("div",{className:"pb-5 experience-center"},r.a.createElement("img",{className:"center-img",src:a.companylogo,width:a.logoWidth,height:a.logoHeight,alt:""}),r.a.createElement("p",null),r.a.createElement("p",{className:"lead text-center"},r.a.createElement("b",null,a.role),r.a.createElement("br",null),a.date),r.a.createElement("p",null,a.description.map((function(e){return r.a.createElement("p",null,e)})))))},le=function(e){var a=e.experiences;return r.a.createElement("div",{id:"work-experience"},r.a.createElement("section",{className:"section"},r.a.createElement(N.a,null,r.a.createElement(j.a,{fluid:!0,className:"bg-white"},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a.heading),r.a.createElement(D.a,null,a.data.map((function(e){return r.a.createElement(ie,{key:e.company,data:e})})))))))},se={display:"flex",flexDirection:"row",alignItems:"center"},ce=function(){return r.a.createElement("div",{id:"hobbies",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col d-lg-inline align-self-center"},r.a.createElement("h1",{className:"display-4 pb-4 text-center"},"Interests"),r.a.createElement("div",{className:"row",style:se},r.a.createElement("div",{className:"col text-center"},r.a.createElement("p",{className:"lead text-center",style:{fontSize:"28px"}},"Running"),r.a.createElement("img",{src:"https://img.icons8.com/nolan/128/running.png"}),r.a.createElement("p",{className:"lead text-center"},"One of my favorite parts of the day is going for a summer run. It helps break up my work day and allows me to listen to my favorite podcasts or just think while exploring downtown Atlanta or Georgia Tech's beautiful campus! Currently my goal is to build up my endurance back to run a 10k!")),r.a.createElement("div",{className:"col text-center"},r.a.createElement("p",{className:"lead text-center",style:{fontSize:"28px"}},"Reading"),r.a.createElement("img",{src:"https://img.icons8.com/nolan/128/saving-book.png"}),r.a.createElement("p",{className:"lead text-center"},"I am an avid learner and my favorite medium to learn is through written text. I always try and read something during my afternoon or before bed. My favorite books are nonfiction books about technology, health research, and biographies. Check out what I've been reading on ",r.a.createElement("a",{href:"https://www.goodreads.com/user/show/62971015-ryan-miles",target:"_blank"},"Goodreads"),"!")),r.a.createElement("div",{className:"col text-center"},r.a.createElement("p",{className:"lead text-center",style:{fontSize:"28px"}},"Video Production"),r.a.createElement("img",{src:"https://img.icons8.com/nolan/128/video.png"}),r.a.createElement("p",{className:"lead text-center"},"For a fun creative hobby, I love to make videos! I enjoy the technical aspect of getting a great shot and making the video exciting. Currently I use DaVinci Resolve, but have used Adobe Premiere in the past. Checkout some of my vlogs and advice videos on ",r.a.createElement("a",{href:"https://www.youtube.com/channel/UCd-L5vUAWxnNArskdBkKM6A",target:"_blank"},"YouTube"),"!")),r.a.createElement("div",{className:"col text-center"},r.a.createElement("p",{className:"lead text-center",style:{fontSize:"28px"}},"Cooking"),r.a.createElement("img",{src:"https://img.icons8.com/nolan/128/kitchenwares.png"}),r.a.createElement("p",{className:"lead text-center"},"Ever since I was young I loved watching the food network channel and now love to practice what I have watched throughout those years. The current recipe I am trying to master is a perfect smash burger with homemade buns. After mastering the smash burger, I plan to explore all types of cuisines from around the world.")))))))},me=r.a.forwardRef((function(e,a){var t=r.a.useState(!1),n=Object(l.a)(t,2),o=n[0],i=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{gradient:d.gradientColors,title:"".concat(d.firstName," ").concat(d.middleName," ").concat(d.lastName),message:d.message,icons:d.icons,ref:a,resume:u.resume,showGoals:function(){i(!o)}}),u.show&&r.a.createElement(R,{heading:u.heading,message:u.message,link:u.imageLink,imgSize:u.imageSize,resume:u.resume}),r.a.createElement(le,{experiences:h}),"}",p&&r.a.createElement(V,{projects:f}),g.show&&r.a.createElement(oe,{heading:g.heading,message:g.message,img:g.images,imageSize:g.imageSize}),r.a.createElement(te,{heading:b.heading,skills:b}),r.a.createElement(ce,null))})),de=function(){var e=r.a.useRef();return r.a.createElement(s.a,{basename:"/"},m&&r.a.createElement(Z,{ref:e}),r.a.createElement(c.a,{path:"/",exact:!0,component:function(){return r.a.createElement(me,{ref:e})}}),r.a.createElement(z,null,y&&r.a.createElement(ne,{heading:w,message:k,email:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},54:function(e,a,t){e.exports=t.p+"static/media/me.6a3dbd2a.jpg"},55:function(e,a,t){e.exports=t.p+"static/media/gt_logo.c8c67412.png"},72:function(e,a,t){e.exports=t(127)},77:function(e,a,t){},78:function(e,a,t){e.exports=t.p+"static/media/Ryan Miles - Resume.962aac13.pdf"},79:function(e,a,t){e.exports=t.p+"static/media/bf_logo.6f89cafb.png"},80:function(e,a,t){e.exports=t.p+"static/media/cisco.5cb5bf90.png"},81:function(e,a,t){e.exports=t.p+"static/media/unfoldit.61a068b2.jpg"},82:function(e,a,t){e.exports=t.p+"static/media/aidl.00854b6c.jpg"},83:function(e,a,t){e.exports=t.p+"static/media/secure-notifications.f95e478f.jpg"},84:function(e,a,t){e.exports=t.p+"static/media/spacetrader.646f73d9.jpg"},85:function(e,a,t){e.exports=t.p+"static/media/bf-theme.731d28f9.jpg"},86:function(e,a,t){e.exports=t.p+"static/media/parkhere.7944305a.jpg"},87:function(e,a,t){e.exports=t.p+"static/media/personal-website.cd755df1.jpg"},88:function(e,a,t){e.exports=t.p+"static/media/clowdr.78890721.jpg"},89:function(e,a,t){e.exports=t.p+"static/media/winter-project.442790be.jpg"},90:function(e,a,t){e.exports=t.p+"static/media/d3-project.112caf26.jpg"},91:function(e,a,t){e.exports=t.p+"static/media/shake-menu.e6922006.jpg"},92:function(e,a,t){e.exports=t.p+"static/media/Shake Menu in VR - Research Paper.95d651ae.pdf"},93:function(e,a,t){e.exports=t.p+"static/media/pcg.263877c3.jpg"},94:function(e,a,t){e.exports=t.p+"static/media/anim.2fad1254.jpg"},95:function(e,a,t){e.exports=t.p+"static/media/phong.db905023.jpg"},96:function(e,a,t){e.exports=t.p+"static/media/mario.c3c9d0a2.jpg"},97:function(e,a,t){e.exports=t.p+"static/media/ml4t.56cf4bf0.jpg"},98:function(e,a,t){e.exports=t.p+"static/media/pacman.d28aa341.jpg"},99:function(e,a,t){e.exports=t.p+"static/media/train.e3d557fa.jpg"}},[[72,1,2]]]);
//# sourceMappingURL=main.a96bf0e6.chunk.js.map