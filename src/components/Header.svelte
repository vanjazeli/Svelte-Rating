<script>
  import Select from "./Select.svelte";
  import { items, id, tempRating } from "../stores";

  let comment = "";
  let countChecker = true;

  const handleSubmit = () => {
    $items = [{ id: $id, rating: $tempRating, text: comment }, ...$items];
    $id++;
    comment = "";
  };

  const handleInput = () => {
    console.log(comment.length);
    if (comment.length >= 10) {
      countChecker = false;
      console.log(countChecker);
    } else {
      countChecker = true;
      console.log(countChecker);
    }
  };

  console.log(countChecker);
</script>

<div class="header card">
  <p class="header__heading">How would you rate our service?</p>
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
        on:input={handleInput}
      />
      <button
        class="custom-input__button"
        type="submit"
        disabled={countChecker}
      >
        Submit!
      </button>
    </div>
  </form>
  {#if countChecker}
    <p class="header__message">
      Please enter a message with 10 or more characters.
    </p>
  {/if}
</div>
