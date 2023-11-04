<script>
	import { diffArrays } from 'diff';

	let text1 = '';
	let text2 = '';
	let difference = '';
    let diff_box;
	let added_text = [];
	let removed_text = [];

	function compareText() {
		if (text1 != '' || text2 != '') {
			displayDifference(diffArrays(text1.split(' '), text2.split(' ')));
		}

		if (text1 == '' || text2 == '') {
			alert('no text found');
		}
	}

	function displayDifference(diff) {
		added_text = []
		removed_text = []
		difference = '';
		diff.forEach((el) => {
			if (el.hasOwnProperty('added') === true && el.hasOwnProperty('removed') === true) {
				if (el.added === true) {
					added_text.push(el.value.join(' '))
					
					difference += `
						<span class="added-text" >${el.value.join(' ')}</span>
						<sup>
						<button onClick="
							console.log("licke")

						
						" class="merge-btn added-merge" >Merge</button>
						
						</sup>
						`;
				} else if (el.removed === true) {
					removed_text.push(el.value.join(' '))
					
					difference += `
					<sup>
						<button class="merge-btn" >Merge</button>
						
						</sup>
					<sup><span class="removed-text" >${el.value.join(' ')}</span></sup> `;
				} else {
					difference += el.value.join(' ');
				}
			} else {
				difference += `<span class="normal-text">  ${el.value.join(' ')} </span>`;
			}
		});
		diff_box.innerHTML = difference
		console.log(" \nadded text: \n", added_text ,"\n removed text\n" , removed_text)
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
	<div class="button">
		<button class="diff-btn" on:click={compareText}>Find difference</button>
	</div>
	<div class="position-relative difference-box" bind:this={diff_box}/>
</div>

<style>
	.button {
		display: grid;
		justify-content: center;
		z-index: 100;
		position: fixed;
		left: 0;
		right: 0;
		top: 480px;
	}
	.diff-btn {
		font-size: 25px;
		background-color: lightgreen;
		border-radius: 20px;
		border: 0px;
		padding: 10px;
		border-bottom: 3px solid black;
		transition: all 100ms;
	}
	.diff-btn:active{
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
	}
	.title {
		display: flex;
		justify-content: space-between;
	}
	h1{
		text-align: center;
	}
</style>
