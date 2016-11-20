
/**
 *Class definition for the Kaltura service: captionAsset.
 **/
var KalturaCaptionAssetService = {
	/**
	 * Add caption asset.
	 * @param	entryId	string		 (optional)
	 * @param	captionAsset	KalturaCaptionAsset		 (optional)
	 * @return	KalturaCaptionAsset.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	add: function(entryId, captionAsset){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.captionAsset = captionAsset;
		return new KalturaRequestBuilder("caption_captionasset", "add", kparams);
	},
	
	/**
	 * Update content of caption asset.
	 * @param	id	string		 (optional)
	 * @param	contentResource	KalturaContentResource		 (optional)
	 * @return	KalturaCaptionAsset.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 * @return	.
	 **/
	setContent: function(id, contentResource){
		var kparams = new Object();
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new KalturaRequestBuilder("caption_captionasset", "setContent", kparams);
	},
	
	/**
	 * Update caption asset.
	 * @param	id	string		 (optional)
	 * @param	captionAsset	KalturaCaptionAsset		 (optional)
	 * @return	KalturaCaptionAsset.
	 * @return	.
	 **/
	update: function(id, captionAsset){
		var kparams = new Object();
		kparams.id = id;
		kparams.captionAsset = captionAsset;
		return new KalturaRequestBuilder("caption_captionasset", "update", kparams);
	},
	
	/**
	 * Get download URL for the asset.
	 * @param	id	string		 (optional)
	 * @param	storageId	int		 (optional, default: null)
	 * @return	string.
	 * @return	.
	 * @return	.
	 **/
	getUrl: function(id, storageId){
		if(!storageId)
			storageId = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.storageId = storageId;
		return new KalturaRequestBuilder("caption_captionasset", "getUrl", kparams);
	},
	
	/**
	 * Get remote storage existing paths for the asset.
	 * @param	id	string		 (optional)
	 * @return	KalturaRemotePathListResponse.
	 * @return	.
	 * @return	.
	 **/
	getRemotePaths: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("caption_captionasset", "getRemotePaths", kparams);
	},
	
	/**
	 * Markss the caption as default and removes that mark from all other caption assets of the entry..
	 * @param	captionAssetId	string		 (optional)
	 * @return	.
	 * @return	.
	 **/
	setAsDefault: function(captionAssetId){
		var kparams = new Object();
		kparams.captionAssetId = captionAssetId;
		return new KalturaRequestBuilder("caption_captionasset", "setAsDefault", kparams);
	},
	
	/**
	 * .
	 * @param	captionAssetId	string		 (optional)
	 * @return	KalturaCaptionAsset.
	 * @return	.
	 **/
	get: function(captionAssetId){
		var kparams = new Object();
		kparams.captionAssetId = captionAssetId;
		return new KalturaRequestBuilder("caption_captionasset", "get", kparams);
	},
	
	/**
	 * List caption Assets by filter and pager.
	 * @param	filter	KalturaAssetFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaCaptionAssetListResponse.
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
		return new KalturaRequestBuilder("caption_captionasset", "list", kparams);
	},
	
	/**
	 * .
	 * @param	captionAssetId	string		 (optional)
	 * @return	.
	 * @return	.
	 **/
	deleteAction: function(captionAssetId){
		var kparams = new Object();
		kparams.captionAssetId = captionAssetId;
		return new KalturaRequestBuilder("caption_captionasset", "delete", kparams);
	}
}
