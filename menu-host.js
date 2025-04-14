export function menuItemsData(newGreed)  {
    const defColor = {color: '#0033cc',bgcolor: '#c6ecc6'}
    const host = window.location.origin
//    console.log(`host=${host}`)
//     const localUrlQuery = 'http://localhost'
    const git_menu_raw = 'raw.githubusercontent.com/borisgra/menus/refs/heads/main'  // Depricated !
    const git_menu_edit = 'https://github.com/borisgra/menus'
    return  {
        label: 'menu',
        items: [
            {
                label: 'Olympic winners (local Query) ',
                callback: (_, item) => newGreed("https://www.ag-grid.com/example-assets/olympic-winners.json", item.label),
                sx: defColor
            },
            {
                label: 'Persons all ',
                callback: (_, item) => newGreed(`${host}/bd/QUERY_BD/jsonPG/v_persons`, item.label),
                sx: defColor
            },
            {
                label: 'Without Clients',
                callback: (_, item) => newGreed(`${host}/bd/QUERY_BD/jsonPG/public.v_persons/ and status <> 'client'`, item.label),
                sx: defColor
            },
            {
                label: 'Soundproofing',
                sx: defColor,
                delay: 300,
                items: [
                    {
                        label: 'Today ',
                        callback: (_, item) => newGreed(`${host}/bd/daas_nma/jsonPG/v_history/ and  date(write_date)=current_date  order by id desc`, item.label),
                        sx: defColor
                    },
                    {
                        label: 'Month ',
                        callback: (_, item) => newGreed(`${host}/bd/daas_nma/jsonPG/v_history/ and  date(write_date)>=cast(TO_CHAR(NOW(), 'yyyy-mm-01')as date) order by id desc`, item.label),
                        sx: defColor
                    },
                    {
                        label: 'Year working ',
                        callback: (_, item) => newGreed(`${host}/bd/daas_nma/jsonPG/v_users_working/   and  date(date_last)>=cast(TO_CHAR(NOW(), 'yyyy-01-01') as date) order by tests_count desc `, item.label),
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
                                callback: (_, item) => newGreed(`${host}/bd/vpn-gra/jsonPG/bigquery-public-data.country_codes.country_codes`, item.label),
                                sx: defColor,
                                disabled: false,
                            },
                            {
                                label: 'Country codes start "A"',
                                callback: (_, item) => newGreed(`${host}/bd/vpn-gra/jsonPG/bigquery-public-data.country_codes.country_codes / and starts_with(alpha_2_code,'A')`, item.label),
                                sx: defColor,
                                disabled: false,
                            },
                        ],
                    },
                ],
            },
            {
                label: 'menu load(start)',
                callback: () => open(`${host}?menu=/menu-load.js`, "_self"),
                sx: {color: 'green',bgcolor: '#c6ecc6'},
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
        ],
    }
}
