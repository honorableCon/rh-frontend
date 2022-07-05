import PersonnelCard from './PersonnelCard';
import { getAllAnnuairesData } from '../../toolbox/graphql';
import { useState, useEffect } from 'react';

const PersonnelList = ({personnels}) => {
    const [personnelsList, setPersonnelsList] = useState(personnels);

    useEffect(() => {
        getAllAnnuairesData().then(({data}) => {
            setPersonnelsList(data.personnels);
        })
    }, [personnelsList]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {personnelsList.map(personnel => 
                <PersonnelCard key={personnel.id} personnel={personnel} />)
            }
        </div>
    );

    
}

export default PersonnelList