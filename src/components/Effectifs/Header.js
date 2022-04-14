import React from 'react'
import EffectifHeadCard from './EffectifHeadCard'

const Header = () => {
  const data = [
    {title:"Permanent", total:300},
    {title:"Intérimaire", total:223},
    {title:"Stagiaire", total:30},
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {data.map( (item, i) => <EffectifHeadCard key={i} title={item.title} total={item.total}/>)}
    </div>
  )
}

export default Header