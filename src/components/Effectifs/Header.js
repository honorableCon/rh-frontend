import React from 'react'
import EffectifHeadCard from './EffectifHeadCard'

const Header = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <EffectifHeadCard title={"Permanent"} total={300}/>
      <EffectifHeadCard title={"Intérimaire"} total={243}/>
      <EffectifHeadCard title={"Stagiaire"} total={30}/>
    </div>
  )
}

export default Header