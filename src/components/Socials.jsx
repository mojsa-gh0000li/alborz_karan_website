'use client'
import {  RiLinkedinBoxFill  , RiWhatsappFill  , RiGithubFill  , RiInstagramFill  ,RiTelegramFill } from 'react-icons/ri'
import Link  from 'next/link';


const icons = [
    {
        path : '/',
        name : <RiTelegramFill  />,
    },
    {
        path : '/',
        name : <RiWhatsappFill  />,
    },
    {
        path : '/',
        name : <RiGithubFill  />,
    },
    {
        path : '/',
        name : <RiLinkedinBoxFill  />,
    },
    {
        path : '/',
        name : <RiInstagramFill />,
    },

]

const Socials = ({containerStyles , iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
        {
            icons.map((icon ,index) => {
                return (
                    <Link href={icon.path} key={index}>
                        <div className={`${iconStyles}`}>
                            {
                                icon.name
                            }
                        </div>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Socials;