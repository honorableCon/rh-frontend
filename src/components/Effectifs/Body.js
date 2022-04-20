import React from 'react'
import ChartInterimaireEffectifs from '../Charts/ChartInterimaireEffectifs'
import ChartPermanentEffectifs from '../Charts/ChartPermanentEffectifs'
import ChartStagiaireEffectifs from '../Charts/ChartStagiaireEffectifs'

const Body = ({effectifs}) => {
  return (
    <div>
        {/* effectifs total de l'etablissement */}
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <ChartInterimaireEffectifs effectifs={effectifs}/>
            </div>
            <ChartPermanentEffectifs effectifs={effectifs}/>
        </div>
        <ChartStagiaireEffectifs effectifs={effectifs}/>
    </div>
  )
}

export default Body