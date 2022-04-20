import React from 'react'
import CardModule from './CardModule'

const Modules = () => {

    const data = [
        {
            title:"Gestion de l'organisation et des effectifs",
            profile:"Build.svg",
            link:"/effectifs"
        },{
            title:"Politique de remuneration et d'action sociale",
            profile:"Loan.svg",
            link:"/effectifs"
        },{
            title:"Politique de santé, sécurité et bien être au travail",
            profile:"Health.svg",
            link:"/effectifs"
        },{
            title:"Animation du dialogue et developpement social",
            profile:"Group.svg",
            link:"/effectifs"
        },{
            title:"Stratégie de formation et de developpement collectif",
            profile:"Maths.svg",
            link:"/effectifs"
        },{
            title:"Approche prospective",
            profile:"Meeting.svg",
            link:"/effectifs"
        }
    ]
  return (
      <>
    <h1 className="font-mediumh text-2xl text-secondary-900 font-medium text-center p-6">
        Direction des Resources Humaines et de la Communication
    </h1>
    <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-center">
        {data.map( (item, i) => <CardModule key={i} module={item}/>)}
    </div>
    </>
  )
}

export default Modules