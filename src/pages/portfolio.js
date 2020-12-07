import React from 'react';
import Project from "../components/project/index";
import GetMeOutOfHere from "../images/get-outta-here-illustration.png";
import JSQuiz from "../images/JS-quiz.png";
import NoteTaker from "../images/note-taker.png";
import PasswordGenerator from "../images/Password-Generator.png";
import RememberDat from "../images/rememberdatlogo.png";
import WorkDayScheduler from "../images/workdayscheduler.png";

// Create state
const Projects = () => {
    const projects = [
      {
        name: "Get Me Out of Here",
        src: GetMeOutOfHere,
        description: "Position locator that utilizes three server side APIs to cross-reference live Covid-19 data in your area with Google Map routes to airports. Also references flight tracker data for once you arrive at the airport.",
        repo: "https://github.com/kylegold/get-me-out-of-here",
        website: "https://kylegold.github.io/get-me-out-of-here/"
      },
      {
        name: "Javascript Quiz",
        src: JSQuiz,
        description: "Timed quiz game of basic JavaScript questions. Outputted score relates to how much time is left on timer once all questions are answered. High scores are logged (can be cleared).",
          repo: "https://github.com/kkaltenheuser/Code-Quiz",
          website: "https://kkaltenheuser.github.io/Code-Quiz/"
      },
      {
        name: "Note Taker",
        src: NoteTaker,
        description: "A note taking app that allows users to input thoughts, add and subtract inputted notes. ",
        repo: "https://github.com/kkaltenheuser/note-taker",
        website: "https://intense-shore-08205.herokuapp.com/"
      },
      {
        name: "Auto Generated Password",
        src: PasswordGenerator,
        description: "An app that allows the user to input information regarding the type and volume of characters needed for a randomized password. Upon receiving the input information, the app autogenerates a randomized password based off of user requests.",
        repo: "https://github.com/kkaltenheuser/Random-Password-Generator",
        website: "https://kkaltenheuser.github.io/Random-Password-Generator/"
      },
      {
        name: "Remember Dat'",
        src: RememberDat,
        description: "An app based in nostalgia that brings the user back to the 90's through intentionally curated animations and CSS frameworks. As features load, users are brought to excitedly state that they Remember Dat' ",
        repo: "https://github.com/mikevitelli/rememberDat",
        website: "https://remember-dat.herokuapp.com/"
      },
      {
        name: "Workday Scheduler",
        src: WorkDayScheduler,
        description: "Interactive day scheduler with color coded slots ranged between 9 AM and 5 PM. Entries stored until user chooses to clear them. Green slots are available time, red slots are current/unavailable, gray is passed.",
        repo: "https://github.com/kkaltenheuser/Work-Day-Scheduler",
        website: "https://kkaltenheuser.github.io/Work-Day-Scheduler/"
      },
    ]