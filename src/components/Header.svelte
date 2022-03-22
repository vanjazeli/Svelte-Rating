<script>
  import Select from "./Select.svelte";
  import { items, id, tempRating } from "../stores";

  let comment = "";

  const handleSubmit = () => {
    $items = [{ id: $id, rating: $tempRating, text: comment }, ...$items];
    $id++;
    comment = "";
  };
</script>

<div class="header card">
  <p class="header__message">How would you rate our service?</p>
  <form
    class="header__form"
    action="submit"
    on:submit|preventDefault={handleSubmit}
  >
    <Select className="header__select" />
    <div class="custom-input">
      <input
        class="custom-input__input"
        type="text"
        placeholder="Comment..."
        bind:value={comment}
      />
      <button class="custom-input__button" type="submit">Submit!</button>
    </div>
  </form>
</div>
