<script>
  import ListItem from "./ListItem.svelte";
  import Details from "./Details.svelte";
  import { items } from "../stores";
</script>

<Details />

{#each $items as item, i (i)}
  <ListItem index={i} rating={item.rating} text={item.text} />
{/each}
