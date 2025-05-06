export interface GestionAcademicaDTO {
  id_formulario: number;

  jurado_horas_semana: number;
  jurado_horas_semestre: number;
  jurado_descripcion: string;
  jurado_producto: string;

  registros_horas_semana: number;
  registros_horas_semestre: number;
  registros_descripcion: string;
  registros_producto: string;

  acreditacion_horas_semana: number;
  acreditacion_horas_semestre: number;
  acreditacion_descripcion: string;
  acreditacion_producto: string;

  consejos_horas_semana: number;
  consejos_horas_semestre: number;
  consejos_descripcion: string;
  consejos_producto: string;

  autoevaluacion_horas_semana: number;
  autoevaluacion_horas_semestre: number;
  autoevaluacion_descripcion: string;
  autoevaluacion_producto: string;

  investigaciones_mercado_horas_semana: number;
  investigaciones_mercado_horas_semestre: number;
  investigaciones_mercado_descripcion: string;
  investigaciones_mercado_producto: string;

  formacion_profesores_horas_semana: number;
  formacion_profesores_horas_semestre: number;
  formacion_profesores_descripcion: string;
  formacion_profesores_producto: string;

  extramuros_horas_semana: number;
  extramuros_horas_semestre: number;
  extramuros_descripcion: string;
  extramuros_producto: string;

  validaciones_horas_semana: number;
  validaciones_horas_semestre: number;
  validaciones_descripcion: string;
  validaciones_producto: string;

  ctei_horas_semana: number;
  ctei_horas_semestre: number;
  ctei_descripcion: string;
  ctei_producto: string;

  resultados_aprendizaje_horas_semana: number;
  resultados_aprendizaje_horas_semestre: number;
  resultados_aprendizaje_descripcion: string;
  resultados_aprendizaje_producto: string;
}
