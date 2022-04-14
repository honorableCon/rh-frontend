import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Employe from './PersonnalData';
import Contrat from './Contrat';
import Recap from './Recap';

const FormSlide = () => {
    const [inputs, setInputs] = useState({
        prenom : "",
        nom : "",
        email : "",
        tel : "",
        dateDeNaissance : "",
        sexe : "",
        nationalite : "",
        matrimoniale : "",
        enfant : 0,
        conjoint : 0,
        cni : 0,
        filiereId : 1,
    });

    const formRef = useRef(null);
    const [page, setPage] = useState(1);
    const [contrats, setContrats] = useState(null);
    const [errors, setErrors] = useState(null);
  
    useEffect( () => {
        const URL = `${process.env.NEXT_PUBLIC_BASE_URL_API}/allcontrats`;
      axios.get(URL)
        .then( response => setContrats(response.data));
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_API}/personnels`, inputs)
            .then( response => {
                if (response.data.errors){
                    setErrors(response.data.errors);
                    console.log(response.data.errors);
                    alert("Error: dans le formulaire");
                }else{
                    alert("Nouveau membre enregistré");
                }
            });
    }

  return (
      
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
  )
}

export default FormSlide