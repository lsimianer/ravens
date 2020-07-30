


const toggleText = () => {
    let myDom = document.querySelectorAll('.instructional')

    for(var i = 0; i < myDom.length; i++){
        myDom[i].classList.toggle('biggerText')
    }
}

const toggleContrast = () => {
    let myDom = document.querySelectorAll('.instructional')

    for(var i = 0; i < myDom.length; i++){
        myDom[i].classList.toggle('Contrast')
    }
}

const toggleBorder = () => {
    let myDom = document.querySelectorAll('.instructional')

    for(var i = 0; i < myDom.length; i++){
        myDom[i].classList.toggle('border')
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  