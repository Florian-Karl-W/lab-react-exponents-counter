import React from 'react'

export default function Exponent({ num, exponent}) {
  const multiplication = [...Array(exponent)].map(() => num).join(" * ");
  const total = num ** exponent
  return (
    <div className="exponent-counter-container">
    <p className="exponent-label">{num}<sup>{exponent}</sup></p>
    <p className="exponent-result"> {multiplication} = <span className="total">{total}</span></p>
  </div>
  )
}
