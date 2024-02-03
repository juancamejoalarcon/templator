export const downloadHTML = (text) => {
    var pom = document.createElement("a");
    pom.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    pom.setAttribute("download", "index.html");

    if (document.createEvent) {
      var event = document.createEvent("MouseEvents");
      event.initEvent("click", true, true);
      pom.dispatchEvent(event);
    } else {
      pom.click();
    }
}