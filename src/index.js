import './style.css'

(function () {
    const content = document.getElementById("content")

    const header = document.createElement('h1')
    header.textContent = 'The Odin Restaurant'

    const banner = document.createElement('img')
    banner.src = '../main.jpg'
    banner.width = '500'
    banner.alt = 'banner'

    const para = document.createElement('p')
    para.textContent = 'The Best Restaurant of Asgard'

    content.appendChild(header)
    content.appendChild(banner)
    content.appendChild(para)

    const tabs = document.querySelectorAll('[data-tab-value]')
    const tabInfos = document.querySelectorAll('[data-tab-info]')

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document
                .querySelector(tab.dataset.tabValue);
            tabInfos.forEach(tabInfo => {
                tabInfo.classList.remove('active')
            })
            target.classList.add('active');
        })
    })
})()

