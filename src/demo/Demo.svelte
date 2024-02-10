<script>
  import { onMount } from "svelte";
  import { Templator } from "@/core/Templator";
  import { getQueryParam } from "./services/query-params";
  import { transform } from "@/services/transform";
  import { downloadHTML } from "./download";

  import IndentButton from "./components/IndentButton.svelte";
  import SelectDemoButton from "./components/SelectDemo/SelectDemoButton.svelte";

  let selected;
  let editor = null;
  const placeholder = "Start writing here";
  let indent = getQueryParam("indent") === "true";

  let demoData = {};

  onMount(() => {});

  const startDemo = () => {
    editor = new Templator({
      holder: "editorjs",
      placeholder,
      data: demoData,
      config: {
        indent,
      },
    });
  };

  const onSelectDemo = (data) => {
    demoData = data ? data : demoData;
    editor?.destroy();

    setTimeout(() => startDemo(), 100);
  };

  const logData = () => {
    editor.save().then((data) => console.log(data));
    // transform.toEJS(editor).then((data) => console.log(data));
  };

  const downloadEJS = async () => {
    const ejs = await transform.toEJS(editor);
    downloadHTML(ejs);
  };
</script>

<div class="demo">
  <div class="top-menu">
    <div class="menu-button">
      <SelectDemoButton {selected} {onSelectDemo} />
    </div>
    <div class="menu-button">
      <IndentButton
        {indent}
        setIndent={(indentValue) => {
          indent = indentValue;
          onSelectDemo();
        }}
      />
    </div>
    <div class="menu-button">
      <button on:click={downloadEJS}> Export to EJS </button>
    </div>
    <div class="menu-button">
      <button on:click={logData}> Log data</button>
    </div>
  </div>
  <div id="editorjs"></div>
</div>

<style>
  .top-menu {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 9999;
    background-color: lightgray;
    padding: 1rem;
    border-top: 1px solid black;
    display: flex;
  }
  .menu-button {
    padding: 0rem 1rem;
  }
</style>
