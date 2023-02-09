import React, {useEffect} from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import PropertyIconAtom from '../atoms/propertyIconAtom';



const ContentMolecule = () => {
  const [result, setResult] = React.useState('');
  const API_URL = `https://storage.googleapis.com/core-asset/static/test/sample.json`;

  const getData = async () => {
    const response = await axios.get(API_URL);
    setResult(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
        <PropertyIconAtom/>
        <Typography className="property-name">
          {result.title}
        </Typography>
        <Typography className="property-address">
          {result.address}
        </Typography>
        <Typography className="property-prices">
            ${result.psf_min} - ${result.psf_max} psf
        </Typography>
        <Typography className="property-subprices">
          {result.subprice_label}
        </Typography>
        <Typography className="property-additional">
          {result.project_type} . {result.year} . {result.ownership_type}
        </Typography>
        <Typography className="property-subadditional">
          {result.availabilities_label}
        </Typography>
    </>
    );
};
export default ContentMolecule;