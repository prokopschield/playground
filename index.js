{
	let ar = [];
	let a = document.querySelector('ul');
	let playground = new URLSearchParams(location.search).get('playground') || 'assets';
	fetch('/ajax', {
			headers: {
				'X-PLAYGROUND-GET': playground
			}
		})
		.then(a => a.json())
		.then(d => {
			for (const x in d.files) {
				let n = d.files[x];
				ar.push(n);
				let u = '/playgrounds/' + playground + '/' + n;
				if (a) a.innerHTML += ('<li class="file"><a href="' + u + '">' + n + '</a></li>');
			}
			for (const x in d.resources) {
				let n = d.resources[x];
				let u = '/playgrounds/' + playground + '/' + n;
				ar.push(n);
				n = n.split('/').pop();
				if (a) a.innerHTML += ('<li class="resource"><a href="' + u + '">' + n + '</a></li>');
			}
		})
		.then(() => document.querySelector('h1').innerHTML = `Index of ${playground}`)
}