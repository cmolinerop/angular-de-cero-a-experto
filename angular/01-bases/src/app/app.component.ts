import { Component } from '@angular/core'; //importación del decorador 

// este decorador necesita de argumentos. Recibe como argumento un objeto
@Component({
  selector: 'app-root', // nombre que el componente va a tener
  templateUrl: './app.component.html', // html asociado al componente, se puede indicar con url o directamente aquí
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
