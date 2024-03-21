var androidPlatform = "android"
var iosPlatform = "ios"

function getPlatform() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("android")) {
        return androidPlatform;
    } else if (
        userAgent.includes("iphone") ||
        userAgent.includes("ipad") ||
        userAgent.includes("ipod")
    ) {
        return iosPlatform;
    }
}

function close() {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        SharedWeb.close()
    } else {
        // iOS 호출
    }
}

function perform(uriString) {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        SharedWeb.perform(uriString)
    } else {
        // iOS 호출
    }
}

function open(uriString, options) {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        SharedWeb.open(uriString, options)
    } else {
        // iOS 호출
    }
}

function openExternal(uriString, options) {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        SharedWeb.openExternal(uriString, options)
    } else {
        // iOS 호출
    }
}

function getDeviceModel() {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        console.log(SharedWeb.getDeviceModel('getDeviceModelResult'))
       return SharedWeb.getDeviceModel()
    } else {
        // iOS 호출
        return ""
    }
}
function getDeviceModelResult(isSuccess, result) {
    alert(result.device_model)
}

function getUid() {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        return SharedWeb.getUid('getUidResult')
    } else {
        // iOS 호출
        return ""
    }
}
function getUidResult(isSuccess, result) {
    alert(result.uid)
}

function getNUid() {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        return SharedWeb.getNUid('getNUidResult')
    } else {
        // iOS 호출
        return ""
    }
}
function getNUidResult(isSuccess, result) {
    alert(result.n_uid)
}

function getAdvertisingId() {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        return SharedWeb.getAdvertisingId('getAdvertisingIdResult')
    } else {
        // iOS 호출
        return ""
    }
}
function getAdvertisingIdResult(isSuccess, result) {
    alert(result.advertising_id)
}

function getNAdvertisingId() {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        return SharedWeb.getNAdvertisingId('getNAdvertisingIdResult')
    } else {
        // iOS 호출
        return ""
    }
}
function getNAdvertisingIdResult(isSuccess, result) {
    alert(result.n_advertising_id)
}

function getAppVersion() {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        return SharedWeb.getAppVersion('getAppVersionResult')
    } else {
        // iOS 호출
        return ""
    }
}
function getAppVersionResult(isSuccess, result) {
    alert(result.app_version)
}

function getOSVersion() {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        return SharedWeb.getOSVersion('getOSVersionResult')
    } else {
        // iOS 호출
        return ""
    }
}
function getOSVersionResult(isSuccess, result) {
    alert(result.os_version)
}

function getSdkVersion() {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        return SharedWeb.getSdkVersion('getSdkVersionResult')
    } else {
        // iOS 호출
        return ""
    }
}
function getSdkVersionResult(isSuccess, result) {
    alert(result.os_version)
}


function setTitle(title) {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        SharedWeb.setTitle(title)
    } else {
        // iOS 호출

    }
}

function showAlert(message) {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        SharedWeb.showAlert(message)
    } else {
        // iOS 호출

    }
}

function showAlert(message, callback) {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        SharedWeb.showAlert(message, callback)
    } else {
        // iOS 호출
    }
}

function showDialog(message, options) {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        SharedWeb.showDialog(message, options)
    } else {
        // iOS 호출
    }
}

function onUserAction(event, params) {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        SharedWeb.onUserAction(message, options)
    } else {
        // iOS 호출
    }
}
