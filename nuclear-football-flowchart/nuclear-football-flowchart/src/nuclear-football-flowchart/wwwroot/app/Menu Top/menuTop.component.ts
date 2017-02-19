import { Component } from "@angular/core";

/**
Menu for top of each web page
*/
@Component({
	selector: "MenuTopComponent",
	template: `
<div class="navbar navbar-inverse navbar-fixed-top">
	<div class="container">
		<div class="navbar-header">
			<button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="/">Nuclear Football Flowchart</a>
		</div>
		<div class="navbar-collapse collapse">
			<ul class="nav navbar-nav">
				<li><a href="/">Home</a></li>
				<li><a href="/About">About</a></li>
			</ul>
		</div>
	</div>
</div>
`
})
export class MenuTopComponent { }