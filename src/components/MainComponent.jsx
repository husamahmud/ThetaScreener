import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { TVChartContainer } from "./common/TVChartContainer";
import Table from "./Table";
import "./style.css";

const MainComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const selectedToken = useSelector((state) => {
    console.log("Redux State:", state);
    return state.tokenReducer.selectedToken;
  });

  useEffect(() => {
    console.log("Selected Token Updated:", selectedToken);
  }, [selectedToken]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderTokenData = () => {
    console.log("Rendering Token Data:", selectedToken);
    
    if (!selectedToken) return null

    return (
      <Paper sx={{ p: 2, backgroundColor: '#2a2a2a', color: 'white', minWidth: '200px' }}>
        <Typography variant="h6" gutterBottom>Token Details</Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography>
              <strong>Name:</strong> {selectedToken.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <strong>Symbol:</strong> {selectedToken.symbol}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <strong>Volume:</strong> ${Number(selectedToken.tradeVolume).toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <strong>ETH Value:</strong> {Number(selectedToken.derivedETH).toLocaleString(undefined, { maximumFractionDigits: 6 })} ETH
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "#191919",
        paddingRight: "7vw",
      }}
    >
      {/* Main content */}
      <Grid
        item
        xs={9}
        sx={{ transition: "width 0.5s", position: "relative" }}
      >
        <Grid container>
          <Grid item xs={11}>
            <TVChartContainer height={isMenuOpen ? 70 : 70} />
          </Grid>
          <Grid item xs={1} sx={{ p: 2 }}>
            {renderTokenData()}
          </Grid>
        </Grid>
        <Table height={isMenuOpen ? 70 : 90} />
      </Grid>

      {/* Menu or additional content */}
      {isMenuOpen && <Grid item xs={3} className="font-header"></Grid>}
    </Grid>
  );
};

export default MainComponent;
