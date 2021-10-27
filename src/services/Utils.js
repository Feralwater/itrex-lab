const Utils = {
    parseRequestURL: () => {
        const url = location.hash.slice(1).toLowerCase() || '/';
        const urlParts = url.split("/")
        return {
            resource: urlParts[1] || null,
            id: urlParts[2] || null,
            verb: urlParts[3] || null,
        }
    },
    onNavigate: (pathname) => {
        // window.history.pushState(
        //     {},
        //     "",
        //     window.location.origin + "#" + pathname
        // )
        window.location.replace(window.location.origin + "#" + pathname);
    },
}

export default Utils;