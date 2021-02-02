const addImgButton = document.getElementById('addImage');
const add = (e) => {
    const text = document.getElementById('addImage');
    const imgFile = document.getElementsByClassName('uniPosts_imgFile')[0];
    const imgUrl = document.getElementsByClassName('uniPosts_imgUrl')[0];
    if (text.innerText === 'Add image by url') {
        text.innerText = 'Add image by uplouding';
        imgFile.setAttribute('hidden', '');
        imgFile.value = '';
        imgUrl.removeAttribute('hidden', '');
    } else {
        text.innerText = 'Add image by url';
        imgUrl.setAttribute('hidden', '');
        imgUrl.value = '';
        imgFile.removeAttribute('hidden', '');
    }
}
if (addImgButton) {
    addImgButton.addEventListener('click', add);
}

const form = document.getElementById('form');
if (form) {
    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        const data = getData();
        try {
            const res = await fetch('/send_message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })

            if (res.status === 200) {
                window.location.href = '/sent'
            }

        } catch (error) {
            console.log(error)
        }
    });
}

function getData() {
    const data = [...new FormData(form)];
    params = {};
    data.forEach(d => {
        params[d[0]] = d[1]
    })
    return params;
}

const backButton = document.getElementById('back');
if (backButton) {
    backButton.addEventListener('click', async () => {
        window.location.href = '/';
    })
}