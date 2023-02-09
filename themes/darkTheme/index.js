import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import MainPage from '../../components/templates/indexTemplates'

const index = () => {

    return (
        <React.Fragment>
            <CssBaseline />
            <div className="theme-layout">
                    <MainPage/>
                <style jsx global>
                    {`
                        .theme-layout {
                            background-color: #000000;
                            width: 100%;
                            height: 100%;
                        }
                        .card-layout {
                            position: relative;
                            width: 544px;
                            height: 470px;
                            box-shadow: 0px 4px 16px rgba(11, 17, 52, 0.2);
                            border-radius: 4px;
                        }
                    `}
                </style>
            </div>
        </React.Fragment>
      );
    };

  
export default index;