import * as React from 'react';

import PhotoMember from "../../img/member.jpg"

export default function CardsScan(member) {
  return (
  <div className="member-card">
    <div className="card-border-top">
    </div>
    <div className='info-member'>
      <span><strong>{member.member.nombre}</strong></span>
      <p className="rol">{member.member.rol}</p>
    </div>
    <div className="img">
      <img src={PhotoMember} alt="" />
    </div>
  </div>
  );
}