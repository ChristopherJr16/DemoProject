<html>
<script>

document.getElementById('txtType').addEventListener('keyup', e => {
  const copyTextInput = document.getElementById('txtCopied');
  copyTextInput.value = e.target.value;
});
<label for="txtType">Type Here</label>
<input id="txtType" />
<br />
<label for="txtCopied">Copied Text as you're typing</label>
<input id="txtCopied" />

</script>
</html>