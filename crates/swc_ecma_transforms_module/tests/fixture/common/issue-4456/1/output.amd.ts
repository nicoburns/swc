define([
    "require",
    "exports",
    ".",
    "@emotion/styled",
    "@eduzz/houston-tokens/variables/breakpoints",
    "@emotion/css"
], function(require, exports, _, _styled, _breakpoints, _css) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    function _export(target, all) {
        for(var name in all)Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
        });
    }
    _export(exports, {
        cx: ()=>_css.cx,
        clsx: ()=>_css.cx,
        keyframes: ()=>_css.keyframes,
        breakpoints: ()=>breakpoints,
        default: ()=>_default
    });
    _styled = /*#__PURE__*/ _interopRequireDefault(_styled);
    interface IStyledProp {
        className?: string;
    }
    const breakpoints = _breakpoints.breakpoinstUtils;
    const styled = _styled.default;
    const _default = styled;
});
