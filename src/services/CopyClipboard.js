export function copyClipboard() {
  const copyText = document.getElementById("pass");
  copyText.select();
  copyText.setSelectionRange(0, copyText.value.length);
  document.execCommand("copy");

  /* child.innerHTML = "Copied!";
  setTimeout(() => {
    child.innerHTML = "Copy";
  }, 200); */
}
