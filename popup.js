//Runs when popup is first opened, sets title to current URL. (Not important at all, used only for testing, will likely be removed)
document.addEventListener("DOMContentLoaded", function(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		//executes the script (Main brain of onClick) 
		chrome.tabs.executeScript(
			tabs[0].id,
			{code: 'document.title = "' + tabs[0].url + '";'}
		);
	});
})  

//Declares onclick function for change color button
changeColor.onclick = function(element) {
	//gets set color
	let color = element.target.value;
	//queries all chrome tabs and gets active tab
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		//executes the script (Main brain of onClick) 
		chrome.tabs.executeScript(
			tabs[0].id,
			{code: findNextEpisode()}
		);
	});
};

//Will be used to find chronological spot of current episode and redirect to next episode
function findNextEpisode(){
	
	//return full code segment to redirect to new page (Will be altered to be next in chronological order)
	return "window.location.href = 'https://www.google.com'";
}