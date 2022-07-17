export default ({personnel}) => (
    <div className="bg-white p-3 rounded-lg shadow-lg w-full">                     
    <div className="text-gray-700">
        <div className="grid md:grid-cols-1 text-sm">
            <h2 className="text-center text-2xl font-bold py-sm">A PROPOS</h2>
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
                <div className="px-4 py-2">{personnel.telephone}</div>
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
                    <a className="text-primary-700" href={`mailto:${personnel.email}`}>{personnel.email}</a>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Date de naissance</div>
                <div className="px-4 py-2">{personnel.dateDeNaissance}</div>
            </div>
        </div>
    </div>
    </div>
)