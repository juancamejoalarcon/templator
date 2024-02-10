<script>
  import { onMount } from "svelte";
  import { setQueryParam } from "@/demo/services/query-params";
  export let setIndent = (indentation) => {};
  export let indent = false;

  onMount(() => {});
</script>

<div>
  <label>
    <input
      type="checkbox"
      bind:checked={indent}
      on:change={() => {
        setIndent(indent);
        setQueryParam("indent", indent);
      }}
    />
    Indentation
  </label>
</div>

<style>
</style>
