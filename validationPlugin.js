'use strict';

(function () {
    'use strict';

    window.nsGmx = window.nsGmx || {};

    var pluginName = 'crisismap-validation-plugin';

    var publicInterface = {
        pluginName: pluginName,

        afterViewer: function afterViewer(params, map) {
            if (window.nsGmx) {
                if (params.layerId) {
                    var layer = nsGmx.gmxMap.layersByID[layerId];

                    console.log(layer);
                }
            }
        }
    };

    if (window.gmxCore) {
        window.gmxCore.addModule(pluginName, publicInterface, {
            css: 'plugins/validationPlugin/css/main.css',
            init: function init(module, path) {}
        });
    } else {
        window.nsGmx[pluginName] = publicInterface;
    }
})();
