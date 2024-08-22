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
        const imagePath = e.target.files[0];
        // console.log(file1Size)
        const imgUrl = URL.createObjectURL(imagePath)
        console.log(imgUrl)
        bgPreview.style.background = `url(${imgUrl})`

        // PASSING IMAGE URL TO DISPLAY CSS CODE
        cssCodePreview(imgUrl)

        // PROGRESSBAR
        const progressBar = document.getElementById('progressbar');
        progressBar.style.display = 'block';
    
        const reader = new FileReader();
    
        reader.onprogress = function(event) {
            if (event.lengthComputable) {
                const percentLoaded = Math.round((event.loaded / event.total) * 100);
                document.getElementById('progress_label').innerHTML = `${percentLoaded}%`
                // document.getElementById('progress_label').style.transform = `translateX(${percentLoaded}%,${percentLoaded - 50}%)`
                progressBar.value = percentLoaded;
            }
        };
    
        reader.onloadend = function() {
            progressBar.value = 100;
            setTimeout(function(){
                progressBar.style.display = 'none';
            },400)
        };
    
        reader.readAsDataURL(imagePath);
        
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
function cssCodePreview(imgUrl){
    let bgSize = `background-size:${document.getElementById('background-size').value}`
    let bgPosition = `background-position:${document.getElementById('background-position').value}`
    let bgRepeat = `background-repeat:${document.getElementById('background-repeat').value}`
    let bgAttachment = `background-attachment:${document.getElementById('background-attachment').value}`
    
    let cssCustomCode = `
    ${document.getElementById('CssattrValue1').innerHTML = `background: url(${imgUrl})`};
    ${document.getElementById('CssattrValue2').innerHTML = bgSize };
    ${document.getElementById('CssattrValue3').innerHTML = bgPosition};
    ${document.getElementById('CssattrValue4').innerHTML = bgRepeat};
    ${document.getElementById('CssattrValue5').innerHTML =bgAttachment};
    `
    fileUpload.value = null

    return cssCustomCode
}

