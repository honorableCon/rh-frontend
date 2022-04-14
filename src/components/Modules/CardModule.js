import Link from 'next/link'
import React from 'react'

const CardModule = ({module}) => {
  return (
    <div className="flex-row box-content justify-between max-w-sm bg-white rounded-xl border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <Link href={module.link}><a>
            <div className="p-4">
            <img className="max-h-40 w-full rounded-t-lg" src={`/images/${module.profile}`} alt="" />
            </div>
            <div className="p-5 box-content flex-row self-end border-gray-100 border-t items-center justify-center">
                <h5 className="text-center mb-2 text-xl ftracking-tight text-gray-900 dark:text-white">{module.title}</h5>
            </div>
        </a></Link>
    </div>
  )
}

export default CardModule