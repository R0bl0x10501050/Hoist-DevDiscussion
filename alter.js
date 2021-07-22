try {
    const HELPFEEDBACK = document.querySelector(`tr[data-category-id="54"]`)
    const DD = document.querySelector(`tr[data-category-id="8"]`)
    DD.parentNode.insertBefore(DD, HELPFEEDBACK)
} catch {
    console.log("Not DevForum home page!")
} finally {
    document.querySelectorAll(`a[href="/"]`).forEach((element, idx, list) => {
        element.setAttribute('href', "https://devforum.roblox.com/")
    })
}