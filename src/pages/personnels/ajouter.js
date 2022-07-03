import Head from 'next/head';
import {useState, useEffect, useRef} from 'react';
import Employe from '../../components/Form/Employe';
import Contrat from '../../components/Form/Contrat';
import Recap from '../../components/Form/Recap';
import { getAllContrats, addPersonnel } from '../../toolbox/graphql';
import { personnelSchema } from '../../toolbox/validator';

const add = ({data}) => {
  const [inputs, setInputs] = useState({
    prenom : "",
    nom : "",
    email : "",
    telephone : "",
    dateDeNaissance : null,
    sexe : "",
    nationalite : "",
    nombreEnfant : 0,
    nombreConjoint : 0,
    cni : 0,
    filiereId : 1,
  });
  const formRef = useRef(null);
  const [page, setPage] = useState(1);
  const [contrats, setContrats] = useState(null);
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    setContrats(data);
  }, [data]);
 
  const handleSubmit = (e) => {
      e.preventDefault();
      errors = {};
      const { error, value} = personnelSchema.validate(inputs, {abortEarly: false});
      {
        delete value.filieres;
        delete value.contrats;
        delete value.typeContrats;
        delete value.fonctions;
        delete value.statuts;
      }

      if (error) {
        console.log(error);
        for(let i in error.details){
          errors[error.details[i].context.key] = error.details[i].message;
        }
        setErrors(errors);
        alert('Des erreurs dans le formulaire')
        return;
      }else{
        setErrors({});
        addPersonnel(value).then( () => {
          alert('Success');
        })
      }
  }

  return (
    <div className='my-6'>
      <Head>
        <title>Ajouter</title>
      </Head>
      <h1 className='text-center font-bold text-2xl my-6'>FORMULAIRE EMPLOYÉ</h1>
      <form onSubmit={handleSubmit} ref={formRef} method="POST"> 
        {page==1 && <Employe
            useInputs={[inputs, setInputs]}
            usePage={[page, setPage]}
            formRef={formRef}
            errors={errors}
          />
        }
        {page==2 && <Contrat 
            useInputs={[inputs, setInputs]}
            usePage={[page, setPage]}
            contrats={contrats}
            formRef={formRef}
            errors={errors}
          />
        }
        {page==3 && <Recap 
            inputs={inputs}
            usePage={[page, setPage]}
          />
        }
      </form>
    </div>
  )
}

export default add

export async function getStaticProps() {
  const { data } = await getAllContrats();

  return {
    props: { data },
  }
}