import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getUsers } from '../prestige-services.proxy';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((x) => {
      setUsers(x);
    });
  }, []);

  console.log(process.env.NODE_ENV);

  return (
    <div>
      {users.map((user) => (
        <Card key={user.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {user.name}
              </Typography>
              <Typography variant="body2" color="primary">
                {user.position}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default Users;
