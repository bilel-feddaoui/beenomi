(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-453a8273"],{"0032":function(e,a,l){"use strict";var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("svg",{class:["idx-wp-icon","idx-wp-icon-"+e.icon,{"idx-wp-icon-spin":e.spin}],attrs:{role:"image","aria-hidden":"true",focusable:"false"}},[l("use",{attrs:{"xlink:href":"#"+e.icon}})])},n=[],i={name:"SvgIcon",props:{icon:{type:String,required:!0},spin:{type:Boolean,default:!1}}},r=i,o=(l("a4aa"),l("2877")),u=Object(o["a"])(r,t,n,!1,null,null,null);a["a"]=u.exports},"0633":function(e,a,l){"use strict";var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("idx-block",{attrs:{tag:"fieldset",className:{"form-content":!0,"form-content--disabled":e.formDisabled}}},[l("idx-block",{attrs:{className:"form-content__header"}},[l("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Default State")]),l("p",[e._v(" You can enter a default state that will automatically be output on template pages and widgets that show the state. When you create a listing and leave the state field empty, the default below will be shown. You can override the default on each listing by entering a value into the state field. ")])],1),l("idx-form-group",[l("idx-form-label",{attrs:{customClass:"form-content__label",target:e.$idxStrap.prefix+"default-state"}},[e._v("Choose Default State")]),l("idx-form-input",{attrs:{type:"text",disabled:e.formDisabled,id:e.$idxStrap.prefix+"default-state",placeholder:"Enter your default state",value:e.defaultState},on:{change:function(a){return e.$emit("form-field-update",{key:"defaultState",value:a.target.value})}}})],1),l("idx-block",{attrs:{className:"form-content__header"}},[l("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Default Currency")]),l("p",[e._v("Select a default currency symbol and optional currency code to display on listings.")])],1),l("idx-form-group",[l("idx-form-label",{attrs:{customClass:"form-content__label"}},[e._v("Currency Symbol")]),l("idx-custom-select",{attrs:{ariaLabel:"Currency Symbol",placeholder:"None",disabled:e.formDisabled,selected:e.currencySymbolSelected,options:e.currency.currencySymbols},on:{"selected-item":function(a){return e.$emit("form-field-update",{key:"currencySymbolSelected",value:a.value})}}})],1),l("idx-form-group",[l("idx-form-label",{attrs:{customClass:"form-content__label"}},[e._v("Currency Code")]),l("idx-custom-select",{attrs:{ariaLabel:"Currency Code",placeholder:"None",disabled:e.formDisabled,selected:e.currencyCodeSelected,options:e.currency.currencyCodes},on:{"selected-item":function(a){return e.$emit("form-field-update",{key:"currencyCodeSelected",value:a.value})}}})],1),l("idx-form-group",{attrs:{customClass:"form-content__toggle"}},[e._v(" Display Currency Code on Listings "),l("idx-toggle-slider",{attrs:{label:"Display Currency Code on Listings",uncheckedState:"No",checkedState:"Yes",active:e.displayCurrencyCode,disabled:e.formDisabled},on:{toggle:function(a){return e.$emit("form-field-update",{key:"displayCurrencyCode",value:!e.displayCurrencyCode})}}})],1),l("idx-block",{attrs:{className:"form-content__header"}},[l("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Default Number of Posts")]),l("p",[e._v(" The default number of posts displayed on a listing archive page is 9. Here you can set a custom number. Enter -1 to display all listing posts. "),l("i",[e._v("If you have more than 20-30 posts, it's not recommended to show all or your page will load slow.")])])],1),l("idx-form-group",[l("idx-form-label",{attrs:{customClass:"form-content__label",target:e.$idxStrap.prefix+"default-posts"}},[e._v("Number of Posts on Listing Archive Page")]),l("idx-form-input",{attrs:{type:"text",disabled:e.formDisabled,id:e.$idxStrap.prefix+"default-posts",value:e.numberOfPosts},on:{change:function(a){return e.$emit("form-field-update",{key:"numberOfPosts",value:a.target.value})}}})],1),l("idx-block",{attrs:{className:"form-content__header"}},[l("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Default Disclaimer")]),l("p",[e._v("Optionally enter a disclaimer to show on single listings. This can be overridden on individual listings.")])],1),l("idx-form-group",[l("idx-form-label",{attrs:{customClass:"form-content__label",target:e.$idxStrap.prefix+"default-disclaimer"}},[e._v("Default Disclaimer")]),l("idx-textarea",{attrs:{type:"text",disabled:e.formDisabled,id:e.$idxStrap.prefix+"default-disclaimer",placeholder:"Disclaimer text",rows:"3",value:e.defaultDisclaimer},on:{change:function(a){return e.$emit("form-field-update",{key:"defaultDisclaimer",value:a.target.value})}}})],1),l("idx-block",{attrs:{className:"form-content__header"}},[l("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Listings Slug")]),l("p",[e._v(" Optionally change the slug of the listing post type. Don't forget to "),l("a",{attrs:{href:"../wp-admin/options-permalink.php",target:"_blank"}},[e._v(" reset your permalinks ")]),e._v(" if you change the slug! ")])],1),l("idx-form-group",[l("idx-form-label",{attrs:{customClass:"form-content__label",target:e.$idxStrap.prefix+"listings-slug"}},[e._v("Listings Slug")]),l("idx-form-input",{attrs:{type:"text",disabled:e.formDisabled,id:e.$idxStrap.prefix+"listings-slug",value:e.listingSlug},on:{change:function(a){return e.$emit("form-field-update",{key:"listingSlug",value:a.target.value})}}})],1)],1)},n=[],i=(l("a9e3"),[{value:"none",label:"None"},{value:"USD",label:"United States dollar"},{value:"GBP",label:"British pound"},{value:"CAD",label:"Canadian dollar"},{value:"EUR",label:"Euro"},{value:"MXN",label:"Mexican peso"},{value:"---",label:"---"},{value:"AED",label:"United Arab Emirates dirham"},{value:"AFN",label:"Afghan afghani"},{value:"ALL",label:"Albanian lek"},{value:"AMD",label:"Armenian dram"},{value:"AOA",label:"Angolan kwanza"},{value:"ARS",label:"Argentine peso"},{value:"AUD",label:"Australian dollar"},{value:"AWG",label:"Aruban florin"},{value:"AZN",label:"Azerbaijani manat"},{value:"BAM",label:"Bosnia and Herzegovina convertible mark"},{value:"BBD",label:"Barbadian dollar"},{value:"BDT",label:"Bangladeshi taka"},{value:"BGN",label:"Bulgarian lev"},{value:"BHD",label:"Bahraini dinar"},{value:"BIF",label:"Burundian franc"},{value:"BMD",label:"Bermudian dollar"},{value:"BND",label:"Brunei dollar"},{value:"BOB",label:"Bolivian boliviano"},{value:"BRL",label:"Brazilian real"},{value:"BSD",label:"Bahamian dollar"},{value:"BTN",label:"Bhutanese ngultrum"},{value:"BWP",label:"Botswana pula"},{value:"BYR",label:"Belarusian ruble"},{value:"BZD",label:"Belize dollar"},{value:"CDF",label:"Congolese franc"},{value:"CHF",label:"Swiss franc"},{value:"CLP",label:"Chilean peso"},{value:"CNY",label:"Chinese yuan"},{value:"COP",label:"Colombian peso"},{value:"CRC",label:"Costa Rican colón"},{value:"CUP",label:"Cuban convertible peso"},{value:"CVE",label:"Cape Verdean escudo"},{value:"CZK",label:"Czech koruna"},{value:"DJF",label:"Djiboutian franc"},{value:"DKK",label:"Danish krone"},{value:"DOP",label:"Dominican peso"},{value:"DZD",label:"Algerian dinar"},{value:"EGP",label:"Egyptian pound"},{value:"ERN",label:"Eritrean nakfa"},{value:"ETB",label:"Ethiopian birr"},{value:"FJD",label:"Fijian dollar"},{value:"FKP",label:"Falkland Islands pound"},{value:"GEL",label:"Georgian lari"},{value:"GHS",label:"Ghana cedi"},{value:"GMD",label:"Gambian dalasi"},{value:"GNF",label:"Guinean franc"},{value:"GTQ",label:"Guatemalan quetzal"},{value:"GYD",label:"Guyanese dollar"},{value:"HKD",label:"Hong Kong dollar"},{value:"HNL",label:"Honduran lempira"},{value:"HRK",label:"Croatian kuna"},{value:"HTG",label:"Haitian gourde"},{value:"HUF",label:"Hungarian forint"},{value:"IDR",label:"Indonesian rupiah"},{value:"ILS",label:"Israeli new shekel"},{value:"IMP",label:"Manx pound"},{value:"INR",label:"Indian rupee"},{value:"IQD",label:"Iraqi dinar"},{value:"IRR",label:"Iranian rial"},{value:"ISK",label:"Icelandic króna"},{value:"JEP",label:"Jersey pound"},{value:"JMD",label:"Jamaican dollar"},{value:"JOD",label:"Jordanian dinar"},{value:"JPY",label:"Japanese yen"},{value:"KES",label:"Kenyan shilling"},{value:"KGS",label:"Kyrgyzstani som"},{value:"KHR",label:"Cambodian riel"},{value:"KMF",label:"Comorian franc"},{value:"KPW",label:"North Korean won"},{value:"KRW",label:"South Korean won"},{value:"KWD",label:"Kuwaiti dinar"},{value:"KYD",label:"Cayman Islands dollar"},{value:"KZT",label:"Kazakhstani tenge"},{value:"LAK",label:"Lao kip"},{value:"LBP",label:"Lebanese pound"},{value:"LKR",label:"Sri Lankan rupee"},{value:"LRD",label:"Liberian dollar"},{value:"LSL",label:"Lesotho loti"},{value:"LTL",label:"Lithuanian litas"},{value:"LVL",label:"Latvian lats"},{value:"LYD",label:"Libyan dinar"},{value:"MAD",label:"Moroccan dirham"},{value:"MDL",label:"Moldovan leu"},{value:"MGA",label:"Malagasy ariary"},{value:"MKD",label:"Macedonian denar"},{value:"MMK",label:"Burmese kyat"},{value:"MNT",label:"Mongolian tögrög"},{value:"MOP",label:"Macanese pataca"},{value:"MRO",label:"Mauritanian ouguiya"},{value:"MUR",label:"Mauritian rupee"},{value:"MVR",label:"Maldivian rufiyaa"},{value:"MWK",label:"Malawian kwacha"},{value:"MYR",label:"Malaysian ringgit"},{value:"MZN",label:"Mozambican metical"},{value:"NAD",label:"Namibian dollar"},{value:"NGN",label:"Nigerian naira"},{value:"NIO",label:"Nicaraguan córdoba"},{value:"NOK",label:"Norwegian krone"},{value:"NPR",label:"Nepalese rupee"},{value:"NZD",label:"New Zealand dollar"},{value:"OMR",label:"Omani rial"},{value:"PAB",label:"Panamanian balboa"},{value:"PEN",label:"Peruvian nuevo sol"},{value:"PGK",label:"Papua New Guinean kina"},{value:"PHP",label:"Philippine peso"},{value:"PKR",label:"Pakistani rupee"},{value:"PLN",label:"Polish złoty"},{value:"PRB",label:"Transnistrian ruble"},{value:"PYG",label:"Paraguayan guaraní"},{value:"QAR",label:"Qatari riyal"},{value:"RON",label:"Romanian leu"},{value:"RSD",label:"Serbian dinar"},{value:"RUB",label:"Russian ruble"},{value:"RWF",label:"Rwandan franc"},{value:"SAR",label:"Saudi riyal"},{value:"SBD",label:"Solomon Islands dollar"},{value:"SCR",label:"Seychellois rupee"},{value:"SDG",label:"Singapore dollar"},{value:"SEK",label:"Swedish krona"},{value:"SGD",label:"Singapore dollar"},{value:"SHP",label:"Saint Helena pound"},{value:"SLL",label:"Sierra Leonean leone"},{value:"SOS",label:"Somali shilling"},{value:"SRD",label:"Surinamese dollar"},{value:"SSP",label:"South Sudanese pound"},{value:"STD",label:"São Tomé and Príncipe dobra"},{value:"SVC",label:"Salvadoran colón"},{value:"SYP",label:"Syrian pound"},{value:"SZL",label:"Swazi lilangeni"},{value:"THB",label:"Thai baht"},{value:"TJS",label:"Tajikistani somoni"},{value:"TMT",label:"Turkmenistan manat"},{value:"TND",label:"Tunisian dinar"},{value:"TOP",label:"Tongan paʻanga"},{value:"TRY",label:"Turkish lira"},{value:"TTD",label:"Trinidad and Tobago dollar"},{value:"TWD",label:"New Taiwan dollar"},{value:"TZS",label:"Tanzanian shilling"},{value:"UAH",label:"Ukrainian hryvnia"},{value:"UGX",label:"Ugandan shilling"},{value:"UYU",label:"Uruguayan peso"},{value:"UZS",label:"Uzbekistani som"},{value:"VEF",label:"Venezuelan bolívar"},{value:"VND",label:"Vietnamese đồng"},{value:"VUV",label:"Vanuatu vatu"},{value:"WST",label:"Samoan tālā"},{value:"XAF",label:"Central African CFA franc"},{value:"XCD",label:"East Caribbean dollar"},{value:"XOF",label:"West African CFA franc"},{value:"XPF",label:"CFP franc"},{value:"YER",label:"Yemeni rial"},{value:"ZAR",label:"South African rand"},{value:"ZMW",label:"Zambian kwacha"},{value:"ZWL",label:"Zimbabwean dollar"}]),r=[{value:"none",label:"None"},{value:"&#36;",label:"$"},{value:"&#163;",label:"£"},{value:"&#8364;",label:"€"},{value:"&#165;",label:"¥"},{value:"&#8369;",label:"₱"},{value:"&#8361;",label:"₩"},{value:"&#402;",label:"ƒ"},{value:"&#8358;",label:"₦"}],o={currencyCodes:i,currencySymbols:r},u={name:"ListingsGeneral",inheritAttrs:!1,props:{currencyCodeSelected:{type:String,default:"none"},currencySymbolSelected:{type:String,default:"none"},displayCurrencyCode:{type:Boolean,default:!1},defaultDisclaimer:{type:String,default:""},numberOfPosts:{type:[Number,String],default:"9"},listingSlug:{type:String,default:"listings"},defaultState:{type:String,default:""},formDisabled:{type:Boolean,default:!1}},created:function(){this.currency=o}},s=u,d=(l("db11"),l("2877")),c=Object(d["a"])(s,t,n,!1,null,null,null);a["a"]=c.exports},"078c":function(e,a,l){"use strict";l("c5ee")},1331:function(e,a,l){"use strict";l.r(a);var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("GuidedSetupContentCard",{attrs:{cardTitle:e.cardTitle,steps:e.guidedSetupSteps},on:{"back-step":e.goBackStep,"skip-step":e.goSkipStep,continue:function(a){return e.saveHandler("listingsGeneral","listingsSettings","general")}},scopedSlots:e._u([{key:"controls",fn:function(){return[l("ListingsGeneral",e._b({attrs:{formDisabled:e.formDisabled},on:{"form-field-update":e.formUpdate}},"ListingsGeneral",e.localStateValues,!1))]},proxy:!0}])})},n=[],i=(l("96cf"),l("1da1")),r=l("5530"),o=l("2f62"),u=l("12e8"),s=l("fa47"),d=l("b387"),c=l("0633"),b=l("8be2"),p={name:"guided-setup-listings-general",inject:[u["a"].listingsSettings.repo],mixins:[s["a"],d["a"]],components:{ListingsGeneral:c["a"],GuidedSetupContentCard:b["a"]},data:function(){return{formDisabled:!1}},computed:Object(r["a"])({},Object(o["d"])({guidedSetupSteps:function(e){return e.guidedSetup.guidedSetupSteps}})),methods:Object(r["a"])({},Object(o["b"])({progressStepperUpdate:"guidedSetup/progressStepperUpdate"})),created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var l,t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.module="listingsGeneral",e.cardTitle="Configure IMPress Listings",e.continuePath="/guided-setup/listings/idx",e.skipPath="/guided-setup/agents",a.next=6,e.listingsSettingsRepository.get("general");case 6:l=a.sent,t=l.data,e.updateState(t);case 9:case"end":return a.stop()}}),a)})))()},mounted:function(){this.progressStepperUpdate([4,2,0,0])}},v=p,f=l("2877"),m=Object(f["a"])(v,t,n,!1,null,null,null);a["default"]=m.exports},"33ff":function(e,a,l){},"7a2e":function(e,a,l){"use strict";l("e35d")},"8be2":function(e,a,l){"use strict";var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("idx-dialog",{attrs:{show:!0,customClass:"gs-dialog"},on:{dismiss:e.closeDialog},scopedSlots:e._u([{key:"header",fn:function(){return[l("idx-block",{attrs:{className:"dialog-header"}},[l("idx-block",{attrs:{className:"dialog-header__title"}},[e._v(e._s(e.title))]),l("idx-block",{attrs:{className:"dialog-header__dismiss"}},[l("span",{on:{click:e.closeDialog}},[e._v("Close ×")])])],1)]},proxy:!0}])},[l("ContentCard",{attrs:{steps:e.steps,cardTitle:e.cardTitle,relatedLinks:e.relatedLinks},on:{"back-step":function(a){return e.$emit("back-step")},"skip-step":function(a){return e.$emit("skip-step")},continue:function(a){return e.$emit("continue")}},scopedSlots:e._u([{key:"description",fn:function(){return[e._t("description")]},proxy:!0},{key:"controls",fn:function(){return[e._t("controls")]},proxy:!0}],null,!0)})],1)},n=[],i=l("5530"),r=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("idx-block",{attrs:{className:"content-card"}},[l("idx-block",{attrs:{className:"content-card__stepper"}},e._l(e.steps,(function(a){return l("idx-progress-stepper",e._b({key:a.name,scopedSlots:e._u([{key:"complete",fn:function(){return[l("svg-icon",{attrs:{icon:"check"}})]},proxy:!0},{key:"icon",fn:function(){return[l("svg-icon",{attrs:{icon:a.icon}})]},proxy:!0}],null,!0)},"idx-progress-stepper",Object.assign({},a),!1))})),1),l("idx-block",{attrs:{className:"content-card__content",role:"tabpanel"}},[l("h1",[e._v(e._s(e.cardTitle))]),e._t("description"),e._t("controls")],2),l("idx-block",{attrs:{className:"content-card__sidebar"}},[l("RelatedLinks",{attrs:{relatedLinks:e.relatedLinks}})],1),l("idx-block",{attrs:{className:"content-card__footer"}},[l("idx-block",{attrs:{className:"content-card__buttons"}},[l("idx-button",{attrs:{size:"lg",theme:"light"},on:{click:function(a){return e.$emit("back-step")}}},[e._v("← Back")]),l("idx-button",{attrs:{size:"lg",theme:"link",customClass:"btn-link"},on:{click:function(a){return e.$emit("skip-step")}}},[e._v("Skip")]),l("idx-button",{attrs:{size:"lg"},on:{click:function(a){return e.$emit("continue")}}},[e._v("Continue")])],1)],1)],1)},o=[],u=l("bb2b"),s=l("0032"),d={name:"ContentCard",components:{RelatedLinks:u["a"],SvgIcon:s["a"]},props:{cardTitle:{type:String,default:""},steps:{type:Array,default:function(){return[]}},relatedLinks:{type:Array,default:function(){return[]}}},mounted:function(){document.body.classList.add("".concat(this.$idxStrap.prefix,"modal-open"))},beforeDestroy:function(){document.body.classList.remove("".concat(this.$idxStrap.prefix,"modal-open"))}},c=d,b=(l("eb98"),l("2877")),p=Object(b["a"])(c,r,o,!1,null,null,null),v=p.exports,f=l("2f62"),m={name:"GuidedSetupContentCard",components:{ContentCard:v},props:{cardTitle:{type:String,default:""},relatedLinks:{type:Array,default:function(){return[]}},steps:{type:Array,default:function(){return[]}}},data:function(){return{title:"IMPress for IDX Broker Setup"}},computed:Object(i["a"])({},Object(f["c"])({changedModules:"guidedSetup/changedModules"})),methods:Object(i["a"])(Object(i["a"])({},Object(f["b"])({setItem:"guidedSetup/setItem"})),{},{closeDialog:function(){for(var e=0;e<this.changedModules.length;e++)this.setItem({key:this.changedModules[e].module,value:{changes:{},module:this.changedModules[e].module,path:this.changedModules[e].path}});this.showDialog=!1,this.$router.push({path:"/settings/general"},(function(){location.reload()}))}})},g=m,h=(l("7a2e"),Object(b["a"])(g,t,n,!1,null,null,null));a["a"]=h.exports},a4aa:function(e,a,l){"use strict";l("33ff")},b387:function(e,a,l){"use strict";l("b64b");var t=l("ade3"),n=l("5530");a["a"]={data:function(){return{formChanges:{},module:""}},computed:{localStateValues:function(){return Object(n["a"])(Object(n["a"])(Object(n["a"])({},this.$store.state[this.module]),this.$store.state.guidedSetup[this.module].changes),this.formChanges)},formIsUpdated:function(){return Object.keys(this.formChanges).length>0}},methods:{formUpdate:function(e){var a=Object(t["a"])({},e.key,e.value);this.formChanges=Object(n["a"])(Object(n["a"])({},this.formChanges),a)}},beforeRouteLeave:function(e,a,l){if(this.formIsUpdated){var t=window.confirm("Do you really want to leave? You have unsaved changes!");t?l():l(!1)}else l()}}},bb2b:function(e,a,l){"use strict";var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("idx-card",[l("idx-card-header",[e._v(e._s(e.title))]),l("idx-card-body",[l("idx-list",{attrs:{unstyled:""}},[e._l(e.relatedLinks,(function(a){return l("idx-list-item",{key:a.href},[l("a",{attrs:{href:a.href,target:"_blank"}},[e._v(e._s(a.text))])])})),l("idx-list-item",[l("a",{attrs:{href:"https://middleware.idxbroker.com/mgmt/",target:"_blank"}},[e._v("IDX Broker Middleware")])]),l("idx-list-item",[l("a",{attrs:{href:"https://www.idxbroker.com/",target:"_blank"}},[e._v("Sign up for IDX Broker")])])],2)],1)],1)},n=[],i={name:"RelatedLinks",props:{title:{type:String,default:"Related Links"},relatedLinks:{type:Array,default:function(){return[]}}}},r=i,o=(l("078c"),l("2877")),u=Object(o["a"])(r,t,n,!1,null,"28b01ccf",null);a["a"]=u.exports},c5ee:function(e,a,l){},d537:function(e,a,l){},d90c:function(e,a,l){},db11:function(e,a,l){"use strict";l("d90c")},e35d:function(e,a,l){},eb98:function(e,a,l){"use strict";l("d537")},fa47:function(e,a,l){"use strict";var t=l("5530"),n=l("2f62");a["a"]={computed:Object(t["a"])({},Object(n["d"])({hasChanges:function(e){return e.guidedSetup.hasChanges}})),methods:{goBackStep:function(){this.$router.go(-1)},goSkipStep:function(){this.$router.push({path:this.skipPath})},updateState:function(e){for(var a in e)this.$store.dispatch("".concat(this.module,"/setItem"),{key:a,value:e[a]})},saveAction:function(){this.updateState(this.formChanges),this.formChanges={}},saveHandler:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.formIsUpdated?(this.$store.dispatch("guidedSetup/setItem",{key:"hasChanges",value:!0}),this.$store.dispatch("guidedSetup/setItem",{key:e,value:{changes:"omnibar"===e?this.localStateValues:this.formChanges,module:""!==a?a:this.module,path:l}}),this.formChanges={},this.$router.push({path:this.continuePath})):this.$router.push({path:this.continuePath})}},beforeRouteLeave:function(e,a,l){if("/settings/general"===e.path&&this.hasChanges){var t=window.confirm("Do you really want to leave? You have unsaved changes!");t?l():l(!1)}else l()}}}}]);
//# sourceMappingURL=chunk-453a8273.c494d2d6.js.map