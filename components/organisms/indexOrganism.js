import React, {useEffect} from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CollapseMolecule from '../molecules/collapseMolecule';
import CarousellMolecule from '../molecules/carousellMolecule';
import ContentMolecule from '../molecules/contentMolecule';



const IndexOrganism = () => {

  return (
    <>
    <Card className="card-layout">
        <CarousellMolecule/>
      <CardContent>
        <ContentMolecule/>
      </CardContent>
        <CollapseMolecule/>
    </Card>
    </>
    );
};
export default IndexOrganism;