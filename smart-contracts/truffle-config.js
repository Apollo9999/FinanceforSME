module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    }
  },
  compilers: {
    solc: {
      	version: "0.4.20",
	optimizer: { enabled: true, runs: 200 }
    }
  }
};
