// dashbaord
// dashbaord
import Crypto from '../Components/Dashboard/Crypto';
import Default from '../Components/Dashboard/Default';
import Ecommerce from '../Components/Dashboard/Ecommerce';
import OnlineCourse from '../Components/Dashboard/OnlineCourse';
import OnlineCourse1 from '../Components/Dashboard/OnlineCourse/OnlineCourse1';
import Ecommerce1 from '../Data/Ecommerce/Ecommerce1';

export const routes = [
  //dashboard
  { path: `${process.env.PUBLIC_URL}/dashboard/stata/:layout`, Component: <Default /> },
  { path: `${process.env.PUBLIC_URL}/dashboard/settings/:layout`, Component: <Ecommerce /> },
  { path: `${process.env.PUBLIC_URL}/dashboard/shop/:layout`, Component: <OnlineCourse /> },
  { path: `${process.env.PUBLIC_URL}/dashboard/create/:layout`, Component: <Crypto /> },
  { path: `${process.env.PUBLIC_URL}/dashboard/pokemons/:layout`, Component: <OnlineCourse1 /> },
  { path: `${process.env.PUBLIC_URL}/dashboard/keys/:layout`, Component: <Ecommerce1 /> },

]


