import PersonnelCard from './PersonnelCard';
import { useQuery } from '@apollo/client';
import { GET_PERSONNELS } from '../../toolbox/graphql';

const PersonnelList = ({personnels}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {personnels.map(personnel => 
                <PersonnelCard key={personnel.id} personnel={personnel} />)
            }
        </div>
    );

    
}

export default PersonnelList