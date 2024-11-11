import eCommerceImage from '../../Images/Projects/eCommerce.png';
import comingSoon from '../../Images/Projects/coming-soon.jpg';
import AuthImg from '../../Images/Projects/Auth.png'

const projectData = [
    {
        id: 1,
        name: 'E-commerce',
        image: eCommerceImage,
        link: 'https://e-commerce-food-app-five.vercel.app/',
        description: 'Developed a responsive frontend for an e-commerce food application using React, Redux Toolkit, Tailwind CSS, and npm(package manager), utilizing dummy data to simulate product listings and enhance functionality during development. This project provides a seamless user experience for browsing and purchasing food items.'
    },
    {
        id: 1,
        name: 'Authentication',
        image: AuthImg,
        description: 'An authentication website using React, Vite, Tailwind CSS, and a self-created JSON API, simulating user authentication to enhance functionality during development. The project ensures a seamless user experience by authenticating users and redirecting them to a protected page if logged in, or back to the login page if not.'
    },
    {
        id: 2,
        name: 'Comming Soon',
        image: comingSoon,
        description: 'Working on new projects...'
    },
]

export default projectData