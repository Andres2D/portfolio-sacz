import { Work } from "../interfaces/work";
import {
  bartender,
  marketing,
  music,
  contentSamples
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
  },
  {
    id: 'w4',
    title: 'Content Samples',
    description: 'Check my work',
    image: contentSamples,
    modalId: 'content-examples'
  }
];
