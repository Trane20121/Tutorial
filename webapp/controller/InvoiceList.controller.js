// Copyright (c) 2024 Trane2012
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  (Controller, JSONModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("tutorial.controller.InvoiceList", {
      onInit() {
        const oViewModel = new JSONModel({
          currency: "EUR",
        });
        this.getView().setModel(oViewModel, "view");
      },

      onFilterInvoices(oEvent) {
        //costruisco l'array dei filtri
        const aFilter = [];
        const sQuery = oEvent.getParameter("query");
        if (sQuery) {
          aFilter.push(
            new Filter("ProductName", FilterOperator.Contains, sQuery)
          );
        }
        //Bindo il filtro
        const oList = this.byId("_IDGenList");
        const oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
      },
    });
  }
);
