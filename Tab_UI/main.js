const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tabs-items')
const panes = $$('.tab-pane')
const tabLine = $('.tabs-items.active')
const line = $('.line')
line.style.left = tabLine.offsetLeft + 'px'
line.style.width = tabLine.offsetWidth + 'px'

tabs.forEach((tab,index) => {
    const pane = panes[index]
   
    tab.onclick = function(){
        $('.tabs-items.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'
        this.classList.add('active')
        pane.classList.add('active')
        
    }
});