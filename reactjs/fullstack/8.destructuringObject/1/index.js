let thingstoDo = {
	morning:"Exercise",
	afternoon:'Work',
	evening:'Code',
	night:['Sleep', 'Dream']
}


let {morning, afternoon, night} = thingstoDo;
morning = 'run';
console.log(morning, ' - ', afternoon);
console.log(night[0]);
