import React from 'react';
import ErrorHeper from './ErrorHeper';
import SelectInput from './SelectInput';


const ChangeForm = ({usePage, useErrors, contrats, useInputs, formRef}) => {
  
  const [page, setPage] = usePage;
  const [inputs, setInputs] = useInputs;
  const [errors, setErrors] = useErrors;
  
  
  let useIds = React.useState({
    "filiereId" : 1,
    "fonctionId" : 1,
    "typeContratId" : 1,
    "statutId" : 1,
  });

  const handleNextClick = () => {
    const data = new FormData(formRef.current);
    setInputs({...inputs, ...useIds[0],...Object.fromEntries(data.entries())});
    setPage(++page);
  }
  const handlePrevClick = () => setPage(--page);

  return (   
    <div className='w-2/4 mx-auto'>
      <SelectInput contrats={contrats} useIds={useIds} sections={"typeContrat"} label={"Type de contrat"}/>
      <SelectInput contrats={contrats} useIds={useIds} sections={"filiere"} label={"Filière"}/>
      <SelectInput contrats={contrats} useIds={useIds} sections={"fonction"} label={"Fonction"}/>
      <SelectInput contrats={contrats} useIds={useIds} sections={"statut"} label={"Statut"}/>

      <div className="grid lg:grid-cols-2 lg:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <label htmlFor="personnel_naissance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date de début</label>
          <input type="date" name="debut" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          {errors && errors.hasOwnProperty("debut") && <ErrorHeper error={errors['debut']}/>}
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label htmlFor="personnel_naissance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date de fin</label>
          <input type="date" name="fin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          {errors && errors.hasOwnProperty("debut") && <ErrorHeper error={errors['debut']}/>}
        </div>
      </div>

      <div>
        <button
          type="submit" onClick={handleNextClick} className="text-white bg-primary hover:bg-blue-80b0 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Suivant
        </button>
      </div>
    </div>
  )
}

export default ChangeForm