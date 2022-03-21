<script>
  import ListItem from "./ListItem.svelte";
  import { items } from "../stores";

  $: count = $items.length;
  $: average = (
    $items.reduce((accumulator, { rating }) => accumulator + rating, 0) /
    $items.length
  ).toFixed(1);
</script>

<div class="details">
  <p class="details__count">{count} Reviews</p>
  <p class="details__average">Average rating: {average}</p>
</div>

{#each $items as item, i (i)}
  <ListItem index={i} rating={item.rating} text={item.text} />
{/each}
