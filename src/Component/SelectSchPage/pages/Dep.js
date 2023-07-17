/*eslint-disable*/

import { useEffect, useState } from 'react';
import axios from 'axios';

const Dep = () => {
    const [depts, setDepts] = useState([]);
    
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: '공학계열',
                id: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((res) => console.log(res))
    })
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            setDepts(res.data);
        })
        .catch((error) => {
            console.error('Error Fetching : ', error);
        })
    }, []);
    
    return (
        <div>
            <select>
                <option value="" disabled selected>
                    전공 계열을 선택해주세요.
                </option>
                {depts.map((dept) => (
                    <option key={dept.id}>{dept.name}</option>
                ))}
            </select>
        </div>
    );
};

export default Dep;