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
  .upload("image1", avatarFile, {
    cacheControl: '3600',
    upsert: true
    })
  console.log(data);
  console.log(error)
  //getpublisurl:-
  const { data:userdata } = client
  .storage
  .from('images')
  .getPublicUrl('avatarFile')
  console.log(userdata);
  console.log(userdata.publicUrl)
})