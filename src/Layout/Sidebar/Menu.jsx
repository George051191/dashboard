export const MENUITEMS = [
  {
    menutitle: 'General',
    menucontent: 'Dashboards,Widgets',
    Items: [
      {
        title: 'Dashboard',
        icon: 'home',
        type: 'sub',
        badge: 'badge badge-light-primary',
        badgetxt: '5',
        active: false,
        children: [
          { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Default', type: 'link' },
          { path: `${process.env.PUBLIC_URL}/dashboard/e-commerce`, title: 'E-commerce', type: 'link' },
          { path: `${process.env.PUBLIC_URL}/dashboard/online-course`, title: 'Online Course', type: 'link' },
          { path: `${process.env.PUBLIC_URL}/dashboard/crypto`, title: 'Crypto', type: 'link' },

        ],
      },


    ]
  }]