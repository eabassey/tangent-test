import { Menu } from './menu.model';

export const menuItems = [
  new Menu(
    1,
    'Dashboard',
    '/main/dashboard',
    null,
    'tachometer',
    null,
    false,
    0
  ),
  new Menu(2, 'Employees', '/main/membership', null, 'users', null, false, 0),
  new Menu(3, 'My Profile', '/profile', null, 'user', null, false, 0),
  new Menu(4, 'Logout', '/login', null, 'power-off', null, false, 0)
];
