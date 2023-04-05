import {FaBriefcase, FaBook, FaCreditCard} from 'react-icons/fa';

export const subLinks =[
    {
        page:'products',
        links:[
            {
                label:'payment',icon: <FaCreditCard />,url:'/products'
            },
            {
                label:'terminal',icon: <FaCreditCard />,url:'/'
            },
            {
                label:'connect',icon: <FaCreditCard />,url:'/products'
            }
            ]
    },
    {
        page:'developers',
        links:[
            {
                label:'plugins',icon: <FaBook />,url:'/products'
            },
            {
                label:'libraries',icon: <FaBook />,url:'/products'
            },
            {
                label:'help',icon: <FaBook />,url:'/products'
            },
            {
                label:'billing',icon: <FaBook />,url:'/products'
            }
        ]
    },
    {
        page:'Company',
        links:[
            {
                label:'about',icon: <FaBriefcase />,url:'/products'
            },
            {
                label:'customers',icon: <FaBriefcase />,url:'/products'
            }
        ]
    }
]

