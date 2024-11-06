import { BsBank } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { GiNestedEclipses } from "react-icons/gi";
import { MdDocumentScanner} from "react-icons/md";
import { TbPackageExport } from "react-icons/tb";

export const dataService=[
    {
        id:1,
        icon: <BsBank size={42} color="#1f398a"/>,
        title:"Matière bancaire"
    },
    {
        id:2,
        icon:<GiNestedEclipses size={42} color="#1f398a"/>,
        title:"Déclaration douanière"
    },
    {
        id:3,
        icon:<TbPackageExport size={42} color="#1f398a"/>,
        title:"Gestion des licences import-export"
    },
    {
        id:4,
        icon:<MdDocumentScanner size={42} color="#1f398a"/>,
        title:"Facilitation des formalités pour Obtention des documents Légaux"
    },
    // {
    //     id:5,
    //     icon:<MdEmojiTransportation size={32} color="blue"/>,
    //     title:"Transport Urbain"
    // },
    {
        id:5,
        icon:<FaHotel size={38} color="#1f398a"/>,
        title:"Facilitation des formalités port-aéport-hôtel"
    }
]