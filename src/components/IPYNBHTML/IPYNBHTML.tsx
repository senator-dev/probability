import { useEffect, useRef, useState } from "react";
import { IPYNBHTMLProps } from '../Interfaces'
import classes from './IPYNBHTML.module.css'
import Plotly, { PlotData, Layout, Config } from 'plotly.js-basic-dist';


interface PlotlyGraphProps {
    data: PlotData[];
    layout: Partial<Layout>;
    config: Partial<Config>;
}

const PlotlyGraph: React.FC<PlotlyGraphProps> = ({ data, layout, config }) => {
    const plotRef = useRef(null);

    useEffect(() => {
        if (plotRef.current) {
          Plotly.react(plotRef.current, data, layout, config);
        }
    }, [data, layout, config]);

    return <div ref={plotRef}></div>;
}

const CellOutputTypeMapper : { [key: string]: React.FC<any> } = {
  'application/vnd.plotly.v1+json': PlotlyGraph
};

interface SafeMapCellOutputTypeProps {
  cellOutputType: string
}

const SafeMapCellOutputType: React.FC<SafeMapCellOutputTypeProps> = ({ cellOutputType }): any => {
  if (Object.keys(CellOutputTypeMapper).includes(cellOutputType)) {
    return CellOutputTypeMapper[cellOutputType];
  }
  return <div>Error</div>

}

interface CellRendererProps {
  cell_type: 'code' | 'markdown'
  execution_count: number
  metadata: { [key: string]: any }
  outputs: any[]
  source: string[]
}

const CellRender: React.FC<CellRendererProps> = ({ 
  cell_type,
  execution_count,
  metadata,
  outputs,
  source
}) => {
  if (cell_type == 'markdown') {

    return <>

    </>



  } else if (cell_type == 'code') {
    outputs.map((value, index) => (
      Object.keys(value.data)[0]
    ))
    

  }
}


const IPYNBHTML: React.FC<IPYNBHTMLProps> = ({ path }) => {

    const [graphData, setGraphData] = useState<PlotlyGraphProps | null>(null);

  useEffect(() => {
    // Fetch JSON data from a URL or import from a local file
    fetch('/test.json')
      .then((response) => response.json())
      .then((data) => {
        setGraphData({
          data: data.data, // assuming your JSON has a 'data' key
          layout: data.layout, // assuming your JSON has a 'layout' key
          config: data.config, // assuming your JSON has a 'config' key
        });
      })
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  if 


  if (graphData !== null) {
    return <PlotlyGraph data={graphData.data} layout={graphData.layout} config={graphData.config} />;
  }

    

    return (
        <iframe
            className="ipynbContainer"
            title="static_html"
            src={path}
      ></iframe>
    );
};

export default IPYNBHTML;
export { PlotlyGraph };