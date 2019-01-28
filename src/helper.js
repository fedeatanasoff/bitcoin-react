import React from "react";
<<<<<<< HEAD
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
=======

/**
 *
 * @param {objeto} response
 */

export const handleResponse = response => {
  //   PASO LA RESPUESTA A JSON
  return response.json().then(json => {
    // SI LA RESPUESTA CONTIENE UNA PROPIEDAD 'OK' DEVUELVO EL JSON
    // SINO DEVUELVE EL REJECT DE LA PROMESA PARA QUE ME LLEVE AL CATCH
    return response.ok ? json : Promise.reject(json);
  });
};

/**
 *
 * @param {number} percent
 */

export const renderChangePercent = percent => {
  if (percent > 0) {
    return (
      <span className="text-success">
        {percent}&nbsp;% &nbsp; <i className="fas fa-caret-up" />
      </span>
    );
  } else if (percent < 0) {
    return (
      <span className="text-danger">
        {percent}&nbsp;% &nbsp;
        <i className="fas fa-caret-down" />
      </span>
    );
  } else {
    return <span className="text-info">{percent}&nbsp;%</span>;
>>>>>>> starter
  }
};
