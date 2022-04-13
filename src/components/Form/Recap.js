import React from 'react'
import RecapStyle from '../../styles/Recap.module.scss';

const Recap = ({inputs, usePage}) => {
    const personnel = inputs;
    const [page, setPage] = usePage;
    const handlePrevClick = () => setPage(--page);

    return (
        <div className={RecapStyle.contentBody}>     
            <div className="container mx-auto my-5 p-5">
                <div className="md:flex no-wrap md:-mx-2 gap-10">
                    {/* <!-- Left Side --> */}
                    <div className="w-full mx-2 h-64">
                        {/* <!-- Profile tab --> */}
                        {/* <!-- About Section --> */}
                        <div className="bg-white p-3 rounded-lg shadow-lg">
                            
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-1 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Prenom</div>
                                        <div className="px-4 py-2">{personnel.prenom}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Nom</div>
                                        <div className="px-4 py-2">{personnel.nom}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Sexe</div>
                                        <div className="px-4 py-2">{personnel.sexe}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Téléphone</div>
                                        <div className="px-4 py-2">{personnel.tel}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Nationalité</div>
                                        <div className="px-4 py-2">{personnel.nationalite}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Situation matrimoniale</div>
                                        <div className="px-4 py-2">{personnel.matrimoniale}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Email.</div>
                                        <div className="px-4 py-2">
                                            <a className="text-blue-800" href="mailto:jane@example.com">{personnel.email}</a>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Date de naissance</div>
                                        <div className="px-4 py-2">{personnel.dateDeNaissance}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End of about section --> */}

                        <div className="my-4">
                        </div>
                        {/* <!-- End of profile tab --> */}
                    </div>
                    {/* <!-- Right Side --> */}
                    <div className="w-full mx-2 h-64">
                        {/* <!-- Profile tab --> */}
                        {/* <!-- About Section --> */}
                        <div className="bg-white p-3 rounded-lg shadow-lg">
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-1 text-sm">
                                    <h2 className="text-center text-2xl font-bold py-sm">Contrat</h2>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Statut</div>
                                        <div className="px-4 py-2">{personnel.statut}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Filière</div>
                                        <div className="px-4 py-2">{personnel.filiere}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Date de debut</div>
                                        <div className="px-4 py-2">{personnel.debut}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Date de fin</div>
                                        <div className="px-4 py-2">{personnel.fin}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Type de contrat</div>
                                        <div className="px-4 py-2">{personnel.typeContrat}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End of about section --> */}

                        <div className="my-4">
                        </div>
                        {/* <!-- End of profile tab --> */}
                    </div>
                </div>
            </div>
            <div className={RecapStyle.containerButton}>
                <button
                    type="button" onClick={handlePrevClick} className="mr-4 text-white bg-secondary-900 hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Précédent
                </button>
                <button
                    type="submit" className="text-white bg-primary-900 hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Enregistrer
                </button>
            </div>
        </div>
    )
}

export default Recap