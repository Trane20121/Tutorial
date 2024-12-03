sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("tutorial.controller.App", {});
  }
);

/*       onInit() {
        const oData = {
          recipient: {
            name: "World",
          },
        };
        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
        const i18nModel = new ResourceModel({
          bundleName: "tutorial.i18n.i18n"
        });
        this.getView().setModel(i18nModel, "i18n");
      }

      onSayHelloButtonPress() {
        /*MessageToast.show("Hello World");*/
/* const oBundle = this.getView().getModel("i18n").getResourceBundle();
        const sRecipient = this.getView().getModel().getProperty("/recipient/name");
        const sMsg = oBundle.getText("helloMsg", [sRecipient]);
MessageToast.show(sMsg);
        */
