import { Grid } from "@mui/material";
import Homeimg from "./Homeimg";

const Home = () => {
  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Home Page</h1>
        <hr />
        <p>
        The Election Commission of India (ECI), established the India International Institute of Democracy and Election Management (IIIDEM) to advance its professional competence in election management, promote peoples participation, contribute to developing stronger democratic institutions and support the efforts of ECI in carrying out its mandate and functions.
        <br />
        <br />
        <br />
         This website has made voting process more accesible.
         <br />
         <br />
         STEPS TO VOTE 
         <br />
          
          1. Register yourself with your email id 
          <br />
          2. Login 
          <br />
          3. Go to dashboard
          <br />
          4. Choose your party
          <br />
          5. VOTE
        </p>
      </Grid>
    </Grid>
  </>;
};

export default Home;
