import {FiAirplay, FiMessageCircle,  FiPhone, FiUsers} from "react-icons/fi"

export const WALLET_SIDEBAR_LINKS = [
	{
		key: 'wallet',
		label: 'Wallet',
		path: '/wallet',
		icon: <FiAirplay />
	},
	{
		key: 'transhistory',
		label: 'Transaction History',
		path: '/transhistory',
		icon: <FiMessageCircle />
	},
	{
		key: 'withdraw',
		label: 'Withdraw',
		path: '/withdraw',
		icon: <FiPhone />
	},
	{
		key: 'dashoboard',
		label: 'Dashboard',
		path: '/',
		icon: <FiUsers />
	}
]
