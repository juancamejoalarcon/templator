<script>
  import { onMount } from "svelte";
  import { setQueryParam, getQueryParam } from "@/demo/services/query-params";

  const types = ["ejs", "jinja"];

  export let download = (data) => {};
  export let selectedType = "ejs";

  const selectDemo = () => {
    setQueryParam("export", selectedType);
  };

  onMount(() => {
    const qParam = getQueryParam("export");
    let data = {};
    if (qParam) {
      selectedType = qParam;
    }
  });
</script>

<div>
  <label for="demos">Export to:</label>
  <select
    name="demos"
    id="demos"
    bind:value={selectedType}
    on:change={selectDemo}
  >
    {#each types as type}
      <option value={type}>
        {type}
      </option>
    {/each}
  </select>
  <button on:click={() => download(selectedType)}>Download</button>
</div>

<style>
</style>
