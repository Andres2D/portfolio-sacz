export interface ModalVideo {
  id: string;
  source: string;
  width: string;
  type: string;
}

export interface ModalPhoto {
  id: string;
  source: string;
  width: string;
  alt: string;
}

export interface ModalContent {
  title: string;
  videos: ModalVideo[];
  photos: ModalPhoto[];
}
