//v2.0.0
// function install_notice() {
//     if (localStorage.getItem('install_time'))
//         return;

// v3.0.0     
installNotice();
function installNotice() {
  chrome.storage.local.get("install_time", ({ install_time }) => {
    if (install_time) {
      return;
    }
    var now = new Date().getTime();
    chrome.storage.local.set({ install_time: now });
    chrome.tabs.create({ url: `welcome-sadai.html` }, function (tab) {});
  });
}

themeColorSwitcher();
function themeColorSwitcher() {
  chrome.storage.local.get("theme", ({ theme }) => {
    if (theme == "dark") {
      chrome.storage.local.set({ theme: "light" });
    }
    else {
      chrome.storage.local.set({ theme: "dark" });
    }
  });
}