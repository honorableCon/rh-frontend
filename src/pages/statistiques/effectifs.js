import axios from 'axios';
import Effectifs from '../../components/Effectifs';

export default function EffectifsPage({effectifs}) {
  return <Effectifs effectifs={effectifs}/>
}


export const getStaticProps = async () => {
  const year = new Date().getFullYear();
  const yearBefore = parseInt(year) - 1;
  const [effectifsNow, effectifsBefore] = await Promise.all([
    getEffectifs(year),
    getEffectifs(yearBefore)
  ]);
    
  return {
    props: {
        effectifs : {
          effectifsNow,
          effectifsBefore
        },
    }
  }
}
const getEffectifs = async (year) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_API}/effectifs/${year}`)
  return response.data
}