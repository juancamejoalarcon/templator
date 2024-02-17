<script>
  import { onMount } from "svelte";
  import CloseIcon from "@/lib/assets/icons/xmark-solid.svg?raw";

  export let text = "";
  export let onRemove = null;
  let container;

  //   const remove = onRemove || function () {};

  const start = "{{";
  const end = "}}";

  onMount(() => {
    container.appendChild(text);
  });
</script>

<span contenteditable="false" class="variable-container">
  <span>{start}</span>
  <span
    contenteditable="true"
    class="variable-edit-container"
    bind:this={container}
  />
  {#if onRemove}
    <span
      class="close-icon"
      on:click={onRemove}
      on:keydown={onRemove}
      role="button"
      tabindex="0"
    >
      {@html CloseIcon}
    </span>
  {/if}
  <span>{end}</span>
</span>

<style lang="scss">
  .variable-container {
    font-family: monospace;
    background-color: rgb(250, 250, 0);
    color: #2e343f;
    position: relative;
    padding: 0.2rem 0.25rem;
    border-radius: 6px;
    &:hover,
    &:focus {
      .close-icon {
        display: inline-block;
      }
    }
    .variable-edit-container {
      border: 1px solid transparent;
      outline: none;
      cursor: text;
      &:hover,
      &:focus {
        border: 1px dashed gray;
      }
    }
  }

  .close-icon {
    position: absolute;
    display: none;
    cursor: pointer;
    width: 10px;
    color: grey;
    margin-left: -8px;
    margin-top: -3px;
  }
</style>
