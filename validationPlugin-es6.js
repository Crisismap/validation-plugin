
(function () {
    'use strict';

	window.nsGmx = window.nsGmx || {};

    let pluginName = 'crisismap-validation-plugin';

    var publicInterface = {
        pluginName: pluginName,

        afterViewer: function (params, map) {
			if (window.nsGmx) {
                if (params.layerId) {
                    let layer = nsGmx.gmxMap.layersByID[layerId];

                    console.log(layer);

                }
            }
        }
    };

    if (window.gmxCore) {
		window.gmxCore.addModule(pluginName, publicInterface, {
			css: 'plugins/validationPlugin/css/main.css',
			init: function(module, path) {}
		});
	} else {
		window.nsGmx[pluginName] = publicInterface;
	}
})();
