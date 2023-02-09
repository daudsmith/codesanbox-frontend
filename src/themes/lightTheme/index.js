import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import MainPage from "../../components/templates/indexTemplates";

const index = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="theme-layout">
        <MainPage />
      </div>
      <style jsx global>
        {`
          @font-face {
            font-family: AvenirNextRegular;
            src: url(assets/fonts/AvenirNextRegular.ttf);
          }
          @font-face {
            font-family: AvenirNextBold;
            src: url(assets/fonts/AvenirNextBold.otf);
          }
          .theme-layout {
            background-color: #ffffff;
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default index;
