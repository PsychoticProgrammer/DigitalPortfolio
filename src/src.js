// https://a.mobirise.com/?url=
// https://mxb.dev/
// KoopaBeach
// --color-bg: #fffffe;
//     --color-bg-offset: #e3f6f5;
//     --color-text: #272343;
//     --color-text-offset: #2d334a;
//     --color-border: #e3f6f5;
//     --color-primary: #ff9d00;
//     --color-primary-offset: #ffca00;
//     --color-secondary: #bae8e8;

// Classic
// --color-bg: #ffffff;
//     --color-bg-offset: #f7f7f9;
//     --color-text: #373a3c;
//     --color-text-offset: #818a91;
//     --color-border: #eceeef;
//     --color-primary: #ff335f;
//     --color-primary-offset: #ff1447;
//     --color-secondary: #43a9a3;

// Dark
// --color-bg: #0e141b;
//     --color-bg-offset: #252526;
//     --color-text: #ffffff;
//     --color-text-offset: #818a91;
//     --color-border: #2d2d2d;
//     --color-primary: #ff5277;
//     --color-primary-offset: #ff2957;
//     --color-secondary: #43a9a3;


// D9DBF1
// 1B3B6F
// 21295C
// EA9010
// 37371F
// F4C95D

const projects = [
    {
        name: "CYBORG",
        link: "https://github.com/PsychoticProgrammer/CyborgComputerStore",
        description: 
        `<p>Se trata de un sistema para realizar compras en línea de todo tipo de componente de computador (RAM, Procesador, Tarjetas Gráficas y todos los periféricos) así como computadoras en sí. Su meta es ofrecer un lugar en línea para ensamblaje de computadores, y que el computador con los componentes proporcionados sea entregado.</p>
        <p>Desarrollado en JavaScript, HTML y CSS puros, el proyecto presenta el uso de varios patrones de la programación orientada a objetos, como el Builder, Strategy, Proxy entre otros. Para el back-end se utilizó PHP puro. MySQL es la base de datos empleada</p>
        <p>El sistema se desarrolló en conjunto con <a href="https://github.com/ANavas07" title="/ANavas07" target="_blank"><b>Ariel Navas</b></a>.</p>`,
        img: [
            "../assets/Cyborg1.png",
            "../assets/Cyborg2.png",
            "../assets/Cyborg3.png",
            "../assets/Cyborg4.png",
            "../assets/Cyborg5.png",
            "../assets/Cyborg6.png",
        ],
        currentImg: 0,
    },
    {
        name: "ABIANCA",
        link: "https://github.com/PsychoticProgrammer/Avianca",
        description: 
        `<p>Se trata de un sistema para realizar compras en línea de boletos para tickets de avión. Se manejan varias aerolíneas, las cuales ofrecen sus servicios. El usuario puede buscar en base a fecha de salida si el vuelo es solo de ida, o salida y regreso si es un viaje ida y vuelta.</p>
        <p>Desarrollado en JavaScript, HTML y CSS puros, el proyecto presenta el consumo de servicios con la arquitectura SOA. El acceso a base de datos se da a través de PHP. MySQL es la base de datos empleada</p>
        <p>El sistema se desarrolló en conjunto con <a href="https://github.com/Sebastchan8" title="/Sebastchan8" target="_blank"><b>Joan Salán</b></a>.</p>`,
        img: [
            "../assets/avianca1.png",
            "../assets/avianca2.png",
            "../assets/avianca3.png",
        ],
        currentImg: 0,
    },
    {
        name: "SHOPPING LIST",
        link: "https://github.com/PsychoticProgrammer/ShoppingList",
        description: 
        `<p>Se trata de un sistema para guardar una lista de compras. El sistema permite crear recetas, para así agregar todos los productos relacionados con la misma con un solo click. Además, cuenta con un modo de compra, el cual centra el foco en la lista seleccionada. cuenta con varias secciones de búsqueda.</p>
        <p>Desarrollado en Ionic usando Angular y por ende TypeScript y Sass. El acceso a base de datos se da a través de PHP. MySQL es la base de datos empleada. El enfoque principal es que la aplicación sea posteriormente desplegada en un dispositivo móvil</p>`,
        img: [
            "../assets/shopping1.png",
            "../assets/shopping2.png",
            "../assets/shopping3.png",
            "../assets/shopping4.png",
            "../assets/shopping5.png",
        ],
        currentImg: 0,
    },
    {
        name: "E-COMMERCE",
        link: "https://github.com/PsychoticProgrammer/OnlineShop",
        description: 
        `<p>Sistema de compras en línea. Cuenta con las funcionalidades básicas de todo sitio dedicado al e-commerce como la creación de usuarios, productos en carrito, productos favoritos, pago de productos y demás.</p>
        <p>Desarrollado en Angular y por ende usando TypeScript. El acceso a base de datos se da a través de PHP. MySQL es la base de datos empleada. La aplicación fue desplegada en un servidor de Google en Almalinux y en Ubuntu Server.</p>`,
        img: [
            "../assets/e1.png",
            "../assets/e2.png",
            "../assets/e3.png",
            "../assets/e4.png",
            "../assets/e5.png",
            "../assets/e6.png",
            "../assets/e7.png",
        ],
        currentImg: 0,
    },
    {
        name: "MERCURY",
        link: "https://github.com/SebasTix02/Mercury",
        description: 
        `<p>Sistema web de inventarios. Se trata de un sistema personalizado a las necesidades de la Facultad de Ingeniería en Sistemas Electrónica e Industrial de la Universidad Técnica de Ambato. Las funcionalidades más destacables son el módulo de reportería, generador de etiquetas QR para los productos de inventario y escáner de códigos QR.</p>
        <p>Desarrollado en React con TypeScript. El acceso a base de datos y demás funcionalidades del back-end se da a través de NodeJS. MySQL es la base de datos empleada. La aplicación fue desplegada en un servidor linux dockerizado</p>
        <p>El sistema se desarrolló en conjunto con <a href="https://github.com/Sebastchan8" title="/Sebastchan8" target="_blank"><b>Joan Salán</b></a> y <a href="https://github.com/SebasTix02" title="/SebasTix02" target="_blank"><b>Sebastián Tixilema</b></a>.</p>`,
        img: [
            "../assets/m1.png",
            "../assets/m2.png",
            "../assets/m3.png",
            "../assets/m4.png",
            "../assets/m5.png",
            "../assets/m6.png",
            "../assets/m7.png",
            "../assets/m8.png",
        ],
        currentImg: 0,
    },
]; 

