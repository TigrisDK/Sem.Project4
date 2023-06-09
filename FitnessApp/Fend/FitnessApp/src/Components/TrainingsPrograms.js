import { React, useState } from 'react';
import { useEffect } from 'react';
import { Grid, Button, Typography, Card, CardContent, CardActions, IconButton } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";



function TrainingProgram() {
  const [data, setData] = useState([]);
  //const [programId, setId] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState([]);

  const imageMapping = {
    Chest: '../Images/back/chest.png',
    Back: '../Images/back/Back.png',
    Legs: '../Images/back/Legs.png',
    Shoulders: '../Images/back/shoulders.png',
    Full: '../Images/back/fullBody.png',

    // Add more item names and image URLs as needed
  };

  const fetchData = () => {
    var url = "https://localhost:7221/api/TraningPrograms";
    return fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.map(item => ({
          ...item,
          // Use the corresponding image URL based on item name, 
          //or fallback to a default image
          imageUrl: imageMapping[item.name] || '../Images/back/fullBody.png'
        }));
        setData(updatedData);
      });
  }
  const handleToggleFavorite = (programId) => {
    setSelectedProgram(prevSelectedPrograms => {
      if (prevSelectedPrograms.includes(programId)) {
        return prevSelectedPrograms.filter(id => id !== programId);
      } else {
        return [...prevSelectedPrograms, programId];
      }
    });
  };


  // Send POST request to the API endpoint
  const postData = () => {
    const email = localStorage.getItem('email');
    const name = data.find(item => item.traningProgramID === parseInt(selectedProgram.toString())).name;

    const payload = {

      email: email,
      favoriteTraningProgramsID: 0,
      traningProgramID: parseInt(selectedProgram.toString())
      , name: name
    };
    fetch('https://localhost:7221/api/FavoriteTraningPrograms', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response:', data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  useEffect(() => {
    fetchData();
    if (selectedProgram.length > 0) {
      postData();
      window.location.reload();
    }
  }, [selectedProgram]);


  return (
    <div className="gradient-background2" >

      <Grid ms={6} style={{ padding: 10 }}>
        <Typography variant="h3" component="h3" style={{ color: 'white', align: 'center' }}>TrainingProgram</Typography>
        <Grid container justifyContent="center" alignItems="center">
        </Grid>

      </Grid>
      <Grid container spacing={3}>
        {data.map(item => (

          <Grid item xs={10} sm={6} md={4} key={item.traningProgramID}>
            <Card>
              <CardContent style={{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: 'cover' }}>
                <Typography variant="h5" component="h2">
                  {item.name}
                </Typography>

              </CardContent>
              <CardActions>
                <IconButton
                  onClick={() => handleToggleFavorite(item.traningProgramID)}
                  color={selectedProgram.includes(item.traningProgramID) ? "secondary" : "default"}
                  padding="100px"
                >
                  {selectedProgram.includes(item.traningProgramID) ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

    </div>

  );
}




export default TrainingProgram;
