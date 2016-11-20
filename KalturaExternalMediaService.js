
/**
 *Class definition for the Kaltura service: externalMedia.
 **/
var KalturaExternalMediaService = {
	/**
	 * Add external media entry.
	 * @param	entry	KalturaExternalMediaEntry		 (optional)
	 * @return	KalturaExternalMediaEntry.
	 **/
	add: function(entry){
		var kparams = new Object();
		kparams.entry = entry;
		return new KalturaRequestBuilder("externalmedia_externalmedia", "add", kparams);
	},
	
	/**
	 * Get external media entry by ID..
	 * @param	id	string		External media entry id (optional)
	 * @return	KalturaExternalMediaEntry.
	 * @return	.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("externalmedia_externalmedia", "get", kparams);
	},
	
	/**
	 * Update external media entry. Only the properties that were set will be updated..
	 * @param	id	string		External media entry id to update (optional)
	 * @param	entry	KalturaExternalMediaEntry		External media entry object to update (optional)
	 * @return	KalturaExternalMediaEntry.
	 * @return	.
	 **/
	update: function(id, entry){
		var kparams = new Object();
		kparams.id = id;
		kparams.entry = entry;
		return new KalturaRequestBuilder("externalmedia_externalmedia", "update", kparams);
	},
	
	/**
	 * Delete a external media entry..
	 * @param	id	string		External media entry id to delete (optional)
	 * @return	.
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("externalmedia_externalmedia", "delete", kparams);
	},
	
	/**
	 * List media entries by filter with paging support..
	 * @param	filter	KalturaExternalMediaEntryFilter		External media entry filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 * @return	KalturaExternalMediaEntryListResponse.
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("externalmedia_externalmedia", "list", kparams);
	},
	
	/**
	 * Count media entries by filter..
	 * @param	filter	KalturaExternalMediaEntryFilter		External media entry filter (optional, default: null)
	 * @return	int.
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("externalmedia_externalmedia", "count", kparams);
	}
}
