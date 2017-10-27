const interf1 = document.getElementById('interface1');

interf1.onclick = (e) => {
	return new Promise((res, rej) => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', '/api/interfaces/first');
		xhr.send();
		xhr.onload = (e) => {
			const htmlXHR = e.srcElement;

			if (htmlXHR.status !== 200) {
				rej(htmlXHR.response);
			}

			res();
		};
	});
}