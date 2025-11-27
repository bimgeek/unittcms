import { useTranslations } from 'next-intl';
import HeaderNavbarMenu from './HeaderNavbarMenu';
import { LocaleCodeType } from '@/types/locale';
import { ProjectMessages } from '@/types/project';

export default function Header(params: { locale: LocaleCodeType }) {
  const t = useTranslations('Header');
  const t2 = useTranslations('Project');
  const messages = {
    projects: t('projects'),
    admin: t('admin'),
    docs: t('docs'),
    roadmap: t('roadmap'),
    account: t('account'),
    profileSettings: t('profile_settings'),
    signUp: t('signup'),
    signIn: t('signin'),
    signOut: t('signout'),
    links: t('links'),
    languages: t('languages'),
    lightMode: t('lightMode'),
    darkMode: t('darkMode'),
    github: t('github'),
  };

  const projectMessages: ProjectMessages = {
    toggleSidebar: t2('toggle_sidebar'),
    home: t2('home'),
    testCases: t2('test_cases'),
    testRuns: t2('test_runs'),
    members: t2('members'),
    settings: t2('settings'),
  };

  return <HeaderNavbarMenu messages={messages} projectMessages={projectMessages} locale={params.locale} />;
}
