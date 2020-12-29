import React, { useEffect, useState } from "react";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

const SelectCountries = (props) => {
    const { privilege, noOfItems, pageNo, setPageNo, countries, addAndSelectHandler, selected, setSelected } = props;
    const [options, setOptions] = useState([])

    useEffect(() => {
        countries.forEach(country => {
            setOptions(options => [...options, { value: country, label: country }])
        });
    }, [])

    useEffect(() => {
        console.log(options);
    }, [options])

    useEffect(() => {
        console.log("hey ", selected)
    }, [selected])

    const handleChange = (selectedOption) => {
        setSelected(selectedOption)
    };

    const handleCreate = (inputValue) => {
        setSelected({ value: inputValue, label: inputValue })
        setOptions(options => [...options, { value: inputValue, label: inputValue }])
        addAndSelectHandler(inputValue);
    }

    return (
        privilege ?
            <CreatableSelect
                isClearable
                placeholder="Please select a country"
                onChange={handleChange}
                onCreateOption={handleCreate}
                options={options}
                value={selected}
            />
            :
            <Select
                value={selected}
                onChange={handleChange}
                placeholder="Please select a country"
                options={options}
            />
    )
}
export default SelectCountries;