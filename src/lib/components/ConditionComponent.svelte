<script>
  import CloseIcon from "@/lib/assets/icons/xmark-solid.svg?raw";
  import { getDefaultCondition } from "@/lib/services/condition.service";
  export let inline = false;
  export let conditionChanged = (condition) => {};
  export let onRemove = null;
  export let statement = "IF";
  export let condition = getDefaultCondition(statement.toLowerCase());
  export let isEndBlock = false;

  //   const remove = onRemove || function () {};

  const startCondition = "";
  const endCondition = "";

  const startBracket = "(";
  const endBracket = ")";

  const onConditionChange = (e) => {
    condition = e.target.textContent;
    conditionChanged(condition);
  };
</script>

<span class="condition-container" class:inline data-statement={statement}>
  <span>{startCondition}</span>

  {#if !isEndBlock && statement !== "ELSE"}
    <span class="condition-input">
      {statement}
      {startBracket}<span
        on:input={onConditionChange}
        class="condition-input-edit"
        contenteditable="true">{condition}</span
      >{endBracket}
    </span>
  {:else}
    <span class="condition-input">
      {statement}
    </span>
  {/if}

  <span>{endCondition}</span>

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
</span>

<style lang="scss">
  .condition-container {
    font-family: monospace;
    cursor: default;

    &:hover,
    &:focus {
      .close-icon {
        display: inline-block;
      }
    }
    &.inline {
      .close-icon {
        margin-left: -22px;
        margin-top: -5px;
        top: auto;
      }
    }
  }
  .condition-input {
    background-color: #ebcb8b;
    padding: 0.25rem 0.45rem;
    border-radius: 12px;
    color: #2e343f;
    cursor: default;
    &-edit {
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
    color: #2e343f;
    margin-top: -5px;
    margin-left: -7px;
  }
</style>
