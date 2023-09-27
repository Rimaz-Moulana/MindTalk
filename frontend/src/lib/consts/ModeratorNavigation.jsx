import { FiAirplay, FiBook, FiBookOpen, FiMusic, FiSlack } from "react-icons/fi"

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
		key: 'meditation',
		label: 'Meditation',
		path: '/moderator/moderatormeditation',
		icon: <FiSlack />
	},

	{
		key: 'blogs',
		label: 'Blogs',
		path: '/moderator/moderatorblogs',
		icon: <FiBookOpen />
	},

	{
		key: 'Therapy Session',
		label: 'Therapy Session',
		path: '/moderator/addtherapysession',
		icon: <FiBook />
	}


]
