<script>

	let pdf1 = null;
	let pdf2 = null;

	function findPdfDiff() {
		if (pdf1 != null || pdf2 != null) {
           
			
		}
	}
</script>

<div class="pdf-compare">
	<div class="inputs">
		<input bind:files={pdf1} type="file" name="pdf1" id="pdf1" />
		<input bind:files={pdf2} type="file" name="pdf2" id="pdf2" />
	</div>
	<div class="button">
		<button on:click={findPdfDiff}>Find difference</button>
	</div>
</div>
