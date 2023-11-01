import {FiAirplay, FiBookOpen, FiCalendar, FiEdit, FiMessageCircle, FiMusic, FiPhone, FiSlack, FiUsers} from "react-icons/fi"

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/client',
		icon: <FiAirplay />
	},
	{
		key: 'message',
		label: 'Message',
		path: '/client/message',
		icon: <FiMessageCircle />
	},
	{
		key: 'calls',
		label: 'Calls',
		path: '/client/calls',
		icon: <FiPhone />
	},
	{
		key: 'counsellors',
		label: 'Counsellors',
		path: '/client/clientcounsellors',
		icon: <FiUsers />
	},
	{
		key: 'appointments',
		label: 'Appointments',
		path: '/client/clientcalender',
		icon: <FiCalendar />
	},
	{
		key: 'music',
		label: 'Music / Videos',
		path: '/client/clientmusic',
		icon: <FiMusic />
	},
	{
		key: 'meditation',
		label: 'Meditation',
		path: '/client/clientmeditation',
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
		path: '/client/blogs',
		icon: <FiBookOpen />
	}
]
