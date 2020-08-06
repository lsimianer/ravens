const toggleText = () => {
    let myDom = document.querySelectorAll('.instructional')

    for (var i = 0; i < myDom.length; i++) {
        myDom[i].classList.toggle('biggerText')
    }
}

const toggleContrast = () => {
    let myDom = document.querySelectorAll('.instructional')

    for (var i = 0; i < myDom.length; i++) {
        myDom[i].classList.toggle('Contrast')
    }
}

const toggleBorder = () => {
    let myDom = document.querySelectorAll('.instructional')

    for (var i = 0; i < myDom.length; i++) {
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

const spinnyThingy = () => {
    console.log('tester')
    let menu = document.getElementById('burgerBtn');
    menu.classList.toggle('down')
}

const calculate = () => {
    event.preventDefault()
    let updateFrequency = document.getElementById('updateFreq').value
    let pageCount = document.getElementById('pageCount').value
    let websiteUse = document.getElementById('websiteUse').value
    //cal audit total
    let auditCalc = (parseInt(websiteUse, 10) * parseInt(pageCount, 10))
    // calc remediation
    let remediationCalc
    if (websiteUse === '550') {
        remediationCalc = 1020
    }
    if (websiteUse === '570') {
        remediationCalc = 2050
    }
    if (websiteUse === '600') {
        remediationCalc = 4000
    }
    // calc maintenance 
    let maintenanceCalc
    if (websiteUse === '550') {
        maintenanceCalc = ((parseInt(pageCount, 10) * 57) * parseInt(updateFrequency, 10))
    }
    if (websiteUse === '570') {
        maintenanceCalc = ((parseInt(pageCount, 10) * 110) * parseInt(updateFrequency, 10))
    }
    if (websiteUse === '600') {
        maintenanceCalc = ((parseInt(pageCount, 10) * 150) * parseInt(updateFrequency, 10))
    }
    // total calc
    let total = (auditCalc + maintenanceCalc + remediationCalc)

    let auditTotal = document.getElementById('auditTotal').innerText = `$ ${auditCalc.toLocaleString()}`
    let remediateTotal = document.getElementById('remediateTotal').innerText = `$ ${remediationCalc.toLocaleString()}`
    let maintenanceTotal = document.getElementById('maintenanceTotal').innerText = `$ ${maintenanceCalc.toLocaleString()}`
    let yearlyTotal = document.getElementById('yearlyTotal').innerText = `$ ${total.toLocaleString()}`
}

const openAudit = () => {
    document.getElementById('changeableDiv').classList.toggle('showMeDown')
    document.getElementById('changeableDiv').classList.toggle('hidden')
}
const openRemediation = () => {
    document.getElementById('hiddenRemediation').classList.toggle('hidden')
}
const openConsulting = () => {
    document.getElementById('hiddenConsulting').classList.toggle('hidden')
}