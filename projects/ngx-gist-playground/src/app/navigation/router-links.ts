export interface RouterLink {
  path: string;
  title: string;
  icon: string;
}

export const routerLinks: RouterLink[] = [
  {
    path: '/',
    title: 'Home',
    icon: 'home',
  },
  {
    path: '/getting-started',
    title: 'Getting Started',
    icon: 'rocket_launch',
  },
  {
    path: '/examples',
    title: 'Examples',
    icon: 'view_cozy',
  },
  {
    path: 'security',
    title: 'Security',
    icon: 'security',
  },
  {
    path: 'api-reference',
    title: 'API Reference',
    icon: 'api',
  },
];
