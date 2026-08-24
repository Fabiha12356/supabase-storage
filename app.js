const supabaseUrl = "https://wmflitippmldqpfvxixt.supabase.co";
const supabaseKey = "sb_publishable_0VvRE72u8ZALMxvFXcuC5w_vAFO97BS";


const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);

let subBtn = document.querySelector("#btn");
let img = document.querySelector("#pic");
let uiImage = document.querySelector("#Image");
console.log(uiImage);

subBtn && subBtn.addEventListener("click", async()=>{
    console.log("okkkkkkkkk");
    console.log(img.files[0])
//insert:-
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

//Update:-
  const { data:userdata, error:usererror } = await client
  .storage
  .from('images')
  .update("image4", avatarFile, {
    cacheControl: '0'
  });

console.log(userdata);
console.log(usererror);


  // Get:-
  const { data:userUrl } = client
  .storage
  .from('images')
  .getPublicUrl(data.path)
  console.log(userUrl.publicUrl);
let URL = userUrl.publicUrl


uiImage.src =`${URL}?t=${Date.now()}`
 
console.log(uiImage);
console.log(uiImage.src);
})


let register = document.querySelector("#register");

register.addEventListener("click",()=>{
  console.log("okkk!");
  window.location.href = "./profile.html"
})