window.onload = () => {
    // Carga de los proyectos 
    projects.forEach((project, idx) => {
        setCarousel(project, idx);
    });

    // Funcionalidades menú hamburguesa
    var close = document.getElementById("close-menu");
    var open = document.getElementById("burguer-menu");
    var aside = open.nextElementSibling;

    open.addEventListener('click', () => {
        aside.style.display = "flex";
        open.checked = true;
    });

    aside.addEventListener('click', () => {
        aside.style.display = "none";
        open.checked = false;
    });
}

function setCarousel(project, idx){
    const {name, img, description, link} = project;
    const cardsBlock = document.getElementById('cardsBlock');
    cardsBlock.innerHTML += 
    `<div class="project">
        <div id="${name}" class="carousel">
            <button onclick="change(${idx}, false)">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <div id="${name}ImgDisplay" class="imgDisplay">
                <div class="imgContainer">
                    <img src="${img[0]}" alt="" height="400px">
                </div>
                <div class="dots">
                    ${setDots(img.length, project.currentImg)}
                </div>
            </div>
            <button onclick="change(${idx}, true)">
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
        </div>
        <div class="info">
            <a class="projectName" href="${link}" target="_blank" title="Ir al Repositorio"><b>${name}</b></a>
            <div class="description">${description}</div>
        </div>
    </div>`
}

function setDots(imgCount, currentImg){
    dots = '';
    for(let i = 0; i < imgCount; i++){
        dots += i == currentImg ? '<div class="boldDot"></div>' : '<div class="dot"></div>';
    }
    return dots;
}

function change(projectIdx, foward){
    const project = projects[projectIdx]
    const imgDisplay = document.getElementById(project.name + 'ImgDisplay');
    project.currentImg = foward ? project.currentImg + 1 : project.currentImg - 1;

    if(foward && project.currentImg == project.img.length){
        project.currentImg = 0;
    }
    if(!foward && project.currentImg == -1){
        project.currentImg = project.img.length - 1;
    }

    imgDisplay.innerHTML = 
    `
    <div class="imgContainer">
        <img src="${project.img[project.currentImg]}" alt="" height="400px">
    </div>
    <div class="dots">
        ${setDots(project.img.length, project.currentImg)}
    </div>
    `
}