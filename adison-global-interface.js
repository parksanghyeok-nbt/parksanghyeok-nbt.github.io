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
    var _this = this;
    var rand_1 = 'asyncJava_' + Math.floor(Math.random() * 1000000);
    window[rand_1] = {};
    // func called from android
    window[rand_1].callback = function (isSuccess, result) {
        console.log("rand", rand_1, isSuccess, result);
        if (isSuccess)
            window[rand_1].resolve(result);
        else
            window[rand_1].reject(result);
        delete window[rand_1]; // clean up
    };

    const platform = getPlatform()
    if(platform == androidPlatform) {
        window.SharedWeb.getDeviceModel(rand_1);
    } else {
        // iOS 호출

    }

    return new Promise(function (resolve, reject) {
        window[rand_1].resolve = function (data) {
            resolve(data);
        };
        window[rand_1].reject = function (err) { return reject(err); };
    });
}

function getUid() {
    var _this = this;
    var rand_1 = 'asyncJava_' + Math.floor(Math.random() * 1000000);
    window[rand_1] = {};
    // func called from android
    window[rand_1].callback = function (isSuccess, result) {
        console.log("rand", rand_1, isSuccess, result);
        if (isSuccess)
            window[rand_1].resolve(result);
        else
            window[rand_1].reject(result);
        delete window[rand_1]; // clean up
    };

    const platform = getPlatform()
    if(platform == androidPlatform) {
        window.SharedWeb.getUid(rand_1);
    } else {
        // iOS 호출

    }

    return new Promise(function (resolve, reject) {
        window[rand_1].resolve = function (data) {
            resolve(data);
        };
        window[rand_1].reject = function (err) { return reject(err); };
    });
};

function getNUid() {
    var _this = this;
    var rand_1 = 'asyncJava_' + Math.floor(Math.random() * 1000000);
    window[rand_1] = {};
    // func called from android
    window[rand_1].callback = function (isSuccess, result) {
        console.log("rand", rand_1, isSuccess, result);
        if (isSuccess)
            window[rand_1].resolve(result);
        else
            window[rand_1].reject(result);
        delete window[rand_1]; // clean up
    };

    const platform = getPlatform()
    if(platform == androidPlatform) {
        window.SharedWeb.getNUid(rand_1);
    } else {
        // iOS 호출

    }

    return new Promise(function (resolve, reject) {
        window[rand_1].resolve = function (data) {
            resolve(data);
        };
        window[rand_1].reject = function (err) { return reject(err); };
    });
};

function getAdvertisingId() {
    var _this = this;
    var rand_1 = 'asyncJava_' + Math.floor(Math.random() * 1000000);
    window[rand_1] = {};
    // func called from android
    window[rand_1].callback = function (isSuccess, result) {
        console.log("rand", rand_1, isSuccess, result);
        if (isSuccess)
            window[rand_1].resolve(result);
        else
            window[rand_1].reject(result);
        delete window[rand_1]; // clean up
    };

    const platform = getPlatform()
    if(platform == androidPlatform) {
        window.SharedWeb.getAdvertisingId(rand_1);
    } else {
        // iOS 호출

    }

    return new Promise(function (resolve, reject) {
        window[rand_1].resolve = function (data) {
            resolve(data);
        };
        window[rand_1].reject = function (err) { return reject(err); };
    });
};


function getNAdvertisingId() {
    var _this = this;
    var rand_1 = 'asyncJava_' + Math.floor(Math.random() * 1000000);
    window[rand_1] = {};
    // func called from android
    window[rand_1].callback = function (isSuccess, result) {
        console.log("rand", rand_1, isSuccess, result);
        if (isSuccess)
            window[rand_1].resolve(result);
        else
            window[rand_1].reject(result);
        delete window[rand_1]; // clean up
    };

    const platform = getPlatform()
    if(platform == androidPlatform) {
        window.SharedWeb.getNAdvertisingId(rand_1);
    } else {
        // iOS 호출

    }

    return new Promise(function (resolve, reject) {
        window[rand_1].resolve = function (data) {
            resolve(data);
        };
        window[rand_1].reject = function (err) { return reject(err); };
    });
};

function getAppVersion() {
    var _this = this;
    var rand_1 = 'asyncJava_' + Math.floor(Math.random() * 1000000);
    window[rand_1] = {};
    // func called from android
    window[rand_1].callback = function (isSuccess, result) {
        console.log("rand", rand_1, isSuccess, result);
        if (isSuccess)
            window[rand_1].resolve(result);
        else
            window[rand_1].reject(result);
        delete window[rand_1]; // clean up
    };

    const platform = getPlatform()
    if(platform == androidPlatform) {
        window.SharedWeb.getAppVersion(rand_1);
    } else {
        // iOS 호출

    }

    return new Promise(function (resolve, reject) {
        window[rand_1].resolve = function (data) {
            resolve(data);
        };
        window[rand_1].reject = function (err) { return reject(err); };
    });
};


function getOSVersion() {
    var _this = this;
    var rand_1 = 'asyncJava_' + Math.floor(Math.random() * 1000000);
    window[rand_1] = {};
    // func called from android
    window[rand_1].callback = function (isSuccess, result) {
        console.log("rand", rand_1, isSuccess, result);
        if (isSuccess)
            window[rand_1].resolve(result);
        else
            window[rand_1].reject(result);
        delete window[rand_1]; // clean up
    };

    const platform = getPlatform()
    if(platform == androidPlatform) {
        window.SharedWeb.getOSVersion(rand_1);
    } else {
        // iOS 호출

    }

    return new Promise(function (resolve, reject) {
        window[rand_1].resolve = function (data) {
            resolve(data);
        };
        window[rand_1].reject = function (err) { return reject(err); };
    });
};

function getSdkVersion() {
    var _this = this;
    var rand_1 = 'asyncJava_' + Math.floor(Math.random() * 1000000);
    window[rand_1] = {};
    // func called from android
    window[rand_1].callback = function (isSuccess, result) {
        console.log("rand", rand_1, isSuccess, result);
        if (isSuccess)
            window[rand_1].resolve(result);
        else
            window[rand_1].reject(result);
        delete window[rand_1]; // clean up
    };

    const platform = getPlatform()
    if(platform == androidPlatform) {
        window.SharedWeb.getSdkVersion(rand_1);
    } else {
        // iOS 호출

    }

    return new Promise(function (resolve, reject) {
        window[rand_1].resolve = function (data) {
            resolve(data);
        };
        window[rand_1].reject = function (err) { return reject(err); };
    });
};

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

