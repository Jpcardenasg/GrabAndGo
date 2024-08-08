/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'body': '#F7F7F7',
                'mainpink': '#F764B6',
                'mainpurple': '#BB96FD',
                'sidenav': '#F0F0F0',
                'input': '#909090',
            },
            backgroundImage: {
                'card-gradient': 'linear-gradient(90deg, #BB96FD 0%, #F764B6 100%)',
                'navbar-gradient': 'linear-gradient(90deg, #F764B6 0%, #BB96FD 100%)',
                'text-gradient': 'linear-gradient(180deg, #BB96FD 0%, #F764B6 100%)'
            },
            backgroundColor: {

            }
        },
    },
    plugins: [],
}

