const main = document.getElementById('content')
let jobs
let filters = Array()

window.addEventListener('DOMContentLoaded', () => {
    fetch('./data.json')
        .then(response => {return response.json()})
        .then(data => {
            jobs = data
            createArticle(data)
            filterTool()
        })
        .catch(error => {
            // captura e trata erros ocorridos durante a requisição
            console.error('Erro: ' + error);
        });
})

function createArticle(data) {
    data.forEach((job) => {
        const articleHtml = `
            <article>
                <div class="article-image">
                    <img src="${job.logo}" alt="">
                </div>
                <header class="article-header">
                    <div class="top-info">
                        <div class="company-name">${job.company}</div>
                        ${job.new ? `
                        
                        <div class="new">
                            <span>new!</span>
                        </div>
                        ` 
                        : ''
                        }
                        ${job.featured ? `
                        
                        <div class="featured active">
                            <span>featured</span>
                        </div>
                        
                        ` 
                        : ''
                        }
                    </div>
                    <div class="middle-info">
                        <div class="position">${job.position}</div>
                    </div>
                    <div class="bottom-info">
                        <div class="postedAt">${job.postedAt}</div>
                        <div class="separator"></div>
                        <div class="contract">${job.contract}</div>
                        <div class="separator"></div>
                        <div class="location">${job.location}</div>
                    </div>
                    <div class="languages-tools">${showToolsAndLanguages(job)}</div>
                </header>
            </article>
        `
        main.insertAdjacentHTML('beforeend', articleHtml)
    })
}

function updateLocalStorage() {
    localStorage.setItem('filters', JSON.stringify(filters))
}

function checkLocalStorage() {
   filters = JSON.parse(localStorage.getItem('filters'))
}

function showToolsAndLanguages(job) {
    let toolsHtml = '';
    job.languages.forEach((language) => {
        toolsHtml += `<div class='tool' data-tool='${language.toLowerCase()}'>${language}</div>`;
    });
    job.tools.forEach((tool) => {
        toolsHtml += `<div class='tool' data-tool='${tool.toLowerCase()}'>${tool}</div>`;
    });
    return toolsHtml;
}

function filterTool() {
    const tools = document.querySelectorAll('.tool')
    for(tool of tools) {
        tool.addEventListener('click', (e) => {
            e.preventDefault()
            createFilterBox()
            upTools(e)
        })
    }
}

function createFilterBox() {
    const existFilter = document.querySelectorAll('.filter')
    if(existFilter.length === 0) {
        const divFilter = document.createElement('div')
        const header = document.querySelector('header')
        divFilter.classList.add('filter')
    
        header.insertAdjacentElement('afterend', divFilter)
    }
}

function upTools(tool) {
    const filter = document.querySelector('.filter');
    const toolClicked = tool.target.dataset.tool;

    // verificar se a tool já existe no filtro
    const filteredTools = filter.querySelectorAll('.toolFiltered');
    for (const filteredTool of filteredTools) {
        if (filteredTool.dataset.check === toolClicked) {
            // se ela existir, remover
            filteredTool.remove();

            // remover a tool do array filters
            const index = filters.indexOf(toolClicked);
            if (index !== -1) {
                filters.splice(index, 1);
            }

            // atualizar o localStorage
            updateLocalStorage();

            showFilteredJobs(); // atualizar a exibição dos jobs

            return;
        }
    }

    filters.push(toolClicked);
    updateLocalStorage();

    const toolDiv = document.createElement('div');
    toolDiv.innerHTML = toolClicked;
    toolDiv.classList.add('toolFiltered');
    toolDiv.dataset.check = toolClicked;

    filter.insertAdjacentElement('beforeend', toolDiv);
    showFilteredJobs(); // atualizar a exibição dos jobs
}

function showFilteredJobs() {
    checkLocalStorage()
    const articles = document.querySelectorAll('article');

    articles.forEach(article => {
        const languagesTools = article.querySelector('.languages-tools');
        const tools = Array.from(languagesTools.querySelectorAll('.tool'));

        // verifica se todas as tools filtradas estão presentes no job
        const hasAllFilteredTools = filters.every(filter => {
            const filterLowercase = filter.toLowerCase();
            return tools.some(tool => tool.dataset.tool.toLowerCase() === filterLowercase);
        });

        // exibe ou oculta o job com base na filtragem
        if (hasAllFilteredTools) {
            article.style.display = 'inline-grid'; // exibe o job
        } else {
            article.style.display = 'none'; // oculta o job
        }
    });
    deleteTool()
}

function deleteTool() {
    const toolsFiltered = document.querySelectorAll('.toolFiltered')
    for(const tool of toolsFiltered) {
        tool.addEventListener('click', (e) => {
            e.preventDefault()
            checkLocalStorage()
            filters = filters.filter(tool => tool !== e.target.dataset.check)
            e.target.remove()
            updateLocalStorage();
            showFilteredJobs()
        })
    }
}



  