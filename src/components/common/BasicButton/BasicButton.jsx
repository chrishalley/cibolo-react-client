import React, { useEffect }  from 'react';

import styles from './BasicButton.module.css';

const BasicButton = ({ classNames, className, children, onClick, ...restProps }, props) => {

  useEffect(() => {
    console.log('props: ', props);
  });

  return (
    <button type="button" onClick={(e) => onClick && onClick(e)} className={`${styles['button']} ${className}`} {...restProps}>{children}</button>
  );
}

export { BasicButton };