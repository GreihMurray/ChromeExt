let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });
  
//Declares onclick function for change color button
changeColor.onclick = function(element) {
	//gets set color
	let color = element.target.value;
	//queries all chrome tabs and gets active tab
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		//executes the script (Main brain of onClick) 
		chrome.tabs.executeScript(
			tabs[0].id,
			{code: 'document.title = "test";'}
		);
	});
};