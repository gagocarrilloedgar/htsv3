const DATA = require("../assets/MOCK_DATA.json");

const dataFilter = (toFilter, toMatch) =>
  DATA?.filter((item) => item[toFilter] === toMatch);

/**
 * Name: getFirstItem
 * Description: returns the first item which [].last_name equals Nuwe
 * @returns {firstItem}
 */

const getFirstItem = () => {
  const firstItem = dataFilter("last_name", "Nuwe").length;
  return firstItem;
};

/**
 * Name: getSecondItem
 * Description: Coge el primer id con Nuwe y elima todas las mayus y las minúsculas
 * @returns {clean_string}
 */
const getSecondItem = () => {
  const arr = dataFilter("last_name", "Nuwe");
  const first_element = arr[0];
  const clean_string = first_element.id
    .replace(/([A-Z])/g, "")
    .replace(/([a-z])/g, "");
  return clean_string;
};

/**
 * Name: getThirdItem
 * Description:
 * De elementos que no tiene el atributo pet coger el màximo del primer elemento del parámetro ip
 * @returns {max value}
 */

const getThirdItem = () => {
  const arr = DATA.filter((item) => typeof item.pet === "undefined").map(
    (elem) => elem.ip
  );
  return Math.max.apply(
    null,
    (arr2 = arr.map((ele) => ele.split(".")).map((ele) => parseInt(ele[0])))
  );
};

/**
 * Name: genPassword
 * Description: retorna el valor de la contraseña de desbloqueo completa
 * @returns {password}
 */

const genPassword = () => {
  const first = getFirstItem();
  const second = getSecondItem();
  const third = getThirdItem();

  return `${first}-${second}-${third}`;
};

console.log(getThirdItem());

module.exports = { getFirstItem, getSecondItem, getThirdItem, genPassword };
