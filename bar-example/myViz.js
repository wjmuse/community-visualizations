!function(R,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("dscc",[],e):"object"==typeof exports?exports.dscc=e():R.dscc=e()}(window,function(){return function(C){var t={};function n(R){if(t[R])return t[R].exports;var e=t[R]={i:R,l:!1,exports:{}};return C[R].call(e.exports,e,e.exports,n),e.l=!0,e.exports}return n.m=C,n.c=t,n.d=function(R,e,C){n.o(R,e)||Object.defineProperty(R,e,{enumerable:!0,get:C})},n.r=function(R){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(R,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(R,"__esModule",{value:!0})},n.t=function(e,R){if(1&R&&(e=n(e)),8&R)return e;if(4&R&&"object"==typeof e&&e&&e.__esModule)return e;var C=Object.create(null);if(n.r(C),Object.defineProperty(C,"default",{enumerable:!0,value:e}),2&R&&"string"!=typeof e)for(var t in e)n.d(C,t,function(R){return e[R]}.bind(null,t));return C},n.n=function(R){var e=R&&R.__esModule?function(){return R.default}:function(){return R};return n.d(e,"a",e),e},n.o=function(R,e){return Object.prototype.hasOwnProperty.call(R,e)},n.p="",n(n.s="./src/index.ts")}({"./src/index.ts":function(R,N,e){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(R){for(var e,C=1,t=arguments.length;C<t;C++)for(var n in e=arguments[C])Object.prototype.hasOwnProperty.call(e,n)&&(R[n]=e[n]);return R}).apply(this,arguments)};Object.defineProperty(N,"__esModule",{value:!0});var _=e("./src/types.ts");!function(R){for(var e in R)N.hasOwnProperty(e)||(N[e]=R[e])}(e("./src/types.ts")),N.getWidth=function(){return document.body.clientWidth},N.getHeight=function(){return document.documentElement.clientHeight};var n=function(){return window.frameElement.getAttribute("component-id")};N.parseImage=function(R){var e=R.split("�覉�"),C=e[0],t=e[1];return{altText:e[2],originalUrl:C,proxiedUrl:t}};var E=function(R){return R.type===_.ConfigDataElementType.DIMENSION||R.type===_.ConfigDataElementType.METRIC},r=function(R){return R===_.ConfigDataElementType.DIMENSION?-1:1},i=function(R){var e=[];R.config.data.forEach(function(R){R.elements.forEach(function(R){e.push(R)})});var C=function(R,C){return R.map(function(R,e){return{item:R,index:e}}).sort(function(R,e){return C(R.item,e.item)||R.index-e.index}).map(function(R){return R.item})}(e.filter(E),function(R,e){return r(R.type)-r(e.type)}),t=[];return C.forEach(function(R){R.value.forEach(function(){return t.push(R.id)})}),t};N.fieldsByConfigId=function(R){var e=function(R){return R.fields.reduce(function(R,e){return R[e.id]=e,R},{})}(R),C={};return R.config.data.forEach(function(R){R.elements.forEach(function(R){C[R.id]=R.value.map(function(R){return e[R]})})}),C};var C=function(R){var e={};return(R.config.style||[]).forEach(function(R){R.elements.forEach(function(R){if(void 0!==e[R.id])throw new Error("styleIds must be unique. Your styleId: '"+R.id+"' is used more than once.");e[R.id]={value:R.value,defaultValue:R.defaultValue}})},{}),e},t=function(R){return R.config.themeStyle},U=function(R){switch(R){case _.DSInteractionType.FILTER:return _.InteractionType.FILTER}},Y=function(R){var e=R.config.interactions;return void 0===e?{}:e.reduce(function(R,e){var C=e.supportedActions.map(U),t={type:U(e.value.type),data:e.value.data};return R[e.id]={value:t,supportedActions:C},R},{})};N.tableTransform=function(R){return{tables:function(R){var e,t=N.fieldsByConfigId(R),C=i(R),n={},E=C.map(function(R){void 0===n[R]?n[R]=0:n[R]++;var e=n[R],C=t[R][e];return o({},C,{configId:R})}),r=((e={})[_.TableType.DEFAULT]={headers:[],rows:[]},e);return R.dataResponse.tables.forEach(function(R){r[R.id]={headers:E,rows:R.rows}}),r}(R),fields:N.fieldsByConfigId(R),style:C(R),theme:t(R),interactions:Y(R)}},N.objectTransform=function(R){return{tables:function(R){var e,C=i(R),t=((e={})[_.TableType.DEFAULT]=[],e);return R.dataResponse.tables.forEach(function(R){var e=R.rows.map(function(e){return function(R){var t={};return function(C,t){return C.length<t.length?C.map(function(R,e){return[R,t[e]]}):t.map(function(R,e){return[C[e],R]})}(R,e).forEach(function(R){var e=R[0],C=R[1];void 0===t[C]&&(t[C]=[]),t[C].push(e)},{}),t}}(C));t[R.id]=e}),t}(R),fields:N.fieldsByConfigId(R),style:C(R),theme:t(R),interactions:Y(R)}},N.subscribeToData=function(e,C){if(C.transform!==N.tableTransform&&C.transform!==N.objectTransform)throw new Error("Only the built in transform functions are supported.");var R=function(R){R.data.type===_.MessageType.RENDER?e(C.transform(R.data)):console.error("MessageType: "+R.data.type+" is not supported by this version of the library.")};window.addEventListener("message",R);var t={componentId:n(),type:_.ToDSMessageType.VIZ_READY};return window.parent.postMessage(t,"*"),function(){return window.removeEventListener("message",R)}},N.sendInteraction=function(R,e,C){var t={type:_.ToDSMessageType.INTERACTION,componentId:n(),id:R,data:C};window.parent.postMessage(t,"*")},N.clearInteraction=function(R,e){var C={type:_.ToDSMessageType.INTERACTION,componentId:n(),id:R,data:void 0};window.parent.postMessage(C,"*")}},"./src/types.ts":function(R,e,C){"use strict";var t,n,E,r,N,o;Object.defineProperty(e,"__esModule",{value:!0}),(t=e.ConceptType||(e.ConceptType={})).METRIC="METRIC",t.DIMENSION="DIMENSION",(e.MessageType||(e.MessageType={})).RENDER="RENDER",(n=e.FieldType||(e.FieldType={})).YEAR="YEAR",n.YEAR_QUARTER="YEAR_QUARTER",n.YEAR_MONTH="YEAR_MONTH",n.YEAR_WEEK="YEAR_WEEK",n.YEAR_MONTH_DAY="YEAR_MONTH_DAY",n.YEAR_MONTH_DAY_HOUR="YEAR_MONTH_DAY_HOUR",n.QUARTER="QUARTER",n.MONTH="MONTH",n.WEEK="WEEK",n.MONTH_DAY="MONTH_DAY",n.DAY_OF_WEEK="DAY_OF_WEEK",n.DAY="DAY",n.HOUR="HOUR",n.MINUTE="MINUTE",n.DURATION="DURATION",n.COUNTRY="COUNTRY",n.COUNTRY_CODE="COUNTRY_CODE",n.CONTINENT="CONTINENT",n.CONTINENT_CODE="CONTINENT_CODE",n.SUB_CONTINENT="SUB_CONTINENT",n.SUB_CONTINENT_CODE="SUB_CONTINENT_CODE",n.REGION="REGION",n.REGION_CODE="REGION_CODE",n.CITY="CITY",n.CITY_CODE="CITY_CODE",n.METRO_CODE="METRO_CODE",n.LATITUDE_LONGITUDE="LATITUDE_LONGITUDE",n.NUMBER="NUMBER",n.PERCENT="PERCENT",n.TEXT="TEXT",n.BOOLEAN="BOOLEAN",n.URL="URL",n.IMAGE="IMAGE",n.CURRENCY_AED="CURRENCY_AED",n.CURRENCY_ALL="CURRENCY_ALL",n.CURRENCY_ARS="CURRENCY_ARS",n.CURRENCY_AUD="CURRENCY_AUD",n.CURRENCY_BDT="CURRENCY_BDT",n.CURRENCY_BGN="CURRENCY_BGN",n.CURRENCY_BOB="CURRENCY_BOB",n.CURRENCY_BRL="CURRENCY_BRL",n.CURRENCY_CAD="CURRENCY_CAD",n.CURRENCY_CDF="CURRENCY_CDF",n.CURRENCY_CHF="CURRENCY_CHF",n.CURRENCY_CLP="CURRENCY_CLP",n.CURRENCY_CNY="CURRENCY_CNY",n.CURRENCY_COP="CURRENCY_COP",n.CURRENCY_CRC="CURRENCY_CRC",n.CURRENCY_CZK="CURRENCY_CZK",n.CURRENCY_DKK="CURRENCY_DKK",n.CURRENCY_DOP="CURRENCY_DOP",n.CURRENCY_EGP="CURRENCY_EGP",n.CURRENCY_ETB="CURRENCY_ETB",n.CURRENCY_EUR="CURRENCY_EUR",n.CURRENCY_GBP="CURRENCY_GBP",n.CURRENCY_HKD="CURRENCY_HKD",n.CURRENCY_HRK="CURRENCY_HRK",n.CURRENCY_HUF="CURRENCY_HUF",n.CURRENCY_IDR="CURRENCY_IDR",n.CURRENCY_ILS="CURRENCY_ILS",n.CURRENCY_INR="CURRENCY_INR",n.CURRENCY_IRR="CURRENCY_IRR",n.CURRENCY_ISK="CURRENCY_ISK",n.CURRENCY_JMD="CURRENCY_JMD",n.CURRENCY_JPY="CURRENCY_JPY",n.CURRENCY_KRW="CURRENCY_KRW",n.CURRENCY_LKR="CURRENCY_LKR",n.CURRENCY_LTL="CURRENCY_LTL",n.CURRENCY_MNT="CURRENCY_MNT",n.CURRENCY_MVR="CURRENCY_MVR",n.CURRENCY_MXN="CURRENCY_MXN",n.CURRENCY_MYR="CURRENCY_MYR",n.CURRENCY_NOK="CURRENCY_NOK",n.CURRENCY_NZD="CURRENCY_NZD",n.CURRENCY_PAB="CURRENCY_PAB",n.CURRENCY_PEN="CURRENCY_PEN",n.CURRENCY_PHP="CURRENCY_PHP",n.CURRENCY_PKR="CURRENCY_PKR",n.CURRENCY_PLN="CURRENCY_PLN",n.CURRENCY_RON="CURRENCY_RON",n.CURRENCY_RSD="CURRENCY_RSD",n.CURRENCY_RUB="CURRENCY_RUB",n.CURRENCY_SAR="CURRENCY_SAR",n.CURRENCY_SEK="CURRENCY_SEK",n.CURRENCY_SGD="CURRENCY_SGD",n.CURRENCY_THB="CURRENCY_THB",n.CURRENCY_TRY="CURRENCY_TRY",n.CURRENCY_TWD="CURRENCY_TWD",n.CURRENCY_TZS="CURRENCY_TZS",n.CURRENCY_UAH="CURRENCY_UAH",n.CURRENCY_USD="CURRENCY_USD",n.CURRENCY_UYU="CURRENCY_UYU",n.CURRENCY_VEF="CURRENCY_VEF",n.CURRENCY_VND="CURRENCY_VND",n.CURRENCY_YER="CURRENCY_YER",n.CURRENCY_ZAR="CURRENCY_ZAR",(E=e.TableType||(e.TableType={})).DEFAULT="DEFAULT",E.COMPARISON="COMPARISON",E.SUMMARY="SUMMARY",(r=e.ConfigDataElementType||(e.ConfigDataElementType={})).METRIC="METRIC",r.DIMENSION="DIMENSION",r.SORT="SORT",r.MAX_RESULTS="MAX_RESULTS",(N=e.ConfigStyleElementType||(e.ConfigStyleElementType={})).TEXTINPUT="TEXTINPUT",N.SELECT_SINGLE="SELECT_SINGLE",N.CHECKBOX="CHECKBOX",N.FONT_COLOR="FONT_COLOR",N.FONT_SIZE="FONT_SIZE",N.FONT_FAMILY="FONT_FAMILY",N.FILL_COLOR="FILL_COLOR",N.BORDER_COLOR="BORDER_COLOR",N.AXIS_COLOR="AXIS_COLOR",N.GRID_COLOR="GRID_COLOR",N.OPACITY="OPACITY",N.LINE_WEIGHT="LINE_WEIGHT",N.LINE_STYLE="LINE_STYLE",N.BORDER_RADIUS="BORDER_RADIUS",N.INTERVAL="INTERVAL",N.SELECT_RADIO="SELECT_RADIO",(e.DSInteractionType||(e.DSInteractionType={})).FILTER="FILTER",(o=e.ToDSMessageType||(e.ToDSMessageType={})).VIZ_READY="vizReady",o.INTERACTION="vizAction",(e.InteractionType||(e.InteractionType={})).FILTER="FILTER"}})});
function drawViz(data) {
  let rowData = data.tables.DEFAULT;

  // set margins + canvas size
  const margin = { top: 10, bottom: 50, right: 10, left: 10 };
  const padding = { top: 15, bottom: 15 };
  const height = dscc.getHeight() - margin.top - margin.bottom;
  const width = dscc.getWidth() - margin.left - margin.right;

  // remove the svg if it already exists
  if (document.querySelector("svg")) {
    let oldSvg = document.querySelector("svg");
    oldSvg.parentNode.removeChild(oldSvg);
  }

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("height", `${height}px`);
  svg.setAttribute("width", `${width}px`);

  const fillColor =  data.style.barColor.value
  ? data.style.barColor.value.color
  : data.style.barColor.defaultValue;

  const maxBarHeight = height - padding.top - padding.bottom;
  const barWidth = width / (rowData.length * 2);

  // obtain the maximum bar metric value for scaling purposes
  let largestMetric = 0;

  rowData.forEach(function(row) {
    largestMetric = Math.max(largestMetric, row["barMetric"][0]);
  });

  rowData.forEach(function(row, i) {
    // 'barDimension' and 'barMetric' come from the id defined in myViz.json
    // 'dimId' is Data Studio's unique field ID, used for the filter interaction
    const barData = {
      dim: row["barDimension"][0],
      met: row["barMetric"][0],
      dimId: data.fields["barDimension"][0].id
    };

    // calculates the height of the bar using the row value, maximum bar
    // height, and the maximum metric value calculated earlier
    let barHeight = Math.round((barData["met"] * maxBarHeight) / largestMetric);

    // normalizes the x coordinate of the bar based on the width of the convas
    // and the width of the bar
    let barX = (width / rowData.length) * i + barWidth / 2;

    // create the "bar"
    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", barX);
    rect.setAttribute("y", maxBarHeight - barHeight);
    rect.setAttribute("width", barWidth);
    rect.setAttribute("height", barHeight);
    rect.setAttribute("data", JSON.stringify(barData));
    rect.style.fill = fillColor;
    svg.appendChild(rect);

    // add text labels
    let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    let textX = barX + barWidth / 2;
    text.setAttribute("x", textX);
    text.setAttribute("text-anchor", "middle");
    let textY = maxBarHeight + padding.top;
    text.setAttribute("y", textY);
    text.setAttribute("fill", fillColor)
    text.innerHTML = barData["dim"];

    svg.appendChild(text);
  });

  document.body.appendChild(svg);
}

const onClick = e => {
  const barData = JSON.parse(e.srcElement.attributes.data.value);
  var FILTER = dscc.InteractionType.FILTER;
  const interactionId = "onClick";
  var filterData = {
    concepts: [barData.dimId],
    values: [[barData.dim]]
  };
  dscc.sendInteraction(interactionId, FILTER, filterData);
};

// subscribe to data and style changes
dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });