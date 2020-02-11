

const db=firebase.firestore();
const table=document.querySelector('#tbresult');
const form=document.querySelector('#addForm');
db.collection('user').get().then((snapshot)=>{
    snapshot.forEach(doc=>{
        showData(doc);
    });
});

form.addEventListener('submit',(e)=>{
        e.preventDefault();
            db.collection('user').add({
                name:form.name.value,
                gender:form.gender.value,
                email:form.email.value,
                text:form.text.value
            
        });
        form.name.value='';
});


function showData(doc){
        var row=table.insertRow(-1);
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3=row.insertCell(2);
        var cell4=row.insertCell(3);
        cell1.innerHTML=doc.data().name;
        cell2.innerHTML=doc.data().gender;
        cell3.innerHTML=doc.data().email;

        let btn=document.createElement('button');
        btn.textContent='delete';
        btn.setAttribute('class','btn btn-danger')
        btn.setAttribute('data-id',doc.id);
        cell4.appendChild(btn);

        btn.addEventListener('click',(e)=>{
            let id=e.target.getAttribute('data-id');
            db.collection('user').doc(id).delete();
        });
       
}

 
