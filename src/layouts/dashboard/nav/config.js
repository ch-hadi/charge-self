// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;
const userSubMenu = [
  {
    title: 'User Settings',
    path: '/dashboard/user/settings',
    icon: icon('ic_settings'),
  },
  {
    title: 'User Profile',
    path: '/dashboard/user/profile',
    icon: icon('ic_user'),
  },
  {
    title: 'User Card',
    path: '/dashboard/user/card',
    icon: icon('ic_card'),
  },
];

const deviceManagmentSubMenu = [
  {
    title: 'Station List',
    path: '/dashboard/device-management/station-list',
    icon: icon('ic_station'),
  },
  {
    title: 'Battery List',
    path: '/dashboard/device-management/battery-list',
    icon: icon('ic_user'),
  },
  {
    title: 'Online Log',
    path: '/dashboard/device-management/online-log',
    icon: icon('ic_card'),
  },
  {
    title: 'Popup Log',
    path: '/dashboard/device-management/popup-log',
    icon: icon('ic_user'),
  },
  {
    title: 'Return Log',
    path: '/dashboard/device-management/return-log',
    icon: icon('ic_card'),
  },
];

const creditCardChilds = [
  {
    title: 'Credit Card List',
    path: '/dashboard/card-management/credit-card-list/',
    icon: icon('ic_card'),
  },
  {
    title: 'Pay List',
    path: '/dashboard/card-management/pay-list',
    icon: icon('ic_card'),
  },
];

const monthlyCardChilds = [
  {
    title: 'Monthly Card Setting',
    path: '/dashboard/monthly-card-management/monthly-card-setting',
    icon: icon('ic_card'),
  },
  {
    title: 'Monthly Card Record',
    path: '/dashboard/monthly-card-management/monthly-card-record',
    icon: icon('ic_card'),
  },
];

const venuChilds = [
  {
    title: 'Venue List',
    path: '/dashboard/venue/venue-list',
    icon: icon('ic_list'),
  },
  {
    title: 'Venue Comission',
    path: '/dashboard/venue/venue-commission',
    icon: icon('ic_commission'),
  },
];

const navConfig = [
  {
    title: 'data statistics',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  // {
  //   title: 'venue comission',
  //   path: '/dashboard/venue',
  //   icon: icon('ic_commission'),
  // },
  {
    title: 'users management',
    path: '/dashboard/user',
    icon: icon('ic_user'),
    // children: userSubMenu,
  },
  {
    title: 'venue management',
    path: '/dashboard/venue',
    icon: icon('ic_venue_management'),
    children: venuChilds,
  },
  {
    title: 'device management',
    path: '/dashboard/device-management',
    icon: icon('ic_mobile_repair'),
    children: deviceManagmentSubMenu,
  },
  {
    title: 'order management',
    path: '/dashboard/order-management',
    icon: icon('ic_orders_management'),
  },
  {
    title: 'credit card management',
    path: '/dashboard/card-management',
    icon: icon('ic_card'),
    children: creditCardChilds,
  },
  {
    title: 'vip settings',
    path: '/dashboard/vip-settings',
    icon: icon('ic_settings'),
  },
  {
    title: 'monthly card management',
    path: '/dashboard/monthly-card-management',
    icon: icon('ic_monthly_card_management'),
    children: monthlyCardChilds,
  },
  {
    title: 'fault report',
    path: '/dashboard/fault-report',
    icon: icon('ic_report'),
  },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: icon('ic_cart'),
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
