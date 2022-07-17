export default  ({contrat, fonction, filiere}) => {

    return (
    <div className="bg-white p-3 rounded-lg shadow-lg w-full">
    <div className="grid md:grid-cols-1 text-sm text-gray-700 bg-white">
        <h2 className="text-center text-2xl font-bold py-sm">Contrat</h2>
        <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Statut</div>
            <div className="px-4 py-2">{contrat.statut.libelle}</div>
        </div>
        <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Filière</div>
            <div className="px-4 py-2">{filiere.libelle}</div>
        </div>
        <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Date de debut</div>
            <div className="px-4 py-2">{contrat.debutContrat}</div>
        </div>
        <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Date de fin</div>
            <div className="px-4 py-2">{contrat.finContrat}</div>
        </div>
        <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Type de contrat</div>
            <div className="px-4 py-2">{contrat.typeContrat.libelle}</div>
        </div>
        <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Fonction</div>
            <div className="px-4 py-2">{fonction.libelle}</div>
        </div>
    </div>
    </div>
)}