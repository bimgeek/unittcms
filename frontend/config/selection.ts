import { AutomationStatusType, GlobalRoleType, MemberRoleType, TemplateType } from '@/types/base';
import { RunStatusType, TestRunCaseStatusType } from '@/types/status';
import { TestTypeType } from '@/types/testType';
import { PriorityType } from '@/types/priority';
import { LocaleType } from '@/types/locale';
import { PRIORITY_COLORS, STATUS_COLORS, CHART_CATEGORICAL_PALETTE } from '@/utils/colors';

const roles: GlobalRoleType[] = [{ uid: 'administrator' }, { uid: 'user' }];
const memberRoles: MemberRoleType[] = [{ uid: 'manager' }, { uid: 'developer' }, { uid: 'reporter' }];

const categoricalPalette = CHART_CATEGORICAL_PALETTE;

const locales: LocaleType[] = [
  { code: 'en', name: 'English' },
  { code: 'ja', name: '日本語' },
  { code: 'pt-BR', name: 'Português' },
];

// The status of each test run
const testRunStatus: RunStatusType[] = [
  { uid: 'new' },
  { uid: 'inProgress' },
  { uid: 'underReview' },
  { uid: 'rejected' },
  { uid: 'done' },
  { uid: 'closed' },
];

// The status of each test case in test run
const testRunCaseStatus: TestRunCaseStatusType[] = [
  {
    uid: 'untested',
    color: 'primary',
    chartColor: STATUS_COLORS.untested,
  },
  { uid: 'passed', color: 'success', chartColor: STATUS_COLORS.passed },
  { uid: 'failed', color: 'danger', chartColor: STATUS_COLORS.failed },
  { uid: 'retest', color: 'warning', chartColor: STATUS_COLORS.retest },
  { uid: 'skipped', color: 'primary', chartColor: STATUS_COLORS.skipped },
];

const priorities: PriorityType[] = [
  { uid: 'critical', color: PRIORITY_COLORS.critical, chartColor: PRIORITY_COLORS.critical },
  { uid: 'high', color: PRIORITY_COLORS.high, chartColor: PRIORITY_COLORS.high },
  { uid: 'medium', color: PRIORITY_COLORS.medium, chartColor: PRIORITY_COLORS.medium },
  { uid: 'low', color: PRIORITY_COLORS.low, chartColor: PRIORITY_COLORS.low },
];

const testTypes: TestTypeType[] = [
  { uid: 'other', chartColor: categoricalPalette[0] },
  { uid: 'security', chartColor: categoricalPalette[1] },
  { uid: 'performance', chartColor: categoricalPalette[2] },
  { uid: 'accessibility', chartColor: categoricalPalette[3] },
  { uid: 'functional', chartColor: categoricalPalette[4] },
  { uid: 'acceptance', chartColor: categoricalPalette[5] },
  { uid: 'usability', chartColor: categoricalPalette[6] },
  { uid: 'smokeSanity', chartColor: categoricalPalette[7] },
  { uid: 'compatibility', chartColor: categoricalPalette[0] },
  { uid: 'destructive', chartColor: categoricalPalette[1] },
  { uid: 'regression', chartColor: categoricalPalette[2] },
  { uid: 'automated', chartColor: categoricalPalette[3] },
  { uid: 'manual', chartColor: categoricalPalette[4] },
];

const automationStatus: AutomationStatusType[] = [
  { uid: 'automated' },
  { uid: 'automation-not-required' },
  { uid: 'cannot-be-automated' },
  { uid: 'obsolete' },
];

const templates: TemplateType[] = [{ uid: 'text' }, { uid: 'step' }];

export {
  roles,
  memberRoles,
  locales,
  priorities,
  testTypes,
  automationStatus,
  templates,
  testRunStatus,
  testRunCaseStatus,
};
