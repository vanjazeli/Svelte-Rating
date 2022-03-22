<script>
  export let className;
  import { tempRating } from "../stores";

  const handleInput = (e) => {
    $tempRating = parseInt(e.target.value);
  };
</script>

<div class="{className} custom-select">
  <select
    class="custom-select__select"
    name="rating"
    id="rating"
    on:input={handleInput}
  >
    <option class="custom-select__option" value="10">10</option>
    <option class="custom-select__option" value="9">9</option>
    <option class="custom-select__option" value="8">8</option>
    <option class="custom-select__option" value="7">7</option>
    <option class="custom-select__option" value="6">6</option>
    <option class="custom-select__option" value="5">5</option>
    <option class="custom-select__option" value="4">4</option>
    <option class="custom-select__option" value="3">3</option>
    <option class="custom-select__option" value="2">2</option>
    <option class="custom-select__option" value="1">1</option>
  </select>
  <span class="custom-select__cover" />
</div>
