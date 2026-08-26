const supabaseUrl = "https://wmflitippmldqpfvxixt.supabase.co";
const supabaseKey = "sb_publishable_0VvRE72u8ZALMxvFXcuC5w_vAFO97BS";


const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);

let subBtn = document.querySelector("#btn");
let input = document.querySelector("#pic");
 let div = document.querySelector("#profile");
console.log(subBtn);
console.log(input);
 console.log(div)



 //chnge text of div :-
div.innerHTML = `<img src="./images/profile1.jpg" alt="">`
console.log(div)
console.log(div.innerHTML)



subBtn && subBtn.addEventListener("click", async(e)=>{
  e.preventDefault();
    console.log("okkkkkkkkk");
    console.log(input.files[0])
//insert:-
    const avatarFile = input.files[0]
const { data, error } = await client
  .storage
  .from('images')
  .upload("image4", avatarFile, {
    cacheControl: '0',
    upsert: true
    })
  console.log(data);
  console.log(error);

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



div.innerHTML=`<img src="${URL}?t=${Date.now()}" alt="pic">`
 
console.log(div);

})


