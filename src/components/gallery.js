import React from 'react';
import { render } from 'react-dom';
import Header from './header'
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
//very
import AboutusImage from '../assets/aboutusimage.png'

import ImageGallery from 'react-image-gallery';

export default function Gallery(){
        const images = [
                {
                  original: 'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ',
                  thumbnail: 'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ',
                },
                {
                  original: 'https://picsum.photos/id/1015/1000/600/',
                  thumbnail: 'https://picsum.photos/id/1015/250/150/',
                },
                {
                  original: 'https://picsum.photos/id/1019/1000/600/',
                  thumbnail: 'https://picsum.photos/id/1019/250/150/',
                },
              ];
  return (
    <div>
       <Header fixed={true} />
            <div className="relative">
                <Header />
                <div className='absolute top-0 bg-white w-full h-full'>
                    </div>
            </div>


   
            <ImageGallery items={images} />
 

    </div>
  );
}

