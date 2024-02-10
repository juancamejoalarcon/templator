<script>
  import { onMount } from "svelte";
  import { allDemos } from "./data";
  import { setQueryParam, getQueryParam } from "@/demo/services/query-params";

  export let onSelectDemo = (data) => {};
  export let selected = "";

  const selectDemo = () => {
    const demoData = allDemos.find((demo) => demo.title === selected)?.data;
    onSelectDemo(demoData);
    setQueryParam("demo", selected);
  };

  onMount(() => {
    const demo = getQueryParam("demo");
    let data = {};
    if (demo) {
      selected = demo;
      data = allDemos.find((demo) => demo.title === selected)?.data;
    }
    onSelectDemo(data);
  });
</script>

<div>
  <label for="demos">DEMO:</label>
  <select name="demos" id="demos" bind:value={selected} on:change={selectDemo}>
    <option value="empty">Empty</option>
    {#each allDemos as demo}
      <option value={demo.title}>
        {demo.title}
      </option>
    {/each}
  </select>
</div>

<style>
</style>
