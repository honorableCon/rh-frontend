import Link from 'next/link'
import React from 'react'

const CardModule = ({module}) => {
  return (
    <div class="flex-row box-content justify-between max-w-sm bg-white rounded-xl border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <Link href={module.link}><a>
            <div class="p-4">
            <img class="max-h-40 w-full rounded-t-lg" src={`/images/${module.profile}`} alt="" />
            </div>
            <div class="p-5 box-content flex-row items-center justify-center">
                <h5 class="text-center mb-2 text-xl ftracking-tight text-gray-900 dark:text-white">{module.title}</h5>
            </div>
        </a></Link>
    </div>
  )
}

export default CardModule