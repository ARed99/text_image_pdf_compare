<script>
	import { diffArrays } from 'diff';
	
  
	let text1 = '';
	let text2 = '';
	let difference = '';

	function compareText() {
		if (text1 != '' || text2 != '') {
			displayDifference(diffArrays(text1.split(' '), text2.split(' ')));
		}

		if (text1 == '' || text2 == '') {
			alert('no text found');
		}
	}

	function displayDifference(diff) {
        difference = ''
        console.log(diff)
		diff.forEach((el) => {
            if(el.hasOwnProperty('added') === true && el.hasOwnProperty('removed')  === true){
                if (el.added === true) {
                difference += `<sub><span class="added-text" >${el.value.join(' ')}</span> </sub>`
			} else if (el.removed === true) {
                difference += `<sup><span class="removed-text" >${el.value.join(' ')}</span></sup> `
			} else {
                difference += el.value.join(' ');
			}
            }else{
                difference += `<span class="normal-text">  ${el.value.join(' ')} </span>`
            }


			
		});
	}
</script>

<div class="text-compare">
	<h1>Compare text</h1>
	<div class="inputs">
		<textarea bind:value={text1} name="text1" id="text1" cols="30" rows="10" />
		<textarea bind:value={text2} name="text2" id="text2" cols="30" rows="10" />
	</div>
	<div class="button">
		<button on:click={compareText}>Find difference</button>
		<p class="position-relative difference-box" bind:innerHTML={difference} contenteditable />
	</div>
</div>

<style>
	.inputs {
		width: 1000px;
		height: 500px;
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
	}
</style>
