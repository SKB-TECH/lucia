import { RiMapPinLine } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export const dataFooter=[
    {
        title:"Accueil",
        page:"/",
        id:1
    },
    {
        title:"Services",
        page:"/service",
        id:2
    },
    {
        title:"Apropos",
        page:"/api",
        id:3
    },
    {
        title:"Blog",
        page:"/api",
        id:4
    },
    {
        title:"Temoignages",
        page:"/about",
        id:6
    },

    {
        title:"Nos partenaires",
        page:"/contact",
        id:7
    },
    {
        title:"Nos Tarifs",
        page:"/privacy",
        id:9
    },
    {
        title:"Autres",
        page:"/guide",
        id:9
    },
]

export const pourquoi=[
    {
        title:"Expertise Sectorielle",
        id:1
    },
    {
        title:"Solutions Personnalisées",
        id:2
    },{
        title:"Accompagnement Complet",
        id:3
    },
    {
        title:"Réactivité et Disponibilité",
        id:4
    },
    {
        title:"Engagement envers l'Excellence",
        id:5
    }
]

export const adressData=[
    {
        id:1,
        titre:"Addresse",
        icon:  <RiMapPinLine color='white' size={28}/>,
        title:"Boulevard Kanyamuhnga, rond-point Chukudu, Goma, RDC"
    },
    {
        id:2,
        titre:"Telephone",
        icon:  <FaPhone color='white' size={28}/>,
        title:"+243 994 213 627"
    },
    {
        id:3,
        titre:"Email",
        icon:  <MdOutlineEmail color='white' size={28}/>,
        title:"lucia@info.com"
    }
]