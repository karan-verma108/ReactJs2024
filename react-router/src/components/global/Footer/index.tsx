import { NavLink } from 'react-router';

import { FooterDataType, FooterLinksType } from '../../../../types';
import { footerData } from '../../../../utils/dummyData';

export default function Footer(): React.JSX.Element {
  return (
    <footer className='flex justify-between'>
      {footerData?.length > 0 &&
        footerData?.map((footerItem: FooterDataType) => (
          <div key={footerItem?.title} className='flex flex-col gap-2'>
            <p>{footerItem?.title}</p>
            <div className='flex flex-col gap-4'>
              {footerItem?.links?.length > 0 &&
                footerItem?.links?.map((linkItem: FooterLinksType) => (
                  <NavLink
                    key={linkItem?.name}
                    to={linkItem?.href}
                    className={({ isActive }: { isActive: boolean }) =>
                      `${
                        isActive ? 'text-orange-400' : 'text-black'
                      } hover:text-blue-500`
                    }
                  >
                    {linkItem?.name}
                  </NavLink>
                ))}
            </div>
          </div>
        ))}
    </footer>
  );
}
