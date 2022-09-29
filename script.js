let posts = [
    {
        'author': 'The Batman',
        'authorIcon': 'img/batman.png',
        'image': 'img/batman-foto.jpg',
        'description': 'Die Fledermäuse sind eine Säugetiergruppe, die zusammen mit den Flughunden die Ordnung der Fledertiere bilden.',
        'location': 'Gotham City',
        'comments': '170',
        'time': '1',
        'call': '27000'
    },
    {
        'author': 'The Spiderman',
        'authorIcon': 'img/spiderman.png',
        'image': 'img/spiderman-foto.jpg',
        'description': 'Spinnen sind wirklich schon nah dran an Insekten, denn sie gehören ebenfalls zum Stamm der Gliederfüßer, also Tiere, die ein Außenskelett und gegliederte Beine besitzen.',
        'location': 'Queens',
        'comments': '85',
        'time': '5',
        'call': '5000'
    },
    {
        'author': 'Aquaman',
        'authorIcon': 'img/aquaman.png',
        'image': 'img/aquaman-foto.jpg',
        'description': 'Fische oder Pisces (Plural zu lateinisch piscis „Fisch“) sind aquatisch lebende Wirbeltiere mit Kiemen.',
        'location': 'Atlantis',
        'comments': '61',
        'time': '15',
        'call': '61000'
    }
    ,
    {
        'author': 'Thor',
        'authorIcon': 'img/thor.png',
        'image': 'img/hammer.jpg',
        'description': ' In der Regel werden Hämmer in verschiedenen Bereichen der Fertigung eingesetzt. Unter anderem zum Zerschlagen, dem Einschlagen und dem Formen.',
        'location': 'Asgard',
        'comments': '55',
        'time': '30',
        'call': '3000'
    }

];

function renderPosts() {
    document.getElementById('postContainer').innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        document.getElementById('postContainer').innerHTML += templatePost(i, post);
    }
}


function commentFromTextField(i) {
    let name = document.getElementById('textField' + i).value;
    commentFunc(name, i);
}

function commentFunc(x, i) {
    let name = document.getElementById('textField' + i).value = '';
    let bt = document.getElementById('btSubmit' + i);
    document.getElementById('commentsField' + i).innerHTML += `
    <div class="commentOwner">
         <div class="bold">The Osman: </div><div>${x}</div>
     </div>`;
    bt.disabled = true;
}


function manageBtn(i) {
    let bt = document.getElementById('btSubmit' + i);
    if (i.value != '') {
        bt.disabled = false;
    }
    else {
        bt.disabled = true;
    }
}

function templatePost(i, post) {
    return `
    <div class="postContainerUnder">
    <div class="postHeader">
        <div class="postHeaderLeft">
            <div class="postHeaderLeftPic"><a href="#"><img src=" ${post['authorIcon']}"></a></div>
            <div class="postHeaderTitle">
                <div class="postAuthor"><a>${post['author']}</a></div>
                <div> ${post['location']}</div>
            </div>
        </div>
        <div class="postHeaderLeftPic"><a href="#"><img src="./img/icon_menu.png"></a></div>
    </div>
    <div class="postPic"><img src=" ${post['image']}"></div>
    <div class="postUnderContainer">
        <div class="postIcons">
            <div class="postIconsLeft">
                <div><a href="#"><img src="./img/icon_herz.png"></a></div>
                <div><a href="#"><img src="./img/icon_comment.png"></a></div>
                <div><a href="#"><img src="./img/icon_message.png"></a></div>
            </div>
            <div class="postIconsRight">
                <div><a href="#"><img src="./img/icon_fav.png"></a></div>
            </div>
        </div>
        <div class="bold"><a class="bold">${post['call']} Aufrufe</a></div>
        <div><a class="bold">${post['author']}</a> ${post['description']}</div>
        <div class="grey"><a class="grey">alle ${post['comments']} kommentare anschauen</a></div>
        <div class="grey"><a class="grey">vor ${post['time']} stunden</a></div><br>
        <div>Kommentare:</div>
    </div>
    <div class="commentsClass">
        <p id="commentsField${i}"></p>
    </div>
    <div class="commentInput">
        <div class="commentInputLeft">
            <div><a class="commentInputPic" href="#"><img src="./img/smiley_icon.png"></a></div>
            <div class="inputFieldCommentContainer"><input onkeyup="manageBtn(${i})" id="textField${i}" type="text"
                    class="inputFieldComment" placeholder="Kommentieren..."></div>
        </div>
       <div ><button disabled type="button" id="btSubmit${i}" class="btn"
            onclick="commentFromTextField(${i})">Posten</button></div>
    </div>
    `;
}



