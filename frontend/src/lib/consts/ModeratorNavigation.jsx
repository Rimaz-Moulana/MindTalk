import {FiAirplay, FiSettings} from "react-icons/fi"

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/moderator',
		icon: <FiAirplay />
	},
    {
		key: 'message',
		label: 'User Handle',
		path: '/moderator/userhandle',
		icon: <FiSettings />
	}
]
