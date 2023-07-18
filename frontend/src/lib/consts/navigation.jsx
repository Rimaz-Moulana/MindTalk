import {FiAirplay, FiBookOpen, FiEdit, FiMessageCircle, FiPhone, FiSlack, FiUsers} from "react-icons/fi"

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
		path: '/clientcounsellors',
		icon: <FiUsers />
	},
	{
		key: 'relaxation',
		label: 'Relaxation',
		path: '/clientrelaxation',
		icon: <FiSlack />
	},
	{
		key: 'diagnostic test',
		label: 'Diagnostic Test',
		path: '/diagnostictest',
		icon: <FiEdit />
	},
	{
		key: 'blogs',
		label: 'Blogs',
		path: '/blogs',
		icon: <FiBookOpen />
	}
]
