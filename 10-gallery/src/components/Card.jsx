import React from 'react'

const Card = ({elem}) => {
    return (
        <>
            <a href={elem.url} target="_blank" rel="noreferrer" className="block mb-4 break-inside-avoid  bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={elem.download_url} alt={elem.author} className="w-full h-auto object-cover" />
                <p className="text-black font-semibold text-center py-2">
                    {elem.author}
                </p>
            </a>
        </>
    )
}

export default Card