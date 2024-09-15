import React from 'react';
import styles from '../styles/InvestmentForm.module.css';

export default function ButtonInvestment({ label, onClick, type = 'button', className }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
}