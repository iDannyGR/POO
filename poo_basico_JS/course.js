class Course {
    constructor({
      id,
      name,
      classes = [],
      teacher,
    }){
      this.id = id;
      this._name = name;
      this.classes = classes;
      this.teacher = teacher;
    };

    get name(){
        return this._name;
    }

    set name(newName){
      (newName === 'Curso maldito de programacion basica') ?
      console.error('no puedes usar ese nombre') :
      this._name = newName;
    }

 }