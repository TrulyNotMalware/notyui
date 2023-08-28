import { useRecoilState } from 'recoil';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { localMenu, prodMenu } from '@/Menu';
import { menuName } from '@/components/atoms/menuAtom';
import { IconBox, IconBook, IconCode } from '@/assets/icons';
import styles from './menu.module.scss';
import MenuItem from './MenuItem/MenuItem';

const menuList = import.meta.env.MODE === 'development' ? localMenu : prodMenu;

const Menu = () => {
  const [selectedMenuName, setSelectedMenuName] = useRecoilState(menuName);
  const navigator = useNavigate();
  const location = useLocation();

  const menuMap = {
    blog: <IconBook width={45} height={45} />,
    code: <IconCode width={45} height={45} />,
    localExample: <IconBox width={45} height={45} />,
  };
  const onMenuClick = (clickedMenuName: string) => {
    setSelectedMenuName(clickedMenuName);
    navigator(`/${clickedMenuName}`);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.menuWrapper}>
        <div>Test-header</div>
        <div className={styles.mainMenu}>
          {menuList.map((value: string) => (
            <MenuItem
              key={value}
              name={value}
              selected={value === selectedMenuName}
              onClick={onMenuClick}
            >
              {menuMap[value as 'blog' | 'code' | 'localExample']}
            </MenuItem>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Menu;
