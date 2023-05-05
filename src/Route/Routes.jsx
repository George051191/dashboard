// dashbaord
// dashbaord
import Crypto from '../Components/Dashboard/Crypto';
import Default from '../Components/Dashboard/Default';
import Ecommerce from '../Components/Dashboard/Ecommerce';
import OnlineCourse from '../Components/Dashboard/OnlineCourse';


export const routes = [
  //dashboard
  { path: `${process.env.PUBLIC_URL}/dashboard/default/:layout`, Component: <Default /> },
  { path: `${process.env.PUBLIC_URL}/dashboard/e-commerce/:layout`, Component: <Ecommerce /> },
  { path: `${process.env.PUBLIC_URL}/dashboard/online-course/:layout`, Component: <OnlineCourse /> },
  { path: `${process.env.PUBLIC_URL}/dashboard/crypto/:layout`, Component: <Crypto /> },


]