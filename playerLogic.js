/*
	Player logic
	This code controls how the theme operates in conjunction with Ecoute.
	The functions "artworkUpdate", "playerUpdate", and "trackUpdate" are automatically
	called by Ecoute (the names of these functions can be specified in your Info.plist file).
*/

function $(el) { return document.getElementById(el); }

// This function is called when the artwork needs to change with the URL to the new image file
// In reality, this is the base64-encoded image data, but it functions just as any normal
// HTTP URL would.
function artwork(artURL) {
	if (artURL == "") {
		$('art').src = "img/noartwork.png";
	} else {
		if ( $('art').src != artURL ) {
			$('art').src = artURL;
		}
	}
}

// This function is called automatically when the track changes, and receives
// a TAWrapper object as its parameter containing information on the new track.
// The full list of track properties can be found in the documentation.
function trackInfos(track) {
	var name = track.property('title');
	var artist = track.property('artist');
	var album = track.property('album');
	$('songname').innerHTML = name;
	$('artist').innerHTML = artist;
	$('album').innerHTML = album;
}

// This function toggles the class "toggle" on the #albumart element
function toggleDisc() {
	var $a = $('albumart');
	$a.className = $a.className.match(/toggle/) ? '' : 'toggle';
}
