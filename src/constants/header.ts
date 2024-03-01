import { Contact, Profile, SectionLink } from '../interfaces/header';
import {
  facebook,
  gmail,
  instagram,
  linkedin,
  twitter,
  whatsapp
} from '../images';

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
    label: 'Work',
    reference: 'work'
  }
];

export const contactLinks: Contact[] = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sebasti%C3%A1n-alcarazcasta%C3%B1o/',
    image: linkedin,
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/sebastian.alcaraz.5686',
    image: facebook,
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/sa.c.z/',
    image: instagram,
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/Sb_alca',
    image: twitter,
  },
  {
    label: 'Gmail',
    url: 'alcarazsebastian131@gmail.com',
    image: gmail,
    isGmail: true
  },
];

export const profile: Profile = {
  name: 'Sebastian Alcaraz',
  role: 'Digital Marketing specialist',
  description: ''
}
