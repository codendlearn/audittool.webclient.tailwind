import INavLink from '../Model/INavLink'

export const NavMenu: INavLink[] = [
  { text: 'Home', path: '/', iconName: 'Home' },
  {
    text: 'Dashboard',
    path: '/dashboard',
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

  {
    text: 'Phase 2',
    iconName: 'HomeIcon',
    subMenu: [
      {
        text: 'Phase2 k',
        iconName: 'BookOpen',
      },
      { text: 'Phase1', iconName: 'BookOpen' },
    ],
  },
  {
    text: 'Play',
    path: '/play',
    iconName: 'Dashboard',
  },
]
