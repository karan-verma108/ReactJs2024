import React, { useEffect, useState } from "react";
import axios from "axios";
import './Statewise.css';

const Statewise = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await axios.get(`https://api.rootnet.in/covid19-in/stats/latest`);
        console.log(res.data.data.regional);
        setData(res.data.data.regional);
    }

    useEffect(() => {
        getData();
    }, []);



    return (
        <div style={{ marginBottom: '60px' }}>
            <h1 style={{ textAlign: 'center' }}>State Wise Covid Case India</h1>
            <table style={{ margin: 'auto' }}>
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Total confirmed</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.loc}</td>
                            <td>{item.totalConfirmed}</td>
                            <td className="danger">{item.deaths}</td>
                            <td>{item.discharged}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Statewise;