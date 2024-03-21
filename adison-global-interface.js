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

//function getDeviceModel() {
//    const platform = getPlatform()
//    if(platform == androidPlatform) {
//        console.log(SharedWeb.getDeviceModel())
//       return SharedWeb.getDeviceModel()
//    } else {
//        // iOS 호출
//        return ""
//    }
//}

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
        return SharedWeb.getUid()
    } else {
        // iOS 호출
        return ""
    }
}

function getNUid() {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        return SharedWeb.getNUid()
    } else {
        // iOS 호출
        return ""
    }
}

function getAdvertisingId() {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        return SharedWeb.getAdvertisingId()
    } else {
        // iOS 호출
        return ""
    }
}

function getNAdvertisingId() {
    const platform = getPlatform()
    if(platform == androidPlatform) {
        return SharedWeb.getNAdvertisingId()
    } else {
        // iOS 호출
        return ""
    }
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
