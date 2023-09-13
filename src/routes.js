import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import UserPage from './pages/user/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/dashboard/DashboardAppPage';
import Organizations from './pages/Organizations';
import Venue from './layouts/venue/Venue';
import DeviceManagement from './pages/deviceManagement/DeviceManagement';
import StationList from './pages/deviceManagement/StationList';
import BatteryList from './pages/deviceManagement/BatteryList';
import OnlineLog from './pages/deviceManagement/OnlineLog';
import PopupLog from './pages/deviceManagement/PopupLog';
import ReturnLog from './pages/deviceManagement/ReturnLog';
import OrderManagement from './pages/Order/OrderManagement';
import CreditCardsList from './pages/debitCards/CreditCardsList';
import PayList from './pages/debitCards/PayList';
import MonthlyCardSetting from './pages/monthlyCardManagement/MonthlyCardSetting';
import MonthlyCardRecord from './pages/monthlyCardManagement/MonthlyCardRecord';
import VenueList from './pages/venue/VenueList';
import VenueCommission from './pages/venue/VenueCommission';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        {
          path: 'user',
          element: <UserPage />,
          children: [
            { path: 'settings', element: <UserPage /> },
            { path: 'profile', element: <UserPage /> },
            { path: 'card', element: <UserPage /> },
          ],
        },
        {
          path: 'venue',
          element: <Venue />,
          children: [
            { path: 'settings', element: <UserPage /> },
            { path: 'profile', element: <UserPage /> },
            { path: 'card', element: <UserPage /> },
          ],
        },
        {
          path: 'venue',
          children: [
            { path: 'venue-list', element: <VenueList /> },
            { path: 'venue-commission', element: <VenueCommission /> },
          ],
        },
        {
          path: 'device-management/',
          children: [
            { path: 'station-list', element: <StationList /> },
            { path: 'battery-list', element: <BatteryList /> },
            { path: 'online-log', element: <OnlineLog /> },
            { path: 'popup-log', element: <PopupLog /> },
            { path: 'return-log', element: <ReturnLog /> },
          ],
        },
        { path: 'order-management', element: <OrderManagement /> },
        {
          path: 'card-management',
          children: [
            { path: 'credit-card-list', element: <CreditCardsList /> },
            { path: 'pay-list', element: <PayList /> },
          ],
        },
        {
          path: 'monthly-card-management',
          children: [
            { path: 'monthly-card-setting', element: <MonthlyCardSetting /> },
            { path: 'monthly-card-record', element: <MonthlyCardRecord /> },
          ],
        },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
