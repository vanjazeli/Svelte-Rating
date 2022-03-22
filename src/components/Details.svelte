<script>
  import { items } from "../stores";

  $: count = $items.length;
  $: average = (
    $items.reduce((accumulator, { rating }) => accumulator + rating, 0) /
    $items.length
  ).toFixed(1);
</script>

<div class="details">
  <p class="details__count">{count} Reviews</p>
  {#if $items.length != 0}
    <p class="details__average">Average rating: {average}</p>
  {/if}
</div>
