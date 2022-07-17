import React from 'react'
import { getPersonnel } from '../../toolbox/graphql'
import ProfileCard from '../../components/DetailsEmployee/ProfileCard'
import DetailContrat from '../../components/DetailsEmployee/DetailContrat'
import DetailAbout from '../../components/DetailsEmployee/DetailAbout'

const Details = ({personnel}) => {
    return (
        <div>     
            <div className="container mx-auto my-5 p-5">
                <div className="md:flex no-wrap md:-mx-2 ">
                    {/* <!-- Left Side --> */}
                    <div className="w-full md:w-3/12 md:mx-2 my-6">
                        <ProfileCard 
                            personnel={personnel} 
                            contrat={personnel.contrats[0]}
                            fonction={personnel.personnelFonctions[0].fonction}
                            />
                    </div>

                    {/* <!-- Right Side --> */}
                    <div className="flex flex-col md:flex-row justify-between w-full my-6 md:w-9/12 md:mx-2 gap-6">
                        <DetailAbout personnel={personnel}/>
                        <DetailContrat 
                            contrat={personnel.contrats[0]}
                            fonction={personnel.personnelFonctions[0].fonction}
                            filiere={personnel.integrationFilieres[0].filiere}
                            />
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Details

export const getServerSideProps = async (ctx) => {
    const {data} = await getPersonnel(ctx.query.id);
    
    return {
        props: {
            personnel: data.personnelById
        }
    }
}