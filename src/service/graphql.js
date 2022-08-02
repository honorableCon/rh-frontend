import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const client = new ApolloClient({
  uri: `${BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
});

export const getAllContrats = async () => {
  const response = await client.query({
    query: gql`
      query getAllContrats {
        statuts {
          id
          libelle
        }
        typeContrats {
          id
          libelle
        }
        fonctions {
          id
          libelle
        }
        filieres {
          id
          libelle
        }
      }
    `,
  });
  return response;
};

export const addPersonnel = async (personnel) => {
  const response = await client.mutate({
    mutation: gql`
      mutation ($personnel: PersonnelInput!) {
        personnel(personnelInput: $personnel) {
          id
        }
      }
    `,
    variables: {
      personnel,
    },
  });
  return response;
};

export const deletePersonnel = async (id) => {
  const response = await client.mutate({
    mutation: gql`
      mutation ($id: ID!) {
        deletePersonnel(id: $id) {
          id
        }
      }
    `,
    variables: {
      id,
    },
  });
  return response;
};

export const getAllFilieres = async () => {
  const response = await client.query({
    query: gql`
      query getAllFilieres {
        filieres {
          id
          libelle
        }
      }
    `,
  });
  return response;
};

export const getPersonnel = async (id) => {
  const response = await client.query({
    query: gql`
      query getPersonnel($id: ID!) {
        personnelById(id: $id) {
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
          contrats {
            debutContrat
            finContrat
            etat
            statut {
              id
              libelle
            }
            typeContrat {
              id
              libelle
            }
          }
          personnelFonctions {
            fonction {
              id
              libelle
            }
          }
          integrationFilieres {
            filiere {
              id
              libelle
            }
          }
        }
      }
    `,
    variables: { id },
  });
  return response;
};

export const GET_PERSONNELS = gql`
  query getAllPersonnels {
    personnels {
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
`;

export const GET_PERSONNEL = gql`
  query getPersonnel($id: ID!) {
    personnel(id: $id) {
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
`;

export const getAllAnnuairesData = async () => {
  const response = await client.query({
    query: gql`
      query getAllAnnuairesData {
        personnels {
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
        filieres {
          id
          libelle
        }
      }
    `,
  });
  return response;
};

export const getAllEffectifs = async (year) => {
  const reponse = await client.query({
    query: gql`
      query getAllEffectifs($year: String!, $yearBefore: String!) {
        effectifsNow: contratsByDate(date: $year) {
          typeContrat {
            libelle
          }
        }

        effectifsBefore: contratsByDate(date: $yearBefore) {
          typeContrat {
            libelle
          }
        }
      }
    `,
    variables: { year, yearBefore: year - 1 },
  });
  return reponse;
};

export const getEffectifEmploye = async (year) => {
  const reponse = await client.query({
    query: gql`
      query getEffectifEmploye($year: String!, $yearBefore: String!) {
        effectifsNow: effectifEmploye(date: $year) {
          cdd
          cdi
          stage
          interim
        }

        effectifsBefore: effectifEmploye(date: $yearBefore) {
          cdd
          cdi
          stage
          interim
        }
      }
    `,
    variables: { year, yearBefore: year - 1 },
  });
  return reponse;
};
