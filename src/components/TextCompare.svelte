<script>
    import { diffArrays } from 'diff'

    let text1 = ''
    let text2 = ''
    let difference = []
    
    function compareText(){

        if(text1 != '' || text2 != ''){
            const diff = diffArrays(text1.split(" ") , text2.split(" "))
            console.log(diff);
        }

        if(text1 == '' || text2 == ''){
            alert("no text found")
        }
  
    }
</script>
<div class="text-compare">
    <h1>
        Compare text
    </h1>
<div class="inputs">
    <textarea bind:value={text1} name="text1" id="text1" cols="30" rows="10"></textarea>
    <textarea bind:value={text2} name="text2" id="text2" cols="30" rows="10"></textarea>
    
</div>
<div class="button">
    <button on:click={compareText} >Find difference</button>
</div>    
</div>

<style>
    
.inputs{
width: 300px;
height: 400px;

}
</style>