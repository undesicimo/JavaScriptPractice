const avatar = document.querySelector('#player');

window.addEventListener('keyup',function(evt){
	if(evt.key === 'ArrowDown'|| evt.key === 'Down'){
	const currTop = parseNum(avatar.style.top);
	avatar.style.top = `${currTop+ 50 }px`;
	} 
	else if(evt.key === 'ArrowUp'||evt.key==='Up'){
	const currTop = parseNum(avatar.style.top);
	avatar.style.top = `${currTop - 50 }px`;
	} 
	else if(evt.key === 'ArrowLeft'||evt.key==='Left'){
	const currLeft = parseNum(avatar.style.left);
	avatar.style.left = `${currLeft - 50 }px`;
	avatar.style.transform = 'scale(-1,1)';
	} 
	else if(evt.key === 'ArrowRight'||evt.key==='Right'){
	const currLeft = parseNum(avatar.style.left);
	avatar.style.left = `${currLeft + 50 }px`;
	avatar.style.transform = 'scale(1,1)';
	}
	
	

})

const parseNum = (pos)=> {
	if(!pos) return 100;
	return parseInt(pos.slice(0,-2));
};
	
