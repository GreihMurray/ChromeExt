# ChromeExt
A chrome extension meant to work alongside Disney+ in order to allow for playing the Clone Wars series in chronological order without having to hunt down the next episode each time.

Uses content script to create eventlistener for the ` key each time a disney+ webpage is loaded, and when the ` key is pressed, finds the chronological location of the current episode based off of the URL then chooses and loads the proper URL for the next episode in chronological order
