
const switchToggle = (toggle) => {
  if (!toggle.isOn) {
    toggle.isOn = true;
    return toggle;
  }

  toggle.isOn = false;
  return toggle;
}
