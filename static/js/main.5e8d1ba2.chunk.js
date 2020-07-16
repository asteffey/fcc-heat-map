(this["webpackJsonpfcc-heatmap"]=this["webpackJsonpfcc-heatmap"]||[]).push([[0],{100:function(t,e,n){},103:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(80),i=n.n(c),o=(n(94),n(86)),l=n(55),s=n(57),u=n(58),h=function(t){var e=Object(a.useRef)();return Object(a.useEffect)((function(){return t(u.select(e.current))}),[t]),e};function d(){var t=Object(l.a)(["\n    display: block;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    svg {\n        display: block;\n        width: 100%;\n        height: 100%;\n    }\n"]);return d=function(){return t},t}var f=s.a.div(d()),p=function(t){var e=t.drawSvg,n=t.viewBox,c=n.width,i=void 0===c?100:c,o=n.height,l=void 0===o?100:o,s=Object(a.useCallback)((function(t){var n=t.append("svg").attr("preserveAspectRatio","xMidYMid meet").attr("viewBox","0 0 ".concat(i," ").concat(l));e(n,i,l)}),[e,i,l]),u=h(s);return r.a.createElement(f,{ref:u})},m=n(71),g=n(83),v=n(85),y=Object(m.a)(Object(m.a)({},u),{},{tip:g.a,legendColor:v.a});y.selection.prototype.appendForEach=function(t,e){return this.selectAll(null).data(e).enter().append(t)},y.selection.prototype.forEach=function(t){return this.each((function(e,n,a){var r=y.select(this);t(r,e,n,a)}))},y.selection.prototype.attrs=function(t){if("function"===typeof t)this.forEach((function(e,n){return e.attrs(t(n))}));else for(var e in t)this.attr(e,t[e]);return this};var x=y,w={top:15,right:35,bottom:115,left:80};function b(t,e,n){var a=t.baseTemperature,r=t.monthlyVariance.map((function(t){var e=t.year,n=t.month,r=t.variance;return{year:e,month:n-1,temperature:a+r}})),c=x.extent(r,(function(t){return t.year})),i=c[1]-c[0]+1,o=n/12,l=Math.ceil(e/i),s=x.scaleLinear().range([0,n-o]).domain(x.extent(r,(function(t){return t.month}))),u=x.scaleLinear().range([0,e-l]).domain(c);return r.forEach((function(t){t.x=u(t.year),t.y=s(t.month)})),{width:e,height:n,data:r,years:i,cellWidth:l,cellHeight:o,monthScale:s,yearScale:u,colorScale:x.scaleSequential(x.extent(r,(function(t){return t.temperature})).reverse(),x.interpolateRdYlBu)}}function k(t){var e=new Date(0);return e.setUTCMonth(t),x.utcFormat("%B")(e)}function E(t,e,n){var a=e.data,r=e.cellWidth,c=e.cellHeight,i=e.colorScale;t.appendForEach("rect",a).attrs((function(t){var e=t.x,n=t.y,a=t.year,i=t.month,o=t.temperature;return{class:"cell",x:e,y:n,width:r,height:c,"data-year":a,"data-month":i,"data-temp":o}})).style("fill",(function(t){var e=t.temperature;return i(e)})).on("mouseover",n.show).on("mouseout",n.hide)}function S(t,e){var n=e.cellWidth,a=e.height,r=e.yearScale,c=e.years;t.append("g").attrs({id:"x-axis",transform:"translate(".concat(n/2,", ").concat(a,")")}).call(x.axisBottom(r).ticks(c).tickFormat(x.format("d")).tickSizeOuter(0)).call((function(t){return t.selectAll(".tick").attrs({id:j,class:F}).call((function(t){return t.select("text").style("text-anchor","end").attrs({dx:"1em",dy:"0.7em"})}))}))}var j=function(t){return"year-tick-".concat(t)},F=function(t){return t%10===0?"tick":"tick hidden"};function B(t,e){var n=e.cellHeight,a=e.monthScale;t.append("g").attrs({id:"y-axis",transform:"translate(0, ".concat(n/2,")")}).call(x.axisLeft(a).tickFormat(k)).call((function(t){return t.selectAll(".tick").attrs({id:O}).call((function(t){return t.select("text").style("text-anchor","end").attrs({dx:"0.3em",dy:"-0.1em",transform:"rotate(-45)"})}))}))}var O=function(t){return"year-tick-".concat(t)};function T(t,e){var n=e.yearScale,a=e.years,r=e.height;t.append("g").attrs({id:"year-grid",transform:"translate(0, ".concat(r,")")}).call(x.axisBottom(n).ticks(a).tickFormat("").tickSize(-r)).call((function(t){return t.selectAll(".tick").attrs({class:"",id:A})}))}var A=function(t){return"year-grid-".concat(t)};function C(t,e){var n=e.monthScale,a=e.width;t.append("g").attrs({id:"month-grid",transform:"translate(".concat(a,", 0)")}).call(x.axisLeft(n).tickFormat("").tickSize(a)).call((function(t){return t.selectAll(".tick").attrs({class:"",id:W})}))}var W=function(t){return"year-grid-".concat(t)};function z(t,e){var n=e.width,a=e.height;t.append("rect").attrs({id:"chart-border",x:0,y:0,width:n,height:a,fill:"none",stroke:"black"})}function H(t,e,n){var a=e.data,r=e.cellWidth,c=e.cellHeight;t.appendForEach("rect",a).attrs((function(t){return{x:t.x,y:t.y,width:r,height:c,"fill-opacity":0}})).on("mouseover",(function(){L.apply(this,arguments),n.show.apply(this,arguments)})).on("mouseout",(function(){R.apply(this,arguments),n.hide.apply(this,arguments)}))}function L(t){for(var e=t.month,n=t.year,a=n-4;a<=n+4;a++)x.select("#".concat(j(a))).classed("hidden",a!==n);for(var r=0,c=[j(n),A(n),A(n+1),O(e),W(e),W(e+1)];r<c.length;r++){var i=c[r];x.select("#".concat(i)).classed("highlighted",!0)}}function R(t){for(var e=t.month,n=t.year,a=n-4;a<=n+4;a++)x.select("#".concat(j(a))).attr("class",F);for(var r=0,c=[j(n),A(n),A(n+1),O(e),W(e),W(e+1)];r<c.length;r++){var i=c[r];x.select("#".concat(i)).classed("highlighted",!1)}}function M(t,e){var n=e.colorScale,a=e.height,r=e.width,c=a+60;t.append("g").attr("id","legend").style("font-size","10px").call(x.legendColor().orient("horizontal").ascending(!0).title("Temperatures (\u2103)").shape("rect").shapePadding(0).shapeHeight(15).shapeWidth((r-20)/40).cells(40).labelFormat(x.format(".1f")).scale(n)).call((function(t){var e=t.node().getBBox(),n=e.x,a=e.y,r=e.width,i=e.height;t.attr("transform","translate(".concat(10,", ").concat(c,")")),t.insert("rect",".legendCells").attrs({id:"legend-background",x:n-10,y:a-10,width:r+20,height:i+20})}))}var P=function(t,e,n){var a=function(t,e,n,a){var r=a.left,c=a.top,i=a.right,o=a.bottom;return t.append("rect").attrs({id:"background",x:0,y:0,width:e,height:n}),{chart:t.append("g").attr("transform","translate(".concat(r,", ").concat(c,")")),width:e-r-i,height:n-i-o}}(t,e,n,w),r=a.chart,c=a.width,i=a.height;x.json("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json").then((function(t){var e=new b(t,c,i),n=function(t,e){var n=e.cellWidth,a=e.width,r=4*n;function c(e){return e*t.node().getBoundingClientRect().width/a}function i(t){return t+r+150>a}return x.tip().direction((function(t){return i(t.x)?"w":"e"})).offset((function(t){var e=i(t.x)?-1:1;return[0,c(r)*e]})).attr("id","tooltip").attr("data-year",(function(t){return t.year})).style("font-size",(function(){return"".concat(c(15),"px")})).html((function(t){var e=t.year,n=t.month,a=t.temperature;return"\n            ".concat(k(n)," ").concat(e,"<br/>\n            ").concat(a.toFixed(2)," &#8451;\n        ")}))}(r,e);r.call(n).call(E,e,n).call(S,e).call(B,e).call(T,e).call(C,e).call(z,e).call(H,e,n).call(M,e)}))},q=(n(100),n(84));function D(){var t=Object(l.a)(["\n    padding: 10px;\n    height: calc(100vh - ",");\n"]);return D=function(){return t},t}var G=s.a.div(D(),(function(t){var e=t.marginTop;return"".concat(e,"px")})),J=function(){var t=Object(q.a)(),e=Object(o.a)(t,2),n=e[0],a=e[1].height;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{id:"title",ref:n},"Average Global Temperature"),r.a.createElement("h3",{id:"description",ref:n},"Average Global Land-Surface Temperatures from 1753 to 2015"),r.a.createElement(G,{marginTop:a+100},r.a.createElement(p,{drawSvg:P,viewBox:{width:1600,height:900}})))},Y=n(70),I=function(){return Object(Y.useFccTest)({fccTest:Y.FccTests.heat_map,queryParam:"fcc-test"}),r.a.createElement("main",null,r.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},89:function(t,e,n){t.exports=n(103)},94:function(t,e,n){}},[[89,1,2]]]);
//# sourceMappingURL=main.5e8d1ba2.chunk.js.map