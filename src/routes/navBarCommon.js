import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import PeopleIcon from '@material-ui/icons/People';
import ViewListIcon from '@material-ui/icons/ViewList';
import AddIcon from '@material-ui/icons/Add';
import ExploreIcon from '@material-ui/icons/Explore';

// constants
import { DRAWER_MENU_LABEL } from '../constants/drawMenu';
import { PATH } from '../constants/paths';

export const navBarCommon = [
  {
    subheader: 'Dashboard',
    items: [
      {
        title: 'Tour',
        icon: FilterHdrIcon,
        href: PATH.ADMIN + PATH.TOURS,
        label: DRAWER_MENU_LABEL.TOURS,
        items: [
          {
            title: 'Add Tour',
            icon: AddIcon,
            href: PATH.ADMIN + PATH.TOUR_ADD,
            label: DRAWER_MENU_LABEL.TOUR_ADD,
          },
          {
            title: 'List Tour',
            icon: ViewListIcon,
            href: PATH.ADMIN + PATH.TOUR_LIST,
            label: DRAWER_MENU_LABEL.TOUR_LIST,
          },
        ],
      },
      {
        title: 'Instour',
        href: PATH.ADMIN + PATH.INSTOURS,
        icon: ExploreIcon,
        label: DRAWER_MENU_LABEL.INSTOURS,
        items: [
          // {
          //   title: 'Add Instour',
          //   icon: AddIcon,
          //   href: PATH.INSTOUR_ADD,
          //   label: DRAWER_MENU_LABEL.INSTOURS_ADD,
          // },
          {
            title: 'List Instour',
            icon: ViewListIcon,
            href: PATH.ADMIN + PATH.INSTOUR_LIST,
            label: DRAWER_MENU_LABEL.INSTOURS_LIST,
          },
        ],
      },
    ],
  },
  {
    subheader: 'Users',
    items: [
      {
        title: 'Users',
        icon: PeopleIcon,
        href: PATH.ADMIN + PATH.USERS,
        label: DRAWER_MENU_LABEL.USERS,
      },
    ],
  },
];
