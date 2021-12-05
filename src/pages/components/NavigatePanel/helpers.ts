function isActiveTab(tabText: string) {
  const pattern = new RegExp(`^.*/${tabText.toLocaleLowerCase()}$`, 'g');
  return pattern.test(window.location.pathname);
}

export default isActiveTab;
