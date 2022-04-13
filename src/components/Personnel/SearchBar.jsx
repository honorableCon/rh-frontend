import React from 'react'

const SearchBar = ({filieres}) => {
  return (
  <div className="flex justify-center">
    <div className="mb-3 xl:w-96">
      <div className="input-group relative flex flex-wrapz gap-4 items-stretch w-full mb-4">
          <input name="search" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Chercher" required/>
          <select name='filiere' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">filiere</option>
            {filieres && filieres.map(filiere => <option key={filiere.id} value={filiere.id}>{filiere.label}</option>)}
          </select>
          <button type="search" className="text-white bg-secondary-900 hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Chercher
          </button>
      </div>
    </div>
  </div>
  )
}

export default SearchBar