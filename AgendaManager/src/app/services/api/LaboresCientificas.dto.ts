export interface LaboresCientificasDTO {
  id_formulario: number;

  semilleros_horas_semana: number;
  semilleros_horas_semestre: number;
  semilleros_descripcion: string;
  semilleros_producto: string;

  propuestas_horas_semana: number;
  propuestas_horas_semestre: number;
  propuestas_descripcion: string;
  propuestas_producto: string;

  proyectos_horas_semana: number;
  proyectos_horas_semestre: number;
  proyectos_descripcion: string;
  proyectos_producto: string;

  grupo_horas_semana: number;
  grupo_horas_semestre: number;
  grupo_descripcion: string;
  grupo_producto: string;

  articulos_horas_semana: number;
  articulos_horas_semestre: number;
  articulos_descripcion: string;
  articulos_producto: string;
}
