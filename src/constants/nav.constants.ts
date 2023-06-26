import { NavItem } from '../types/nav';
import {
  PATH_ABOUT,
  PATH_BLOG,
  PATH_CONTACT,
  PATH_SERVICES,
  PATH_WORK
} from './paths.constants';

export const navItems: NavItem[] = [
  { label: 'Services', to: PATH_SERVICES },
  { label: 'Work', to: PATH_WORK },
  { label: 'About', to: PATH_ABOUT },
  { label: 'Blog', to: PATH_BLOG },
  { label: 'Contact', to: PATH_CONTACT }
];
