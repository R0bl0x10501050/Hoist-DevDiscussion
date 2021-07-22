chrome.tabs.onCreated.addListener(newTab => {
    if (!newTab.url) { return }
    if (newTab.url.split("/")[2] == "devforum.roblox.com" && newTab.url.split("/")[2] == "") {
        console.log("Tab created & ran!")
        chrome.scripting.executeScript(
            {
                target: { tabId: newTab.id },
                files: ['alter.js'],
            }
        )
    }
})

chrome.tabs.onUpdated.addListener((tabid, newTab) => {
    if (!newTab.url) { return }
    if (newTab.url.split("/")[2] == "devforum.roblox.com" && newTab.url.split("/")[2] == "") {
        console.log("Tab updated & ran!")
        chrome.scripting.executeScript(
            {
                target: { tabId: tabid },
                files: ['alter.js'],
            }
        )
    }
})