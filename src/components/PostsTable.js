import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
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
const ref = React.createRef();
class PostsTable extends Component { 
    
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
                <Pdf targetRef={ref} filename="git-repositories.pdf">
                    {({ toPdf }) => <button className="pdf"  onClick={toPdf}>Download Table In Pdf</button>}
                </Pdf>
                
                <table ref={ref}>
                    <thead>
                        <tr>
                            <th>Repo ID</th>
                            <th>Repo Name</th>
                            <th>Repo Git Link</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.repos.map((repo) => {
                    return(
                        <tr>
                            <td>{repo.id}</td>
                            <td>{repo.name}</td>
                            <td>{repo.clone_url}</td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
            
        );
        
    }
   
}

export default PostsTable;