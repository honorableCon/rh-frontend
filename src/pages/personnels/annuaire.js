import PersonnelList from '../../components/Personnel/PersonnelList';
import SearchBar from '../../components/Personnel/SearchBar';
import { getAllAnnuairesData, getAllFilieres } from '../../toolbox/graphql';

const annuaire = ({filieres, personnels}) => {

  return (
    <div className='m-6 flex-row justify-center'>
      <div>
        <SearchBar filieres={filieres}/>
        <PersonnelList personnels={personnels}/>
      </div>
    </div>
  )
}

export default annuaire;

export async function getServerSideProps() {
  const { data } = await getAllAnnuairesData();

  return {
    props: {
      filieres: data.filieres,
      personnels: data.personnels,
    }
  }
}