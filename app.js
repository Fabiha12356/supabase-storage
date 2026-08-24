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
  .upload("image4", avatarFile, {
    cacheControl: '0',
    upsert: true
    })
  console.log(data);
  console.log(error)


  const { data:userdata, error:usererror } = await client
  .storage
  .from('images')
  .update("image4", avatarFile, {
    cacheControl: '0'
  });

console.log(userdata);
console.log(usererror);


  //getpublisurl:-
  // const { data:userdata } = client
  // .storage
  // .from('images')
  // .getPublicUrl(data.path)
  // console.log(userdata.publicUrl);
  // console.log(userdata.path)
  // console.log("https://wmflitippmldqpfvxixt.supabase.co/storage/v1/object/public/images/lightbulb.png")
})