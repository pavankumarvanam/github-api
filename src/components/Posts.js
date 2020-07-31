import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import './style.css';
import * as contentful from 'contentful';
import Course from './Course';
const SPACE_ID = 'd2clelnoag5l';
const ACCESS_TOKEN = 'ZL2vNAXo0fZ8fMJRST1tWD9u5MAmxTyr1sD0mNmOfSA';
const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

class Posts extends Component { 
    
    // state = {
    //     posts: [],
    //     searchString: ''
    // }  
    // componentDidMount() {
    //     const apiUrl = 'https://api.github.com/users/pavankumarvanam/repos';
    //     fetch(apiUrl)
    //       .then((response) => response.json())
    //       .then(repos => response.data);
    //   }
    state = {
        repos: []
    }
    componentDidMount() {
        
        fetch('https://api.github.com/users/pavankumarvanam/repos')
        .then(res => res.json())
        .then((data) => {
          this.setState({ repos: data })
          console.log(this.state.repos)
        })
        .catch(console.log)
    }
    render() {
       
        return (
           
            <div>
            {this.state.repos.map((repo) => {
                return(
                    <Card className="mcard" >
                        <CardContent>
                            <Typography  color="textSecondary" gutterBottom>
                            Repo ID: {repo.id}
                            </Typography>
                            <Typography variant="h5" component="h2">
                            {repo.name}
                            </Typography>
                            <Typography color="textSecondary">
                            {repo.full_name}
                            </Typography>
                            <Typography variant="body2" component="p">
                            {repo.git_url}
                            <br />
                            {repo.full_name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Link href={repo.clone_url} >
                            <Button size="small">Clone Repository</Button>
                        </Link>
                            
                        </CardActions>
                    </Card>
                );
            })}
        </div>
        );
        
    }
   
}

export default Posts;