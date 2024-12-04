// Copyright (c) 2024 Trane2012
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], (Controller, History) => {
  "use strict";

  return Controller.extend("tutorial.controller.Detail", {
    onInit() {
      const oRouter = this.getOwnerComponent().getRouter();
      oRouter
        .getRoute("detail")
        .attachPatternMatched(this.onObjectMatched, this);
    },

    onObjectMatched(oEvent) {
      this.getView().bindElement({
        path:
          "/" +
          window.decodeURIComponent(
            oEvent.getParameter("arguments").invoicePath
          ),
        model: "invoice",
      });
    },

    onNavBack() {
      const oHistory = History.getInstance();
      const sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("overview", {}, true);
      }
    },
  });
});