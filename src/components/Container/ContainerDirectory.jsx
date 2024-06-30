import { useContext, useEffect, useState } from "react";
import React from "react";

import useAuth from "../../hooks/useAuth";
import SearchDirectory from "../Search/SearchDirectory";
import CardDirectory from "../Card/CardDirectory";
import FormFilter from "../Form/FormFilter";
import directorioContext from "../../context/directorio/directorioContext";
import { useSeries } from "../../hooks/useSeries";

const ContainerDirectory = () => {
    const [filters, setFilters] = useState({
        genero: [],
        tipo: [],
        demografia: []
    });

    const { usuario } = useAuth();
    const { seriesFiltradas } = useSeries();
    const { filtrados } = useContext(directorioContext);

    const [data, setData] = useState([]);
    const [counter, setCounter] = useState(0);

    const getData = () => {
        const end = counter + 18;
        const slice = (filtrados.length > 0 ? filtrados : seriesFiltradas)?.slice(counter, end);
        setCounter(counter + 18);
        setData(prevData => [...prevData, ...slice]);
    };

    const initData = () => {
        const slice = (filtrados?.length > 0 ? filtrados : seriesFiltradas)?.slice(0, 18);
        setData(slice);
    };

    useEffect(() => {
        if (seriesFiltradas || filtrados) {
            initData();
            setCounter(18);
        }
    }, [seriesFiltradas, filtrados]);

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;

        if (window.scrollY + window.innerHeight >= scrollHeight) {
            if (counter < ((filtrados.length > 0 ? filtrados : seriesFiltradas)?.length)) {
                getData();
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [counter, filters]);

    return (
        <div className="scan-groups">
            <aside className="filter">
                <div className="title">
                    <h3>Directorio</h3>
                </div>
                <section className="sec-filter">
                    <FormFilter filters={filters} setFilters={setFilters} />
                </section>
            </aside>

            <main className="main-home">
                <SearchDirectory filters={filters} />
                <div className="groups">
                    {data && <CardDirectory cards={data} />}
                </div>
            </main>
        </div>
    );
};

export default ContainerDirectory;
