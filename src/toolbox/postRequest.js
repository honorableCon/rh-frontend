import axios from 'axios'

export const createPersonnel = (inputs, setErrors) => {
    axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_API}/personnels`, inputs)
    .then( response => {
        if(response.data.errors){
            setErrors(response.data.errors)
            alert("Erreur dans le formulaire");
        }else{
            setErrors(null);
        }
    })
    .catch( error => console.error(error));
}


export const postPersonnel = async (inputs) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_API}/personnels`, inputs)
    
    if (response.data.errors){
        return response.data.errors;
    }else{
        return null;
    }
}