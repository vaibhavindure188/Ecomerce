import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useParams } from "react-router-dom";
import DeleveryAddressForm from "./DeleveryAddressForm";
import OrderSummary from "./OrderSummary";

const steps = ["Login", "Delivery address", "Order Summery", "Payment"];

export default function CheckOut() {
  const [activeStep, setActiveStep] = React.useState(1);
  const location = useLocation();
  // const querySearch = new URLSearchParams(location.search);
  // const step = querySearch.get("step");
  const params = useParams()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  

  return (
    <div className="p-10">
      <Box sx={{ width: "100%" ,marginX:5, paddingRight:4}}>
        <Stepper activeStep={params.id == 1 ? 2:3}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Steps </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />

              {/* <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button> */}
            </Box>

            <div>
                {
                    params.id == 1 ? <DeleveryAddressForm/> : <OrderSummary/>
                }
            </div>
          </React.Fragment>
        
      </Box>
    </div>
  );
}
