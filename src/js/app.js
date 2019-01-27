    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(web3Provider);
    }
    
    $.getJSON("HelloWorld.json", function(hello) {
          // Instantiate a new truffle contract from the artifact
          Hello = TruffleContract(hello);
          // Connect provider to interact with contract
          Hello.setProvider(web3Provider);

          Hello.deployed().then(function(instance) {
            helloInstance = instance;
            return helloInstance.hi();
          }).then(function(html) {
            console.log(html);
          })

    });