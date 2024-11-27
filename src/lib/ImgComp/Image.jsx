/* eslint-disable jsx-a11y/alt-text */
import imgs from './imgs';

const Image = ({ name, width, height, className = '' }) => {
  const ImageSrc = imgs[name];



  return (
    <img
      src={ImageSrc}
      width={width}
      height={height}
      className={className}
    />
  );
};



export default Image;

