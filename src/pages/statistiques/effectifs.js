import Effectifs from '../../components/Effectifs';
import Request from '../../toolbox/request';

export default function EffectifsPage({effectifs}) {
  return <Effectifs effectifs={effectifs}/>
}


export const getStaticProps = async () => {
  const year = new Date().getFullYear();
  const yearBefore = parseInt(year) - 1;
  const [effectifsNow, effectifsBefore] = await Promise.all([
    Request.getEffectifs(year),
    Request.getEffectifs(yearBefore)
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