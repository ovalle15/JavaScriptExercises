window.rotationsModule = (function() {


	function changeSpeed() {

		var duration = document.getElementById("duration").value;
	    document.getElementById("durationDisplay").value = duration + 's';
		var anim = document.getElementsByTagName('animateTransform')

		for (var i =0; i < anim.length; i++ ) {
			console.log("this is g", i)
			console.log("this is anim[g]",anim[i])
			anim[i].setAttribute("dur", duration + 's')
			console.log(anim[i])
		};
	}




	return {
        changeSpeed: changeSpeed
    };

})();