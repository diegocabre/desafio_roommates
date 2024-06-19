const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const addCuenta = async (req, res) => {
  try {
    const { name, descripcion, monto } = req.body;
    const id = uuidv4().slice(4, 12);
    const gastosQuery = {
      id,
      name,
      descripcion,
      monto,
    };
    const { gastos } = JSON.parse(
      fs.readFileSync("./data/gastos.json", "utf8")
    );
    gastos.push(gastosQuery);
    fs.writeFileSync("./data/gastos.json", JSON.stringify({ gastos }));
    return gastosQuery;
  } catch (error) {
    console.log(error.message);
  }
};

const getCuenta = async (req, res) => {
  try {
    const roommatesGastos = await JSON.parse(
      fs.readFileSync("./data/gastos.json", "utf8")
    );
    return roommatesGastos;
  } catch (error) {
    console.log(error.message);
  }
};

const editCuenta = async (id, name, descripcion, monto) => {
  try {
    const { gastos } = JSON.parse(
      fs.readFileSync("./data/gastos.json", "utf8")
    );
    const editMonto = gastos.find((g) => g.id === id);
    if (editMonto) {
      editMonto.name = name;
      editMonto.descripcion = descripcion;
      editMonto.monto = monto;
    }
    fs.writeFileSync("./data/gastos.json", JSON.stringify({ gastos }));
    return editMonto;
  } catch (error) {
    console.log(error.message);
  }
};

const borrarCuenta = async (id) => {
  try {
    let { gastos } = JSON.parse(
      fs.readFileSync("./data/gastos.json", "utf8")
    );
    gastos = gastos.filter((g) => g.id !== id);
    fs.writeFileSync("./data/gastos.json", JSON.stringify({ gastos }));
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { addCuenta, getCuenta, editCuenta, borrarCuenta };
