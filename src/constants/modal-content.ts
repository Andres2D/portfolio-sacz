import { 
  coverSample, 
  instagramSample, 
  instagramSample2, 
  instagramSample3, 
  residenceSample 
} from '../images';
import { ModalContent } from '../interfaces/modal';
import { 
  hr_v, 
  road_warrior, 
  rv 
} from '../videos';

export const marketingModalContent: ModalContent = {
  title: 'Some of my work as a content creator',
  videos: [
    {
      id: 'hr_v',
      source: hr_v,
      type: 'video/webm',
      width: '200'
    },
    {
      id: 'rv',
      source: rv,
      type: 'video/webm',
      width: '200'
    },
    {
      id: 'road_warrior',
      source: road_warrior,
      type: 'video/webm',
      width: '200'
    }
  ],
  photos: [
    {
      id: 'coverSample',
      source: coverSample,
      alt: 'cover-sample',
      width: '500px'
    },
    {
      id: 'residenceSample',
      source: residenceSample,
      alt: 'residence-sample',
      width: '500px'
    },
    {
      id: 'instagramSample',
      source: instagramSample,
      alt: 'instagram-sample',
      width: '500px'
    },
    {
      id: 'instagramSample2',
      source: instagramSample2,
      alt: 'instagram-sample-2',
      width: '500px'
    },
    {
      id: 'instagramSample3',
      source: instagramSample3,
      alt: 'instagram-sample-3',
      width: '500px'
    }
  ]
};
