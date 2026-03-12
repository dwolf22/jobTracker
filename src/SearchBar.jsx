import { useState } from "react"


export default function SearchBar({onChange}) {

    const [search, setSearch] = useState("");

    const sendSearch = (e) => {
        e.preventDefault()
        onChange(search)
    }

    const handleChange = (e) => {

        setSearch(e.target.value);
    }

    return (
        <div className="searchContainer">
            <form action="" className="jobSearch" onSubmit={sendSearch}>
                <label htmlFor="Search">Search Bar: </label>
                <select name="search" onChange={handleChange} value={search}>
                    <option value="" >Please select a value</option>
                    <option value="All">All</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                </select>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}