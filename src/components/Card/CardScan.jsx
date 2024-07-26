import * as React from 'react';

import PhotoMember from "../../img/member.jpg"
import { useText } from '../../hooks/useText';

export default function CardScan(props) {

  const {
    miembro
  } = props;

  const { getRol } = useText();

  return (
    <div className="member-card">
      <div className="card-border-top">
      </div>
      <div className='info-member'>
        <span style={{ textTransform: "capitalize" }}><strong>{miembro.usuario}</strong></span>
        <p className="rol">{getRol(miembro.rol)}</p>
      </div>
      <div className="img">
        <img src={PhotoMember} alt="" />
      </div>
    </div>
  );

}