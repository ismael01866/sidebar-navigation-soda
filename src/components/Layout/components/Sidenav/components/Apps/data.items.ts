import { IconType } from 'react-icons';
import { FaGithub, FaGitkraken, FaGitlab } from 'react-icons/fa';

type Item = {
  href: string;
  icon: IconType;
  iconColor: string;
  label: string;
  count: number;
};

export const items: Item[] = [
  {
    href: '#gh',
    icon: FaGithub,
    iconColor: 'red.500',
    label: 'Git Hub',
    count: 24
  },
  {
    href: '#gl',
    icon: FaGitlab,
    iconColor: 'orange.500',
    label: 'Git Lab',
    count: 5
  },
  {
    href: '#gk',
    icon: FaGitkraken,
    iconColor: 'blue.500',
    label: 'Git Kraken',
    count: 18
  }
];
