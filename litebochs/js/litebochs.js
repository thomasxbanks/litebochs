"use strict";function openlitebochs(){$('[data-element="litebochs"]').attr("data-state","open")}function closelitebochs(){$('[data-element="litebochs"]').attr("data-state","closed")}!function(t,e,n,a){function i(e,n){this.element=e,this.options=t.extend({},s,n),this._defaults=s,this._name=o,this.init()}var o="litebochs",s={path:"css",theme:"dark",anim:"zoom",speed:"fast",yourMum:"epic"};i.prototype.init=function(){parent=this.element,console.info(parent),t("head").append("<link rel='stylesheet' href='"+this.options.path+"/litebochs.css'>"),t("body").append("<script src='https://use.fontawesome.com/804ff9ee50.js'></script>");var e="<i aria-label='close lightbox' class='fa fa-fw fa-times'></i>",n="<div data-element='litebochs-content'><div data-element='litebochs-content-inner'></div></div>",a="<div data-element='litebochs' data-state='closed'>"+e+n+"</div>";t("body").append(a),t('[data-element="litebochs"]').attr("data-theme",this.options.theme).attr("data-anim",this.options.anim).attr("data-speed",this.options.speed),t(parent).find("img").each(function(e,n){t(this).css("cursor","pointer"),console.error("img",e),t(this).on("click",function(){t('[data-element="litebochs-content-inner"]').html("").html('<img src="'+this.currentSrc+'" alt="'+this.alt+'" />'),this.clientHeight>this.clientWidth?t('[data-element="litebochs-content"]').attr("data-content","portrait"):t('[data-element="litebochs-content"]').attr("data-content","landscape"),t(parent).attr("data-state","blur"),openlitebochs()})}),t("body").on("click","[aria-label='close lightbox']",function(){t(parent).attr("data-state",""),closelitebochs(),setTimeout(function(){t('[data-element="litebochs-content-inner"]').html("")},parseInt(parent.options.speed))}),t("body").on("keyup",function(e){27==e.which&&(t(parent).attr("data-state",""),closelitebochs(),setTimeout(function(){t('[data-element="litebochs-content-inner"]').html("")},parseInt(parent.options.speed)))})},t.fn[o]=function(e){return this.each(function(){t.data(this,"plugin_"+o)||t.data(this,"plugin_"+o,new i(this,e))})}}(jQuery,window,document);