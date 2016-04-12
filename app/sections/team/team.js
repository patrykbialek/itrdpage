System.register(['./team.component', './team-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (team_component_1_1) {
                exportStar_1(team_component_1_1);
            },
            function (team_detail_component_1_1) {
                exportStar_1(team_detail_component_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=team.js.map