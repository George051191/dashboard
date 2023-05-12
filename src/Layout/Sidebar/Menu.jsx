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
          { path: `${process.env.PUBLIC_URL}/dashboard/stata`, pathName: 'stata', title: 'Статистика', type: 'link' },
          { path: `${process.env.PUBLIC_URL}/dashboard/settings`, pathName: 'settings', title: 'Настройки', type: 'link' },
          { path: `${process.env.PUBLIC_URL}/dashboard/shop`, pathName: 'shop', title: 'Магазин', type: 'link' },
          { path: `${process.env.PUBLIC_URL}/dashboard/create`, pathName: 'create', title: 'Генерация', type: 'link' },
          { path: `${process.env.PUBLIC_URL}/dashboard/pokemons`, pathName: 'pokemons', title: 'Покемоны', type: 'link' },

        ],
      },


    ]
  }]