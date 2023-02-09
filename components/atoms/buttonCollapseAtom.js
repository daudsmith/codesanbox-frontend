import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';



const ButtonCollapseAtom = () => {
  const [expanded, setExpanded] = useState(false);
  const [result, setResult] = React.useState('');
  const API_URL = `https://storage.googleapis.com/core-asset/static/test/sample.json`;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getData = async () => {
    const response = await axios.get(API_URL);
    setResult(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <CardActions>
            <Button
              className="description-button"
              id="basic-button"
              onClick={handleExpandClick}
              aria-expanded={expanded}
            >See description
            </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {result.description}
          </Typography>
        </CardContent>
      </Collapse>
    </>
    );
};
export default ButtonCollapseAtom;