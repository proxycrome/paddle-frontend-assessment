import React, { useState, useEffect } from 'react';
import classes from './Github.module.css';
import axios from 'axios';


const Github = () => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/search/repositories?q=created:%3E2022-04-23&sort=stars&order=desc')
    .then((response) => setInfos(response?.data?.items))
    .catch((error) => console.log(error));
  }, [infos]);

  return (
    <div className={classes.main}>
        {infos?.map((info) => (
          <div className={classes.GitInfo} key={info.id}>
            <img src={info.owner.avatar_url} alt="avatar" width="120" height="120"></img>
            <div className={classes.Info}>
              <h2>{info.name}</h2>
              <p>{info.description}</p>
              <div>
                <div className={classes.box}><span>Stars: {info.stargazers_count}</span></div>
                <div className={classes.box}><span>Issues: {info.open_issues}</span></div>
                <span>Submitted 30 days ago by {info.owner.login}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Github