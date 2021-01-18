const table = document.querySelector('table');

function tablify({
	playground = '',
	files = '',
	resources = '',
	created = '',
	lastActivity = ''
}) {
	table.innerHTML += (`
		<tr class="stats">
			<td class="stats">${playground}</td>
			<td class="stats">${files}</td>
			<td class="stats">${resources}</td>
			<td class="stats">${created}</td>
			<td class="stats">${lastActivity}</td>
		</tr>
	`);
}

fetch('/ajax', {
		method: 'POST',
		'X-PLAYGROUND-GET': 'statistics',
		body: '{"action": "get_statistics"}'
	})
	.then(r => r.json())
	.then(({
		statistics
	}) => {
		tablify({
			playground: 'Overall',
			...statistics.overall,
			created: '7. 1. 2021',
			lastActivity: (new Date).toLocaleDateString('cs-CZ'),
		})
		for (const playground in statistics.playgrounds) {
			tablify({
				playground,
				...statistics.playgrounds[playground]
			})
		}
	});