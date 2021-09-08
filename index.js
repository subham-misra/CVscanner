console.log('cv');
let obj = [{
    name: 'Subham Misra',
    age: 23,
    live: 'durgapur',
    language: 'c++',
    frame:'ReactJS',
    photo: 'https://randomuser.me/api/portraits/men/51.jpg'
}, {
    name: 'sumit dhar',
    age: 23,
    live: 'kerala',
    language: 'python',
    frame:'DJango',
    photo: 'https://randomuser.me/api/portraits/men/52.jpg'
}, {
    name: 'souvick roy',
    age: 23,
    live: 'kolkata',
    language: 'java',
    frame:'Angular',
    photo: 'https://randomuser.me/api/portraits/men/53.jpg'
}, {
    name: 'samrat dutta',
    age: 23,
    live: 'kolkata',
    language: 'C#',
    frame:'Angular',
    photo: 'https://randomuser.me/api/portraits/men/55.jpg'
}, {
    name: 'Pocco',
    age: 73,
    live: 'Muchi para',
    language: 'Ami nija akta language',
    frame:'Ami photo frame banata pari',
    photo: 'https://randomuser.me/api/portraits/women/53.jpg'
}]
let CV = iterator(obj);

function iterator(obj) {
    let nextindex = 0;
    return {
        next: function () {
            if (nextindex < obj.length) {
                return {
                    obj: obj[nextindex++], done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}
let image=document.getElementById('photo');
let profile=document.getElementById('profile');
nextcv();
let btn = document.getElementById('btn');
btn.addEventListener('click', nextcv);

function nextcv() {
    let newCV = CV.next();
    console.log(newCV);
    let photo=`<img src=${newCV.obj.photo} alt="">`;
    image.innerHTML=photo;
    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">Name: ${newCV.obj.name}</li>
    <li class="list-group-item">Age: ${newCV.obj.age}</li>
    <li class="list-group-item">Place: ${newCV.obj.live}</li>
    <li class="list-group-item">Language: ${newCV.obj.language}</li>
    <li class="list-group-item">Framework: ${newCV.obj.frame}</li>
  </ul>`
    //console.log(photo)
}
