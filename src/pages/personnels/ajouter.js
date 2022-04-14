import Head from 'next/head';
import React from 'react';
import FormSlide from '../../components/Form/FormSlide';

const add = () => {
  return (
    <div className='my-6'>
      <Head>
        <title>Ajouter</title>
      </Head>
      <h1 className='text-center font-bold text-2xl my-6'>FORMULAIRE EMPLOYÉ</h1>
      <FormSlide/>
    </div>
  )
}

export default add