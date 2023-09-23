import {FiAirplay, FiBookOpen, FiCalendar, FiMessageCircle, FiPhone, FiUsers} from "react-icons/fi"

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
		key: 'availability',
		label: ' Weekly Availability',
		path: '/counsellor/availability',
		icon: <FiPhone />
	},
	{
		key: 'bookedslots',
		label: ' Booked Slots',
		path: '/counsellor/bookedslots',
		icon: <FiPhone />
	},
	{
		key: 'appointments',
		label: 'Appointments',
		path: '/counsellor/counsellorappointments',
		icon: <FiCalendar />
	},
	{
		key: 'clients',
		label: 'Clients',
		path: '/counsellor/counsellorclients',
		icon: <FiUsers />
	},
	{
		key: 'blogs',
		label: 'Blogs',
		path: '/counsellor/blogs',
		icon: <FiBookOpen />
	}
]
