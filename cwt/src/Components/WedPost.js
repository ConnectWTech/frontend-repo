import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cats from '../img/cats.avif'
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function WedPost (props){
    let tech = props.obj.technologys.slice(1,props.obj.technologys.length-1).split(',')
    let hash = props.obj.hashtag.slice(1,props.obj.hashtag.length-1).split(',')
    return (
        <div sx={{}}>
            <Card sx={{ width: '60vw',margin:'auto'}}>
                <CardMedia
                    component="img"
                    height="400"
                    image={cats}
                    alt="Cat"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{props.obj.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{props.obj.bio}</Typography>
                    {tech.map(el => <Chip label={el} variant="filled" color="primary" />)}
                    <Divider/>
                    {hash.map(el => <Chip label={`@${el}`} variant="filled" color="primary" />)}
                </CardContent>
                <CardActions>
                    <Button size="small">Comments</Button>
                </CardActions>
            </Card>
        </div>
    )

 }