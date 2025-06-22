/**
 * Retrieves a cookie by name and returns the value.
 * @param {String} name The name of the cookie to get.
 * @returns {String} The value of the cookie found or null if a cookie with the given name was not found.
 */
function getCookie(name) {
    const cookieArray = document.cookie.split(';');

    for (const cookie in cookieArray) {
        const cookieKeyVal = cookie.trim().split('=');

        if (cookieKeyVal.length !== 2) continue;

        if (name === cookieKeyVal[0]) {
            return cookieKeyVal[1];
        }
    }

    return null;
}

/**
 * Sets a cookie with the given name, value, and configs.
 * @param {String} name The name of the cookie to create/update.
 * @param {String} value The value of the cookie to create/update.
 * @param {String} configs Additional configs to set for the cookie.
 */
function setCookie(name, value, configs = "") {
    document.cookie = `${name}=${value}${configs ? `;${configs}` : ""}`;
}