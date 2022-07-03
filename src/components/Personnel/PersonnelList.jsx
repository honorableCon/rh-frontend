import PersonnelCard from './PersonnelCard';

const PersonnelList = ({personnel}) => {

        
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {personnel && personnel.map(personnel => <PersonnelCard key={personnel.id} personnel={personnel} />)}
    </div>
    );
}

export default PersonnelList