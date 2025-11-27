'use client';
import { useState, useEffect } from 'react';
import { NavbarItem } from '@heroui/react';
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
    <>
      {navItems.map((item) => (
        <NavbarItem key={item.key} isActive={item.key === currentKey} className="hidden md:flex items-center">
          <Link href={item.href} locale={locale} className="flex items-center gap-1 text-sm">
            {item.icon}
            {item.text}
          </Link>
        </NavbarItem>
      ))}
    </>
  );
}
