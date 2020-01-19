let nepal = {
	mountains:['Everest','Fish tail', 'Annapurna'],
	printWithDash: function(){
		setTimeout(() => console.log(this.mountains.join(' - ')), 3000); 
	}
};

nepal.printWithDash();

