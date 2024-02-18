import { useContext, useEffect, useState } from "react"
import React, { useRef } from 'react';

import useAuth from "../../hooks/useAuth";

import SearchDirectory from "../Search/SearchDirectory";
import CardDirectory from "../Card/CardDirectory";
import FormFilter from "../Form/FormFilter";
import directorioContext from "../../context/directorio/directorioContext";


const ContainerDirectory = (props) => {
    const [filters, setFilters] = useState([])

    const { usuario } = useAuth();
    const { filtrados } = useContext(directorioContext);

    const [data, setData] = useState([]);
    const [counter, setCounter] = useState(0);
    // const [loading, setLoading] = useState(false);

    const getData = () => {
        const end = counter + 18;
        const slice = filtrados?.slice(counter, end);
        setCounter(counter + 18)
        setData([...data, ...slice])
    }
    
    const initData = () => {
        const slice = filtrados?.slice(0, 18);
        setData(slice)
    }

    useEffect(() => {
        if(filtrados){
            initData()
            setCounter(18)   
        }
        // console.log(filtrados)
        // console.log(data)
    }, [filtrados])

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
    
        if (window.scrollY + window.innerHeight >= scrollHeight) {
            if(counter <= filtrados?.length) getData()
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [counter]);


    return (
        <div className="scan-groups">

            <aside className="filter">
                <div className="title">
                    <h3>Directorio</h3>
                </div>
                <section className="sec-filter">
                    <FormFilter filters={filters} setFilters={setFilters}/>
                </section>
            </aside>
            
            <main className="main-home">
                <SearchDirectory filters={filters}/>
                <div className="groups">
                    {data && (
                        <CardDirectory cards={data} />
                    )}
                </div>
            </main>
        </div>
    )
}

export default ContainerDirectory;