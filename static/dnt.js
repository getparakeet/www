if (window.doNotTrack || navigator.doNotTrack || navigator.msDoNotTrack || 'msTrackingProtectionEnabled' in window.external) {
    if (window.doNotTrack == "1" || navigator.doNotTrack == "yes" || navigator.doNotTrack == "1" || navigator.msDoNotTrack == "1" || window.external.msTrackingProtectionEnabled()) {
        console.log("DNT is enabled. We use insights analytics, which doesn't track you. No ads or trackers. Thanks for supporting a more privacy-friendly web!")
    } else {
        console.log("DNT is disabled. We use insights analytics, which doesn't track you. No ads or trackers.")
    }

} else {
    console.log("Please update your browser to a modern browser, like Mozilla Firefox.")
}