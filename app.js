class Boutique{
    constructor(name, address, type, articles, totalCash){
        this.name = name;
        this.address = address;
        this.type = type;
        this.articles = articles;
        this.totalCash = totalCash;
    }
    buy(articleName, price){
        if(this.articles.includes(articleName)){
            this.totalCash += price;
        }
    }
    refund(name, montant){
        if(name === this.name && montant <= this.totalCash){
            return montant;
        }
        else {
            return 0;
        }
    }
    toHtml(){
        const divBoutique = document.createElement('div');
    
        const pName = document.createElement('p');
        pName.textContent = 'Nom: ' + this.name;
        divBoutique.appendChild(pName);
    
        const pAddress = document.createElement('p');
        pAddress.textContent = 'Adresse: ' + this.address;
        divBoutique.appendChild(pAddress);
    
        const pType = document.createElement('p');
        pType.textContent = 'Type: ' + this.type;
        divBoutique.appendChild(pType);
    
        const ulArticles = document.createElement('ul');
        this.articles.forEach(article => {
            const articleItem = document.createElement('li');
            articleItem.textContent = article;
            ulArticles.appendChild(articleItem);
        });
    
        divBoutique.appendChild(ulArticles);
    
        const pTotalCash = document.createElement('p');
        pTotalCash.textContent = 'Total cash: ' + this.totalCash;
        divBoutique.appendChild(pTotalCash);
    
        return divBoutique;
    }
}

const boutique1 = new Boutique('Première boutique', 'Adresse 1', 'Type 1', ['Pain aux raisins', 'Gâteau au chocolat', 'Tarte aux pommes', 'Biscuits'], 100);
const boutique2 = new Boutique('Deuxième boutique', 'Adresse 2', 'Type 2', ['Biscuits', 'Chausson aux pommes', 'Tarte aux pommes', 'Éclairs'], 150);
const boutique3 = new Boutique('Troisième boutique', 'Adresse 3', 'Type 3', ['Pain aux raisins', 'Gâteau au chocolat', 'Tarte aux fraises', 'Chaussons aux pommes'], 250);

document.body.appendChild(boutique1.toHtml());
document.body.appendChild(boutique2.toHtml());
document.body.appendChild(boutique3.toHtml());