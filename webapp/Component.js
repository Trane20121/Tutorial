sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "tutorial/model/models",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  (UIComponent, models, JSONModel, ResourceModel) => {
    "use strict";

    return UIComponent.extend("tutorial.Component", {
      metadata: {
        manifest: "json",
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        rootView: {
          viewName: "tutorial.view.App",
          type: "XML",
          id: "App",
        },
      },

      init() {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // set the device model
        this.setModel(models.createDeviceModel(), "device");

        // enable routing
        this.getRouter().initialize();

        //set data model
        const oData = {
          recipient: {
            name: "World",
          },
        };
        const oModel = new JSONModel(oData);
        this.setModel(oModel);

        //set i18n
        const i18nModel = new ResourceModel({
          bundleName: "tutorial.i18n.i18n",
        });
        this.setModel(i18nModel, "i18n");
      },
    });
  }
);
