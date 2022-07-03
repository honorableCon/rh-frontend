import Head from 'next/head';
import {useState, useEffect, useRef} from 'react';
import Employe from '../../components/Form/Employe';
import Contrat from '../../components/Form/Contrat';
import Recap from '../../components/Form/Recap';
import { getAllContrats, addPersonnel } from '../../toolbox/graphql';
import { personnelSchema } from '../../toolbox/validator';
import ToastSuccess from '../../components/UIElements/ToastSuccess';
import ToastFailed from '../../components/UIElements/ToastFailed';

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
  const [{errors, success, personnelId}, setQueryResult] = useState({errors:null, success:false});
  
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
        for(let i in error.details){
          errors[error.details[i].context.key] = error.details[i].message;
        }
        setQueryResult({errors:errors, success:false});
        setPage(1);
        return;
      }else{
        addPersonnel(value).then( (res) => {
          setQueryResult({errors:null, success:true, personnelId:res.data.personnel.id});
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
        {success && <ToastSuccess 
            idPersonnel={personnelId}
            message="Personnel ajouté avec succès"
          />
        }
        {errors && <ToastFailed/>}
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