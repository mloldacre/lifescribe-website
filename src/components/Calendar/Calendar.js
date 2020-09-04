import React from 'react';
import './Calendar.css';

export default function Calendar(props) {
  return (
    <li className="Calendar">
      {props.scribe.date_created}
    </li>
  );
}
