<script>
	import { diffArrays } from 'diff';

	let text1 = '';
	let text2 = '';
	

	function compareText() {
		if (text1 != '' || text2 != '') {
			displayDifference(diffArrays(text1.split(' '), text2.split(' ')));
			
		}

		if (text1 == '' || text2 == '') {
			alert('no text found');
		}
	}

    function displayDifference(diff){
         console.log(diff)
    }
</script>

<div class="text-compare">
	<h1>Compare text</h1>
	<div class="inputs">
		<textarea  bind:value={text1} name="text1" id="text1" cols="30" rows="10" />
		<textarea bind:value={text2} name="text2" id="text2" cols="30" rows="10" />
	</div>
	<div class="button">
		<button on:click={compareText}>Find difference</button>
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
