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
