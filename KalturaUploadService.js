
/**
 *Class definition for the Kaltura service: upload.
 **/
var KalturaUploadService = {
	/**
	 * .
	 * @param	fileData	file		The file data (optional)
	 **/
	upload: function(fileData){
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("upload", "upload", kparams, kfiles);
	},
	
	/**
	 * .
	 * @param	fileName	string		 (optional)
	 **/
	getUploadedFileTokenByFileName: function(fileName){
		var kparams = new Object();
		kparams.fileName = fileName;
		return new KalturaRequestBuilder("upload", "getUploadedFileTokenByFileName", kparams);
	}
}
