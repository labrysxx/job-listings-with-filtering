const main = document.getElementById('content')

window.addEventListener('DOMContentLoaded', () => {
    fetch('./data.json')
        .then(response => {return response.json()})
        .then(data => {
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
    return
}

function upTools(tool) {
    const filter = document.querySelector('.filter');
    const toolClicked = tool.target.dataset.tool;
  
    // verificar se a ferramenta já existe no filtro
    const filteredTools = filter.querySelectorAll('.toolFiltered');
    for (const filteredTool of filteredTools) {
      if (filteredTool.dataset.check === toolClicked) {
        // se ela existir, remover
        filteredTool.remove()
        return;
      }
    }
  
    const toolDiv = document.createElement('div');
    toolDiv.innerHTML = toolClicked;
    toolDiv.classList.add('toolFiltered');
    toolDiv.dataset.check = toolClicked;
  
    filter.insertAdjacentElement('beforeend', toolDiv);
}
  