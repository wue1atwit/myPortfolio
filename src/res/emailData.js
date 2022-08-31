import resume from "../res/myResume.pdf";

const data = [
  {
    id: 0,
    from: "Ethan Wu",
    date: "2/26/2022",
    sDate: "Sat 2/26",
    time: "11:24 pm",
    subject: "About Me",
    hasAttachment: false,
    message:
      "Welcome to my web portfolio, \nMy name is Ethan and I am Sophomore studying Computer Science at Wentworth Institute of Technology. My interest in coding stemmed from when I was in middle school, when I attempted to create a Minecraft mod using Java. Although I was not successful, I was able to quickly pickup on the process of coding and the beneficial coding syntaxes. \nAs I reached high school, I was enrolled in my school's robotic program, where I was able to program how a robot and a vending machine functioned. This experience piqued my interest in programming because of how exhilarating it was to see my program function outside the scope of just code. I strive to continue making programs that displays my creativity and passion in what I learn. \nBest,\nEthan Wu",
  },
  {
    id: 1,
    from: "Ethan Wu",
    date: "2/25/2022",
    sDate: "Sat 2/25",
    time: "5:44 pm",
    subject: "Resume",
    hasAttachment: true,
    attachedFiles: [{ name: "Ethan Wu's Resume", file: resume, type: "pdf" }],
    message:
      'Hello, \nAttached in this email is my resume. Feel free to download and view my resume as you please. Do not hesistate to contact me if you have any questions. You can contact me via the "plus/compose" button on the bottom right.  \nSincerely, \nEthan Wu',
  },
  {
    id: 2,
    from: "Ethan Wu",
    date: "3/13/2021",
    sDate: "Sat 3/13",
    time: "2:57 pm",
    subject: "The Adventures of Carl",
    hasAttachment: true,
    attachedFiles: [
      {
        name: "Github Repository",
        file: "https://github.com/wue1atwit/The-Adventures-of-Carl",
        type: "link",
      },
    ],
    message: `Greetings, \nFor this project, I had the opportunity to work with two of my wonderful colleagues, where we were able to design a collision/obstacle game using object-oriented programming and the JavaFX library. The game is about an alien, Carl, who needs to avoid obstacles as he travels through space in order to get home. The simplicity of this game and arcade-like aesthetic gives the player an overall nostalgic feeling and an excellent way to pass time.  \nWarm regards, \nEthan Wu`,
    // \nFor the visual design of this game we were going for a retro arcade aesthetic, where the player has control over Carl, who moves up and down the screen to avoid asteroids. Once the game is launched, the user/player has multiple choices between playing the game, going to the how to play scene, or exiting the game. There are specials scene that can only be attained when playing the game, such as the game over scene and the different levels. \n The Adventures of Carl is exactly what we set out to make. A multi-level game of an alien trying to avoid obstacles as he travels through space trying to get back home. Although we accomplished much of what we wanted, there are a few things that could be improved upon.  One example is the randomness of the heart spawning.  The heart may spawn behind or too close to asteroids where the player is unable to collect it. This gave us insight on game development and the trial and error process. There were many challenges, but using the topics we learned in class as well as outside research we worked through them to make a fully-functional game. \nWarm regards, \nEthan Wu`,
  },
];

export default data;
