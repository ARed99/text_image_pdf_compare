import 
let pdf1 = null;
let pdf2 = null;
export const actions = {
    upload: async ({ request }) =>{
        const data = await request.formData();
        pdf1 = data.get('pdf1')
        pdf2 = data.get('pdf2')
        
        return { success: true }

    }
}

export const load = () =>{
   if(pdf1 != null || pdf2 != null){
     return {
        pdfs:[
            pdf1,
            pdf2
        ]
     }
   }else{
    return false
   }
}