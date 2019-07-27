let mess = 'Puneet';
let greeting = (mess) => alert(`${mess}`);
greeting('Hello');

let createBlog = (title, body) =>{
	if (!title){
		throw new Error('title cannot be empty');
	}
	if (!body){
                throw new Error('body cannot be empty');
        }

	return alert(`${title} - ${body}`);
};
createBlog('This Title', 'This Body');
