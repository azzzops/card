const url = "https://dummyjson.com/users";
const fetchHeader = {
  method: "GET",
  Headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
const container = document.getElementById("container");
fetch(url, fetchHeader)
  .then((data) => data.json())
  .then((res) => {
    let user = res.users;
    console.log(user)
    container.innerHTML = user.map((t) => `
     <div
            class="card h-[500px] w-[300px] flex flex-col items-center relative bg-[#0a112b] overflow-clip rounded-2xl z-[-2]">

            <div
                class="h-[200px] bg-[linear-gradient(rgba(0,0,60,0.8),rgba(0,0,20,0.9)),url('imgae.avif')]  bg-contain bg-center rounded-br-[50px] relative rounded-bl-[50px] w-full bg-[#0B192C]">
                <img class="max-w-[180px] w-[100%] border-[7px] bg-[#021526] border-solid border-white shadow-[2px_3px_10px_2px_rgba(0,0,0,0.3)] absolute bottom-[0] left-[50%] translate-x-[-50%] translate-y-[50%]  rounded-full"
                    src="${t.image}" alt="">
            </div>

            <div class="absolute text-white bottom-0 flex gap-2 flex-col justify-evenly items-center w-full h-[220px] p-5">
                <div class="flex text-[16px] text-center text-nowrap flex-col w-[90%]">
                    <div><span>${t.firstName + " " + t.maidenName + " " + t.lastName}</span></div>
                    <div><span>${t.company.title}</span></div>
                </div>
                <div class="h-[3px] w-[90%] mx-auto bg-[#DDE6ED] rounded-full"></div>
                <div class="text-center text-[16px] text-nowrap">
                    <div><span>ID NO: </span><span>${t.bank.cardNumber}</span></div>
                    <div><span>Valid Thru: </span><span>${t.bank.cardExpire}</span></div>
                </div>
                <div class="h-[3px] w-[90%] mx-auto bg-[#DDE6ED] rounded-full"></div>
                <div class="text-[14px] flex flex-col text-center">
                    <span>${t.phone}</span>
                    <span>${t.email}</span>
                </div>
            </div>
        </div>
    `).join("")
  })
  .catch((error) => console.log(error));
