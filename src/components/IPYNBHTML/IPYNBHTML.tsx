import { useEffect, useState } from "react";
import { IPYNBHTMLProps } from '../Interfaces'
import classes from './IPYNBHTML.module.css'




const IPYNBHTML: React.FC<IPYNBHTMLProps> = ({ path }) => {


    return (
        <iframe
            className="ipynbContainer"
            title="static_html"
            src={path}
      ></iframe>
    );
};

export default IPYNBHTML;