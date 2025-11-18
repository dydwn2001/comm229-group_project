// src/data/projects.js
import Project1 from '../pages/Project1';
import Project2 from '../pages/Project2';
import Project3 from '../pages/Project3';

const projects = [
  {
    id: 1,
    title: 'Sports Tracker',
    description: 'Dashboard with sports icons, stats, and charts',
    preview: Project1,
    route: '/project1',
  },
  {
    id: 2,
    title: 'Dad Scheduler',
    description: 'Organize parenting routines and tasks',
    preview: Project2,
    route: '/project2',
  },
  {
    id: 3,
    title: 'Portfolio Site',
    description: 'This very site, built with React & Router',
    preview: Project3,
    route: '/project3',
  },
];

export default projects;