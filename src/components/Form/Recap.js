import RecapStyle from '../../styles/Recap.module.scss';
import DetailAbout from '../DetailsEmployee/DetailAbout';
import DetailContrat from '../DetailsEmployee/DetailContrat';

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
                        <DetailAbout personnel={personnel}/>
                        <div className="my-4"></div>
                    </div>
                    {/* <!-- Right Side --> */}
                    <div className="w-full mx-2 h-64">
                        <DetailContrat personnel={personnel}/>
                        <div className="my-4"></div>
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