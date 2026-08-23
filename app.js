const supabaseUrl = "https://wmflitippmldqpfvxixt.supabase.co";
const supabaseKey = "sb_publishable_0VvRE72u8ZALMxvFXcuC5w_vAFO97BS";


const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);

let subBtn = document.querySelector("#btn");
let img = document.querySelector("#pic");

subBtn.addEventListener("click", async()=>{
    console.log("okkkkkkkkk");
    console.log(img.files[0])
    //supabase
    const avatarFile = img.files[0]
const { data, error } = await client
  .storage
  .from('images')
  .upload(avatarFile.name, avatarFile, {
    cacheControl: '3600',
    upsert: false
    })
  console.log(data);
  console.log(error)
})