
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
    const indice = alumnos.findIndex((alumno:any) => alumno.id === id);
    alumnos.splice(indice,1);
    localStorage['alumnos'] = JSON.stringify(alumnos);
}

export function saveAlumno(alumno:any){
    let alumnos = searchAlumnos();
    alumnos.push(alumno);
    localStorage['alumnos'] = JSON.stringify(alumnos);
}