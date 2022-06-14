import React, { useEffect, useState } from "react";
import "./jokes.css";
import Navbar from "../navbar";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("first load");
    getJokes();
  }, []);

  const getJokes = async () => {
    setLoading(true);
    await axios
      .get(
        "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
      )
      .then((res) => {
        setJokes(res.data.jokes);
        setLoading(false);
      });
  };
  return (
    <>
      <Navbar />
      <div>
        <center>
          <h1>Jokes</h1>
        </center>
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        )}
        <Grid container spacing={5}>
          {jokes.map((obj, i) => (
            <Grid item xs={12} sm={4} key={obj.id}>
              <Card>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    textAlign="center"
                    sx={{ mb: 2.5 }}
                  >
                    {obj.category}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }}>Jokes :-{obj.joke}</Typography>
                  <Typography variant="body1" color="text.secondary">
                    Type :-{obj.type}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>Test</CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>Test</CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>Test</CardContent>
            </Card>
          </Grid> */}
        </Grid>
      </div>
    </>
  );
};
export default Jokes;
