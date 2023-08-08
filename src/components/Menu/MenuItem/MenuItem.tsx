import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './menuItem.module.scss';

interface Props {
  children: ReactNode;
  name: string;
  selected: boolean;
  onClick: (clickedMenuName: string) => void;
}

// const MenuItem = ({ children: ReactNode }) => {}; // is Same..
const MenuItem: FC<Props> = ({ children, name, selected, onClick }) => {
  return (
    <div
      className={clsx(styles.menuItem, { [styles.isBlur]: selected })}
      onClick={() => onClick(name)}
    >
      {children}
    </div>
  );
};
export default MenuItem;
