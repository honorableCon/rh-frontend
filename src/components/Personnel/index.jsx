import React from 'react';
import axios from 'axios';
import PersonnelList from './PersonnelList';
import SearchBar from './SearchBar';

const Personnel = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_API}/personnels`)
        .then(response => {
            setData(response.data)
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