import axios from 'axios';
import Effectifs from '../../components/Effectifs';

export default function EffectifsPage({effectifs}) {
  return <Effectifs effectifs={effectifs}/>
}


export const getStaticProps = async () => {
  const year = new Date().getFullYear();
  const yearBefore = parseInt(year) - 1;
  const [permanents, permanentsBefore] = await Promise.all([
    getPermanents(year),
    getPermanents(yearBefore)
  ]);
    
  return {
    props: {
        effectifs : {
          permanents,
          permanentsBefore
        },
    }
  }
}

const getPermanents = async (year) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_API}/permanents/${year}`)
  return response.data
}