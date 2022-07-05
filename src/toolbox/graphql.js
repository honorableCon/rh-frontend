import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache()
})

export const getAllContrats = async () => {
    const response = await client.query({
        query: gql`
            query getAllContrats{
                statuts{
                    id
                    libelle
                }
                typeContrats{
                    id
                    libelle
                }
                fonctions{
                    id
                    libelle
                }
                filieres{
                    id
                    libelle
                }
            }
        `
    })
    return response
}

export const addPersonnel = async (personnel) => {
    const response = await client.mutate({
        mutation: gql`
            mutation ($personnel: PersonnelInput!){
                personnel(personnelInput: $personnel){
                    id
                }
            }
        `,
        variables: {
            personnel
        }
    })
    return response
}


export const getAllFilieres = async () => {
    const response = await client.query({
        query: gql`
            query getAllFilieres{
                filieres{
                    id
                    libelle
                }
            }
        `
    })
    return response
}


export const getPersonnel = async (id) => {
    const response = await client.query({
        query: gql`
            query getPersonnel($id: ID!){
                personnelById(id: $id){
                    id
                    nom
                    prenom
                    dateDeNaissance
                    sexe
                    cni
                    nationalite
                    email
                    telephone
                    nombreConjoint
                    nombreEnfant
                }
            }
        `, variables: {id}
    })
    return response
}


export const GET_PERSONNELS = gql`
    query getAllPersonnels{
        personnels{
            id
            nom
            prenom
            dateDeNaissance
            sexe
            cni
            nationalite
            email
            telephone
            nombreConjoint
            nombreEnfant
        }
    }
`

export const GET_PERSONNEL = gql`
    query getPersonnel($id: ID!){
        personnel(id: $id){
            id
            nom
            prenom
            dateDeNaissance
            sexe
            cni
            nationalite
            email
            telephone
            nombreConjoint
            nombreEnfant
        }
    }
`

export const getAllAnnuairesData = async () => {
    const response = await client.query({
        query: gql`
            query getAllAnnuairesData{
                personnels{
                    id
                    nom
                    prenom
                    dateDeNaissance
                    sexe
                    cni
                    nationalite
                    email
                    telephone
                    nombreConjoint
                    nombreEnfant
                }
                filieres{
                    id
                    libelle
                }
            }
        `
    })
    return response
}