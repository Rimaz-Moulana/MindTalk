import {FiAirplay, FiCheck, FiCheckCircle, FiCreditCard, FiDollarSign, FiPocket, FiUsers} from "react-icons/fi"

export const WALLET_SIDEBAR_LINKS = [
	{
		key: 'wallet',
		label: 'Wallet',
		path: '/counsellor/wallet',
		icon: <FiPocket />
	},
	{
		key: 'transhistory',
		label: 'Transaction History',
		path: '/counsellor/wallet/transhistory',
		icon: <FiDollarSign />
	},
	{
		key: 'withdraw',
		label: 'Withdraw',
		path: '/withdraw',
		icon: <FiCreditCard />
	},
	{
		key: 'dashoboard',
		label: 'Dashboard',
		path: '/counsellor',
		icon: <FiAirplay />
	}
]
