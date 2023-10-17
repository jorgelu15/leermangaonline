import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import FotoMember from "../../img/member.png"

export default function CardsScan(member) {
  return (
    <Card sx={{ maxWidth: 345, margin: 1}}>
      <CardMedia
        sx={{ height: 100}}
        image={FotoMember}
        title="Miembro"
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
            <strong>{member.member.nombre}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <strong>{member.member.rol}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
}