(function(){function tester(it
/**/) {
var out='<div> <h1>'+(it.title)+'</h1> <hr /> <p>'+(it.subtitle)+'</p> ';if(it.url){out+=' <img src="'+(it.url)+'" /> ';}out+='</div>';return out;
}var itself=tester, _encodeHTML=(function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());if(typeof module!=='undefined' && module.exports) module.exports=itself;else if(typeof define==='function')define(function(){return itself;});else {window.render=window.render||{};window.render['tester']=itself;}}());