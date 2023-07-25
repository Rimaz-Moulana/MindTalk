import {FiAirplay, FiBookOpen, FiMessageCircle, FiPhone, FiUsers} from "react-icons/fi"

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/counsellor',
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
		key: 'clients',
		label: 'Clients',
		path: '/counsellor/counsellorclients',
		icon: <FiUsers />
	},
	{
		key: 'doctors',
		label: 'Doctors',
		path: '/counsellor/counsellordoctors',
		icon: <FiUsers />
	},
	{
		key: 'blogs',
		label: 'Blogs',
		path: '/blogs',
		icon: <FiBookOpen />
	}
]
