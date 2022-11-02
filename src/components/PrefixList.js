import React from "react";
import PrefixCard from "./PrefixCard";

const PrefixList = ({ prefixcards }) => {
    return (
        <div className="card-container">
            {prefixcards.map(prefixcard =>{
                return <PrefixCard prefixcard = {prefixcard} key={prefixcard.id} />
            })}
        </div>
    )
}

export default PrefixList;