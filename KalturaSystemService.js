
/**
 *Class definition for the Kaltura service: system.
 **/
var KalturaSystemService = {
	/**
	 * .
	 **/
	ping: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "ping", kparams);
	},
	
	/**
	 * .
	 **/
	pingDatabase: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "pingDatabase", kparams);
	},
	
	/**
	 * .
	 **/
	getTime: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "getTime", kparams);
	},
	
	/**
	 * .
	 **/
	getVersion: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "getVersion", kparams);
	}
}
