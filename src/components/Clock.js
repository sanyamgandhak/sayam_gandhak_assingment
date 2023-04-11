import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import AnalogClock, { Themes } from "react-analog-clock";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";

import { styled } from "@mui/system";

const instaData = {
  labels: [
    "0",
    "2",
    "4",
    "6",
    "8",
    "10",
    "12",
    "14",
    "16",
    "18",
    "20",
    "22",
    "24",
  ],
  datasets: [
    {
      data: [1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 1],
      backgroundColor: function (context) {
        var value = context.dataset.data[context.dataIndex];
        return value === 0
          ? "rgb(255, 255, 255)"
          : value === 1
          ? "rgb(229,229,229)"
          : value === 2
          ? "rgba(158,149,238,255)"
          : "rgb(0, 0, 0)";
      },
      circumference: 360,
      borderWidth: 0,
    },
  ],
};

const facebookData = {
  labels: [
    "0",
    "2",
    "4",
    "6",
    "8",
    "10",
    "12",
    "14",
    "16",
    "18",
    "20",
    "22",
    "24",
  ],
  datasets: [
    {
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
      backgroundColor: function (context) {
        var value = context.dataset.data[context.dataIndex];
        return value === 0
          ? "rgb(255, 255, 255)"
          : value === 1
          ? "rgb(229,229,229)"
          : value === 2
          ? "rgba(158,149,238,255)"
          : "rgb(0, 0, 0)";
      },
      circumference: 360,
      borderWidth: 0,
    },
  ],
};


export default function Clock() {
  const [data, setData] = React.useState(facebookData);
  const [dataType, setDataType] = React.useState("Facebook");
  Chart.register(ArcElement);
  Chart.overrides.doughnut.cutout = "90%";
  Chart.overrides.doughnut.radius = "52%";
  return (
    <Grid container spacing={0} direction="column" alignItems="center">
      <Card
        style={{
          minHeight: "600px",
          minWidth: "700px",
          borderRadius: "3%",
        }}
        sx={{ boxShadow: 5 }}
      >
        <Grid container justifyContent="center">
          <Grid container justifyContent="center">
            <Grid
              item
              xs={8}
              display="flex"
              justifyContent="center"
              style={{ marginTop: 25, marginLeft: 2 }}
            >
              <Typography variant="h5" style={{ fontWeight: 600 }}>
                {" "}
                Flow Speaks{" "}
              </Typography>
            </Grid>
            <Grid item marginTop="20px">
              <Tooltip title="Information About Daily Active Hours on Social Media . Please click on the 'WhatsApp' or 'Instagram' icon button to see No of Daily Active Hours on Respective Platform">
                <InfoIcon style={{ color: "#82d1e1" }} />
              </Tooltip>
            </Grid>
          </Grid>

          <div
            style={{
              width: "400px",
              height: "400px",
              position: "relative",
            }}
          >
            <Typography
              style={{
                position: "absolute",
                top: "14%",
                left: "43%",
                fontWeight: 550,
              }}
            >
              Night
            </Typography>
            <Typography
              style={{
                position: "absolute",
                top: "47%",
                left: "4%",
                fontWeight: 550,
              }}
            >
              Evening
            </Typography>
            <Typography
              style={{
                position: "absolute",
                top: "47%",
                right: "4%",
                fontWeight: 550,
              }}
            >
              Morning
            </Typography>
            <Typography
              style={{
                position: "absolute",
                bottom: "14%",
                left: "43%",
                fontWeight: 550,
              }}
            >
              Afternoon
            </Typography>
            <Doughnut data={data} />
            <div
              style={{
                position: "absolute",
                top: "26%",
                left: "26%",
                // transform: "translate(-50%, -50%)",
                // zindex: 100,
              }}
            >
              {" "}
              <AnalogClock
                theme={Themes.light}
                width={175}
                options={{ cutoutPercentage: 80 }}
              />
            </div>
          </div>

          <Grid
            container
            justifyContent="space-around"
            style={{ marginTop: 50, marginLeft: 20 }}
          >
            <Grid item>
              <Button
                style={{ marginLeft: 10 }}
                color="primary"
                variant="outlined"
                onClick={() => {
                  setData(facebookData);
                  setDataType("facebook");
                }}
              >
                Facebook
              </Button>
              <Button
                style={{ marginLeft: 10 }}
                color="success"
                variant="outlined"
                onClick={() => {
                  setData(instaData);
                  setDataType("Instagram");
                }}
              >
                WhatsApp
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={{ backgroundColor: "lightgrey", color: "black" }}
                variant="contained"
                disabled
                onClick={() => setData(instaData)}
              >
                April Data Usage for {dataType}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
