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