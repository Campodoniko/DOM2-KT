let table = document.createElement('table');
let tr = document.createElement('tr');
table.append(tr);


CreateHeaderCell(tr, 'ID');
CreateHeaderCell(tr, 'Кличка');
CreateHeaderCell(tr, 'Фото');
CreateHeaderCell(tr, 'Возраст');
CreateHeaderCell(tr, 'Рейтинг');
CreateHeaderCell(tr, 'Фаворит');
CreateHeaderCell(tr, 'Описание');

document.body.append(table);

for (let i = 0; i < cats.length; i++) 
{
    tr = document.createElement('tr');
    table.append(tr);
    CreateCells(tr, i); 
      
}


function CreateHeaderCell(tr, cellName) {
    let td = document.createElement('td');
    tr.append(td);
    let title = document.createElement('h3');
    td.append(title);
    title.append(cellName);
    
}

function CreateCells(tr, i)
{
    td = document.createElement('td');
    tr.append(td);
    td.append(cats[i].id);

    td = document.createElement('td');
    tr.append(td);
    td.append(cats[i].name);
   
    td = document.createElement('td');
    tr.append(td);
    const image = document.createElement('img');
    image.src  = cats[i].img_link;
    image.style.width='100px';
    td.append(image);

    td = document.createElement('td');
    tr.append(td);
    td.append(cats[i].age);

    td = document.createElement('td');
    tr.append(td);
    td.append(cats[i].rate);

    td = document.createElement('td');
    tr.append(td);
    
    if(cats[i].favourite)
    {
        td.append('Да');
    }
    else
    {
        td.append('Нет');
    }

    td = document.createElement('td');
    tr.append(td);
    td.append(cats[i].description);
      
}