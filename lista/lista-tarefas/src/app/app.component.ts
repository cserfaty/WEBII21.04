import { Component } from '@angular/core';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaTarefasComponent], // aqui você importa o componente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-tarefas';
}
