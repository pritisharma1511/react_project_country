import {  useEffect, useTransition,useState } from "react";
import { getCountryData } from "../api/postApi";

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
    if (isPending) return <h1>Loading...</h1>;
    return <h1>Country Page</h1>;
};