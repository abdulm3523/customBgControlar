/**
 * DATE: 22-08-2024
 * BACKGROUND CONTROLL CSS CODE GENERATOR APPLICATION
 * AUTHOR: ABDUL MALIK
 */

window.onload = ()=>{
    main()
}

    // TAKING DOM REFERANCE
    const fileUpload = document.getElementById('imageUpload')
    const uploadProgress  = document.getElementById('progress_bar')
    const bgPreview = document.getElementById('bg_preview')
    const bgAttributes = document.getElementById('attributes')
    const copyCodeBtn = document.getElementById('copyCssCode')
    const cssAttrValue = document.getElementById('CssattrValue')

// MAIN FUNCTION
function main(){

    // FILE UPLOAD EVENT
    fileUpload.addEventListener('change', function (e) {
        let file1Size = e.target.files[0].name;
        // console.log(file1Size)
        bgPreview.style.background = `url(assest/img/${file1Size})`
        file1Size = null
        
    });  

    // UPDATE BACKGOUND PROPERTICE IN CSS
    bgAttributes.addEventListener('change',bgPropertiesUpdateHandeler)

    // UPDATE CSS CODE VALUE
    bgAttributes.addEventListener('change',cssCodePreview)

    // CSS CODE COPY EVENT
    copyCodeBtn.addEventListener('click',copyCssCodeBtnHendaler)
    
}

// EVENT HANDELAR
// BACKGROUND PROPERTICE UPDATE HANDALER
function bgPropertiesUpdateHandeler(){
    bgPreview.style.backgroundSize = document.getElementById('background-size').value
    bgPreview.style.backgroundPosition = document.getElementById('background-position').value
    bgPreview.style.backgroundRepeat = document.getElementById('background-repeat').value
    bgPreview.style.backgroundAttachment = document.getElementById('background-attachment').value
    
}

// CSS CODE COPY BTN HENDALER
function copyCssCodeBtnHendaler(){
    const code = cssCodePreview()
    navigator.clipboard.writeText(code)
}

// TAKING CSS ELEMENTS TO DISPLAY CSS CODE BOX
function cssCodePreview(){
    let bgSize = `background-size:${document.getElementById('background-size').value}`
    let bgPosition = `background-position:${document.getElementById('background-position').value}`
    let bgRepeat = `background-repeat:${document.getElementById('background-repeat').value}`
    let bgAttachment = `background-attachment:${document.getElementById('background-attachment').value}`
    let cssCustomCode = `
    ${document.getElementById('CssattrValue1').innerHTML =bgSize };
    ${document.getElementById('CssattrValue2').innerHTML = bgPosition};
    ${document.getElementById('CssattrValue3').innerHTML = bgRepeat};
    ${document.getElementById('CssattrValue4').innerHTML =bgAttachment};
    `
  return cssCustomCode
}

