function isActiveTab(tabText:string) {
  return window.location.pathname.substr(1) === tabText.toLocaleLowerCase();
}

export default isActiveTab;
