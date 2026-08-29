const supabaseUrl = "https://wmflitippmldqpfvxixt.supabase.co";
const supabaseKey = "sb_publishable_0VvRE72u8ZALMxvFXcuC5w_vAFO97BS";

//miss tayyaba:0-
// const supabaseUrl = "https://dqezttgellsfwnywvzlk.supabase.co";
// const supabaseKey = "sb_publishable_KiTrnbhlxaTkgvRJgUl3Jg_IW9XRtCF";

const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);

let subBtn = document.querySelector("#btn");
let input = document.querySelector("#pic");
 let div = document.querySelector("#profile");




 //chnge text of div :-
div.innerHTML = `<img src="./images/profile1.jpg" alt="">`
console.log(div)



//Insert:-

subBtn && subBtn.addEventListener("click", async(e)=>{
  e.preventDefault();
    console.log(input.files[0])
//insert:-
    const avatarFile = input.files[0]
const { data, error } = await client
  .storage
  .from('images')
  .upload("image10", avatarFile, {
    cacheControl: '0',
    upsert: false
    })
  console.log(data);
  console.log(error);




  // Get:-
  const { data:userUrl } = client
  .storage
  .from('images')
  .getPublicUrl(data.path)
  console.log(userUrl.publicUrl);
let URL = userUrl.publicUrl



div.innerHTML=`<img src="${URL}?t=${Date.now()}" alt="pic">`
 
console.log(div);

})



//Replace:-


  let update = document.querySelector("#profile-file");


update.addEventListener("change", async()=>{

  console.log("file selected")

  console.log(update.files[0]);



//Update:-
 const avatarFile1 = update.files[0]
  const { data:userdata, error:usererror } = await client
  .storage
  .from('images')
  .update("image10", avatarFile1, {
    cacheControl: '0'
  });

console.log(userdata);
console.log(usererror);



 // Get:-
  const { data } = client
  .storage
  .from('images')
  .getPublicUrl("image10")
  console.log(data.publicUrl);
let URL = data.publicUrl



div.innerHTML=`<img src="${URL}?t=${Date.now()}" alt="pic">`
console.log(div);
});