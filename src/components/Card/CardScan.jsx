import * as React from 'react';

import PhotoMember from "../../img/member.jpg"

export default function CardScan(props) {

  const {
    miembro
  } = props;

  return (
    <div className="member-card">
      <div className="card-border-top">
      </div>
      <div className='info-member'>
        <span><strong>{miembro.Usuario.usuario}</strong></span>
        <p className="rol">{miembro.rol}</p>
      </div>
      <div className="img">
        <img src={PhotoMember} alt="" />
      </div>
    </div>
  );

}