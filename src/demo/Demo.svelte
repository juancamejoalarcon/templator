<script>
  import { onMount } from "svelte";
  import { Templator } from "@/core/Templator";
  import { getQueryParam } from "./services/query-params";
  import { transform } from "@/services/transform";
  import { downloadHTML } from "./download";

  import IndentButton from "./components/IndentButton.svelte";
  import SelectDemoButton from "./components/SelectDemo/SelectDemoButton.svelte";
  import Export from "./components/Export.svelte";

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
  };

  const download = async (type) => {
    const editorOutputData = await editor.save();
    const ejs = await transform(editorOutputData, type);
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
      <Export {download} />
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
