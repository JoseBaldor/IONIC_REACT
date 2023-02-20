import Materias from "./Materias";

export function searchMaterias(){
    if(!localStorage.getItem("materias")){
        localStorage['materias']= '[]'  
    }
    let materias = localStorage['materias'];
    materias = JSON.parse(materias);

   return materias;
}

export function removeMateria(id: string){
    let materias = searchMaterias();
    const indice = materias.findIndex((materia:Materias) => materia.id === id);
    materias.splice(indice,1);
    localStorage['materias'] = JSON.stringify(materias);
}

export function saveMateria(materia:Materias){
    let materias = searchMaterias();
    if(materia.id){ 
    // Editar
        const indice = materias.findIndex((a:Materias) => a.id === materia.id);
        if(indice < 0){
            materias.push(materia); 
        }else{
            materias[indice]=materia;
        }
    }else{
    // Nuevo
        materias.push(materia);
    }
    localStorage['materias'] = JSON.stringify(materias);
}

export function searchMateriaById(id: string){
    let materias = searchMaterias();
    return materias.find((materia: Materias) => materia.id === id);

}
