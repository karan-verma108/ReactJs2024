import { NavLink } from 'react-router';
import { NavDataType } from '../../../../types';

import { navData } from '../../../../utils/dummyData';

export default function Header(): React.JSX.Element {
  return (
    <header>
      <nav className='flex justify-center gap-5'>
        {navData?.length > 0 &&
          navData?.map((navItem: NavDataType, index: number) => (
            <NavLink
              key={`${navItem?.name}-${index}`}
              to={navItem?.path}
              className={({ isActive }: { isActive: boolean }) =>
                `${
                  isActive ? 'text-orange-400' : 'text-black'
                } hover:text-blue-500`
              }
            >
              {navItem?.name}
            </NavLink>
          ))}
      </nav>
    </header>
  );
}
