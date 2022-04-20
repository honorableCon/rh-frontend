import React, {useState, useRef} from 'react';
import ErrorHelper from './ErrorHelper';



const Employe = ({useInputs, usePage, formRef, errors}) => {
  const [inputs, setInputs] = useInputs;
  const [page, setPage] = usePage;
  
  const handleNextClick = (e) => {
    const data = new FormData(formRef.current);
    setInputs({
      ...inputs, 
      ...Object.fromEntries(data.entries())
    });
    setPage(++page);
  }
  
  return (   
    <div className='w-2/4 mx-auto'>
      <div className="grid grid-cols-2 gap-6">
        <div className="relative z-0 mb-4 w-full group">
          <label htmlFor="personnel_prenom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Prénom</label>
          <input name="prenom" type="text" defaultValue={inputs.prenom} id="personnel_prenom" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Modou" required/>
          {errors && errors.hasOwnProperty("prenom") && <ErrorHelper error={errors['prenom']}/>}
        </div>
        <div className="relative z-0 mb-4 w-full group">
          <label htmlFor="personnel_nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nom</label>
          <input name="nom" type="text" defaultValue={inputs.nom} id="personnel_nom" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ndiaye" required/>
          {errors && errors.hasOwnProperty("nom") && <ErrorHelper error={errors['nom']}/>}
        </div>
      </div>
      <div className="relative z-0 mb-4 w-full group">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Adresse email</label>
        <input name="email" type="email" defaultValue={inputs.email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmd.com" required/>
        {errors && errors.hasOwnProperty("email") && <ErrorHelper error={errors['email']}/>}
      </div>
      <div className="relative z-0 mb-4 w-full group">
        <label htmlFor="personnel_prenom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Téléphone</label>
        <input name="tel" type="tel" defaultValue={inputs.tel} id="personnel_prenom" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+221 77 123 45 67" required/>
        {errors && errors.hasOwnProperty("tel") && <ErrorHelper error={errors['tel']}/>}
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-4">
        <div className="relative z-0 mb-4 w-full group">
          <label htmlFor="personnel_naissance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date de naissance</label>
          <input type="date" name="dateDeNaissance" defaultValue={inputs.dateDeNaissance} id="personnel_naissance" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        <div className="relative z-0 mb-4 w-full group">
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Sexe</label>
          <select id="countries" name='sexe' defaultValue={inputs.sexe} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Femme</option>
            <option>Homme</option>
          </select>   
        </div>
        <div className="relative z-0 mb-4 w-full group">
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Nationalités</label>
          <select id="countries" name='nationalite' defaultValue={inputs.nationalite} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Sénégal</option>
            <option>Mali</option>
            <option>Bénin</option>
          </select>        
        </div>
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-6">
        <div className="relative z-0 mb-4 w-full group">
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Situation matrimoniale</label>
          <select id="countries" name="matrimoniale" defaultValue={inputs.matrimoniale} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Marié</option>
            <option>Celibataire</option>
          </select>        
        </div>
        <div className="relative z-0 mb-4 w-full group">
          <label htmlFor="personnel_enfant" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enfant</label>
          <input name="enfant" type="number" defaultValue={inputs.enfant} id="personnel_enfant" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          {errors && errors.hasOwnProperty("enfant") && <ErrorHelper error={errors['enfant']}/>}
        </div>
        <div className="relative z-0 mb-4 w-full group">
          <label htmlFor="personnel_conjoint" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Conjoint</label>
          <input name="conjoint" type="number" defaultValue={inputs.conjoint}  id="personnel_conjoint" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          {errors && errors.hasOwnProperty("conjoint") && <ErrorHelper error={errors['conjoint']}/>}
        </div>
      </div>

      <div className="grid xls:grid-cols-2 xls:gap-6">
        <div className="relative z-0 mb-4 w-full group">
          <label htmlFor="personnel_nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numéro CNI ou Passport</label>
          <input name="cni" type="number" defaultValue={inputs.cni}  id="personnel_nom" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='1 777 1987 8965 33' required/>
        </div>
      </div>
      <button
        type="button" onClick={handleNextClick} className="text-white bg-secondary-900 hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Suivant
      </button>
    </div>
  )
}

export default Employe