import { Component } from '@angular/core';
import { Alumnos } from '../../models/alumnos';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  subtitulo: string = "Lista de Alumnos";
  listaEstudiantes: Array<Alumnos> = [
    {
      nombre: 'José',
      apellido: 'Carrion',
      edad: 32,
      estaActivo: true,
      calificacionPromedio: 98
    },
    {
      nombre: 'Xavier',
      apellido: 'Molineros',
      edad: 25,
      estaActivo: true,
      calificacionPromedio: 70
    },
    {
      nombre: 'Abigail',
      apellido: 'Aldas',
      edad: 30,
      estaActivo: false,
      calificacionPromedio: 60
    },
    {
      nombre: 'Luciana',
      apellido: 'Carrion',
      edad:20,
      estaActivo: true,
      calificacionPromedio: 100
    }
  ];
}
