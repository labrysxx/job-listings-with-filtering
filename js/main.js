const main = document.getElementById('content')

window.addEventListener('DOMContentLoaded', () => {
    fetch('./data.json')
        .then(response => {return response.json()})
        .then(data => {
            createArticle(data)
            console.log(data)
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
                        <div class="new">
                        ${job.new ? `
                            <div>
                                <span>new</span>
                            </div>
                        ` 
                        : ''
                        }
                        </div>
                        <div class="featured">
                        ${job.featured ? `
                            <div>
                                <span>featured</span>
                            </div>
                        ` 
                        : ''
                        }
                        </div>
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
        toolsHtml += `<div>${language}</div>`;
    });
    job.tools.forEach((tool) => {
        toolsHtml += `<div>${tool}</div>`;
    });
    return toolsHtml;
}