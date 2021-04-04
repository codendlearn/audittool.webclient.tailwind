import INavLink from '../Model/INavLink'

export const NavMenu: INavLink[] = [
  { text: 'Home', path: '/', iconName: 'Home' },
  {
    text: 'Dashboard',
    path: '/dashboard',
    active: true,
    iconName: 'Dashboard',
  },
  {
    text: 'Phase1',
    iconName: 'HomeIcon',
    subMenu: [
      {
        text: 'Phase1',
      },
      { text: 'Phase1', iconName: 'BookOpen', active: true },
    ],
  },
]
