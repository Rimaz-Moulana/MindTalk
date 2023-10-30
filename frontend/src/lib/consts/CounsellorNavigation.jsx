import { AiFillBehanceCircle } from "react-icons/ai"
import {FiActivity, FiAirplay, FiBookOpen, FiBox, FiCalendar, FiCheckCircle, FiDivideSquare, FiDollarSign, FiMessageCircle, FiPhone, FiUsers} from "react-icons/fi"

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
		icon: <FiActivity />
	},
	{
		key: 'bookedslots',
		label: ' Booked Slots',
		path: '/counsellor/bookedslots',
		icon: <FiCheckCircle />
	},
	{
		key: 'appointments',
		label: 'Appointments',
		path: '/counsellor/counsellorappointments',
		icon: <FiCalendar />
	},
	{
		key: 'wallet',
		label: 'Wallet',
		path: '/counsellor/wallet',
		icon: <FiDollarSign />
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
		path: '/counsellor/blogscounsellor',
		icon: <FiBookOpen />
	}
]
