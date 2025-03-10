import { useEffect, useState } from "react";
import { IPYNBHTMLProps } from '../Interfaces'
import classes from './IPYNBHTML.module.css'




const IPYNBHTML: React.FC<IPYNBHTMLProps> = ({ path }) => {

    fetch(path) // fetch the notebook
    .then((response) => response.json())
    .then((data) => {
        // iterate over the cells, display source and output
        data.cells.map((cell) => {
        return (
            <>
            <div>{cell.source}</div>
            <div>{cell.output}</div>
            </>
        );
        });
    });


    return (
        <iframe
            className="ipynbContainer"
            title="static_html"
            src={path}
      ></iframe>
    );
};

export default IPYNBHTML;