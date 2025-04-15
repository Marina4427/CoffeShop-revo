import './style.css';
import sprite from './icons.svg';
import clsx from 'clsx';

const Icon = ({ name, width, height, className }) => {

 return (
    <svg
      className={clsx('icon', className || '')}
      width={width}
      height={height} 
    >
      <use href={ `${sprite}#${name}`} />
    </svg>
  );
}

export default Icon;