
class Articulo {
    constructor(nombre, precio, year){
        this.nombre = nombre;
        this.precio = precio;
        this.year = year;
    }

}

class UI {
    addArticulo(articulo){
        const articlesList = document.getElementById('product-list');
        const item =  document.createElement('div');
        item.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product name</strong>: ${articulo.nombre}</strong>
                    <strong>Product price</strong>: ${articulo.precio}</strong>
                    <strong>Product year</strong>: ${articulo.year}</strong>
                <a href="#" class="btn btn-danger" name="borrarElemento"> Delete </a>
                </div>
            </div

        `;
        articlesList.appendChild(item);
    }
    limpiarForm(){
        document.getElementById('product-form').reset();
    }
    deleteArticulo(item){
        if(item.name === 'borrarElemento'){
            console.log(item.parentElement.parentElement.parentElement) //Get diferent levels to delete all component
            item.parentElement.parentElement.parentElement.remove();
            this.mostrarMensaje('Product deleted succesfully', 'danger')
        }   
    }
    mostrarMensaje(mensaje, clase){
        const alerta = document.createElement('div');
        //Insert css class info
        alerta.className = `alert alert-${clase}  mt-3`;
        //Print message content
        alerta.appendChild(document.createTextNode(mensaje));
        const contenedor = document.querySelector('.container');
        const aplicacion = document.querySelector('#app');
        //Insert alert before the add product ui
        contenedor.insertBefore(alerta, aplicacion);
         setTimeout(function (){
             document.querySelector('.alert').remove();
         }, 3000)
    }
}



const ui = new UI();
function enviar(){
    
}

document.getElementById('product-form').addEventListener('submit', function (evento){
    let pName = document.getElementById('pName').value;
    let pPrice = document.getElementById('pPrice').value;
    let pYear = document.getElementById('pYear').value;
    
    const articulo = new Articulo(pName, pPrice, pYear)

    

    if(pName === '' || pPrice === '' || pYear === ''){
          ui.mostrarMensaje('Complete all fields to submit a product', 'danger');
    } else{
        ui.addArticulo(articulo);
    ui.limpiarForm();

    ui.mostrarMensaje('Product added successfully', 'success')
    }
    evento.preventDefault(); //Stop refreshing page
    
    

    
})


document.getElementById('product-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteArticulo(e.target);
    e.preventDefault();
})
