//// [ModuleWithExportedAndNonExportedImportAlias.ts]
var B, Geometry;
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
(B || (B = {})).Line = function Line(start, end) {
    "use strict";
    _class_call_check(this, Line), this.start = start, this.end = end;
}, function(Geometry) {
    var Points = A;
    Geometry.Points = Points;
    var Lines = B, Origin = Geometry.Origin = {
        x: 0,
        y: 0
    };
    Geometry.Unit = new Lines.Line(Origin, {
        x: 1,
        y: 0
    });
}(Geometry || (Geometry = {})), Geometry.Origin, Geometry.Unit, Geometry.Lines.Line;
