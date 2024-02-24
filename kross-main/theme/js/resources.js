const tutor_resources = [
    {
        category: 'english',
        name: 'English 1',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio laborum inventore aperiam, omnis illum, exercitationem facilis provident, fuga sapiente neque maxime reprehenderit veritatis odit repudiandae laboriosam. Ex ad eaque nam.',
        type: 'Book',
        link: 'https://open.spotify.com/',
        id: 'res-1'
    },
    {
        category: 'math',
        name: 'Math 1',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio laborum inventore aperiam, omnis illum, exercitationem facilis provident, fuga sapiente neque maxime reprehenderit veritatis odit repudiandae laboriosam. Ex ad eaque nam.',
        type: 'Worksheets',
        link: 'https://open.spotify.com/',
        id: 'res-2'
    },
    {
        category: 'sciences',
        name: 'Sciences 1',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio laborum inventore aperiam, omnis illum, exercitationem facilis provident, fuga sapiente neque maxime reprehenderit veritatis odit repudiandae laboriosam. Ex ad eaque nam.',
        type: 'Website',
        link: 'https://open.spotify.com/',
        id: 'res-3'
    },
    {
        category: 'sciences',
        name: 'Sciences 2',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio laborum inventore aperiam, omnis illum, exercitationem facilis provident, fuga sapiente neque maxime reprehenderit veritatis odit repudiandae laboriosam. Ex ad eaque nam.',
        type: 'Website',
        link: 'https://open.spotify.com/',
        id: 'res-4'
    }
]

var section = document.getElementById('all-content');

for (const ele of tutor_resources) {
    let res_box = document.createElement('div'); res_box.classList.add('res-box'); res_box.setAttribute('category', ele.category.concat('-res')); res_box.id = ele.id;
        let name = document.createElement('h2'); name.innerHTML = ele.name;
        res_box.appendChild(name);
        let description = document.createElement('p'); description.innerHTML = ele.description;
        res_box.appendChild(description);
        let type = document.createElement('h4'); type.innerHTML = "Content Type: " + ele.type;
        res_box.appendChild(type);
        let link = document.createElement('a'); link.href = ele.link;
            let act_btn = document.createElement('button'); act_btn.innerHTML = 'View Resource';
            link.appendChild(act_btn)
        res_box.appendChild(link);
    section.appendChild(res_box);
}

// creating 2 seperate lists for ids and attributes
var all_resources = document.getElementsByClassName('res-box');
let attribute_list = [];
let id_list = [];
for (var i = 0; i < all_resources.length; i++) {
    id_list.push(all_resources[i].id)
    attribute_list.push(document.getElementById(all_resources[i].id).getAttribute('category'))
}

// creating an id-attribute object
const id_attribute_obj = {}
id_list.forEach((element, index) => {
    id_attribute_obj[element] = attribute_list[index];
})

console.log(id_attribute_obj)

const filterAction = (e) => {
    let filtered_ids;
    // Hiding all elements
    for(var i=0; i < all_resources.length; i++){
        all_resources[i].classList.add('hide')
    }
    var all_categories = Object.values(id_attribute_obj) // 
    if (all_categories.includes(e)) {
        filtered_ids = Object.keys(id_attribute_obj).filter(function(v) {return id_attribute_obj[v] == e;});
    }
    console.log(filtered_ids)
    // Only showing the correct elements
    for (var i = 0; i < filtered_ids.length; i++){
        var ele = document.getElementById(filtered_ids[i]);
        ele.classList.remove('hide')
        ele.classList.add('show');
        document.getElementById('all-content').style.justifyContent='left';
    }
}

// creating a searh bar
const searchFunc = (e) => {

    for (const data of tutor_resources) {
        if (data.name.toLocaleLowerCase() == e.toLocaleLowerCase()) {
            // Hiding all elements
            for(var i=0; i < all_resources.length; i++){
                all_resources[i].classList.add('hide')
            }
            document.getElementById(data.id).classList.remove('hide')
            document.getElementById(data.id).classList.add('show')
            document.getElementById('all-content').style.justifyContent='left';
        }
    }

    if (e == '') {
        for(var i=0; i < all_resources.length; i++){
            all_resources[i].classList.remove('hide')
            all_resources[i].classList.add('show')
            document.getElementById('all-content').style.justifyContent='center';
        }
    }
}

