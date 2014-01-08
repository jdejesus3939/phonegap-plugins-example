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
var watchID;

// watchAccelerometer module ==================================================
// backbutton event module ====================================================
function onLoadAccel() {
	document.addEventListener("deviceready", onWAexecute, false);
	document.addEventListener("backbutton", null, false);
};

// deviceready Event Handler
function onWAexecute() {
	watchID = navigator.accelerometer.watchAcceleration(onWASuccess, onWAFailure, {
		frequency : 50
	});
}

// onSuccess: get the snapshot of the current acceleration
function onWASuccess(accel) {
	document.getElementById("xOut").innerHTML = accel.x;
	document.getElementById("yOut").innerHTML = accel.y;
	document.getElementById("zOut").innerHTML = accel.z;
}

// onFailure: fail to get the acceleration
function onWAFailure() {
	document.getElementById("WAResult").innerHTML = "Error: " + "navigator.accelerometer.watchAcceleration is fail to load";
}

// onBackKeyDown: 
function onBackKeyDown(e) {
	//e.preventDefault();
	//navigator.app.exitApp();
}

// currentAccelerometer module =============================================
function getCA() {
	document.addEventListener("deviceready", getCApressed, false);
}

function getCApressed() {
	navigator.accelerometer.getCurrentAcceleration(onCASuccess, onCAFailure);
}

function onCASuccess(accel) {
	var time = accel.timestamp;
	var d = new Date(time);
	
	var second = d.getSeconds(),
		minute = d.getMinutes(),
		hour = d.getHours(),
		date = d.getDate(),
		month = d.getMonth() + 1,
		year = d.getFullYear() % 100;
		
	function padding(pad) {
		return (pad<10 ? "0" : "") + pad;
	}

	/*
	function padMonth(mon) {
		switch (mon) {
		case 1: return "January"; break;
		case 2: return "February"; break;
		case 3: return "March"; break;
		case 4: return "April"; break;
		case 5: return "May"; break;
		case 6: return "June"; break;
		case 7: return "July"; break;
		case 8: return "August"; break;
		case 9: return "September"; break;
		case 10: return "October"; break;
		case 11: return "November"; break;
		case 12: return "December"; break;
		default: break;
		}
	}
	*/
	
	var formattedDate = padding(hour) + ":" +
						padding(minute) + ":" +
						padding(second) + ":" + " " +
						padding(month) + "/" +
						padding(date) + "/" +
						padding(year);
						
	var txt = 'Acceleration X: ' + accel.x + '\n' +
              'Acceleration Y: ' + accel.y + '\n' +
              'Acceleration Z: ' + accel.z + '\n' +
              'Timestamp: '      + formattedDate + '\n';
	document.getElementById("CAResult").innerHTML = txt;
}

function onCAFailure() {
	document.getElementById("CAResult").innerHTML = "CA is error";
}

// clearWatch module =========================================================
function stopWatch() {
	if (watchID) {
    	navigator.accelerometer.clearWatch(watchID);
		watchID = null;
		document.getElementById("CWResult").innerHTML = "Accelerometer is cleared...\n"
		+ "watchID is " + watchID;
    }
}