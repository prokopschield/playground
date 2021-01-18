Promise.resolve(null)
	.then(() =>
		fetch('/ajax', {
			headers: {
				'X-PLAYGROUND-GET': 'PLAYGROUNDS'
			}
		})
	)
	.then(r => r.json())
	.then(r => r.playgrounds)
	.then((playgrounds) => {
		let r = '';
		for (const i in playgrounds) {
			r += `<li class="glist"><a href="/playgrounds/${playgrounds[i]}/index.html">${playgrounds[i]}</a></li>`;
		}
		document.querySelector('#gl').innerHTML = r;
	})
	.then(() => {
		history.replaceState(history.state, 'List of Playgrounds', '/home/list.html');
	});