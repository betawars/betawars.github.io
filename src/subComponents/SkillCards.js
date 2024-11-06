import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Grid2, Typography } from '@mui/material';
import {cards} from "../data/WorkData"

const SkillCards = (props) => {

    const cardStyle = {
        display: 'block',
        width: '8vw',
        transitionDuration: '0.3s',
        height: '9vw'
    }

    const cardContentStyle = {
        
        padding: 0,
        display:"flex",
        justifyContent:"center",
        // "&:last-child": {
        //     paddingBottom: 1
        // }
      };
      

    return (
        
        <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 8, md: 8 }}>
          {cards.map((card, index) => (
            <Grid2 item xs={8} sm={8} md={8} key={index}>
              <Card style={cardStyle} sx={{ maxWidth: 345 }}>
                <a href={card.link} target='_blank' style={{textDecoration:'none'}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="auto" // Set a fixed height
                      image={props.iconTheme?card.img:card.img1}
                      alt="skill"
                      sx={{ objectFit: "contain" }}
                    />
                    <CardContent style={cardContentStyle} >
                      <Typography variant='inherit' component="div">
                        {card.content}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </a>
              </Card>
            </Grid2>
          ))}
      </Grid2>
      );

}


export default SkillCards