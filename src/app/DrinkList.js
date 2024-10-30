const te = {
  partePlanta: 'hoja',
  contenidoCafeina: '15–70 mg/taza',
  aniosAntiguedad: '4,000+ años'
}

const cafe = {
  partePlanta: 'grano',
  contenidoCafeina: '80–185 mg/taza',
  aniosAntiguedad: '1,000+ años'
}


function Drink({ name }) {

  if(name== 'té'){
    var planta = te
  }
  else{
    var planta = cafe
  }
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Parte de la planta</dt>
          <dd>{planta.partePlanta}</dd>
          <dt>Contenido de cafeína</dt>
          <dd>{planta.contenidoCafeina}</dd>
          <dt>Antigüedad</dt>
          <dd>{planta.aniosAntiguedad}</dd>
        </dl>
      </section>
    );
  }


  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="té" />
        <Drink name="café" />
      </div>
    );
  }
  