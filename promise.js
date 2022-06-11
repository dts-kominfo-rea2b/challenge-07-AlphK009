const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (mad) => {
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();
    return Promise.all([theaterIXX, theaterVGC]).then((hasil) => {
      const hasilSetelahMenonton = [...hasil[0], ...hasil[1]]; 
      return hasilSetelahMenonton.filter((item) => item.hasil === mad).length;
    }).catch ((err) => {
      console.log(err); 
    });
  }


module.exports = {
  promiseOutput,
};
