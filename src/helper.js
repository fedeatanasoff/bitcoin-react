import React from "react";
/**
 *
 * @param {jsx} porcentaje
 */

export const renderChangePercent = porcentaje => {
  if (porcentaje > 0) {
    return <span className="percent-raised">{porcentaje}% &uarr;</span>;
  } else if (porcentaje < 0) {
    return <span className="percent-fallen">{porcentaje}% &darr;</span>;
  } else {
    return <span>{porcentaje}</span>;
  }
};
