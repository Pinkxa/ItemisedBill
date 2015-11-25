var fs = require('fs');
  module.exports = function(){

    // Gets The list of providers
    this.providerList     = function(filePath){

      var linesInFile = fs.readFileSync(filePath, "utf8");

      var rows = linesInFile.split('\r');
      

      var listOfProviders = [];
      
      rows.forEach(function(row){ 
        	var bill = row.split(';');
            if(rows.indexOf(row)==0 || row.length <=4 ){return}//if the row is empty or is the first row (at index 0 ) that contains headings , skip that row
            else{
                  var columns = row.split(',');
                  var Date = columns[0];
                  var Provider = columns[1];
                  var Number = columns[2];
                  var Duration = columns[3];
                 
                  var providerObject = {
                  	Date: columns[0],
                  	Provider: columns[1],
                  	Number: columns[2],
                  	Duration: columns[3]
                  };

                    listOfProviders.push(providerObject);
            }
      });
      return listOfProviders;
    };

 	// this.groupByCellphoneProvider = function(listOfProviders, MTN){

		// 	var providerMap = [];

 	// 		listOfProviders.forEach(function(MTN){
  //       var columns = listOfProviders;
 	// 			var Date = MTN.Date
 	// 			var currentProvider = MTN.Provider; 
 	// 			var Number = MTN.Number;
 	// 			var  Duration = MTN.Duration; 

  //       var providerCalls = {
  //                   Date: columns[0],
  //                   currentProvider: columns[1],
  //                   Number: columns[2],
  //                   Duration: columns[3]
  //                 };

 	// 			if(providerMap[currentProvider] === undefined){
 	// 				providerMap[currentProvider] = 0;
 	// 			}
  //       providerMap.push(providerCalls);
 	// 			providerMap[currentProvider] = providerMap[currentProvider] + 1;

 	// 		});

 	// 	return providerMap;
 	// };

  this.groupByCellphoneProvider = function(listOfProviders, provider){

  var providerCalls = [];

  for(var i= 0; i < listOfProviders.length; i++) {
    var currentProvider = listOfProviders[i];
    // var rows = listOfProviders;
    // var columns = rows;

    if(currentProvider.Provider === provider) {
      providerCalls.push(currentProvider);

    }
  }
  return providerCalls;
  };
};
 // 	this.groupByCellphoneProvider = function(listOfProviders, Provider){

	// 	var providerMap = {};

	// 	for(var i in providerList) {
	// 		var currentProvider = providerList[i];
	// 		console.log(currentProvider);

	// 		if(providerMap[currentProvider]==undefined){
	// 			console.log(currentProvider);
	// 			providerMap[currentProvider]=0;
	// 		}
	// 		providerMap[currentProvider]=providerMap[currentProvider]+1

	// 	};
		
	// 	return providerMap;
	// };	
