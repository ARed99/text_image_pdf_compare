<script>
	import { diffArrays } from 'diff';
	import { onMount } from 'svelte';

	let text1 = '';
	let text2 = '';
	let diff_box;
	let difference = '';
	let added_text = [];
	let removed_text = [];
	let history = [];
	onMount(() => {
		diff_box = window.document.getElementById('diff-box');
	});
	console.log();
	function compareText() {
		if (text1 != '' || text2 != '') {
			displayDifference(diffArrays(text1.split(' '), text2.split(' ')));
		}

		if (text1 == '' || text2 == '') {
			alert('no text found');
		}
	}

	function displayDifference(diff) {
		diff_box.innerHTML = '';
		added_text = [];
		removed_text = [];
		difference = window.document.createElement('div');

		diff.forEach((el) => {
			const value = el.value.join(' ');
			if (el.hasOwnProperty('added') === true && el.hasOwnProperty('removed') === true) {
				if (el.added === true) {
					// added text
					const span = window.document.createElement('span');
					span.innerText = value;
					span.classList.add('added-text');

					span.addEventListener('click', () => {
						console.log('added btn clicked');
						history.push(difference); // adding current state to history stack
						console.log('ADDED ONE STACT', history);
						difference.removeChild(span);
					});

					added_text.push(el.value.join(' '));
					difference.appendChild(span);
				} else if (el.removed === true) {
					// removed text
					const sup = window.document.createElement('sup');
					const span = window.document.createElement('span');
					span.innerText = value;
					sup.classList.add('removed-text');

					sup.addEventListener('click', () => {
						console.log('removed btn clicked');
						history.push(difference); // adding current state to history stack
						console.log(history);
						difference.removeChild(sup);
					});

					sup.appendChild(span); //adding <sup> tag for the text to pop up.
					removed_text.push(el.value.join(' '));
					difference.appendChild(sup);
				} else {
					// common text
					const span = window.document.createElement('span');
					span.innerText = ' ' + value + ' ';
					span.classList.add('normal-text');
					difference.appendChild(span);
				}
			} else {
				// this will when there is no change
				const span = window.document.createElement('span');
				span.innerText = ' ' + value + ' ';
				span.classList.add('normal-text');
				difference.appendChild(span);
			}
		});
		diff_box.appendChild(difference);

		console.log(' \nadded text: \n', added_text, '\n removed text\n', removed_text);
	}

	function undoState() {
		const node = window.document.createElement('div');
		node.append(history[0]);
		history.shift();
		diff_box.appendChild(node);
	}
</script>

<div class="text-compare">
	<h1>Compare text</h1>
	<div class="title">
		<h4>Orginal text</h4>
		<h4>Changed text</h4>
	</div>
	<div class="inputs">
		<textarea bind:value={text1} name="text1" id="text1" cols="30" rows="10" />
		<textarea bind:value={text2} name="text2" id="text2" cols="30" rows="10" />
	</div>
	<br />
	<div class="tool-bar">
		<button class="diff-btn" on:click={compareText}>Find difference</button>
		<button on:click={undoState} class="undo-btn">undo</button>
		<button class="redo-btn">redo</button>
	</div>
	<br />
	<div class="position-relative difference-box" id="diff-box" />
</div>

<style>
	.tool-bar {
		display: flex;
		justify-content: center;

		height: 50px;
	}
	.diff-btn {
		font-size: 20px;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		border: 0px;
		padding: 5px;

		transition: all 100ms;
	}
	.diff-btn:active {
		transition: all 100ms;
		border-bottom: 0px;
		font-size: 20px;
	}
	.inputs {
		width: 1000px;
		height: 400px;
		background-color: blue;
		display: flex;
		justify-content: space-evenly;
	}
	textarea {
		font-size: large;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
		resize: none;
		width: 100%;
		padding: 10px;
		margin: 0%;
	}
	.title {
		display: flex;
		justify-content: space-between;
	}
	h1 {
		text-align: center;
	}
	.undo-btn {
		background-color: red;
	}
	.redo-btn {
		background-color: green;
	}
	button {
		width: fit-content;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		padding: 5px;
		height: 40px;
	}
	button:active {
		border: 0px;
	}
</style>
