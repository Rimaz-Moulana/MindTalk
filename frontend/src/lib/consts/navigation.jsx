import {FiAirplay, FiBookOpen, FiCalendar, FiEdit, FiMessageCircle, FiMusic, FiPhone, FiSlack, FiUsers} from "react-icons/fi"

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
		key: 'appointments',
		label: 'Appointments',
		path: '/clientappointments',
		icon: <FiCalendar />
	},
	{
		key: 'music',
		label: 'Music / Videos',
		path: '/clientmusic',
		icon: <FiMusic />
	},
	{
		key: 'meditation',
		label: 'Meditation',
		path: '/clientmeditation',
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
