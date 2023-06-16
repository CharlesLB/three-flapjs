import { RefObject, useEffect } from 'react';

const useClickOutside = (ref: RefObject<any>, callback: () => any) => {
  const handleClick = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useClickOutside;
