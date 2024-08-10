import React from 'react'
import BlogCard from '../components/Card'
const cardList = [
    {
        src:'https://picsum.photos/id/236/200/301',
        title:'Noteworthy technology acquisitions 2021',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        src:'https://picsum.photos/id/238/200/301',
        title:'Noteworthy technology acquisitions 2022'
    },
    {
        src:'https://picsum.photos/id/239/200/301',
        title:'Noteworthy technology acquisitions 2023'
    },
    {
        src:'https://picsum.photos/id/240/200/301',
        title:'Noteworthy technology acquisitions 2024'
    },
    {
        src:'https://picsum.photos/id/241/200/301',
        title:'Noteworthy technology acquisitions 2025'
    },
    {
        src:'https://picsum.photos/id/242/200/301',
        title:'Noteworthy technology acquisitions 2026'
    }
]

export default function CardList() {
  return (
    <div className='flex justify-center'>
    <div className="grid grid-cols-3">{cardList.map((card,index) => (
        <div className='p-2'><BlogCard key={index} card={card} /></div>
    ))}</div>
    </div>
  )
}
