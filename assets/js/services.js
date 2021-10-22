function setUpTabs(){
    document.querySelectorAll(".btn-tab").forEach(button =>{
        button.addEventListener("click",()=>{
            const ROWBAR = button.parentElement;
            const ROWS = ROWBAR.parentElement;
            const PAGETABS =  ROWS.parentElement
            const TABNUMBER  = button.dataset.forTab;
            const TabtoActivate = PAGETABS.querySelector(`.data-tabs[data-tab ="${TABNUMBER}"]`)
            ROWBAR.querySelectorAll(".btn-tab").forEach(button=>{
                button.classList.remove("btn-active")
            })
            PAGETABS.querySelectorAll(".data-tabs").forEach(tabs =>{
                tabs.classList.remove("data-tabs-active")
            })
            button.classList.add("btn-active")
            TabtoActivate.classList.add("data-tabs-active")
        })
    })
}
function sideBarsTabs(){
    document.querySelectorAll(".btn-side-tab").forEach(button =>{
        button.addEventListener("click",()=>{
            const SIDEBAR = button.parentElement;
            const CONTENT = SIDEBAR.parentElement;
            const INFORMATION =  CONTENT.querySelector(".information")
            const TABNUMBER  = button.dataset.forTab;
            const TabtoActivate = INFORMATION.querySelector(`.data-tab[data-tab ="${TABNUMBER}"]`)
            SIDEBAR.querySelectorAll(".btn-side-tab").forEach(button=>{
                button.classList.remove("btn-active")
            })
            INFORMATION.querySelectorAll(".data-tab").forEach(tabs =>{
                tabs.classList.remove("data-tabs-active")
            })
            button.classList.add("btn-active")
            TabtoActivate.classList.add("data-tabs-active")
        })
    })
}
document.addEventListener("DOMContentLoaded", ()=>{
    setUpTabs()
    sideBarsTabs()
});

