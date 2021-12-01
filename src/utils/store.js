import { createStore } from "redux";
import reploy0 from '../assets/images/projects/0.png';
import reploy1 from '../assets/images/reploy/1.png';
import weatherDashboard0 from '../assets/images/projects/1.png';
import rnr0 from '../assets/images/projects/1.png';
import lyricado0 from '../assets/images/projects/2.png';
import lyricado1 from '../assets/images/lyricado/1.png';
import taskinator0 from '../assets/images/projects/3.png';

const initialState = {
    currentProjects: [
        {
            name: 'Reploy',
            shortDescription: "A job application tracker",
            description: "A job application tracker that stores the user's applications in a database",
            website: 'https://reploy.herokuapp.com',
            source: 'https://github.com/abjj1999/Job-Tracker',
            platform: ['Web'],
            images: [
                reploy0,
                reploy1
            ],
            stack: ['Handlebars', 'MySQL', 'ExpressJS', 'NodeJS']
        },
        {
            name: 'Relief and Rotation',
            shortDescription: "A relief scheduling application",
            description: "A calendar that makes it easy for employees to .",
            website: 'https://www.reliefandrotations.com',
            source: 'https://github.com/itorres60/Project_III',
            platform: ['Web'],
            images: [
                rnr0
            ],
            stack: ['React', 'MongoDB', 'GraphQL', 'Express']
        },
        {
            name: 'Weather Dashboard',
            shortDescription: "A weather tracker that forecasts the next 5 days",
            description: "An application that utilizes the Open Weather API to fetch the weather for the next 5 days based on location.",
            website: 'https://zachyarbrough.github.io/weather-dashboard/',
            source: 'https://github.com/ZachYarbrough/weather-dashboard',
            platform: ['Web'],
            images: [
                weatherDashboard0
            ],
            stack: ['HTML', 'CSS', 'JavaScript']
        },
        {
            name: 'Lyricado',
            shortDescription: "A music lyric quiz",
            description: "An application that utilizes the MusixMatch and Giphy APIs to quiz the user on how well they can guess the genre of a song based on a lyric snippet.",
            website: 'https://zachyarbrough.github.io/music-lyric-quiz/index.html',
            source: 'https://github.com/ZachYarbrough/music-lyric-quiz',
            platform: ['Web'],
            images: [
                lyricado0,
                lyricado1
            ],
            stack: ['HTML', 'CSS', 'JavaScript']
        },
        {
            name: 'Taskinator',
            shortDescription: "A kanban styled task manager",
            description: "A kanban styled to do list that utilizes javascript and local storage to store information.",
            website: 'https://zachyarbrough.github.io/taskinator/',
            source: 'https://github.com/ZachYarbrough/taskinator',
            platform: ['Web'],
            images: [
                taskinator0
            ],
            stack: ['HTML', 'CSS', 'JavaScript']
        }
    ]
};

const store = createStore(
    initialState
);

export default store;