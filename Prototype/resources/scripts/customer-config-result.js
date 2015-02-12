


(function (){
if (!rabbit.plugins) {
	rabbit.plugins = {};
}
if (!rabbit.plugins.customer) {
	rabbit.plugins.customer = {};
}

rabbit.plugins.customer = {
	"reactions":{},
	"initContainer": function(stencilId, type, property){
		var stencilFunction = rabbit.plugins.customer.elements[type+'_function'];
		if (stencilFunction) {
			stencilFunction($('#' + stencilId), property);
		}
	},
	"init":function(){ },
	"elements":{}
};
})();

// add js libraries
$.ajaxSetup({async: false});

$.ajaxSetup({async: true});

// stencils

	
// reactions


rabbit.facade.registerPlugin(rabbit.plugins.customer);

rabbit.interaction.manager.registerReaction('customer', {
	init: function(interaction, reaction) {
	},
	callback: function(actionEvent, interaction, reaction) {
		if (interaction != null && interaction.data != null && reaction != null) {
			var stencil = document.getElementById(interaction.data.stencilId);
		    var reactionFunction = rabbit.plugins.customer.reactions[reaction.select];
		    if (reactionFunction) { 
		    	reactionFunction(stencil);
		    } else {
		    	console.log('Reaction missing: ', reaction.select);
		    }
		    
		} else { 
			console.error('Interaction or reaction info missing', interaction, reaction); 
		}
	}
});
