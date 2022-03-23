<script>
  export let index;
  export let rating;
  export let text;

  import { items } from "../stores";
  import { fade } from "svelte/transition";

  const handleClick = (index) => {
    $items.splice(index, 1);
    $items = $items;
  };
</script>

<div class="list-item card" transition:fade>
  <div class="list-item__rating">{rating}</div>
  <p class="list-item__text">
    {text}
  </p>
  <button class="list-item__remove" on:click={() => handleClick(index)}>
    &times;
  </button>
</div>
