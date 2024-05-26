 
 let  header = document.getElementsByClassName("styled-header")[0]
        

 header.style.color = 'white';
 header.style.backgroundColor = 'blue';

 let paragraph = document.getElementById('myParagraph');
        

 paragraph.style.fontWeight = 'bold';
 

 paragraph.classList.add('styled-paragraph');



let imageElement = document.getElementsByTagName('img')[0]
imageElement.src='https://cdn.pixabay.com/photo/2024/05/15/12/31/lake-8763490_640.jpg'



let list=document.querySelector("ul")

let item =`<li>oen</li>
<li>two</li>
<li>three</li>
`
list.insertAdjacentHTML("afterbegin",item)
list.style.border= "1px solid  black"
list.style.color="blue"











