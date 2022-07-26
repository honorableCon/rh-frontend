import React from 'react'
import ChartInterimaireEffectifs from '../Charts/ChartInterimaireEffectifs'
import ChartPermanentEffectifs from '../Charts/ChartPermanentEffectifs'

const Body = () => {
  return (
    <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-1 lg:col-span-2">
                <ChartInterimaireEffectifs/>
            </div>
            <ChartPermanentEffectifs/>
        </div>
    </div>
  )
}

export default Body