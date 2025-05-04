export interface LaboresAcademicasDTO {
  nombreAsignatura: string;
  programa: string;
  grupo: string;
  sede: string;
  horasSemanales: number;
  horasSemestrales: number;

  prepHorasSemana: number;
  prepHorasSemestre: number;
  prepDescripcion: string;
  prepProducto: string;

  evalHorasSemana: number;
  evalHorasSemestre: number;
  evalDescripcion: string;
  evalProducto: string;

  eventosHorasSemana: number;
  eventosHorasSemestre: number;
  eventosDescripcion: string;
  eventosProducto: string;

  acompHorasSemana: number;
  acompHorasSemestre: number;
  acompDescripcion: string;
  acompProducto: string;

  cursosHorasSemana: number;
  cursosHorasSemestre: number;
  cursosDescripcion: string;
  cursosProducto: string;

  emprendHorasSemana: number;
  emprendHorasSemestre: number;
  emprendDescripcion: string;
  emprendProducto: string;
}

