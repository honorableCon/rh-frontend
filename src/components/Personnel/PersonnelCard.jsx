import Link from 'next/link';
import React from 'react'


const PersonnelCard = ({personnel}) => {
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <div className="flex justify-end px-4 pt-4">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" className="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
            </button>

            <div id="dropdown" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow">
                <ul className="py-1" aria-labelledby="dropdownButton">
                <li>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Edit</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Export Data</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-4 text-sm text-red-600">Delete</a>
                </li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col items-center pb-10">
            <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt="Bonnie"/>
            <h5 className="mb-1 text-xl font-medium text-gray-900">
                {troncatetext(`${personnel.prenom} ${personnel.nom}`, 20)}
            </h5>
            <span className="text-sm text-gray-500">
                {personnel.email}
            </span>
            <div className="flex mt-4 space-x-3 lg:mt-6">
                <Link href={`/personnels/details?id=${personnel.id}`} as={`/personnels/details`} passHref>
                <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-secondary-900 rounded-lg hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-blue-300">Details</a>
                </Link>
                <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">Message</a>
            </div>
        </div>
    </div>
    )
}

function troncatetext(text, maxLength) {
    if(text.length > maxLength) { 
        const [firstWord, ...restWords] = text.split(" ");
        return `${firstWord} ${restWords[0][0]}. ${restWords.at(-1)}`;
    }
    return text;
}

export default PersonnelCard