import {  useEffect, useTransition,useState } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const[countries, setCountries] = useState([]);
    
    
    useEffect(() => {
        startTransition(async() => {
            const res = await getCountryData();
            console.log(res);
            setCountries(res.data);
        });
    }, []);
    if (isPending) return <Loader />;

    return <section className="country-section">
        <ul className="grid grid-four-cols">
            countries.map((country) => (
                return<CountryCard key={country.name.common} country={country} />
};