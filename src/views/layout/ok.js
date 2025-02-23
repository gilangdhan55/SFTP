//  <script>
//         const sidebar       = document.getElementById("sidebar");
//         const collapseBtn   = document.querySelector(".toggle-collapse");  
//         const iconx         = document.getElementById("icon-x");
//         const isCollapseds  = sessionStorage.getItem("menuCollapsed") === "true";
//         const classHtml     = sessionStorage.getItem("classHtml");
//         const htmlPage      = document.querySelector('html');
//         const menuToggle    = document.querySelectorAll(".menu-toggle");
//         const menuInner     = document.querySelector('.menu-inner');
//         const dropDownUser  = document.querySelector('.dropdown-user');
//         const dropDown      = dropDownUser.querySelector('.dropdown-toggle.hide-arrow');
//         const ulDropDonw    = dropDownUser.querySelector('.dropdown-menu');
//         const toggleNav     = document.querySelector('#navTrigger');
//         const aToggleNav    = toggleNav.querySelector('a');
 
//         let disabledEnterHover = true;
//         disabledEnterHover = isCollapseds;  
//         document.addEventListener("DOMContentLoaded", () => {
            
//             collapseBtn.addEventListener("click", () => {
//                 sidebar.classList.toggle("menu-collapse");
//                 const isCollapsed = collapseBtn.getAttribute("data-collapsed") === "true";
//                 collapseBtn.setAttribute("data-collapsed", !isCollapsed);
//                 sessionStorage.setItem("menuCollapsed", !isCollapsed);  
//                 htmlPage.classList.toggle('layout-menu-collapsed');  
//                 htmlPage.classList.toggle('layout-menu-hover'); 
//                 toggleClass(collapseBtn, "ti-circle-dot", "ti-circle");  
//                 disabledEnterHover = isCollapsed; 
//                 hoverMouseSidebar.enter();
//             });
            
          
//             collapseBtn.setAttribute("data-collapsed", isCollapseds);

//             if(isCollapseds){
//                 sidebar.classList.add("menu-collapse");
//                 collapseBtn.style.display = 'bloack !important';
//                 collapseBtn.classList.add("ti-circle") 
//                 iconx.style.display = 'none !important';
//                 collapseBtn.classList.remove("ti-circle-dot")
//                 htmlPage.classList.add('layout-menu-collapsed'); 
//             }
 
//             hoverMouseSidebar.enter();
//             hoverMouseSidebar.leave();


//             menuToggle.forEach((item) => {
//                 item.addEventListener('click', () => {  
//                     const closeDiv = item.closest('.menu-item');
//                     closeDiv.classList.toggle('open'); 
//                 });
//             });

//             dropDown.addEventListener('click', () => {
//                 dropDown.classList.toggle('show'); 
//                 ulDropDonw.classList.toggle('show');
//                 if(ulDropDonw.getAttribute('data-bs-popper')){
//                     ulDropDonw.removeAttribute('data-bs-popper');
//                 }else{
//                     ulDropDonw.setAttribute('data-bs-popper', 'static');
//                 }
//             });

//             document.addEventListener('click', (event) => {
//                 if (!ulDropDonw.contains(event.target) && !dropDown.contains(event.target)) {  
//                     ulDropDonw.classList.remove('show');  
//                     dropDown.classList.remove('show');  
//                     ulDropDonw.removeAttribute('data-bs-popper'); 
//                 }
//             });
//         });

//         const hoverMouseSidebar = {
//             enter: () => {
//                 sidebar.addEventListener('mouseenter', () => { 
//                     if(sidebar.classList.contains('menu-collapse') && !htmlPage.classList.contains('layout-menu-collapsexpandeded')){  
//                         if(!disabledEnterHover){
//                             console.log(disabledEnterHover)
//                             setTimeout(() => {
//                                 sidebar.classList.remove('menu-fixed');
//                                 iconx.style.display = 'block !important';
//                                 collapseBtn.style.display = 'none !important';
//                                 if(sidebar.classList.contains('menu-collapse')) { 
//                                     htmlPage.classList.remove('layout-menu-hover');    
//                                     menuInner.scrollTo({
//                                         top: 0,
//                                         behavior: "smooth" 
//                                     }); 
//                                 }  
//                                 disabledEnterHover  = true;
//                             }, 500);
//                             return;
//                         }
//                         htmlPage.classList.add('layout-menu-hover'); 
//                         iconx.style.display = 'none !important'; 
//                         sidebar.classList.add('menu-fixed');
//                         collapseBtn.style.display = 'block !important'; 
//                     }
//                 });
//             },
//             leave: () => {
//                 sidebar.addEventListener('mouseleave', () => {
//                     sidebar.classList.remove('menu-fixed');
//                     iconx.style.display = 'block !important';
//                     collapseBtn.style.display = 'none !important';
//                     if(sidebar.classList.contains('menu-collapse')) { 
//                         htmlPage.classList.remove('layout-menu-hover');    
//                         menuInner.scrollTo({
//                             top: 0,
//                             behavior: "smooth" 
//                         }); 
//                     }  
//                 });
//             }
//         }

//         const showSiderBar = () => {
//             const sidebarTrigerX = document.querySelector('.layout-block-content'); 
//             htmlPage.classList.add('layout-menu-expanded');
//             htmlPage.classList.remove('layout-menu-collapsed');
//             sidebarTrigerX.classList.remove('menu-collapse');
//             sidebarTrigerX.style.display = 'block';
//             if(htmlPage.classList.contains('layout-menu-expanded')){
//                 sidebarTrigerX.addEventListener('click', () => { 
//                     sidebarTrigerX.style.display = 'none';
//                     htmlPage.classList.remove('layout-menu-expanded');
//                 }); 
//             } 
//         }

//         aToggleNav.addEventListener('click', () => {  
//             showSiderBar();
//         });

//         function toggleClass(element, class1, class2) {
//             if (element.classList.contains(class1)) {
//                 element.classList.remove(class1);
//                 element.classList.add(class2);
//             } else {
//                 element.classList.remove(class2);
//                 element.classList.add(class1);
//             }
//         }

          
//         function checkWindowWidth() {
//             if (window.innerWidth < 1220) { 
//                 if(sidebar.classList.contains('menu-collapse')){
//                     sidebar.classList.remove('menu-collapse');
//                     htmlPage.classList.remove('layout-menu-collapsed');
//                     collapseBtn.setAttribute("data-collapsed", false);
//                 }
//             }  
//         }

//         // Tambahkan event listener untuk resize
//         window.addEventListener("resize", checkWindowWidth);
//     </script>