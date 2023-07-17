import { FiAirplay, FiEdit, FiMessageCircle, FiPhone, FiSlack, FiUsers } from "react-icons/fi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <FiAirplay />
  },
  {
    key: 'message',
    label: 'Message',
    path: '/message',
    icon: <FiMessageCircle />
  },
  {
    key: 'calls',
    label: 'Calls',
    path: '/calls',
    icon: <FiPhone />
  },
  {
    key: 'counsellors',
    label: 'Counsellors',
    path: '/counsellors',
    icon: <FiUsers />
  },
  {
    key: 'relaxation',
    label: 'Relaxation',
    path: '/relaxation',
    icon: <FiSlack />
  },
  {
    key: 'diagnostic-test',
    label: 'Diagnostic Test',
    path: '/diagnostic-test',
    icon: <FiEdit />
  }
];
