// Copyright (c) 2024 Trane2012
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

sap.ui.define([], () => {
  "use strict";

  return {
    statusText(sStatus) {
      const oResourceBundle = this.getOwnerComponent()
        .getModel("i18n")
        .getResourceBundle();
      switch (sStatus) {
        case "A":
          return oResourceBundle.getText("invoiceStatusA");
        case "B":
          return oResourceBundle.getText("invoiceStatusB");
        case "C":
          return oResourceBundle.getText("invoiceStatusC");
        default:
          return sStatus;
      }
    },
  };
});
