const html              = document.querySelector('html');
const menuSideList      = html.querySelector('.menu-inner'); 
const sidebar           = document.getElementById('sidebar');
const sessionSidebar    = sessionStorage.getItem('menuCollapsed') === 'true';
const toggleOnSidebar   = sidebar.querySelector('.app-brand .layout-menu-toggle'); 
const toggleShowNone    = toggleOnSidebar.querySelector('#icon');
const toggleX           = toggleOnSidebar.querySelector('#icon-x');
const menuItemSide      = menuSideList.querySelectorAll('.menu-item');
const dropDownUser      = document.querySelector('.dropdown-user');
const ulDropUser        = dropDownUser.querySelector('.dropdown-menu');
const toggleNav         = document.querySelector('#navTrigger'); //top trigger nav
const aToggleNav        = toggleNav.querySelector('a');
let isCollapsed         = sessionSidebar;
let disTempHoverSide    = true;

document.addEventListener('DOMContentLoaded', () => { 
    setDefaultHtml();
    toggleShowNone.onclick = () => {
        toggleDot(isCollapsed, toggleShowNone)
    } 
    menuItemSide.forEach((btn) => { 
        btn.addEventListener('click',() => {
            const isOpen = btn.classList.contains('open');
            menuItemSide.forEach((otherBtn) => { 
                otherBtn.classList.remove('open');
            }); 
            
            if(btn.querySelector('.menu-link') && btn.querySelector('.dropdown-submenu')){ 
                if (!isOpen) {
                    btn.classList.add('open');
                }
            }
        });
    });

    dropDownUser.addEventListener('click', () => {
        dropDownUser.querySelector('a').classList.toggle('show'); 
        ulDropUser.classList.toggle('show');
        if(ulDropUser.getAttribute('data-bs-popper')){
            ulDropUser.removeAttribute('data-bs-popper');
        }else{
            ulDropUser.setAttribute('data-bs-popper', 'static');
        }
    });

    document.addEventListener('click', (event) => {
        if (!ulDropUser.contains(event.target) && !dropDownUser.contains(event.target)) {  
            ulDropUser.classList.remove('show');  
            dropDownUser.querySelector('a').classList.remove('show');  
            ulDropUser.removeAttribute('data-bs-popper'); 
        }
    });

    aToggleNav.addEventListener('click', () => {  
        showSideBar();
    });
});

const setDefaultHtml = () => { 
    toggleShowNone.setAttribute('data-collapsed', isCollapsed);
    if(isCollapsed){
        sidebar.classList.add('menu-collapse');
        html.classList.add('layout-menu-collapsed'); 
        disTempHoverSide = isCollapsed;
        toggleClass(toggleShowNone, 'ti-circle-dot', 'ti-circle'); 
        if(disTempHoverSide){
            setTimeout(() => {
                if(sidebar.classList.contains('menu-collapse')) {
                    menuSideList.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                }
                disTempHoverSide = true;
                mouseHove.overNotExpanded(); 
            }, 200);
            return;
        }  
    }
}
 
const toggleDot = () => {
    isCollapsed = !isCollapsed === true;  
    disTempHoverSide = false;  
    toggleClass(toggleShowNone, 'ti-circle-dot', 'ti-circle'); 
    toggleShowNone.setAttribute('data-collapsed', isCollapsed); //set attribute collapse nya
    sidebar.classList.toggle('menu-collapse'); // untuk trigger jika true maka menu collapse di tutup
    html.classList.toggle('layout-menu-collapsed'); 
    html.classList.remove('layout-menu-hover'); 
    sessionStorage.setItem('menuCollapsed', isCollapsed)
    // // tambahakan event mouse over dan mouse out   
    if(!disTempHoverSide){
        setTimeout(() => {
            if(sidebar.classList.contains('menu-collapse')) {
                menuSideList.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
            disTempHoverSide = true;
            mouseHove.overNotExpanded(); 
        }, 200);
        return;
    }  
}

const showSideBar = () => {
    const outSidebarX   = document.querySelector('.layout-block-content');
    const xCollapse     = document.getElementById('icon-x');
    html.classList.add('layout-menu-expanded');
    html.classList.remove('layout-menu-collapsed');
    outSidebarX.classList.remove('menu-collapse');
    outSidebarX.style.display = 'block';
    if(html.classList.contains('layout-menu-expanded')){
        outSidebarX.addEventListener('click', () => { 
            outSidebarX.style.display = 'none';
            html.classList.remove('layout-menu-expanded');
        }); 
        xCollapse.addEventListener('click', () =>{
            outSidebarX.style.display = 'none';
            html.classList.remove('layout-menu-expanded');
        })
    } 
}

function toggleClass(element, class1, class2) {
    if (element.classList.contains(class1)) {
        element.classList.remove(class1);
        element.classList.add(class2);
    } else {
        element.classList.remove(class2);
        element.classList.add(class1);
    }
} 

const mouseHove = {
    overNotExpanded: () =>{
        sidebar.addEventListener('mouseenter', () => { 
            if (!sidebar.classList.contains('menu-collapse')) return; 
            html.classList.add('layout-menu-hover'); 
            sidebar.classList.add('menu-fixed');
            toggleX.style.display           = 'none !important'; 
            toggleShowNone.style.display    = 'block !important';   
            mouseHove.leaveNotExpanded();
        });
    },
    leaveNotExpanded: () => {
        sidebar.addEventListener('mouseleave', () => {
            sidebar.classList.remove('menu-fixed');
            toggleX.style.display = 'block !important';
            toggleShowNone.style.display = 'none !important';

            if(sidebar.classList.contains('menu-collapse')) {
                html.classList.remove('layout-menu-hover');    
                menuSideList.scrollTo({
                    top: 0,
                    behavior: "smooth" 
                }); 
            }; 
        });
    }
}