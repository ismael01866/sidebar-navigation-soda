import { IconType } from 'react-icons';
import { FaTachometerAlt, FaDatabase, FaChartBar } from 'react-icons/fa';

type Item = {
  href: string;
  icon: IconType;
  label: string;
};

export const items: Item[] = [
  {
    href: '#dash',
    icon: FaTachometerAlt,
    label: 'Dashboard'
  },
  {
    href: '#analytics',
    icon: FaChartBar,
    label: 'Analytics'
  },
  {
    href: '#reports',
    icon: FaDatabase,
    label: 'DB Reports'
  }
];
