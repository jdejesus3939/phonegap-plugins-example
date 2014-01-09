/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
camera options
{ quality : 75,
  destinationType : Camera.DestinationType.DATA_URL,
  sourceType : Camera.PictureSourceType.CAMERA,
  allowEdit : true,
  encodingType: Camera.EncodingType.JPEG,
  targetWidth: 100,
  targetHeight: 100,
  popoverOptions: CameraPopoverOptions,
  saveToPhotoAlbum: false };

Camera.DestinationType = {
    DATA_URL : 0,      // Return image as base64-encoded string
    FILE_URI : 1,      // Return image file URI
    NATIVE_URI : 2     // Return image native URI (e.g., assets-library:// on iOS or content:// on Android)
};

Camera.PictureSourceType = {
    PHOTOLIBRARY : 0,
    CAMERA : 1,
    SAVEDPHOTOALBUM : 2
};

Camera.EncodingType = {
    JPEG : 0,               // Return JPEG encoded image
    PNG : 1                 // Return PNG encoded image
};

Camera.MediaType = {
    PICTURE: 0,    // allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType
    VIDEO: 1,      // allow selection of video only, WILL ALWAYS RETURN FILE_URI
    ALLMEDIA : 2   // allow selection from all media types
};

Camera.Direction = {
    BACK : 0,      // Use the back-facing camera
    FRONT : 1      // Use the front-facing camera
};
*/

var pictureSource;
// picture source
var destinationType;
// sets the format of returned value

// getPicture module ==================================================
// backbutton event module ============================================
function onLoadCamera() {
	document.addEventListener("deviceready", onDeviceReady, false);
	document.addEventListener("backbutton", null, false);
};

// setting up the API
function onDeviceReady() {
	pictureSource = navigator.camera.PictureSourceType;
	destinationType = navigator.camera.DestinationType;
}

// called by the button
function getGP() {
	document.addEventListener("deviceready", onGPexecute, false);
}

// deviceready Event Handler
function onGPexecute() {
	// Take picture using device camera and retrieve image as base64-encoded string
	navigator.camera.getPicture(onGPSuccess, onGPFailure, {
		quality : 50,
		destinationType : destinationType.DATA_URL
	});
}

// onSuccess: Called when a photo is successfully retrieved
function onGPSuccess(imageData) {
	// Uncomment to view the base64-encoded image data
	// console.log(imageData);

	// Get image handle
	var smallImage = document.getElementById('smallImage');

	// Unhide image elements
	smallImage.style.display = 'block';

	// Show the captured photo
	// The in-line CSS rules are used to resize the image
	smallImage.src = "data:image/jpeg;base64," + imageData;
}

// onFailure: fail to get the acceleration
function onGPFailure(message) {
	document.getElementById("GPResult").innerHTML = "onGPFailure: " + message;
	console.log("onGPFailure: " + message);
}

// called by the button
function getGPEdit() {
	document.addEventListener("deviceready", onGPEditexecute, false);
}

// slightly similar to onGPexecute
// differ on: allowEdit: true
function onGPEditexecute() {
	// Take picture using device camera, allow edit, and retrieve image as base64-encoded string
	navigator.camera.getPicture(onGPSuccess, onGPFailure, {
		quality : 20,
		allowEdit : true,
		destinationType : destinationType.DATA_URL
	});
}

// called by the button
function getGPhoto(source) {
	document.addEventListener("deviceready", onGPhotoexecute(source), false);
}

// event handler
function onGPhotoexecute(source) {
	// Retrieve image file location from specified source
	navigator.camera.getPicture(onGPhotoURISuccess, onGPFailure, {
		quality : 50,
		destinationType : destinationType.FILE_URI,
		sourceType : source
	});
}

// Called when a photo is successfully retrieved
function onGPhotoURISuccess(imageURI) {
	// Uncomment to view the image file URI
	// console.log(imageURI);

	// Get image handle
	var largeImage = document.getElementById('largeImage');

	// Unhide image elements
	largeImage.style.display = 'block';

	// Show the captured photo
	// The in-line CSS rules are used to resize the image
	largeImage.src = imageURI;
}

// onBackKeyDown:
function onBackKeyDown(e) {
	//e.preventDefault();
	navigator.app.backHistory();
}

// cleanup module =============================================
// supported by iOS only
function getCU() {
	document.getElementById("CUResult").innerHTML="This feature is only supported by iOS.";
}
