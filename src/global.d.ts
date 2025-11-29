declare module '*.css';
declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/thumbs';
declare module 'swiper/css/pagination';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
