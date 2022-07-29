import React from 'react';
import { getPersonnel, deletePersonnel } from '../../service/graphql';
import ProfileCard from '../../components/DetailsEmployee/ProfileCard';
import DetailContrat from '../../components/DetailsEmployee/DetailContrat';
import DetailAbout from '../../components/DetailsEmployee/DetailAbout';

const Details = ({ personnel }) => {
  const handleDelete = async (id) => {
    deletePersonnel(id).then((res) => {
      window.location.href = '/personnels/annuaire';
    });
  };

  return (
    <div className="flex flex-col container mx-auto my-5d p-5 gap-3">
      <div className="flex flex-col md:flex-row no-wrap md:-mx-2">
        {/* <!-- Left Side --> */}
        <div className="w-full md:w-4/12 md:mx-2">
          <ProfileCard
            personnel={personnel}
            contrat={personnel.contrats[0]}
            fonction={personnel.personnelFonctions[0].fonction}
          />
        </div>

        {/* <!-- Right Side --> */}
        <div className="flex flex-col lg:flex-row justify-between w-full my-6 md:mt-0 md:w-8/12 md:mx-2 gap-6">
          <DetailAbout personnel={personnel} />
          <DetailContrat
            contrat={personnel.contrats[0]}
            fonction={personnel.personnelFonctions[0].fonction}
            filiere={personnel.integrationFilieres[0].filiere}
          />
        </div>
      </div>
      <div className="flex gap-3 md:justify-center">
        <button
          type="button"
          className="previous-btn mr-4 text-white bg-primary-700 hover:bg-primary-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Modifier
        </button>
        <button
          onClick={() => handleDelete(personnel.id)}
          type="button"
          className="next-btn text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default Details;

export const getServerSideProps = async (ctx) => {
  const { data } = await getPersonnel(ctx.query.id);

  return {
    props: {
      personnel: data.personnelById,
    },
  };
};
