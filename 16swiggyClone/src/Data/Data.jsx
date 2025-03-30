import React, { useState } from 'react'
import { IoIosArrowDown, IoMdHelpBuoy } from "react-icons/io";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
export let links=[
        {
            icon:<FaSearch/>,
            name:'Search'
        },
        {
            icon:<BiSolidOffer />,
            name:'Offers',
            sup:'new',
        },
        {
            icon:<IoMdHelpBuoy />,
            name:'Help'
        },
        {
            icon:<FaUser />,
            name:'SignIn'
        },
        {
            icon:<FaShoppingCart />,
            name:'Cart'
        },
    ]