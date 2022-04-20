import React from 'react'
import EffectifHeadCard from './EffectifHeadCard'

const Header = ({effectifs}) => {
  const {effectifsNow, effectifsBefore} = effectifs;
  
  const data = [{
      title: "Permanent",
      total: effectifsNow.permanent,
      totalBefore: effectifsBefore.permanent
    },{
      title: "Intérimaire",
      total: effectifsNow.interimaire,
      totalBefore: effectifsBefore.interimaire
    },{
      title: "Stagiaire",
      total: effectifsNow.stage,
      totalBefore: effectifsBefore.stage
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
      {data.map( (item, i) => <EffectifHeadCard 
        key={i} 
        title={item.title} 
        totalBefore={item.totalBefore}
        total={item.total}/>
      )}
    </div>
  )
}

export default Header