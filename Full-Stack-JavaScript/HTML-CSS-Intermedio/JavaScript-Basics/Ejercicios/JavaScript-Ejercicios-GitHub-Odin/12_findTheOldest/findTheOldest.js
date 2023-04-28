const findTheOldest = function( array ) {
    return array.reduce( ( masViejo, personaActual ) => {
        const edadMasViejo = edad(masViejo.yearOfBirth, masViejo.yearOfDeath);
        const edadPersona = edad(
            personaActual.yearOfBirth,
            personaActual.yearOfDeath
        );
        return edadMasViejo < edadPersona ? personaActual : masViejo;
    } );
};

const edad = function ( nacimiento, muerto ){
    if ( !muerto ) {
        muerto = new Date().getFullYear();
    }
    return muerto - nacimiento;
};
// Do not edit below this line
module.exports = findTheOldest;
