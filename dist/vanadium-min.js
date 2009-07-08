Vanadium={};Vanadium.Version="0.1";Vanadium.CompatibleWithJQuery="1.3.2";Vanadium.Type="jquery";if($().jquery.indexOf(Vanadium.CompatibleWithJQuery)!=0&&window.console&&window.console.warn){console.warn("This version of Vanadium is tested with jQuery "+Vanadium.CompatibleWithJQuery+" it may not work as expected with this version ("+$().jquery+")")}Vanadium.each=$.each;Vanadium.all_elements=function(){return $("*")};Vanadium.partition=function(b,d){var c=[];var a=[];Vanadium.each(b,function(){if(d(this)){c.push(this)}else{a.push(this)}});return[c,a]};ContainerValidation=function(a){this.initialize(a)};ContainerValidation.prototype={initialize:function(a){this.html_element=a;this.elements=[]},add_element:function(a){this.elements.push(a)},decorate:function(){var a=null;for(var b in this.elements){if(this.elements[b].invalid===undefined){a=undefined}else{if(this.elements[b].invalid===true){a=false;break}else{if(this.elements[b].invalid===false&&a===null){a=true}}}}if(a===undefined){$(this.html_element).removeClass(Vanadium.config.invalid_class);$(this.html_element).removeClass(Vanadium.config.valid_class)}else{if(a){$(this.html_element).removeClass(Vanadium.config.invalid_class);$(this.html_element).addClass(Vanadium.config.valid_class)}else{$(this.html_element).removeClass(Vanadium.config.valid_class);$(this.html_element).addClass(Vanadium.config.invalid_class)}}}};Vanadium.containers={};Vanadium.validators_types={};Vanadium.elements_validators={};Vanadium.created_advices=[];Vanadium.extend=function(c){var b=[Vanadium];for(var a=0;a<arguments.length;a++){b.push(arguments[a])}return $.extend.apply($,b)};Vanadium.bind=function(a,b){return function(){return a.apply(b,arguments)}};Vanadium.config={valid_class:"-v-valid",invalid_class:"-v-invalid",message_value_class:"-v-message-value",advice_class:"-v-advice",prefix:":",separator:";",reset_defer_timeout:100};Vanadium.empty_advice_marker_class="-vanadium-empty-advice-";Vanadium.init=function(){this.setupValidatorTypes();this.scan_dom()};Vanadium.addValidatorType=function(c,a,d,b){this.validators_types[c]=new Vanadium.Type(c,a,d,b)};Vanadium.addValidatorTypes=function(b){var a=this;Vanadium.each(b,function(){Vanadium.addValidatorType.apply(a,this)})};Vanadium.scan_dom=function(){Vanadium.each(Vanadium.all_elements(),function(b,d){var c=d.className.split(" ");if(Vanadium.is_input_element(d)){var a=new ElementValidation(d);Vanadium.elements_validators[d.id]=a;Vanadium.each(c,function(){Vanadium.add_validation_instance(a,this);Vanadium.add_validation_modifier(a,this)});a.setup()}else{Vanadium.add_validation_container(d)}})};Vanadium.add_validation_container=function(a){var b=a.className.split(" ");Vanadium.each(b,function(){if(this.indexOf(Vanadium.config.prefix+"container")==0){Vanadium.containers[a.id]=new ContainerValidation(a);return true}})};Vanadium.add_validation_instance=function(a,f){if(f.indexOf(Vanadium.config.prefix)==0){var c=f.substr(Vanadium.config.prefix.length).split(Vanadium.config.separator);var e=c[0];var g=(c[1]===""?undefined:c[1]);var b=c[2];var d=Vanadium.validators_types[e];if(d){a.add_validation_instance(d,g,b)}}};Vanadium.add_validation_modifier=function(a,d){if(d==Vanadium.config.prefix+"only_on_blur"||d==Vanadium.config.prefix+"only_on_submit"||d.indexOf(Vanadium.config.prefix+"wait")==0){var b=d.substr(Vanadium.config.prefix.length).split(Vanadium.config.separator);var c=b[0];var e=b[1];a.add_validation_modifier(c,e)}};Vanadium.validate=function(){var a={};Vanadium.each(this.elements_validators,function(){a[this.element.id]=this.validate()});return a};Vanadium.decorate=function(a){if(arguments.length==0){a=this.validate()}Vanadium.each(a,function(b,c){Vanadium.elements_validators[b].decorate(c)})};Vanadium.reset=function(){Vanadium.each(this.elements_validators,function(){this.reset()})};Vanadium.extend({getElementType:function(a){switch(true){case (a.nodeName.toUpperCase()=="TEXTAREA"):return Vanadium.TEXTAREA;case (a.nodeName.toUpperCase()=="INPUT"&&a.type.toUpperCase()=="TEXT"):return Vanadium.TEXT;case (a.nodeName.toUpperCase()=="INPUT"&&a.type.toUpperCase()=="PASSWORD"):return Vanadium.PASSWORD;case (a.nodeName.toUpperCase()=="INPUT"&&a.type.toUpperCase()=="CHECKBOX"):return Vanadium.CHECKBOX;case (a.nodeName.toUpperCase()=="INPUT"&&a.type.toUpperCase()=="FILE"):return Vanadium.FILE;case (a.nodeName.toUpperCase()=="SELECT"):return Vanadium.SELECT;case (a.nodeName.toUpperCase()=="INPUT"):throw new Error("Vanadium::getElementType - Cannot use Vanadium on an "+a.type+" input!");default:throw new Error("Vanadium::getElementType - Element must be an input, select, or textarea!")}},is_input_element:function(a){return(a.nodeName.toUpperCase()=="TEXTAREA")||(a.nodeName.toUpperCase()=="INPUT"&&a.type.toUpperCase()=="TEXT")||(a.nodeName.toUpperCase()=="INPUT"&&a.type.toUpperCase()=="PASSWORD")||(a.nodeName.toUpperCase()=="INPUT"&&a.type.toUpperCase()=="CHECKBOX")||(a.nodeName.toUpperCase()=="INPUT"&&a.type.toUpperCase()=="FILE")||(a.nodeName.toUpperCase()=="SELECT")},createAdvice:function(c,b,d){var a=document.createElement("span");a.id=b;var e=document.createTextNode(d);a.appendChild(e);c.parentNode.insertBefore(a,c.nextSibling);this.created_advices.push(a)},addValidationClass:function(a,b){if(a){this.removeValidationClass(a);if(b){a.className+=" "+Vanadium.config.valid_class}else{a.className+=" "+Vanadium.config.invalid_class}}},removeValidationClass:function(a){if(a){if(a.className.indexOf(Vanadium.config.invalid_class)!=-1){a.className=a.className.split(Vanadium.config.invalid_class).join(" ")}if(a.className.indexOf(Vanadium.config.valid_class)!=-1){a.className=a.className.split(Vanadium.config.valid_class).join(" ")}}},TEXTAREA:1,TEXT:2,PASSWORD:3,CHECKBOX:4,SELECT:5,FILE:6});ElementValidation=function(a){this.initialize(a)};ElementValidation.prototype={initialize:function(a){this.element=a;this.validations=[];this.only_on_blur=false;this.only_on_submit=false;this.wait=100;this.created_advices=[];this.decorated=false;this.containers=null;this.invalid=undefined},add_validation_instance:function(b,c,a){this.validations.push(new Validation(this.element,b,c,a))},add_validation_modifier:function(a,c){if(a=="only_on_blur"){this.only_on_blur=true}else{if(a=="only_on_submit"){this.only_on_submit=true}else{if(a=="wait"){var b=parseInt(c);if(b!=NaN&&typeof(b)==="number"){this.wait=b}}}}},element_containers:function(){if(this.containers===null){this.containers={};var b=this.element.parentNode;while(b!=document){if(Vanadium.containers[b.id]){var a=Vanadium.containers[b.id];a.add_element(this);this.containers[b.id]=a}b=b.parentNode}}return this.containers},validate:function(b,c){var a={};Vanadium.each(this.validations,function(){a[this.validation_type.className]=this.validate(b,c)});return a},decorate:function(e){this.reset();this.decorated=true;var c=this;var b=Vanadium.partition(e,function(f){return f.success});var d=b[0];var a=b[1];if(a.length>0){this.invalid=true;Vanadium.addValidationClass(this.element,false)}else{if(d.length>0){this.invalid=false;Vanadium.addValidationClass(this.element,true)}else{this.invalid=undefined}}Vanadium.each(this.element_containers(),function(){this.decorate()});Vanadium.each(a,function(h,i){var g=undefined;if(i.advice_id){g=document.getElementById(i.advice_id);if(g){var f=g.childNodes.length==0;if(f||$(g).hasClass(Vanadium.empty_advice_marker_class)){$(g).addClass(Vanadium.empty_advice_marker_class);$(g).append("<span>"+i.message+"</span>")}$(g).show()}else{g=c.create_advice(i)}}else{g=c.create_advice(i)}Vanadium.addValidationClass(g,false)})},validateAndDecorate:function(){this.decorate(this.validate(this,this.decorate))},create_advice:function(b){var a=document.createElement("span");this.created_advices.push(a);$(a).addClass(Vanadium.config.advice_class);$(a).html(b.message);$(this.element).after(a);return a},reset:function(){this.invalid=undefined;Vanadium.each(this.element_containers(),function(){this.decorate()});Vanadium.each(this.validations,function(){var b=document.getElementById(this.adviceId);if(b){if($(b).hasClass(Vanadium.empty_advice_marker_class)){$(b).empty()}$(b).hide()}});var a=this.created_advices.pop();while(!(a===undefined)){$(a).remove();a=this.created_advices.pop()}Vanadium.removeValidationClass(this.element)},deferValidation:function(){if(this.wait>=300){this.reset()}var a=this;if(a.timeout){clearTimeout(a.timeout)}a.timeout=setTimeout(function(){a.validateAndDecorate()},a.wait)},deferReset:function(){var a=this;if(a.reset_timeout){clearTimeout(a.reset_timeout)}a.reset_timeout=setTimeout(function(){a.reset()},Vanadium.config.reset_defer_timeout)},setup:function(){var a=this;this.elementType=Vanadium.getElementType(this.element);this.form=this.element.form;this.element_containers();var b=function(c,d){var e=a.element[c];a.element[c]=function(){d.apply(a,arguments);if(e){return e.apply(a.element,arguments)}}};if(!this.only_on_submit){switch(this.elementType){case Vanadium.CHECKBOX:b("onclick",function(){this.validateAndDecorate()});break;case Vanadium.SELECT:case Vanadium.FILE:b("onchange",function(){this.validateAndDecorate()});break;default:b("onkeydown",function(c){if(c.keyCode!=9){this.deferReset()}});if(!this.only_on_blur){b("onkeyup",function(c){if(c.keyCode!=9){this.deferValidation()}})}b("onblur",function(){this.validateAndDecorate()})}}}};Validation=function(c,a,d,b){this.initialize(c,a,d,b)};Validation.prototype={initialize:function(d,a,e,c){this.element=d;this.validation_type=a;this.param=e;this.adviceId=c;var b=document.getElementById(c);if(b){$(b).addClass(Vanadium.config.advice_class)}},emmit_message:function(a){if(typeof(a)==="string"){return a}else{if(typeof(a)==="function"){return a.call(this,this.element.value,this.param)}}},validMessage:function(){return this.emmit_message(this.validation_type.validMessage())||"ok"},invalidMessage:function(){return this.emmit_message(this.validation_type.invalidMessage())||"error"},test:function(a,b){return this.validation_type.validationFunction.call(this,this.element.value,this.param,this,a,b)},validate:function(b,d){var a={success:false,message:"Received invalid return value."};var c=this.test(b,d);if(typeof c==="boolean"){return{success:c,advice_id:this.adviceId,message:(c?this.validMessage():this.invalidMessage())}}else{if(typeof c==="object"){$.extend.apply(a,c)}}return a}};Vanadium.Type=function(c,a,b,d){this.initialize(c,a,b,d)};Vanadium.Type.prototype={initialize:function(c,a,b,d){this.className=c;this.message=d;this.error_message=b;this.validationFunction=a},test:function(a){return this.validationFunction.call(this,a)},validMessage:function(){return this.message},invalidMessage:function(){return this.error_message},toString:function(){return"className:"+this.className+" message:"+this.message+" error_message:"+this.error_message}};Vanadium.setupValidatorTypes=function(){Vanadium.addValidatorType("is_empty",function(a){return((a==null)||(a.length==0))});Vanadium.addValidatorTypes([["required",function(a){return !Vanadium.validators_types.is_empty.test(a)},"This is a required field."],["number",function(a){return Vanadium.validators_types.is_empty.test(a)||(!isNaN(a)&&!/^\s+$/.test(a))},"Please enter a valid number in this field."],["digits",function(a){return Vanadium.validators_types.is_empty.test(a)||!/[^\d]/.test(a)},"Please use numbers only in this field. please avoid spaces or other characters such as dots or commas."],["alpha",function(a){return Vanadium.validators_types.is_empty.test(a)||/^[a-zA-Z\u00C0-\u00FF\u0100-\u017E\u0391-\u03D6]+$/.test(a)},"Please use letters only in this field."],["asciialpha",function(a){return Vanadium.validators_types.is_empty.test(a)||/^[a-zA-Z]+$/.test(a)},"Please use ASCII letters only (a-z) in this field."],["alphanum",function(a){return Vanadium.validators_types.is_empty.test(a)||!/\W/.test(a)},"Please use only letters (a-z) or numbers (0-9) only in this field. No spaces or other characters are allowed."],["date",function(a){var b=new Date(a);return Vanadium.validators_types.is_empty.test(a)||!isNaN(b)},"Please enter a valid date."],["email",function(a){return(Vanadium.validators_types.is_empty.test(a)||/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(a))},"Please enter a valid email address. For example fred@domain.com ."],["url",function(a){return Vanadium.validators_types.is_empty.test(a)||/^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i.test(a)},"Please enter a valid URL."],["date_au",function(a){if(Vanadium.validators_types.is_empty.test(a)){return true}var b=/^(\d{2})\/(\d{2})\/(\d{4})$/;if(!b.test(a)){return false}var c=new Date(a.replace(b,"$2/$1/$3"));return(parseInt(RegExp.$2,10)==(1+c.getMonth()))&&(parseInt(RegExp.$1,10)==c.getDate())&&(parseInt(RegExp.$3,10)==c.getFullYear())},"Please use this date format: dd/mm/yyyy. For example 17/03/2006 for the 17th of March, 2006."],["currency_dollar",function(a){return Vanadium.validators_types.is_empty.test(a)||/^\$?\-?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}\d*(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/.test(a)},"Please enter a valid $ amount. For example $100.00 ."],["selection",function(a,b){return b.options?b.selectedIndex>0:!Vanadium.validators_types.is_empty.test(a)},"Please make a selection"],["one_required",function(a,c){var b=$$('input[name="'+c.name+'"]');return some(b,function(d){return getNodeAttribute(d,"value")})},"Please select one of the above options."],["min_length",function(a,b){if(b===undefined){return true}else{return a.length>=parseInt(b)}},function(a,b){return'The value should be at least <span class="'+Vanadium.config.message_value_class+'">'+b+"</span> characters long."}],["max_length",function(a,b){if(b===undefined){return true}else{return a.length<=parseInt(b)}},function(a,b){return'The value should be at most <span class="'+Vanadium.config.message_value_class+'">'+b+"</span> characters long."}],["same_as",function(b,c){if(c===undefined){return true}else{var a=document.getElementById(c);if(a){return b==a.value}else{return false}}},function(b,c){var a=document.getElementById(c);if(a){return'The value should be the same as <span class="'+Vanadium.config.message_value_class+'">'+($(a).attr("name")||a.id)+"</span> ."}else{return"There is no exemplar item!!!"}}],["ajax",function(a,d,c,b,e){if(Vanadium.validators_types.is_empty.test(a)){return true}$.getJSON(d,{value:a},function(f){e.call(b,[f])});return true}]]);if(VanadiumCustomValidationTypes){Vanadium.addValidatorTypes(VanadiumCustomValidationTypes)}};$(document).ready(function(){if(VanadiumConfig&&typeof(VanadiumConfig)==="object"){Vanadium.each(VanadiumConfig,function(b,a){Vanadium.config[b]=a})}Vanadium.init()});