function withPlatform(ios: string, android: string) {
    return driver.isIOS ? $(ios) : $(android) //ios면 ios 아니면, and
}

function getByText(text: string) {
    return withPlatform(`//*[@name="${text}"]`, `//*[@content-desc="${text}"]`)
}
function getByTextV2(text: string) {
    return withPlatform(`//*[@name="${text}"]`, `//*[@text="${text}"]`)
}



function getById(id: string) {
    return withPlatform(`/~${id}]`, `//*[@resource-id="${id}"]`)
}

export const selectors = {
    getByText,
    getById,
    getByTextV2
}