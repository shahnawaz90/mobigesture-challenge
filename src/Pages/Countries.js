import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCountry from "../Services/ServiceCountry"
import SelectCountries from "../Components/SelectCountries";
var list = { "countries": ["India", "Australia"] }
const CountriesPage = (props) => {
    const { privilege } = props;
    const [countries, setCountries] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [noOfItems, setNoOfItems] = useState(5);
    const [selected, setSelected] = useState("")
    const getCountries = async () => {
        await ServiceCountry.getAllCountries(pageNo, noOfItems)
            .then((response) => {
                console.log(response)
                setCountries(response.data.countries);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getCountries();
        console.log(privilege)
    }, [])

    const addAndSelectHandler = (name) => {
        ServiceCountry.addNewCountry(name)
            .then((response) => {
                console.log(response)
                setCountries(countries => [...countries, name])
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        console.log(selected)
    },[selected])

    useEffect(() => {
        console.log(countries)
    },[countries])

    return (
        <div className="container">
            <p className="text-center bold">Welcome to Select Country Parent component<br/><Link to={"/"}>Back to Home</Link></p>
            <SelectCountries privilege={privilege} noOfItems={noOfItems} pageNo={pageNo} setPageNo={setPageNo} countries={countries} addAndSelectHandler={addAndSelectHandler} selected={selected} setSelected={setSelected} />
            <h4>{selected && selected != "" ? selected.label : ""}</h4>
        </div>
    )
}
export default CountriesPage;