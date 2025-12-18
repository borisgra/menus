export function menuItemsData(newGreed)  {
    const defColor = {color: '#0033cc',bgcolor: '#c6ecc6'}
    const baseUrlQuery = 'https://query-gra-hyx2izic7a-uc.a.run.app'
    const baseUrlDSV = 'https://dsv-hyx2izic7a-uc.a.run.app'
    // const host = window.location.origin
    const git_menu_edit = 'https://github.com/borisgra/menus'
    const git_page_menus = 'https://borisgra.github.io/menus'
    const git_menu_raw = 'raw.githubusercontent.com/borisgra/menus/refs/heads/main'  // Depricated !
    const google_menu = 'https://storage.googleapis.com/public-menu'
    const google_menu_list = 'https://console.cloud.google.com/storage/browser/public-menu'
    return  {
        label: 'menu',
        items: [
            {
                label: 'Olympic winners',
                callback: (_, item) => newGreed("https://www.ag-grid.com/example-assets/olympic-winners.json", item.label),
                sx: defColor
            },
            {
                label: 'Clients query',
                callback: (_, item) => newGreed(`${baseUrlQuery}/bd/neon-boris.gra/jsonPG/public.v_persons/ and status <> 'client'`, item.label),
                sx: defColor
            },
            {
                label: 'Clients dsv',
                callback: (_, item) => newGreed(`${baseUrlQuery}/bd/koyeb_querys/jsonPG/public.v_persons/ and status <> 'client'`, item.label),
                sx: defColor
            },
            {
                label: 'Jsonplaceholder)', // https://jsonplaceholder.typicode.com/
                sx: defColor,
                items: [
                    {
                        label: 'users',
                        callback: (_, item) => newGreed("https://jsonplaceholder.typicode.com/users", item.label),
                        sx: defColor
                    },
                    {
                        label: 'posts',
                        callback: (_, item) => newGreed("https://jsonplaceholder.typicode.com/posts", item.label),
                        sx: defColor
                    },
                    {
                        label: 'comments',
                        callback: (_, item) => newGreed("https://jsonplaceholder.typicode.com/comments", item.label),
                        sx: defColor
                    },
                    {
                        label: 'albums',
                        callback: (_, item) => newGreed("https://jsonplaceholder.typicode.com/albums", item.label),
                        sx: defColor
                    },
                    {
                        label: 'photos',
                        callback: (_, item) => newGreed("https://jsonplaceholder.typicode.com/photos", item.label),
                        sx: defColor,
                        disabled: false,
                    },
                    {
                        label: 'todos',
                        callback: (_, item) => newGreed("https://jsonplaceholder.typicode.com/todos", item.label),
                        sx: defColor,
                        disabled: false,
                    },
                ],
            },

            {
                label: 'Soundproofing)',
                sx: defColor,
                delay: 300,
                items: [
                    {
                        label: 'Today (query)',
                        callback: (_, item) => newGreed(`${baseUrlQuery}/bd/daas_nma/jsonPG/v_history/ and  date(write_date)=current_date  order by id desc`, item.label),
                        sx: defColor
                    },
                    {
                        label: 'Month (query)',
                        callback: (_, item) => newGreed(`${baseUrlQuery}/bd/daas_nma/jsonPG/v_history/ and  date(write_date)>=cast(TO_CHAR(NOW(), 'yyyy-mm-01')as date) order by id desc`, item.label),
                        sx: defColor
                    },
                    {
                        label: 'Month (dsv)',
                        callback: (_, item) => newGreed(`${baseUrlDSV}/bd/daas_nma/jsonPG/v_history/ and  date(write_date)>=cast(TO_CHAR(NOW(), 'yyyy-mm-01')as date) order by id desc`, item.label),
                        sx: defColor
                    },
                    {
                        label: 'Today  (dsv)',
                        callback: (_, item) => newGreed(`${baseUrlDSV}/bd/daas_nma/jsonPG/v_history/ and  date(write_date)=current_date  order by id desc`, item.label),
                        sx: defColor
                    },
                    {
                        label: 'Year (working)',
                        callback: (_, item) => newGreed(`${baseUrl}/bd/daas_nma/jsonPG/v_users_working/   and  date(date_last)>=cast(TO_CHAR(NOW(), 'yyyy-01-01') as date) order by tests_count desc `, item.label),
                        sx: defColor,
                        disabled: false,
                    },
                ],
            },
            {
                label: 'Bigquery Google',
                sx: defColor,
                items: [
                    {
                        label: 'Country',
                        sx: defColor,
                        items: [
                            {
                                label: 'Country codes',
                                callback: (_, item) => newGreed(`${baseUrlQuery}/bd/vpn-gra/jsonPG/bigquery-public-data.country_codes.country_codes`, item.label),
                                sx: defColor,
                                disabled: false,
                            },
                            {
                                label: 'Country codes start "A"',
                                callback: (_, item) => newGreed(`${baseUrlQuery}/bd/vpn-gra/jsonPG/bigquery-public-data.country_codes.country_codes / and starts_with(alpha_2_code,'A')`, item.label),
                                sx: defColor,
                                disabled: false,
                            },
                        ],
                    },
                    {
                        label: 'Type 2',
                        callback: (event, item) => console.log('Export > FT2 clicked', event, item),
                        sx: defColor,
                        disabled: true,
                    },
                ],
            },
            {
                label: 'menu second (local)',
                callback: () => open('?menu=menu-second.js', "_self"),
                sx: {color: '#FF0000',bgcolor: '#c6ecc6'},
            },
            {
                label: `menu-host from github`,
                callback: () => open(`?menu=${git_page_menus}/menu-host.js`, "_self"),
                sx: {color: '#FF0000',bgcolor: '#c6ecc6'},
            },
            {
                label: `menu-gra1 from Google Bucket`,
                callback: () => open(`?menu=${google_menu}/menu-gra1.js`, "_self"),
                sx: {color: '#FF0000',bgcolor: '#c6ecc6'},
            },
            {
                label: 'Services',
                sx: defColor,
                items: [
                    {
                        label: 'list menu on site (flask)',
                        callback: () => open('/save/', ""),
                        sx: {color: 'braun', bgcolor: '#c6ecc6'},
                    },
                    {
                        label: 'Look menu on site',
                        callback: () => open('/menus/menu-host.js', ""),
                        sx: {color: 'braun',bgcolor: '#c6ecc6'},
                    },
                    {
                        label: 'add new menu on site from git RAW (flask)',
                        callback: () => open(`/save/?url=https://${git_menu_raw}/menu-host.js`, ""),
                        sx: {color: '#e600e6', bgcolor: '#c6ecc6'},
                    },
                    {
                        label: 'edit menu on git',
                        callback: () => open(git_menu_edit, ""),
                        sx: {color: '#e600e6', bgcolor: '#c6ecc6'},
                    },
                    {
                        label: 'menu on Google',
                        callback: () => open(google_menu_list, ""),
                        sx: {color: '#b38600', bgcolor: '#c6ecc6'},
                    },
                    {
                        label: 'add new menu on site from Google (flask)',
                        callback: () => open(`/save/?url=${google_menu}/menu-gra1.js`, ""),
                        sx: {color: '#b38600', bgcolor: '#c6ecc6'},
                    },
                ]
            },
        ],
    }
}
