<script>
    export let data;
    const [pdf1 , pdf2 ] = data 
    console.log(pdf1 , pdf2)
	function findPdfDiff() {
		if (pdf1 != null || pdf2 != null) {
			console.log(pdf1);
			
		}
	}
</script>

<div class="pdf-compare">
	<div class="inputs">
		<form action="?/upload" method="post">
			<input  type="file"  name="pdf1" id="pdf1" required />
			<input  type="file" name="pdf2" id="pdf2" required />

			<input type="submit" value="upload" />
		</form>
	</div>
	<div class="button">
		<button on:click={findPdfDiff}>Find difference</button>
	</div>
</div>
