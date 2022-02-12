import {NgModule} from '@angular/core'
import { Contadorcomponent } from './contador/contador.component'

@NgModule({
    declarations:[
        Contadorcomponent
    ],
    exports:[
        Contadorcomponent
    ]
})

export class ContadorModule{}