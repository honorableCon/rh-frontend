import React from 'react';


const SelectInput = ({contrats, sections, sectionsId, label, useIds, inputs}) => {
  const [ids, setIds] = useIds;

  const handleChange = (e) => {
    const idSelectedElement = e.target.selectedIndex;
    const dataId = e.target.options[idSelectedElement].dataset.id;
    setIds({...ids, [sectionsId]: dataId});
  }

  return (
    <div className="relative z-0 mb-6 w-full group">
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            {label}
        </label>
        <select 
          onChange={handleChange} 
          name={sections} 
          id={sections}
          defaultValue={inputs[sections]} 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {contrats && contrats[sections].map( 
          section => <option data-id={section.id} key={section.id}>{section.libelle}</option>
        )}
        </select>        
    </div>
  )
}

export default SelectInput