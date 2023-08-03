import { useRecoilState } from 'recoil';
import { useNavigate, useLocation } from 'react-router-dom';
import { localMenu, prodMenu } from '@/Menu';
import { menuName } from '@/components/atoms/menuAtom';
import styles from './menu.module.scss';

const menuList: string[] =
  import.meta.env.MODE === 'development' ? localMenu : prodMenu;

const Menu = () => {
  const [selectedMenuName, setSelectedMenuName] = useRecoilState(menuName);
  const navigator = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.menuWrapper}>
        <div className={styles.mainMenu}>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
