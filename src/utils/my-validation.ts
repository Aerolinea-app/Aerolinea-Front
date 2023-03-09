import { AbstractControl } from '@angular/forms';

export class MyValidations {

    static mismaCiudad( AC: AbstractControl) {
        let ciudadOrigen = AC.get('ciudadOrigen').value
        if(AC.get('ciudadDestino').touched || AC.get('ciudadDestino').dirty) {
            let ciudadDestino = AC.get('ciudadDestino').value;

            if(ciudadOrigen === ciudadDestino) {
                AC.get('ciudadDestino').setErrors( {CiudadesIguales: true})
            } else {
                return null
            }
        }
    }

}