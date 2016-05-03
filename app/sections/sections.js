System.register(['./clients/clients.component', './contact/contact.component', './start/start.component', './story/story.component', './team/team.component', './team/team-detail.component', './works/works.component'], function(exports_1, context_1) {
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
            function (clients_component_1_1) {
                exportStar_1(clients_component_1_1);
            },
            function (contact_component_1_1) {
                exportStar_1(contact_component_1_1);
            },
            function (start_component_1_1) {
                exportStar_1(start_component_1_1);
            },
            function (story_component_1_1) {
                exportStar_1(story_component_1_1);
            },
            function (team_component_1_1) {
                exportStar_1(team_component_1_1);
            },
            function (team_detail_component_1_1) {
                exportStar_1(team_detail_component_1_1);
            },
            function (works_component_1_1) {
                exportStar_1(works_component_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=sections.js.map