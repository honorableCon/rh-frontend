import React from 'react'
import Request from '../../toolbox/request';
import PersonnelList from './PersonnelList';
import SearchBar from './SearchBar';

const Personnel = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        Request.getAllPersonnels().then(data => {
            setData(data)
        })
    }, [])

    return (
        <div>
            <SearchBar filieres={data && data.filieres}/>
            <PersonnelList personnel={data && data.personnels}/>
        </div>
    );
}

export default Personnel