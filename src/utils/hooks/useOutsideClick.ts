import { RefObject, useEffect } from 'react';

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: Function) => {
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleClick = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };
};

export default useOutsideClick;
