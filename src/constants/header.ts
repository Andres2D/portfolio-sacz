import { Contact, SectionLink } from '../interfaces/header';
import {
  facebook,
  gmail,
  instagram,
  linkedin,
  twitter,
  whatsapp
} from '../images/svg';

export const sectionsList: SectionLink[] = [
  {
    label: 'About',
    reference: 'about'
  },
  {
    label: 'Experience',
    reference: 'experience'
  },
  {
    label: 'Projects',
    reference: 'projects'
  }
];

export const contactLinks: Contact[] = [
  {
    label: 'LinkedIn',
    url: '',
    image: linkedin,
  },
  {
    label: 'Facebook',
    url: '',
    image: facebook,
  },
  {
    label: 'Instagram',
    url: '',
    image: instagram,
  },
  {
    label: 'Twitter',
    url: '',
    image: twitter,
  },
  {
    label: 'Gmail',
    url: '',
    image: gmail,
  },
];
