import React from 'react';
import SelectInput from './SelectInput';
import ErrorHelper from './ErrorHelper'


const Contrat = ({useInputs, usePage, contrats, formRef, errors}) => {
  const [inputs, setInputs] = useInputs;
  const [page, setPage] = usePage;
  let useIds = React.useState({
    "filiereId" : contrats['filieres'][0].id,
    "fonctionId" : contrats['fonctions'][0].id,
    "typeContratId" : contrats['typeContrats'][0].id,
    "statutId" : contrats['statuts'][0].id,
  });

  const handleNextClick = () => {
    const data = new FormData(formRef.current);
    setInputs({...inputs, ...useIds[0],...Object.fromEntries(data.entries())});
    setPage(++page);
  }
  const handlePrevClick = () => setPage(--page);
  return (   
    <div className='w-2/4 mx-auto'>
      <SelectInput contrats={contrats} useIds={useIds} inputs={inputs} 
        sections={"typeContrats"} sectionsId={"typeContratId"} label={"Type de contrat"}/>
      <SelectInput contrats={contrats} useIds={useIds} inputs={inputs} 
        sections={"filieres"} sectionsId={"filiereId"} label={"Filière"}/>
      <SelectInput contrats={contrats} useIds={useIds} inputs={inputs} 
        sections={"fonctions"} sectionsId={"fonctionId"} label={"Fonction"}/>
      <SelectInput contrats={contrats} useIds={useIds} inputs={inputs} 
        sections={"statuts"} sectionsId={"statutId"} label={"Statut"}/>

      <div className="grid lg:grid-cols-2 lg:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <label htmlFor="personnel_naissance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date de début</label>
          <input type="date" name="dateDebut" defaultValue={inputs.dateDebut} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          {errors && errors.hasOwnProperty("dateDebut") && <ErrorHelper error={errors['dateDebut']}/>}
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label htmlFor="personnel_naissance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date de fin</label>
          <input type="date" name="dateFin" defaultValue={inputs.dateFin} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          {errors && errors.hasOwnProperty("dateFin") && <ErrorHelper error={errors['dateFin']}/>}
        </div>
      </div>

      <div>
        <button
          type="button" onClick={handlePrevClick} className="mr-4 text-white bg-secondary-900 hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Précédent
        </button>
        <button
          type="button" onClick={handleNextClick} className="text-white bg-secondary-900 hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Suivant
        </button>
      </div>
    </div>
  )
}

export default Contrat