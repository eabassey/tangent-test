import { Menu } from './menu.model';

export const menuItems = [
  new Menu(3, 'My Profile', '/main/user/profile', null, 'user', null, false, 0),
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
  new Menu(2, 'Employees', '/main/employees', null, 'users', null, false, 0)
];
