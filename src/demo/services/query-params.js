export const setQueryParam = (key, value) => {
    if ("URLSearchParams" in window) {
        var searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        if (history.pushState) {
            var newurl =
                window.location.protocol +
                "//" +
                window.location.host +
                window.location.pathname +
                "?" +
                searchParams.toString();
            window.history.pushState({ path: newurl }, "", newurl);
        }
    }
}

export const getQueryParam = (key) => {
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get(key);
    console.log(param)
    return param
}