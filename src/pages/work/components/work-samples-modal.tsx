import * as React from "react";
import { marketingModalContent } from '../../../constants/modal-content';

const WorkSamplesModalComponent: React.FC = () => {

  const videosMap = marketingModalContent.videos.map(({id, source, type, width}) => 
    <video 
      key={id}
      controls 
      width={width} 
      style={{ 
        borderRadius: '5px',
        border: '2px solid white'
      }}
    >
      <source src={source} type={type} />
    </video>
  );

  const photosMap = marketingModalContent.photos.map(({id, source, alt, width}) => 
    <img 
      key={id}
      src={source} 
      width={width} 
      alt={alt} 
      onClick={() => window.open(source, '_blank')}
      style={{
        cursor: 'pointer',
        borderRadius: '5px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      }}
    />
  );

  return (
    <section>
      <h2>{marketingModalContent.title}</h2>
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px'
      }}>
        { videosMap }
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginTop: '20px'
      }}>
        { photosMap }
      </div>
    </section>
  );
};
export default WorkSamplesModalComponent;
