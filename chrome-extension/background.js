//v2.0.0
// function install_notice() {
//     if (localStorage.getItem('install_time'))
//         return;
installNotice();
function installNotice() {
  chrome.storage.local.get("install_time", ({ install_time }) => {
    // the callback runs asynchronously so you should use the value here
    if (install_time) {
      return;
    }
    var now = new Date().getTime();
    chrome.storage.local.set({ install_time: now });
    chrome.tabs.create({ url: `welcome-sadai.html` }, function (tab) {});
  });
}
