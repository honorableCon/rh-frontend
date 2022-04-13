import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import ChangeForm from './ChangeForm';

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
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_API}/allcontrats`)
        .then( response => setContrats(response.data));
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_API}/personnels`, inputs)
            .then( response => {
                if(response.data.errors){
                    setErrors(response.data.errors)
                    alert("Erreur dans le formulaire");
                }else{
                    setErrors(null);
                }
                console.log(errors);
            })
            .catch( error => console.error(error));
    }

  return (
    <form onSubmit={handleSubmit} ref={formRef} method="POST">
        
        {page==1 && <ChangeForm 
            useInputs={[inputs, setInputs]}
            usePage={[page, setPage]}
            useErrors={[errors, setErrors]}
            formRef={formRef}
            contrats={contrats}
            />
        }
    </form>
  )
}

export default FormSlide