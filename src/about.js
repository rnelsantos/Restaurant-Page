


function loadAbout() {

    const content = document.querySelector ('#content');
    const main = document.querySelector('main');
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add('firstChild');
    aboutContainer.classList.add('aboutContainer');
    content.appendChild(aboutContainer);

    //load branch 1 content
    const aboutTitle = document.createElement('h2')
    aboutTitle.innerText = "PISCES COFFEE HUB BRANCHES";
    aboutContainer.appendChild(aboutTitle);

    const branchDiv1= document.createElement('div')
    const branch1 = document.createElement('p')
    const branch2 = document.createElement('p')
    const branch3 = document.createElement('p')
    const branch4 = document.createElement('p')
    const branch5 = document.createElement('p');
    branch1.innerText = "PISCES COFFEE HUB SAN CARLOS (MAIN)"
    branch2.innerText = "📍𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻: 𝗕𝗮𝗿𝗮𝗻𝗴𝗮𝘆 𝗜𝗹𝗮𝗻𝗴, 𝗦𝗮𝗻 𝗖𝗮𝗿𝗹𝗼𝘀 𝗖𝗶𝘁𝘆, 𝗣𝗮𝗻𝗴𝗮𝘀𝗶𝗻𝗮𝗻"
    branch3.innerText = "🕗 ꜱᴛᴏʀᴇ ʜᴏᴜʀꜱ: 9ᴀᴍ ᴛᴏ 9ᴘᴍ ᴅᴀɪʟʏ"
    branch4.innerText = "📱𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐍𝐮𝐦𝐛𝐞𝐫: 𝟎𝟗𝟒𝟓𝟖𝟑𝟗𝟑𝟕𝟗𝟒"
    branch5.innerText = "📞 ᴛᴇʟᴇᴘʜᴏɴᴇ ɴᴜᴍʙᴇʀ:637-4692"
    branchDiv1.appendChild(branch1);
    branchDiv1.appendChild(branch2);
    branchDiv1.appendChild(branch3);
    branchDiv1.appendChild(branch4);
    branchDiv1.appendChild(branch5);
    aboutContainer.appendChild(branchDiv1);

     //load branch 1 content
     const branchDiv2= document.createElement('div')
     const branch6 = document.createElement('p')
     const branch7 = document.createElement('p')
     const branch8 = document.createElement('p')
     const branch9 = document.createElement('p')
     branch6.innerText = "PISCES COFFEE HUB MANGATAREM"
     branch7.innerText = "𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻: ʀᴏʏᴀʟ ᴘᴀʟᴍ ᴄᴇɴᴛᴇʀ, ᴘᴏɢᴏɴʟᴏᴍʙᴏʏ ᴍᴀɴɢᴀᴛᴀʀᴇᴍ"
     branch8.innerText = "🕗 ꜱᴛᴏʀᴇ ʜᴏᴜʀꜱ: 9ᴀᴍ ᴛᴏ 9ᴘᴍ ᴅᴀɪʟʏ"
     branch9.innerText = "📱𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐍𝐮𝐦𝐛𝐞𝐫: 𝟬𝟵𝟯𝟭𝟴𝟲𝟮𝟵𝟱𝟲𝟯"
     branchDiv2.appendChild(branch6);
     branchDiv2.appendChild(branch7);
     branchDiv2.appendChild(branch8);
     branchDiv2.appendChild(branch9);
     aboutContainer.appendChild(branchDiv2);
    








    //remove previous tab highlight
    const selected = document.querySelector('.select');
    if (selected!=null){ selected.classList.remove("select"); console.log(selected);};
    //Highlight current page tab
    const menu = document.querySelector('#about');
    about.classList.add('select');
    }


    


    

    export {loadAbout};