var assert = require("assert");
var Provider = require("../provider");

describe('Test cellphone providers', function(){
	it('should read the csv file and create a list of maps', function(){
		var provider = new Provider();
		var cellphone = provider.providerList('./ItemisedBill.csv');
		 console.log(cellphone);
		 assert.equal(35, cellphone.length);
		 assert.equal("MTN", cellphone[1].Provider);
	});

	it('should return all the phone calls for MTN', function(){
		var provider = new Provider();
		var listOfProviders = provider.providerList('./ItemisedBill.csv');
		var providerGroup = provider.groupByCellphoneProvider(listOfProviders, "MTN");
		 console.log(providerGroup);
		assert.equal(providerGroup.length, 16);
		// assert.equal("MTN", cellphone[1].Provider);
		
	});

	it('should return all the phone calls for Vodacom', function(){
		var provider = new Provider();
		var listOfProviders = provider.providerList('./ItemisedBill.csv');
		var providerGroup = provider.groupByCellphoneProvider(listOfProviders, "Vodacom");
		 console.log(providerGroup);
		assert.equal(providerGroup.length, 8);
		// assert.equal("MTN", cellphone[1].Provider);
		
	});

	it('should return all the phone calls for CellC', function(){
		var provider = new Provider();
		var listOfProviders = provider.providerList('./ItemisedBill.csv');
		var providerGroup = provider.groupByCellphoneProvider(listOfProviders, "CellC");
		 console.log(providerGroup);
		assert.equal(providerGroup.length, 11);
		// assert.equal("MTN", cellphone[1].Provider);
		
	});

	it('should calculate the total number of calls made to numbers for each cell phone provider', function(){
		assert.equal(1,2);
	});

	it('should calculate the duration in seconds of a call', function(){
		assert.equal(1,2);
	});

	it('should order the calls by ascending duration', function(){
		assert.equal(1,2);
	});

	it('should list cell phone provider and call duration, sorted by cell phone provider, with a sub-total at the end of each provider', function(){
		assert.equal(1,2);
	});

	it('should take a handlebars template and creates a nicely formatted itemized bill with totals and sub-totals', function(){
		assert.equal(1,2);
	});

	it('should indicate when the calls for a cell phone provider start', function(){
		assert.equal(1,2);
	});

	it('should display the total call duration for each provider', function(){
		assert.equal(1,2);
	});

	it('should display the total call duration for all calls', function(){
		assert.equal(1,2);
	});
});