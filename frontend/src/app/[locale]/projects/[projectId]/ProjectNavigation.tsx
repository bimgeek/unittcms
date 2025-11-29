'use client';
import { useState, useEffect } from 'react';
import { Home, File, Activity, Users, Settings2 } from 'lucide-react';
import { usePathname } from '@/src/i18n/routing';
import useGetCurrentIds from '@/utils/useGetCurrentIds';
import { ProjectMessages } from '@/types/project';
import { Link } from '@/src/i18n/routing';

export type Props = {
  messages: ProjectMessages;
  locale: string;
};

export default function ProjectNavigation({ messages, locale }: Props) {
  const { projectId } = useGetCurrentIds();
  const pathname = usePathname();

  const [currentKey, setCurrentKey] = useState('home');

  const ICON_STROKE_WIDTH = 1;
  const ICON_SIZE = 16; // Smaller for header

  useEffect(() => {
    if (pathname.includes('/home')) {
      setCurrentKey('home');
    } else if (pathname.includes('/folders') || pathname.includes('/cases')) {
      setCurrentKey('cases');
    } else if (pathname.includes('/runs')) {
      setCurrentKey('runs');
    } else if (pathname.includes('/members')) {
      setCurrentKey('members');
    } else if (pathname.includes('/settings')) {
      setCurrentKey('settings');
    } else {
      setCurrentKey('');
    }
  }, [pathname]);

  const navItems = [
    {
      key: 'home',
      text: messages.home,
      href: `/projects/${projectId}/home`,
      icon: <Home strokeWidth={ICON_STROKE_WIDTH} size={ICON_SIZE} />,
    },
    {
      key: 'cases',
      text: messages.testCases,
      href: `/projects/${projectId}/folders`,
      icon: <File strokeWidth={ICON_STROKE_WIDTH} size={ICON_SIZE} />,
    },
    {
      key: 'runs',
      text: messages.testRuns,
      href: `/projects/${projectId}/runs`,
      icon: <Activity strokeWidth={ICON_STROKE_WIDTH} size={ICON_SIZE} />,
    },
    {
      key: 'members',
      text: messages.members,
      href: `/projects/${projectId}/members`,
      icon: <Users strokeWidth={ICON_STROKE_WIDTH} size={ICON_SIZE} />,
    },
    {
      key: 'settings',
      text: messages.settings,
      href: `/projects/${projectId}/settings`,
      icon: <Settings2 strokeWidth={ICON_STROKE_WIDTH} size={ICON_SIZE} />,
    },
  ];

  return (
    <nav className="hidden md:flex items-center gap-1">
      {navItems.map((item) => {
        const isActive = item.key === currentKey;
        return (
          <Link
            key={item.key}
            href={item.href}
            locale={locale}
            className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded transition-colors ${
              isActive
                ? 'bg-gray-800 dark:bg-gray-800 text-white'
                : 'text-gray-400 dark:text-gray-400 hover:text-gray-200 dark:hover:text-gray-200 hover:bg-gray-800/50 dark:hover:bg-gray-800/50'
            }`}
          >
            {item.icon}
            {item.text}
          </Link>
        );
      })}
    </nav>
  );
}
