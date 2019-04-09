export const ROLL_MIN = "min";
export const ROLL_MAX = "max";

export const rollTable = (tableId, page) => {
  const table = getTable(tableId, page);
    if (table) {
      return tableValue(table);
    }
    return "";
}

function getTable (tableId, page) {
  const matchingTables = page.tables.filter(
    table => table.id === tableId
  );
  if (matchingTables.length === 1) {
    return matchingTables[0];
  } else if (matchingTables.length === 0) {
    console.log("No matching table found");
    return null;
  } else {
    console.log("Multiple matching tables found");
  }
}

function tableValue(table) {
  if (!table.entries) {
    return "";
  }
  const rollResult = roll(table.diceFormula);
  return table.entries
    .filter(entry => parseRange(entry.range).includes(rollResult))
    .map(entry =>
      entryValue(entry.values).reduce(
        (totalValue, currentValue) => totalValue + " " + currentValue, 
        ""
      )
    );
}

function entryValue(values) {
  return values.map(value => {
    if (value.type === "text") {
      return value.text;
    } else if (value.type === "roll") {
      const table = getTable(value.targetTable);
      if (table) {
        return tableValue(table);
      }
      return "";
    }
    return "";
  });
}

function roll(input, mode) {
  //todo validate input
  /*
        ^(((\d+d\d+)|\d+)(\+|-))*((\d+d\d+)|\d+)$
    */
  input = input.replace(/\s/g, "").toLowerCase();
  const additions = input.split("+");
  return additions
    .map(addition => {
      const subtractions = addition.split("-");
      return subtractions
        .map(subtraction => {
          const dice = subtraction.split("d");
          if (dice.length === 1) {
            return parseInt(dice[0]);
          } else {
            const numberOfDice = parseInt(dice[0]);
            const diceSize = parseInt(dice[1]);
            let result = 0;
            for (let i = 0; i < numberOfDice; i++) {
              if (mode === ROLL_MIN) {
                return 1;
              }
              if (mode === ROLL_MAX) {
                return diceSize;
              }
              result += Math.floor(Math.random() * diceSize + 1);
            }
            return result;
          }
        })
        .reduce((acc, cur) => acc - cur);
    })
    .reduce((acc, cur) => acc + cur);
};

function parseRange(input) {
  //todo validate input
  //\d+(-\d+)?(,\d+(-\d+)?)*
  const result = [];
  input = input.replace(/\s/g, "");
  const commaSeparated = input.split(",");
  commaSeparated.forEach(range => {
    const values = range.split("-");
    if (values.length === 1) {
      result.push(parseInt(values[0]));
    } else {
        const min = parseInt(values[0]);
        const max = parseInt(values[1]);
        for (let i = min; i <= max; i++) {
          result.push(i);
        }
    }
  });
  return result;
};
