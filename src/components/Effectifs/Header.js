import React, { useEffect, useState } from 'react'
import { getEffectifEmploye } from '../../toolbox/graphql';
import EffectifHeadCard from './EffectifHeadCard'

const Header = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const year = "2022";
    getEffectifEmploye(year).then(res => {
      const { effectifsNow, effectifsBefore } = res.data
      const { total, totalBefore } = { total:effectifsNow, totalBefore:effectifsBefore }
      
      const data = [{
          title: "Permanent",
          total: total.cdd + total.cdi,
          totalBefore: totalBefore.cdd + totalBefore.cdi
        },{
          title: "Intérimaire",
          total: total.interim,
          totalBefore: totalBefore.interim
        },{
          title: "Stagiaire",
          total: total.stage,
          totalBefore: totalBefore.stage
        }
      ];

      setData(data);
    });
  }, []);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
      {data && data.map( (item, i) => <EffectifHeadCard 
        key={i} 
        title={item.title} 
        totalBefore={item.totalBefore}
        total={item.total}/>
      )}
    </div>
  )
}

export default Header