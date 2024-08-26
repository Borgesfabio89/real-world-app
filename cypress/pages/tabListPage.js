class TabListPage {
  selectorsList() {
    const selectors = {
      tabList: "[role='tablist']",
    };
    return selectors;
  }
  checkTabList() {
    cy.get(this.selectorsList().tabList).should("be.visible");
  }
}

export default TabListPage;
