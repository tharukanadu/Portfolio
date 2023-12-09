import { FaHome,FaUser,FaFolderOpen ,FaEnvelopeOpen,FaBriefcase,FaGraduationCap,FaCode  } from "react-icons/fa";
import { FiUser ,FiFileText,FiExternalLink } from "react-icons/fi";


import inster from './assets/portfolio/inster.png'
import an_ecom from './assets/portfolio/angular-ecommerce.png';
import weather from './assets/portfolio/weather.png';

import blue from './assets/color/blue.png';
import goldenrod from './assets/color/goldenrod.png';
import green from './assets/color/green.png';
import magenta from './assets/color/magenta.png';
import orange from './assets/color/orange.png';
import purple from './assets/color/purple.png';
import red from './assets/color/red.png';
import yellow from './assets/color/yellow.png';
import yellowgreen from './assets/color/yellowgreen.png';



export const links=[
    {
        id:1,
        name:'Home',
        icon : <FaHome className="nav_icon"/>,
        path:'/',
},
{
    id:2,
    name:'About',
    icon : <FaUser className="nav_icon"/>,
    path:'/about',
},
{
    id:3,
    name:'portfolio',
    icon : <FaFolderOpen className="nav_icon"/>,
    path:'/portfolio',
},
{
    id:4,
    name:'Contact',
    icon : <FaEnvelopeOpen className="nav_icon"/>,
    path:'/contact',
},
];
export const personalInfo=[
    {
        id:1,
        title:'First Name :  ',
        descripyion : 'Tharuka',

    },
    {
        id:2,
        title:'Last Name :  ',
        descripyion : 'Nadun',

    },
    {
        id:3,
        title:'Age :  ',
        descripyion : '23 years',

    },
    {
        id:4,
        title:'Nationality :  ',
        descripyion : 'Sinhala',

    },
    {
        id:5,
        title:'Freslance :  ',
        descripyion : 'Available',

    },
    {
        id:6,
        title:'Address :  ',
        descripyion : 'no 19, bekkegama,panadura',

    },
    {
        id:7,
        title:'phone :  ',
        descripyion : '+9476107161',

    }, 
    {
        id:8,
        title:'email :  ',
        descripyion : 'tharukanadun707@gmail.com',

    },
    {
        id:8,
        title:'Gender :  ',
        descripyion : 'Male',

    },
    {
        id:8,
        title:'Language :  ',
        descripyion : 'Sinhala/English',

    },
];
export const stats=[
    {
        id:1,
        no:'0',
        title:'No Experience',
    },
    {
        id:2,
        no:'20+',
        title:'Completed <br/> Project',
    },
    // {
    //     id:3,
    //     no:'10',
    //     title:'Happy customer',
    // },
];
export const skills=[
    {
        id:1,
        title:'html',
        percentage:'75',
    },
    {
        id:1,
        title:'Javascript',
        percentage:'60',
    },
    {
        id:1,
        title:'css',
        percentage:'70',
    },
    {
        id:1,
        title:'html',
        percentage:'25',
    },
    {
        id:1,
        title:'html',
        percentage:'25',
    },
];
export const portfolio1 =[
    {
        id:1,
        img:inster,
        title:'Photo editing',
        details:[
            {
                icon:<FiFileText/>,
                title:'Project : ',
                desc:'Photo',
            },
            {
                icon:<FiUser/>,
                title:'Client',
                desc:'Dribble',
            },
            {
                icon:<FaCode/>,
                title:'Language',
                desc:'Adobe photoshop', 
            },
            
        ]
    },

    {
        id:2,
        img:an_ecom,
        title:'Photo editing',
        details:[
            {
                icon:<FiFileText/>,
                title:'Project : ',
                desc:'Photo',
            },
            {
                icon:<FiUser/>,
                title:'Client',
                desc:'Dribble',
            },
            {
                icon:<FaCode/>,
                title:'Language',
                desc:'Adobe photoshop', 
            },

            {
                id:3,
                img:weather,
                title:'Photo editing',
                details:[
                    {
                        icon:<FiFileText/>,
                        title:'Project : ',
                        desc:'Photo',
                    },
                    {
                        icon:<FiUser/>,
                        title:'Client',
                        desc:'Dribble',
                    },
                    {
                        icon:<FaCode/>,
                        title:'Language',
                        desc:'Adobe photoshop', 
                    },
                    
                ]
            },
            
        ]
    }
];
export const themes =[
    {
        id:1,
        img:red,
        color:'hsl(1, 100%, 56%)',
    },
    {
        id:2,
        img: blue,
        color:'hsl(230, 98%, 40%)',
    },
    {
        id:3,
        img:yellow,
        color:'hsl(59, 100%, 50%)',
    },
    {
        id:4,
        img:green,
        color:'hsl(115, 56%, 33%)',
    },
    {
        id:5,
        img:orange,
        color:'hsl(30, 98%, 53%)',
    },
    {
        id:6,
        img:yellowgreen,
        color:'hsl(77, 98%, 53%)',
    },
    {
        id:7,
        img:goldenrod,
        color:'hsl(58, 89%, 60%)',
    },
    {
        id:8,
        img:purple,
        color:'hsl(252,35%,51%)',
    },
    {
        id:8,
        img:magenta,
        color:'hsl(313, 100%, 50%)',
    }
]
