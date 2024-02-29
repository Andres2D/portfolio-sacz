import { Work } from "../interfaces/work";
import {
  bartender,
  marketing,
  music
} from '../images';

export const workList: Work[] = [
  {
    id: 'w1',
    title: 'Marketing',
    description: 'Specialist',
    image: marketing
  },
  {
    id: 'w2',
    title: 'Bartender',
    description: 'Events',
    image: bartender
  },
  {
    id: 'w3',
    title: 'Music',
    description: 'Beats, Drum, Bass',
    image: music
  }
];
