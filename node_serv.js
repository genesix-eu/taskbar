const nwwc = require("windows-window-controller");

exports.test = function (pid_or_WName, action) {
    // console.log(i + ": " + window.location);
    // console.log("Hello Marry");

    if (!isNaN(pid_or_WName)){
    	let temp_pid = Number(pid_or_WName);
    	let mt = 'pid';
    	console.log(typeof(temp_pid));
    	nwwc.hide({
    		matchType: mt,
    		matchValue: temp_pid ,
    	}).then((execRet) => console.log(execRet));
    } else {
    	let temp_pid = pid_or_WName;
    	let mt = 'title';
    	console.log(typeof(temp_pid));
    	nwwc.hide({
    		matchType: mt,
    		matchValue: temp_pid ,
    	}).then((execRet) => console.log(execRet));
    }




}






