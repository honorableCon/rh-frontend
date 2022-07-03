import axios from 'axios'

export const getAllContrats = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_API}/allcontrats`)
    return await response.data
}
// export const getAllContrats = async () => {
//     const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_API_SPRING}/extra-personnels`)
//     return await response.data
// }

export const getAllPersonnels = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_API}/personnels`)
    return await response.data
}

export const getPersonnel = async (id) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_API}/personnels/${params.id}`);
    return await response.data;
}

export const getEffectifs = async (year) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_API}/effectifs/${year}`)
    return response.data
}

export const getTypeContrat = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_API}/effectifs/${year}`)
    return response.data
}