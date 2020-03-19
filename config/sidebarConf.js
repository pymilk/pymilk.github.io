// python
const pythonSidebar = require("./sidebar/python")
// joy
const joySidebar = require("./sidebar/joy")
// productivity
const productivitySidebar = require("./sidebar/productivity")
// man
const manSidebar = require("./sidebar/man")
// snippet
const snippetSidebar = require("./sidebar/snippet")
// note
const noteSidebar = require("./sidebar/note")

module.exports = {
    // module
    "/python/": pythonSidebar,
    "/joy/": joySidebar,
    "/productivity/": productivitySidebar,
    "/man/": manSidebar,
    "/snippet/": snippetSidebar,
    "/note/": noteSidebar
}