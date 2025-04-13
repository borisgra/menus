export function menuItemsData(newGreed)  {
    const defColor = {color: '#0033cc',bgcolor: '#c6ecc6'}
    return  {
        label: 'menu',
        items: [
            {
                label: 'Olympic winners (second)',
                callback: (_, item) => newGreed("https://www.ag-grid.com/example-assets/olympic-winners.json", item.label),
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
                label: 'menu load',
                callback: () => open('?menu=menu-load.js', "_self"),
                sx: {color: 'green',bgcolor: '#c6ecc6'},
            },
        ],
    }
}
