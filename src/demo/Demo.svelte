<script>
  import { onMount } from "svelte";
  import lorem from "./data/lorem.json";
  import contrato from "./data/contrato.json";
  import indent from "./data/indent.json";
  import { TemplateEditor } from "@/classes/TemplateEditor";
  import { transform } from "@/services/transform";
  import { downloadHTML } from "./download";

  let selected;
  let editor = null;
  const placeholder = "Start writing here";
  const demos = [
    { title: "indent", data: indent },
    { title: "contrato", data: contrato },
    { title: "lorem", data: lorem },
  ];

  let demoData = {};

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const demo = urlParams.get("demo");
    if (demo) {
      selected = demo;
      demoData = demos.find((demo) => demo.title === selected)?.data;
    }
    startDemo();
  });

  const startDemo = () => {
    editor = new TemplateEditor({
      holder: "editorjs",
      placeholder,
      data: demoData,
    });
  };

  const onSelectDemo = () => {
    demoData = demos.find((demo) => demo.title === selected)?.data;
    editor?.destroy();
    startDemo();

    if ("URLSearchParams" in window) {
      var searchParams = new URLSearchParams(window.location.search);
      searchParams.set("demo", selected);
      window.location.search = searchParams.toString();
    }
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
      <label for="demos">DEMO:</label>
      <select
        name="demos"
        id="demos"
        bind:value={selected}
        on:change={onSelectDemo}
      >
        <option value="empty">Empty</option>
        {#each demos as demo}
          <option value={demo.title}>
            {demo.title}
          </option>
        {/each}
      </select>
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
