<script>
  import { onMount } from "svelte";
  import data from "./demo-data.json";
  import { TemplateEditor } from "@/classes/TemplateEditor";
  import { transform } from "@/services/transform";

  let editor = null;
  const placeholder = "Start writing here";

  const demoData = data;

  onMount(() => {
    editor = new TemplateEditor({
      holder: "editorjs",
      placeholder,
      data: demoData,
    });
  });

  const downloadEJS = async () => {
    const ejs = await transform.toEJS(editor);
    var pom = document.createElement("a");
    pom.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(ejs)
    );
    pom.setAttribute("download", "index.html");

    if (document.createEvent) {
      var event = document.createEvent("MouseEvents");
      event.initEvent("click", true, true);
      pom.dispatchEvent(event);
    } else {
      pom.click();
    }
  };
</script>

<div class="demo">
  <div class="top-menu">
    <button on:click={downloadEJS}> Export to EJS </button>
  </div>
  <div id="editorjs"></div>
</div>

<style>
  .top-menu {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1;
    background-color: lightgray;
    padding: 1rem;
    border-top: 1px solid black;
  }
</style>
