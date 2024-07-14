import { createStore } from "redux";
import reploy1 from './assets/images/reploy/1.png';
import reploy2 from './assets/images/reploy/2.png';
import weatherDashboard1 from './assets/images/weatherDashboard/1.png';
import cards1 from './assets/images/10kcards/1.png';
import cards2 from './assets/images/10kcards/2.png';
import cards3 from './assets/images/10kcards/3.png';
import cards4 from './assets/images/10kcards/4.png';
import cards5 from './assets/images/10kcards/5.png';
import cards6 from './assets/images/10kcards/6.png';

const initialState = {
    currentProjects: [
        {
          name: '10K Cards',
          link: '10kcards',
          shortDescription: "Digital Busniess Cards for Professionals",
          description: "Freelance work for the company 10k Cards. They wanted an edit form that is similar to their product so I recreated it with interactive inputs and I also integrated stripe payments and a checkout.",
          website: 'https://10k-cards.vercel.app',
          isDemo: true,
          platform: ['Web'],
          images: [
            cards1,
            cards2,
            cards3,
            cards4,
            cards5,
            cards6
          ],
          stack: ['React', 'MUI', 'ExpressJS', 'NodeJS', 'Stripe', 'Multer' ]
        },
        {
          name: 'Reploy',
          link: 'reploy',
          shortDescription: "A job application tracker",
          description: "A job application tracker that stores the user's applications in a database",
          website: 'https://reploy.herokuapp.com',
          source: 'https://github.com/abjj1999/Job-Tracker',
          platform: ['Web'],
          images: [
            reploy1,
            reploy2
          ],
          stack: ['Handlebars', 'MySQL', 'ExpressJS', 'NodeJS']
        },
        {
          name: 'Weather Dashboard',
          link: 'weatherDashboard',
          shortDescription: "A weather tracker that forecasts the next 5 days",
          description: "An application that utilizes the Open Weather API to fetch the weather for the next 5 days based on location.",
          website: 'https://zachyarbrough.github.io/weather-dashboard/',
          source: 'https://github.com/ZachYarbrough/weather-dashboard',
          platform: ['Web'],
          images: [
            weatherDashboard1
          ],
          stack: ['HTML', 'CSS', 'JavaScript']
        }
      ]
};

const store = createStore(
    initialState
);

export default store;