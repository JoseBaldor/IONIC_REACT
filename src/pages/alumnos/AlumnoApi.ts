import Alumnos from "./Alumnos";

export function searchAlumnos(){
    if(!localStorage.getItem("alumnos")){
        localStorage['alumnos']= '[]'  
    }
    let alumnos = localStorage['alumnos'];
    alumnos = JSON.parse(alumnos);

   return alumnos;
}

export function removeAlumno(id: string){
    let alumnos = searchAlumnos();
    const indice = alumnos.findIndex((alumno:Alumnos) => alumno.id === id);
    alumnos.splice(indice,1);
    localStorage['alumnos'] = JSON.stringify(alumnos);
}

export function saveAlumno(alumno:Alumnos){
    let alumnos = searchAlumnos();
    if(alumno.id){
        // Editar
        const indice = alumnos.findIndex((a:Alumnos) => a.id === alumno.id);
        if(indice < 0){
            alumnos.push(alumno); 
        }else{
            alumnos[indice]=alumno;
        }
    }else{
    // Nuevo
        alumnos.push(alumno);
    }
    localStorage['alumnos'] = JSON.stringify(alumnos);
}

export function searchAlumnoById(id: string){
    let alumnos = searchAlumnos();
    return alumnos.find((alumno: Alumnos) => alumno.id == id);

}
