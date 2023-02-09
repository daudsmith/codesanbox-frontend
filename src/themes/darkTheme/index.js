import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import MainPage from "../../components/templates/indexTemplates";

const index = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="theme-layout">
        <MainPage />
        <style jsx global>
          {`
            .theme-layout {
              background-color: #000000;
              width: 100%;
              height: 100%;
            }
            @font-face {
              font-family: AvenirNextRegular;
              src: url(assets/fonts/AvenirNextRegular.ttf);
            }
            @font-face {
              font-family: AvenirNextBold;
              src: url(assets/fonts/AvenirNextBold.otf);
            }
          `}
        </style>
      </div>
    </React.Fragment>
  );
};

export default index;
