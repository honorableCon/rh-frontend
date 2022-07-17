export default ({personnel}) => (
    <div className="bg-white p-3 shadow-sm rounded-sm">
    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
        <span clas="text-green-500">
            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        </span>
        <span className="tracking-wide">About</span>
    </div>
    <div className="text-gray-700">
        <div className="grid md:grid-cols-1 text-sm">
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">First Name</div>
                <div className="px-4 py-2">{personnel.prenom}</div>
            </div>

            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Permanant Address</div>
                <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Email.</div>
                <div className="px-4 py-2">
                    <a className="text-blue-800" href="mailto:jane@example.com">{personnel.email}</a>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Birthday</div>
                <div className="px-4 py-2">{personnel.naissance}</div>
            </div>
        </div>
    </div>
    </div>
)