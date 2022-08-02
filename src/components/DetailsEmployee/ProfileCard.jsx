export default ({ personnel, contrat, fonction }) => (
  <div className="bg-white p-4 border-t-4 border-primary-700 rounded-xl">
    <div className="image overflow-hidden">
      <img className="h-auto w-full mx-auto" src="/images/profil.jpeg" alt="" />
    </div>
    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
      {personnel.prenom} {personnel.nom}
    </h1>
    <h3 className="text-gray-600 font-lg text-semibold leading-6">
      {fonction.libelle}
    </h3>
    <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
      <li className="flex items-center py-3">
        <span>Status</span>
        <span className="ml-auto">
          <span className="bg-primary-700 py-1 px-2 rounded text-white text-sm">
            {contrat.etat ? 'Actif' : 'Inactif'}
          </span>
        </span>
      </li>
      <li className="flex items-center py-3">
        <span>Membre depuis</span>
        <span className="ml-auto">{contrat.debutContrat}</span>
      </li>
    </ul>
  </div>
);
