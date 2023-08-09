import {FiAirplay, FiMusic, FiSettings} from "react-icons/fi"

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/moderator',
		icon: <FiAirplay />
	},
	{
		key: 'music',
		label: 'Music / Videos',
		path: '/moderator/moderatormusic',
		icon: <FiMusic />
	},
    {
		key: 'message',
		label: 'User Handle',
		path: '/moderator/userhandle',
		icon: <FiSettings />
	}
]
