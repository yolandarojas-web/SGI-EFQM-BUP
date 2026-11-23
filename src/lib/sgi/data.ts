// Matriz Oficial 2026 - Colegio Diocesano El Buen Pastor.
// Fuente: hoja "Matriz Oficial" del Excel institucional entregado el 23/11/2026.
// Importación fiel de nombres y códigos; los campos no definidos no se inventan.
// ATENCIÓN: indicadores/metas/registros del bloque final SON DATOS DEMOSTRATIVOS
// compatibles con el dashboard previo. NO representan mediciones oficiales del Excel.

export type Pilar = "Dirección" | "Ejecución" | "Resultados y Soporte";
export type EstadoDoc = "Borrador" | "En revisión" | "Aprobado" | "Sin especificar";
export type EstadoActividad = "Planificada" | "En ejecución" | "Completada" | "En riesgo" | "Sin evaluar";
export type Frecuencia = "Mensual" | "Bimestral" | "Trimestral" | "Semestral" | "Anual";
export type Polaridad = "Ascendente" | "Descendente";
export interface Criterio { id: string; nombre: string; pilar: Pilar; descripcion: string }
export interface Proceso { id: string; codigo: string; nombre: string; criterioId: string; area: string; lider: string; bloqueEfqm?: string; responsableRecaudo?: string }
export interface Subproceso { id: string; procesoId: string; nombre: string; codigo?: string; responsable?: string; filaExcel?: number }
export interface Procedimiento { id: string; subprocesoId: string; nombre: string; version: string; estado: EstadoDoc; actualizado: string; codigo?: string }
export interface Documento { id: string; subprocesoId: string; nombre: string; tipo: "Reglamento" | "Formato" | "Guía" | "Plan" | "Manual" | "Documento"; version: string; estado: EstadoDoc; actualizado: string }
export interface Actividad { id: string; subprocesoId: string; nombre: string; responsable: string; avance: number; estado: EstadoActividad }
export interface Indicador { id: string; codigo: string; subprocesoId: string; nombre: string; formula: string; unidad: "%" | "Índice" | "Días" | "Nº"; frecuencia: Frecuencia; polaridad: Polaridad; responsable: string; peso: number; demostrativo?: boolean }
export interface Meta { id: string; indicadorId: string; anio: number; valor: number }
export interface Registro { id: string; indicadorId: string; anio: number; periodo: string; valor: number; fecha: string; registradoPor: string }
export interface Evidencia { id: string; registroId: string; nombre: string; tipo: "PDF" | "Excel" | "Imagen" | "Enlace"; subidoPor: string; fecha: string }
export interface Usuario { id: string; nombre: string; correo: string; rol: "Administrador" | "Directivo" | "Líder de proceso" | "Responsable de área" | "Auditor EFQM"; area: string; activo: boolean }
export interface LogAuditoria { id: string; fecha: string; usuario: string; accion: string; modulo: string; detalle: string }
export const ANIOS = [2024, 2025, 2026];
export const ANIO_ACTUAL = 2026;
export const INDICADORES_SON_DEMO = true;
export const criterios: Criterio[] = [
  { id:"c1", nombre:"Dirección", pilar:"Dirección", descripcion:"Procesos estratégicos (EST)" },
  { id:"c2", nombre:"Ejecución", pilar:"Ejecución", descripcion:"Procesos clave (CLV)" },
  { id:"c3", nombre:"Resultados y Soporte", pilar:"Resultados y Soporte", descripcion:"Procesos de soporte (APO)" },
];

export const procesos: Proceso[] = [
  { id: "p1", codigo: "EST-01-GP", nombre: "Gestión de la Promotoría", criterioId: "c1", area: "Dirección General", lider: "Rosario Urviola", bloqueEfqm: "1. Dirección (Procesos Estratégicos)", responsableRecaudo: "Verónica Lozano" },
  { id: "p13", codigo: "EST-02-GDE", nombre: "Gestión Directiva y estratégica", criterioId: "c1", area: "Dirección General", lider: "Rosario Urviola", bloqueEfqm: "1. Dirección (Procesos Estratégicos)", responsableRecaudo: "Verónica Lozano" },
  { id: "p2", codigo: "EST-03-GAF", nombre: "Gestión Administrativa y Financiera", criterioId: "c1", area: "Administración", lider: "Roxana Kcomt", bloqueEfqm: "1. Dirección (Procesos Estratégicos)", responsableRecaudo: "Roxana Kcomt" },
  { id: "p3", codigo: "EST-04-GCI", nombre: "Gestión de Calidad e innovación", criterioId: "c1", area: "Calidad", lider: "Janet Oliveros", bloqueEfqm: "1. Dirección (Procesos Estratégicos)", responsableRecaudo: "Janet Oliveros" },
  { id: "p4", codigo: "CLV-01-GAM", nombre: "Gestión de Admisión y matrícula.", criterioId: "c2", area: "Admisión", lider: "Rosario Urviola", bloqueEfqm: "2. Ejecución (Procesos Clave)", responsableRecaudo: "María Eugenia León" },
  { id: "p5", codigo: "CLV-02-GPE", nombre: "Gestión Pedagógica", criterioId: "c2", area: "Académica", lider: "Verónica Lozano", bloqueEfqm: "2. Ejecución (Procesos Clave)", responsableRecaudo: "Verónica Lozano" },
  { id: "p6", codigo: "CLV-03-GPA", nombre: "Gestión Pastoral", criterioId: "c2", area: "Pastoral", lider: "Pbro. Leener Jiménez", bloqueEfqm: "2. Ejecución (Procesos Clave)", responsableRecaudo: "Omar Herrera" },
  { id: "p7", codigo: "CLV-04-GB", nombre: "Gestión de Bienestar", criterioId: "c2", area: "Bienestar", lider: "Eduardo Silva", bloqueEfqm: "2. Ejecución (Procesos Clave)", responsableRecaudo: "Janet Oliveros" },
  { id: "p8", codigo: "APO-01-INF", nombre: "Infraestructura", criterioId: "c3", area: "Infraestructura", lider: "Roxana Kcomt", bloqueEfqm: "3. Resultados y Soporte (Procesos de Soporte)", responsableRecaudo: "Omar Herrera" },
  { id: "p9", codigo: "APO-02-GTI", nombre: "Gestión Tecnológica y de la Información (TI)", criterioId: "c3", area: "TIC", lider: "Omar Herrera", bloqueEfqm: "3. Resultados y Soporte (Procesos de Soporte)", responsableRecaudo: "Omar Herrera" },
  { id: "p10", codigo: "APO-03-IMI", nombre: "Imagen Institucional", criterioId: "c3", area: "Comunicaciones", lider: "Rosario Urviola", bloqueEfqm: "3. Resultados y Soporte (Procesos de Soporte)", responsableRecaudo: "Mariela Martinez" },
  { id: "p11", codigo: "APO-04-RRHH", nombre: "Recursos Humanos", criterioId: "c3", area: "Talento Humano", lider: "Roxana Kcomt", bloqueEfqm: "3. Resultados y Soporte (Procesos de Soporte)", responsableRecaudo: "Roxana Kcomt" },
  { id: "p14", codigo: "APO-05-SGM", nombre: "Servicios Generales y de Mantenimiento", criterioId: "c3", area: "Servicios Generales", lider: "Roxana Kcomt", bloqueEfqm: "3. Resultados y Soporte (Procesos de Soporte)", responsableRecaudo: "Roxana Kcomt" },
  { id: "p12", codigo: "APO-06-SC", nombre: "Servicios Complementarios", criterioId: "c3", area: "Servicios Complementarios", lider: "Rosario Urviola", bloqueEfqm: "3. Resultados y Soporte (Procesos de Soporte)", responsableRecaudo: "Roxana Kcomt" },
];

export const subprocesos: Subproceso[] = [
  { id: "EST-01-GP-S01", procesoId: "p1", codigo: "EST-01-GP-S01", nombre: "Lineamientos para la gestión educativa de la CIEDC", responsable: "Pdre. Miguel Del Carpio", filaExcel: 3 },
  { id: "p1-s1", procesoId: "p1", codigo: "EST-01-GP-S02", nombre: "Gobernanza y custodia del ideario", responsable: "Pdre. Miguel Del Carpio", filaExcel: 4 },
  { id: "p1-s2", procesoId: "p13", codigo: "EST-02-GDE-S01", nombre: "Planeamiento estratégico e innovación.", responsable: "Rosario Urviola", filaExcel: 6 },
  { id: "EST-02-GDE-S02", procesoId: "p13", codigo: "EST-02-GDE-S02", nombre: "Formulación, aprobación y cumplimiento de políticas institucionales.", responsable: "Rosario Urviola", filaExcel: 7 },
  { id: "EST-02-GDE-S03", procesoId: "p13", codigo: "EST-02-GDE-S03", nombre: "Generación de alianzas estratégicas.", responsable: "Rosario Urviola", filaExcel: 8 },
  { id: "EST-03-GAF-S01", procesoId: "p2", codigo: "EST-03-GAF-S01", nombre: "Elaboración y control del presupuesto.", responsable: "Miriam Ortiz", filaExcel: 9 },
  { id: "EST-03-GAF-S02", procesoId: "p2", codigo: "EST-03-GAF-S02", nombre: "Gestión de compras y proveedores.", responsable: "Brigith Delzo", filaExcel: 10 },
  { id: "EST-03-GAF-S03", procesoId: "p2", codigo: "EST-03-GAF-S03", nombre: "Cuenta corriente y recaudación de pensiones.", responsable: "Rocio Espinoza", filaExcel: 11 },
  { id: "p2-s2", procesoId: "p2", codigo: "EST-03-GAF-S04", nombre: "Proceso de otorgamiento de Beca", responsable: "Madalina Zegarra / Maria Ramos", filaExcel: 12 },
  { id: "p2-s1", procesoId: "p2", codigo: "EST-03-GAF-S05", nombre: "Gestión Contable", responsable: "Eduardo Vasquez", filaExcel: 13 },
  { id: "EST-03-GAF-S06", procesoId: "p2", codigo: "EST-03-GAF-S06", nombre: "Gestión financiera", responsable: "Miriam Ortiz", filaExcel: 15 },
  { id: "p3-s1", procesoId: "p3", codigo: "EST-04-GCI-S01", nombre: "Autoevaluación institucional.", responsable: "Janet Oliveros", filaExcel: 16 },
  { id: "EST-04-GCI-S02", procesoId: "p3", codigo: "EST-04-GCI-S02", nombre: "Gestión de procesos.", responsable: "Omar Herrera", filaExcel: 17 },
  { id: "EST-04-GCI-S03", procesoId: "p3", codigo: "EST-04-GCI-S03", nombre: "Acompañamiento a los planes de mejora.", responsable: "Meriella Martinez", filaExcel: 18 },
  { id: "p3-s2", procesoId: "p3", codigo: "", nombre: "Percepción y satisfaccion del servicio", responsable: "Omar Herrera", filaExcel: 19 },
  { id: "matriz-sin-codigo-20", procesoId: "p3", codigo: "", nombre: "Certificación Google Reference", responsable: "Antony Villalobos", filaExcel: 20 },
  { id: "EST-04-GCI-S04", procesoId: "p3", codigo: "EST-04-GCI-S04", nombre: "Programas de innovación educativa", responsable: "Antony Villalobos", filaExcel: 21 },
  { id: "p4-s1", procesoId: "p4", codigo: "CLV-01-GAM-S01", nombre: "Difusión, promoción y captación de estudiantes.", responsable: "Lady Romero/Lourdes Benavente", filaExcel: 22 },
  { id: "p4-s2", procesoId: "p4", codigo: "CLV-01-GAM-S02", nombre: "Evaluación y admisión de postulantes.", responsable: "Edith Cordero", filaExcel: 23 },
  { id: "CLV-01-GAM-S03", procesoId: "p4", codigo: "CLV-01-GAM-S03", nombre: "Permanencia.", responsable: "Edith Cordero", filaExcel: 24 },
  { id: "CLV-01-GAM-S04", procesoId: "p4", codigo: "CLV-01-GAM-S04", nombre: "Inducción y seguimiento a nuevos estudiantes y familias.", responsable: "Eduardo SIlva", filaExcel: 25 },
  { id: "p5-s1", procesoId: "p5", codigo: "CLV-02-GPE-S01", nombre: "Planificación curricular.", responsable: "Patricia Gamarra / Flor de Liz Flores", filaExcel: 26 },
  { id: "CLV-02-GPE-S02", procesoId: "p5", codigo: "CLV-02-GPE-S02", nombre: "Proceso de enseñanza-aprendizaje.", responsable: "Patricia Gamarra / Flor de Liz Flores", filaExcel: 27 },
  { id: "p5-s2", procesoId: "p5", codigo: "CLV-02-GPE-S03", nombre: "Monitoreo y acompañamiento pedagógico docente.", responsable: "Patricia Gamarra / Flor de Liz Flores", filaExcel: 28 },
  { id: "CLV-02-GPE-S04", procesoId: "p5", codigo: "CLV-02-GPE-S04", nombre: "Evaluación de los aprendizajes.", responsable: "Patricia Gamarra / Flor de Liz Flores", filaExcel: 29 },
  { id: "CLV-02-GPE-S05", procesoId: "p5", codigo: "CLV-02-GPE-S05", nombre: "Refuerzo Escolar", responsable: "Patricia Gamarra / Flor de Liz Flores", filaExcel: 30 },
  { id: "CLV-03-GPA-S01", procesoId: "p6", codigo: "CLV-03-GPA-S01", nombre: "Planificacionde Pastoral Institucional", responsable: "", filaExcel: 31 },
  { id: "p6-s1", procesoId: "p6", codigo: "CLV-03-GPA-S02", nombre: "Proyeccion Social", responsable: "", filaExcel: 32 },
  { id: "CLV-03-GPA-S03", procesoId: "p6", codigo: "CLV-03-GPA-S03", nombre: "Pastoral Familiar (PASFABUP)", responsable: "", filaExcel: 33 },
  { id: "p6-s2", procesoId: "p6", codigo: "CLV-03-GPA-S04", nombre: "Pastoral Estudiantil", responsable: "", filaExcel: 35 },
  { id: "p6-s3", procesoId: "p6", codigo: "CLV-03-GPA-S05", nombre: "Pastoral Personal BUP", responsable: "", filaExcel: 37 },
  { id: "CLV-04-GB-S01", procesoId: "p7", codigo: "CLV-04-GB-S01", nombre: "Convivencia escolar ( promoción-prevención y atención) - ( área de convivencia)", responsable: "Evelyn Niño", filaExcel: 39 },
  { id: "CLV-04-GB-S02", procesoId: "p7", codigo: "CLV-04-GB-S02", nombre: "Convivencia escolar ( promoción-prevención y atención) - ( área de convivencia)", responsable: "Evelyn Niño", filaExcel: 40 },
  { id: "p7-s1", procesoId: "p7", codigo: "CLV-04-GB-S03", nombre: "Atención y soporte socioemocional. ( psicológia)", responsable: "Verónica Lalandi", filaExcel: 41 },
  { id: "CLV-04-GB-S04", procesoId: "p7", codigo: "CLV-04-GB-S04", nombre: "Tutoría y orientación educativa (tutoría )", responsable: "Ana Puerta", filaExcel: 42 },
  { id: "CLV-04-GB-S05", procesoId: "p7", codigo: "CLV-04-GB-S05", nombre: "Inclusión y atención a la diversidad. ( psicológia)", responsable: "Verónica Lalandi", filaExcel: 43 },
  { id: "CLV-04-GB-S06", procesoId: "p7", codigo: "CLV-04-GB-S06", nombre: "Participación estudiantil y liderazgo. ( convivencia y tutoría)", responsable: "Evelyn Niño", filaExcel: 44 },
  { id: "p7-s2", procesoId: "p7", codigo: "CLV-04-GB-S07", nombre: "Escuela para padres de familias. (psicológia)", responsable: "Verónica Lalandi", filaExcel: 45 },
  { id: "APO-01-INF-01", procesoId: "p8", codigo: "APO-01-INF-01", nombre: "Planificación y mantenimiento de instalaciones.", responsable: "Jimmy Peralta", filaExcel: 46 },
  { id: "p8-s1", procesoId: "p8", codigo: "APO-01-INF-02", nombre: "Gestión de proyectos de infraestructura y acondicionamiento", responsable: "Jimmy Peralta", filaExcel: 47 },
  { id: "p9-s1", procesoId: "p9", codigo: "APO-02-GTI-S01", nombre: "Atención de soporte técnico.", responsable: "Carmen Almanza", filaExcel: 49 },
  { id: "p9-s2", procesoId: "p9", codigo: "APO-02-GTI-S02", nombre: "Administracion de infraestructura de redes y ciberseguridad", responsable: "Ivan Pineda", filaExcel: 51 },
  { id: "APO-02-GTI-S03", procesoId: "p9", codigo: "APO-02-GTI-S03", nombre: "Gestión de sistemas y plataformas.", responsable: "Maria Eugenia Leon", filaExcel: 52 },
  { id: "APO-02-GTI-S04", procesoId: "p9", codigo: "APO-02-GTI-S04", nombre: "Gestión de respaldos ( Backup)", responsable: "Ivan Pineda", filaExcel: 53 },
  { id: "APO-02-GTI-S05", procesoId: "p9", codigo: "APO-02-GTI-S05", nombre: "Gestión de activos y configuración de TI", responsable: "Carmen Almanza", filaExcel: 55 },
  { id: "APO-03-IMI-S01", procesoId: "p10", codigo: "APO-03-IMI-S01", nombre: "Comunicación institucional interna y externa. ( Comunicación)", responsable: "Adelma Bercian", filaExcel: 57 },
  { id: "APO-03-IMI-S02", procesoId: "p10", codigo: "APO-03-IMI-S02", nombre: "Comunicación institucional en contextos de crisis. ( Comunicación)", responsable: "Adelma Bercian", filaExcel: 58 },
  { id: "p10-s2", procesoId: "p10", codigo: "APO-03-IMI-S03", nombre: "Eventos institucionales. (Marketing)", responsable: "Lourdes Benavente", filaExcel: 59 },
  { id: "p10-s1", procesoId: "p10", codigo: "APO-03-IMI-S04", nombre: "Administración de redes sociales y página web . ( Marketing)", responsable: "Lourdes Benavente", filaExcel: 60 },
  { id: "p11-s1", procesoId: "p11", codigo: "APO-04-RRHH-S01", nombre: "Incorporación de personal", responsable: "Mirella Morante", filaExcel: 61 },
  { id: "APO-04-RRHH-S02", procesoId: "p11", codigo: "APO-04-RRHH-S02", nombre: "Desvinculación de personal", responsable: "Mirella Morante", filaExcel: 63 },
  { id: "APO-04-RRHH-S03", procesoId: "p11", codigo: "APO-04-RRHH-S03", nombre: "Desarrollo del talento humano", responsable: "Mirella Morante", filaExcel: 64 },
  { id: "APO-04-RRHH-S04", procesoId: "p11", codigo: "APO-04-RRHH-S04", nombre: "Bienestar social.", responsable: "Maria Ramos", filaExcel: 65 },
  { id: "APO-04-RRHH-S05", procesoId: "p11", codigo: "APO-04-RRHH-S05", nombre: "Gestion de vacaciones", responsable: "Madalina Zegarra", filaExcel: 66 },
  { id: "APO-04-RRHH-S06", procesoId: "p11", codigo: "APO-04-RRHH-S06", nombre: "Gestion de vacaciones", responsable: "Madalina Zegarra", filaExcel: 67 },
  { id: "p11-s2", procesoId: "p11", codigo: "APO-04-RRHH-S07", nombre: "Gestión de Seguridad y Salud en el Trabajo.", responsable: "Renato Vega", filaExcel: 68 },
  { id: "APO-04-RRHH-S08", procesoId: "p11", codigo: "APO-04-RRHH-S08", nombre: "Salud ocupacional.", responsable: "Renato Vega", filaExcel: 69 },
  { id: "p8-s2", procesoId: "p14", codigo: "APO-05-SGM-S01", nombre: "Mantenimiento preventivo y correctivo.", responsable: "Jimmy Peralta", filaExcel: 70 },
  { id: "APO-05-SGM-S02", procesoId: "p14", codigo: "APO-05-SGM-S02", nombre: "Limpieza y control de servicios básicos.", responsable: "Jessica Porras", filaExcel: 71 },
  { id: "APO-05-SGM-S03", procesoId: "p14", codigo: "APO-05-SGM-S03", nombre: "Atención de incidencias operativas.", responsable: "Jimmy Peralta", filaExcel: 72 },
  { id: "p12-s1", procesoId: "p12", codigo: "APO-06-SC-S01", nombre: "Talleres extracurriculares.", responsable: "Jorge Pastor", filaExcel: 73 },
  { id: "APO-06-SC-S02", procesoId: "p12", codigo: "APO-06-SC-S02", nombre: "Gestión de selecciones y elencos institucionales.", responsable: "Jorge Pastor", filaExcel: 74 },
  { id: "p12-s2", procesoId: "p12", codigo: "APO-06-SC-S03", nombre: "Supervisión de servicios anexos (comedor/cafetería y tópico de salud).", responsable: "Brigith Delzo", filaExcel: 75 },
];

export const procedimientos: Procedimiento[] = [
  { id: "matriz-pr-4", subprocesoId: "p1-s1", codigo: "EST-01-GP-S02-P02", nombre: "Procedimiento para la emisión y aprobación de lineamientos promotores.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-6", subprocesoId: "p1-s2", codigo: "EST-02-GDE-S01-P01", nombre: "Procedimiento para la formulación y seguimiento del PEI/PAT.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-7", subprocesoId: "EST-02-GDE-S02", codigo: "EST-02-GDE-S02-P02", nombre: "Procedimiento para la aprobación de políticas institucionales.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-8", subprocesoId: "EST-02-GDE-S03", codigo: "", nombre: "Procedimiento para establecer alianzas y convenios.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-9", subprocesoId: "EST-03-GAF-S01", codigo: "", nombre: "Procedimiento para elaboración del presupuesto.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-10", subprocesoId: "EST-03-GAF-S02", codigo: "", nombre: "Procedimiento de compras.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-11", subprocesoId: "EST-03-GAF-S03", codigo: "", nombre: "Procedimiento de cuenta corriente y cobranza", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-12", subprocesoId: "p2-s2", codigo: "", nombre: "Procedimiento para el otorgamiento de becas.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-13", subprocesoId: "p2-s1", codigo: "", nombre: "Procedimiento de provision de ingresos", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-14", subprocesoId: "p2-s1", codigo: "", nombre: "Procedimiento de provision de gastos", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-15", subprocesoId: "EST-03-GAF-S06", codigo: "", nombre: "Procedimiento para la evaluación de los flujos de efectivo", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-16", subprocesoId: "p3-s1", codigo: "EST-04-GCI-S01-P01", nombre: "Procedimiento de autoevaluación .", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-17", subprocesoId: "EST-04-GCI-S02", codigo: "EST-04-GCI-S02-P02", nombre: "Procedimiento de documentación de procesos", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-18", subprocesoId: "EST-04-GCI-S03", codigo: "EST-04-GCI-S03-P03", nombre: "Procedimiento de seguimiento a planes de mejora.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-19", subprocesoId: "p3-s2", codigo: "", nombre: "Procedimiento de medición de satisfacción.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-22", subprocesoId: "p4-s1", codigo: "CLV-01-GAM-S01-P01", nombre: "Procedimiento de difusión y captación.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-23", subprocesoId: "p4-s2", codigo: "CLV-01-GAM-S02-P02", nombre: "Procedimiento de admisión y entrevistas.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-24", subprocesoId: "CLV-01-GAM-S03", codigo: "CLV-01-GAM-S03-P03", nombre: "Procedimiento de matrícula regular y extemporánea.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-25", subprocesoId: "CLV-01-GAM-S04", codigo: "CLV-01-GAM-S04-P04", nombre: "Procedimiento de acogida e integración familiar.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-26", subprocesoId: "p5-s1", codigo: "CLV-02-GPE-S01-P01", nombre: "Procedimiento para elaboración del plan curricular anual", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-27", subprocesoId: "CLV-02-GPE-S02", codigo: "CLV-02-GPE-S02-P02", nombre: "Procedimiento para la revisión de proyectos y experiencias de aprendizaje.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-28", subprocesoId: "p5-s2", codigo: "CLV-02-GPE-S03-P03", nombre: "Procedimiento de acompañamiento docente en aula.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-29", subprocesoId: "CLV-02-GPE-S04", codigo: "CLV-02-GPE-S04-P04", nombre: "Procedimiento de evaluación y refuerzo académico.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-30", subprocesoId: "CLV-02-GPE-S05", codigo: "CLV-02-GPE-S05-P05", nombre: "-------", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-32", subprocesoId: "p6-s1", codigo: "CLV-03-GPA-S02-P02", nombre: "Procedimiento de voluntariado y proyección social. (incluye protocolo de seguridad para salidas)", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-33", subprocesoId: "CLV-03-GPA-S03", codigo: "CLV-03-GPA-S03-P03", nombre: "Procedimiento para jornadas (PASFABUP) (incluye convocatoria, materiales y dinámicas)", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-35", subprocesoId: "p6-s2", codigo: "CLV-03-GPA-S04-P04", nombre: "Procedimiento para jornadas (Estudiantes) (incluye logística, dinámicas y evaluación posterior)", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-38", subprocesoId: "p6-s3", codigo: "CLV-03-GPA-S05-P05", nombre: "Procedimiento para la atención y derivación de casos (contención y escucha activa)", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-39", subprocesoId: "CLV-04-GB-S01", codigo: "CLV-04-GB-S01-P01", nombre: "Procedimiento para la promoción y prevención de la sana convivencia", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-40", subprocesoId: "CLV-04-GB-S02", codigo: "", nombre: "Procedimiento para medidas correctivas y reparadoras.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-41", subprocesoId: "p7-s1", codigo: "CLV-04-GB-S02-P02", nombre: "Procedimiento de derivación y seguimiento de casos (psicología)", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-42", subprocesoId: "CLV-04-GB-S04", codigo: "CLV-04-GB-S03-P03", nombre: "Procedimiento de seguimiento de casos ( tutoría)", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-43", subprocesoId: "CLV-04-GB-S05", codigo: "CLV-04-GB-S04-P04", nombre: "Procedimiento para inclusión y atención a la diversidad.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-44", subprocesoId: "CLV-04-GB-S06", codigo: "CLV-04-GB-S05-P05", nombre: "Procedimiento para las participaciones estudiantiles", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-45", subprocesoId: "p7-s2", codigo: "CLV-04-GB-S06-P06", nombre: "Procedimiento para la Escuela para Familias.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-46", subprocesoId: "APO-01-INF-01", codigo: "APO-01-INF-01-P01", nombre: "Procedimiento de mantenimiento físico.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-47", subprocesoId: "p8-s1", codigo: "APO-01-INF-02-P02", nombre: "Procedimiento de control patrimonial de activos.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-49", subprocesoId: "p9-s1", codigo: "APO-02-GTI-01-P01", nombre: "Procedimiento de Recepción, registro y clasificación de tickets", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-50", subprocesoId: "p9-s1", codigo: "APO-02-GTI-01-P02", nombre: "Procedimiento de Mantenimiento preventivo y correctivo de equipos", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-51", subprocesoId: "p9-s2", codigo: "APO-02-GTI-02-P01", nombre: "Procedimiento de administración de infraestructura de redes y ciberseguridad.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-52", subprocesoId: "APO-02-GTI-S03", codigo: "APO-02-GTI-03-P01", nombre: "Procedimiento de gestión de usuarios, accesos , manejo y capacitacion de plataformas.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-53", subprocesoId: "APO-02-GTI-S04", codigo: "APO-02-GTI-04-P01", nombre: "Procedimiento de copias de seguridad (backups) de Maquinas Virtuales", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-54", subprocesoId: "APO-02-GTI-S04", codigo: "APO-02-GTI-04-P02", nombre: "Procedimiento de copias de seguridad de las Bases de datos", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-55", subprocesoId: "APO-02-GTI-S05", codigo: "APO-02-GTI-05-P01", nombre: "Procedemiento de Inventario de activos informaticos (acorde a las politicas contables)", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-56", subprocesoId: "APO-02-GTI-S05", codigo: "APO-02-GTI-05-P01", nombre: "Procedemiento de Altas y bajas de activos informaticos (acorde a las politicas contables)", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-57", subprocesoId: "APO-03-IMI-S01", codigo: "APO-03-IMI-S01-P01", nombre: "Procedimiento para la emisión de comunicados institucionales.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-58", subprocesoId: "APO-03-IMI-S02", codigo: "APO-03-IMI-S02-P02", nombre: "Procedimiento para la emisión de comunicados institucionales en situaciones críticas", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-59", subprocesoId: "p10-s2", codigo: "APO-03-IMI-S03-P03", nombre: "Procedimiento para la organización y cobertura de eventos.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-60", subprocesoId: "p10-s1", codigo: "", nombre: "Procedimiento de gestión de redes sociales y web.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-61", subprocesoId: "p11-s1", codigo: "APO-04-RRHH-S01-P01", nombre: "Procedimiento de requerimiento, reclutamiento y selección de personal", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-62", subprocesoId: "p11-s1", codigo: "APO-04-RRHH-S01-P02", nombre: "Procedimiento de contratación e inducción de personal", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-63", subprocesoId: "APO-04-RRHH-S02", codigo: "APO-04-RRHH-S02-P01", nombre: "Procedimiento de desvinculación de personal", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-64", subprocesoId: "APO-04-RRHH-S03", codigo: "APO-04-RRHH-S03-P01", nombre: "Procedimiento de evaluación de desempeño", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-65", subprocesoId: "APO-04-RRHH-S04", codigo: "APO-04-RRHH-S04-P01", nombre: "Procedimiento de actividades de bienestar social.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-66", subprocesoId: "APO-04-RRHH-S05", codigo: "APO-04-RRHH-S05-P01", nombre: "Procedimiento de programación y otorgamiento del descanso vacacional", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-67", subprocesoId: "APO-04-RRHH-S06", codigo: "APO-04-RRHH-S06-P01", nombre: "Procedimiento de adelanto de vacaciones", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-68", subprocesoId: "p11-s2", codigo: "APO-04-RRHH-S07-P01", nombre: "Procedimiento de gestión de SST y salud ocupacional.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-70", subprocesoId: "p8-s2", codigo: "APO-05-SGM-S01-P01", nombre: "Procedimiento de mantenimiento preventivo y correctivo.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-71", subprocesoId: "APO-05-SGM-S02", codigo: "APO-05-SGM-S02-P02", nombre: "Procedimiento de limpieza y control de servicios.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-72", subprocesoId: "APO-05-SGM-S03", codigo: "APO-05-SGM-S03-P03", nombre: "Procedimiento de atención y cierre de incidencias.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-73", subprocesoId: "p12-s1", codigo: "APO-06-SC-S01-P01", nombre: "Procedimiento de inscripción de talleres.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-74", subprocesoId: "APO-06-SC-S02", codigo: "APO-06-SC-S02-P02", nombre: "Procedimiento de selección de estudiantes para elencos.", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-pr-75", subprocesoId: "p12-s2", codigo: "APO-06-SC-S03-P03", nombre: "Procedimiento de atención en tópico y supervisión del comedor.", version: "", estado: "Sin especificar", actualizado: "" },
];

export const documentos: Documento[] = [
  { id: "matriz-doc-3", subprocesoId: "EST-01-GP-S01", nombre: "Lineamientos de Promotoría", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-4", subprocesoId: "p1-s1", nombre: "Ideario del Consorcio educativo de colegios", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-5", subprocesoId: "p1-s1", nombre: "Directiva de Sostenibilidad", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-6", subprocesoId: "p1-s2", nombre: "Plan Estratégico Institucional (PEI)", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-7", subprocesoId: "EST-02-GDE-S02", nombre: "Plan Anual de Trabajo (PAT)", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-8", subprocesoId: "EST-02-GDE-S03", nombre: "Cuadro de Mando EFQM", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-9", subprocesoId: "EST-03-GAF-S01", nombre: "Evaluacion del presupuesto aprobado vs el presupuesto ejecutado", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-10", subprocesoId: "EST-03-GAF-S02", nombre: "Evaluación de provedores / Matriz de decision", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-11", subprocesoId: "EST-03-GAF-S03", nombre: "Gestion de Cobranzas y Cuentas Corrientes", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-12", subprocesoId: "p2-s2", nombre: "Publicación de convocatoria, recepcion de fichas, entrevista, evaluación y selección, entrega de resultados.", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-13", subprocesoId: "p2-s1", nombre: "Reconocimiento y registro contable de los ingresos", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-14", subprocesoId: "p2-s1", nombre: "Reconocimiento y registro contable de las compras", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-15", subprocesoId: "EST-03-GAF-S06", nombre: "Evaluacion y proyeccion mensual de flujo", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-16", subprocesoId: "p3-s1", nombre: "Manual de procesos y procedimientos", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-17", subprocesoId: "EST-04-GCI-S02", nombre: "Plan de autoevaluación EFQM", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-18", subprocesoId: "EST-04-GCI-S03", nombre: "Fichas de indicadores de gestión", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-21", subprocesoId: "EST-04-GCI-S04", nombre: "Matriz de sugerencias y reclamos", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-22", subprocesoId: "p4-s1", nombre: "Reglamento de Admisión", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-23", subprocesoId: "p4-s2", nombre: "Lineamientos de Matrícula", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-24", subprocesoId: "CLV-01-GAM-S03", nombre: "Ficha de Entrevista Familiar y Compromiso Pastoral", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-25", subprocesoId: "CLV-01-GAM-S04", nombre: "Guía/Protocolo de Acogida", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-26", subprocesoId: "p5-s1", nombre: "Programas curriculares anuales", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-27", subprocesoId: "CLV-02-GPE-S02", nombre: "Mapeo curricular y Programación anual", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-28", subprocesoId: "p5-s2", nombre: "Plan de acompañamiento pedagógico", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-29", subprocesoId: "CLV-02-GPE-S04", nombre: "Registros de niveles de logro", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-31", subprocesoId: "CLV-03-GPA-S01", nombre: "Planificación y Evaluación Pastoral Institucional", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-32", subprocesoId: "p6-s1", nombre: "Plan de Proyeccion Social Anual (con cronograma y aliados estratégicos)", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-33", subprocesoId: "CLV-03-GPA-S03", nombre: "Planificacion de jornadas PASFABUP (temario anual por sesión)", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-34", subprocesoId: "CLV-03-GPA-S03", nombre: "Guía de participación litúrgica para familias", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-35", subprocesoId: "p6-s2", nombre: "Planificacion de Jornadas Estudiantiles (por niveles y temáticas específicas)", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-37", subprocesoId: "p6-s3", nombre: "Plan de Formación Espiritual para el Personal", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-38", subprocesoId: "p6-s3", nombre: "Ficha de Acompañamiento Espiritual (confidencial)", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-39", subprocesoId: "CLV-04-GB-S01", nombre: "Reglamento Interno", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-41", subprocesoId: "p7-s1", nombre: "Normas Técnicas MINEDU y Protocolos de atención", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-42", subprocesoId: "CLV-04-GB-S04", nombre: "Diagnóstico situacional y socioemocional", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-43", subprocesoId: "CLV-04-GB-S05", nombre: "Plan Anual de Tutoría (PAT)", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-44", subprocesoId: "CLV-04-GB-S06", nombre: "Actas de conformación del Comité de Gestión del Bienestar y Tutoría", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-46", subprocesoId: "APO-01-INF-01", nombre: "Plan Anual de Inversiones en Infraestructura", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-47", subprocesoId: "p8-s1", nombre: "Inventario de mobiliario y equipos", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-49", subprocesoId: "p9-s1", nombre: "Formulario de solicitud de soporte / Plantilla de registro de incidencias", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-50", subprocesoId: "p9-s1", nombre: "Plan anual de mantenimiento preventivo / Checklist de mantenimiento por tipo de equipo", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-51", subprocesoId: "p9-s2", nombre: "Diagrama de red actualizado / Política de seguridad informática / Plan de respuesta a incidentes", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-52", subprocesoId: "APO-02-GTI-S03", nombre: "Solicitud de alta/baja/modificación de usuario / Registro de accesos otorgados / Acta de entrega de credenciales", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-53", subprocesoId: "APO-02-GTI-S04", nombre: "Política de backups / Plan de respaldos (frecuencia, retención)", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-55", subprocesoId: "APO-02-GTI-S05", nombre: "Registro de activos (hardware y software) / Reporte de estado de activos", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-56", subprocesoId: "APO-02-GTI-S05", nombre: "Acta de entrega - recepción / Formato de baja de activo", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-57", subprocesoId: "APO-03-IMI-S01", nombre: "Plan de Comunicación Institucional", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-58", subprocesoId: "APO-03-IMI-S02", nombre: "Manual de Identidad Visual Corporativa", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-59", subprocesoId: "p10-s2", nombre: "Calendario de publicaciones y eventos", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-61", subprocesoId: "p11-s1", nombre: "Manual de requerimiento, reclutamiento y seleccion de personal", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-62", subprocesoId: "p11-s1", nombre: "Manual de contratación e inducción de personal", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-63", subprocesoId: "APO-04-RRHH-S02", nombre: "Manual de Desvinculación de personal", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-64", subprocesoId: "APO-04-RRHH-S03", nombre: "Matriz de evaluacion de desempeño por compentencia", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-65", subprocesoId: "APO-04-RRHH-S04", nombre: "Plan Anual de Bienestar Social", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-66", subprocesoId: "APO-04-RRHH-S05", nombre: "Politica de vacaciones", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-68", subprocesoId: "p11-s2", nombre: "Plan Anual de SST y Matriz IPERC", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-69", subprocesoId: "APO-04-RRHH-S08", nombre: "Control y seguimiento de personal en riesgo", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-70", subprocesoId: "p8-s2", nombre: "Programa de limpieza y bioseguridad", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-71", subprocesoId: "APO-05-SGM-S02", nombre: "Registro de control de servicios básicos", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-72", subprocesoId: "APO-05-SGM-S03", nombre: "Registro de atención de incidencias", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-73", subprocesoId: "p12-s1", nombre: "Reglamento de talleres y selecciones", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-74", subprocesoId: "APO-06-SC-S02", nombre: "Ficha médica de estudiantes", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
  { id: "matriz-doc-75", subprocesoId: "p12-s2", nombre: "Protocolos del tópico de salud y fichas sanitarias", tipo: "Documento", version: "", estado: "Sin especificar", actualizado: "" },
];

export const actividades: Actividad[] = [
  { id: "matriz-act-3", subprocesoId: "EST-01-GP-S01", nombre: "Reuniones del Consejo de Promotoría", responsable: "Pdre. Miguel Del Carpio", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-4", subprocesoId: "p1-s1", nombre: "Alineamiento ideológico y pastoral", responsable: "Pdre. Miguel Del Carpio", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-5", subprocesoId: "p1-s1", nombre: "Aprobación de inversiones patrimoniales", responsable: "", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-6", subprocesoId: "p1-s2", nombre: "Jornadas de planificación estratégica", responsable: "Rosario Urviola", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-7", subprocesoId: "EST-02-GDE-S02", nombre: "Comités directivos semanales", responsable: "Rosario Urviola", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-8", subprocesoId: "EST-02-GDE-S03", nombre: "Evaluación de metas y rendición de cuentas", responsable: "Rosario Urviola", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-9", subprocesoId: "EST-03-GAF-S01", nombre: "Evaluacion del presupuesto aprobado vs el presupuesto ejecutado", responsable: "Miriam Ortiz", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-10", subprocesoId: "EST-03-GAF-S02", nombre: "Evaluación de provedores / Matriz de decision", responsable: "Brigith Delzo", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-12", subprocesoId: "p2-s2", nombre: "Gestion de Cobranzas y Cuentas Corrientes", responsable: "Madalina Zegarra / Maria Ramos", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-13", subprocesoId: "p2-s1", nombre: "Evaluación socioeconomica - academica y conductual", responsable: "Eduardo Vasquez", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-14", subprocesoId: "p2-s1", nombre: "Reconocimiento de operaciones contables para la elaboracion de los estados financieros", responsable: "Eduardo Vasquez", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-15", subprocesoId: "EST-03-GAF-S06", nombre: "Evaluacion y proyeccion mensual de flujo", responsable: "Miriam Ortiz", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-16", subprocesoId: "p3-s1", nombre: "Aplicación de autoevaluaciones EFQM", responsable: "Janet Oliveros", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-17", subprocesoId: "EST-04-GCI-S02", nombre: "Encuestas de satisfacción a familias y personal", responsable: "Omar Herrera", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-18", subprocesoId: "EST-04-GCI-S03", nombre: "Comités de calidad e innovación", responsable: "Meriella Martinez", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-21", subprocesoId: "EST-04-GCI-S04", nombre: "Auditorías internas de procesos", responsable: "Antony Villalobos", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-22", subprocesoId: "p4-s1", nombre: "Open House / Visitas guiadas", responsable: "Lady Romero/Lourdes Benavente", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-23", subprocesoId: "p4-s2", nombre: "Entrevistas psicopedagógicas y pastorales a postulantes", responsable: "Edith Cordero", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-24", subprocesoId: "CLV-01-GAM-S03", nombre: "Jornadas de bienvenida a familias nuevas", responsable: "Edith Cordero", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-25", subprocesoId: "CLV-01-GAM-S04", nombre: "Ratificación e integración documental", responsable: "Eduardo SIlva", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-26", subprocesoId: "p5-s1", nombre: "Desarrollo del plan curricular anual por área", responsable: "Patricia Gamarra / Flor de Liz Flores", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-27", subprocesoId: "CLV-02-GPE-S02", nombre: "Visitas de monitoreo y acompañamiento en aula", responsable: "Patricia Gamarra / Flor de Liz Flores", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-28", subprocesoId: "p5-s2", nombre: "Círculos de reflexión pedagógica", responsable: "Patricia Gamarra / Flor de Liz Flores", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-29", subprocesoId: "CLV-02-GPE-S04", nombre: "Talleres de refuerzo académico y nivelación", responsable: "Patricia Gamarra / Flor de Liz Flores", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-31", subprocesoId: "CLV-03-GPA-S01", nombre: "Reuniones de planificación (trimestrales y de cierre de año)", responsable: "Pbro. Leener Jiménez", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-32", subprocesoId: "p6-s1", nombre: "Visitas (Parroquias, Asilos y Albergues) / Campañas solidarias internas", responsable: "Pbro. Leener Jiménez", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-33", subprocesoId: "CLV-03-GPA-S03", nombre: "Registro de asistencia de PPFF / Entrega de materiales de reflexión para el hogar", responsable: "Pbro. Leener Jiménez", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-34", subprocesoId: "CLV-03-GPA-S03", nombre: "Participacion Activa en la Eucaristia (lectores, moniciones, ofrendas)", responsable: "Pbro. Leener Jiménez", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-35", subprocesoId: "p6-s2", nombre: "Participacion en Misas y Jornadas (preparación de ambiente y cantos)", responsable: "Pbro. Leener Jiménez", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-36", subprocesoId: "p6-s2", nombre: "Asesoramiento Espiritual de Estudiantes", responsable: "Pbro. Leener Jiménez", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-37", subprocesoId: "p6-s3", nombre: "Participacion en Misas y Jornadas (retiros de inicio y fin de año)", responsable: "Pbro. Leener Jiménez", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-38", subprocesoId: "p6-s3", nombre: "Asesoramiento Espiritual de Personal (Docente y no Docente) (entrevistas individuales programadas)", responsable: "Pbro. Leener Jiménez", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-39", subprocesoId: "CLV-04-GB-S01", nombre: "Cuestionarios psicométricos y diagnóstico", responsable: "Evelyn Niño", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-41", subprocesoId: "p7-s1", nombre: "Sesiones de tutoría y talleres de psicología", responsable: "Verónica Lalandi", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-42", subprocesoId: "CLV-04-GB-S04", nombre: "Charlas preventivas para estudiantes, tutores y PPFF", responsable: "Ana Puerta", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-43", subprocesoId: "CLV-04-GB-S05", nombre: "Reuniones de coordinación de tutoría por grado y Escuela de Padres", responsable: "Verónica Lalandi", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-46", subprocesoId: "APO-01-INF-01", nombre: "Revisiones técnicas de pabellones y aulas", responsable: "Jimmy Peralta", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-47", subprocesoId: "p8-s1", nombre: "Ejecución de obras de remodelación y pintado", responsable: "Jimmy Peralta", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-49", subprocesoId: "p9-s1", nombre: "Registro en sistema de tickets / Asignación a técnico responsable / Cierre y validación con usuario", responsable: "Carmen Almanza", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-50", subprocesoId: "p9-s1", nombre: "Programación de mantenimientos (trimestral, semestral) / Ejecución de mantenimiento preventivo / Reparación o reemplazo de componentes", responsable: "Carmen Almanza", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-51", subprocesoId: "p9-s2", nombre: "Plan de respuesta a incidentes / Plan de respuesta a incidentes / Plan de respuesta a incidentes", responsable: "Ivan Pineda", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-52", subprocesoId: "APO-02-GTI-S03", nombre: "Recepción de solicitudes de acceso / Creación - modificación - eliminación de usuarios", responsable: "Maria Eugenia Leon", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-53", subprocesoId: "APO-02-GTI-S04", nombre: "Configuración de políticas de respaldo / Ejecución periódica de respaldos digitales / Pruebas de restauración", responsable: "Ivan Pineda", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-55", subprocesoId: "APO-02-GTI-S05", nombre: "Registro en sistema de inventario / Actualización periódica de inventario / Baja de activos obsoletos", responsable: "Carmen Almanza", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-56", subprocesoId: "APO-02-GTI-S05", nombre: "Recepción y verificación de nuevos activos / Solicitud de baja por obsolescencia o daño", responsable: "Carmen Almanza", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-57", subprocesoId: "APO-03-IMI-S01", nombre: "Gestión y publicación de contenidos audiovisuales", responsable: "Adelma Bercian", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-58", subprocesoId: "APO-03-IMI-S02", nombre: "Diseño gráfico institucional", responsable: "Adelma Bercian", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-59", subprocesoId: "p10-s2", nombre: "Toma, edición y publicación de fotografías", responsable: "Lourdes Benavente", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-60", subprocesoId: "p10-s1", nombre: "Cobertura de eventos, actuaciones y misas", responsable: "Lourdes Benavente", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-61", subprocesoId: "p11-s1", nombre: "Solicitud de la vacante a cubrir, Publicacion en bolsa de trabajo, Revision de CV's, Entrevistas", responsable: "Mirella Morante", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-62", subprocesoId: "p11-s1", nombre: "Entrega de ficha de datos, elaboración de contrato, solicitud de accesos institucionales, entrega de de RIT, Política Salarial, material del Hostigamiento Sexual Laboral, entre otros.", responsable: "Mirella Morante", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-63", subprocesoId: "APO-04-RRHH-S02", nombre: "Entrega de liquidación de beneficios sociales, quitar accesos institucionales", responsable: "Mirella Morante", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-64", subprocesoId: "APO-04-RRHH-S03", nombre: "Elaboración de metas, porcentaje de avance y resultados", responsable: "Mirella Morante", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-65", subprocesoId: "APO-04-RRHH-S04", nombre: "Diagnóstico de necesidades, planificación, ejecución de programas y evaluación.", responsable: "Maria Ramos", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-66", subprocesoId: "APO-04-RRHH-S05", nombre: "Solicitud, gestion y aprobación de periodo vacacional", responsable: "Madalina Zegarra", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-70", subprocesoId: "p8-s2", nombre: "Mantenimiento rutinario de aulas y proyectores", responsable: "Jimmy Peralta", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-71", subprocesoId: "APO-05-SGM-S02", nombre: "Jornadas de limpieza y desinfección", responsable: "Jessica Porras", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-72", subprocesoId: "APO-05-SGM-S03", nombre: "Atención y solución de incidencias reportadas", responsable: "Jimmy Peralta", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-73", subprocesoId: "p12-s1", nombre: "Ejecución y clausuras de talleres extracurriculares", responsable: "Jorge Pastor", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-74", subprocesoId: "APO-06-SC-S02", nombre: "Entrenamientos y presentaciones de selecciones/elencos", responsable: "Jorge Pastor", avance: 0, estado: "Sin evaluar" },
  { id: "matriz-act-75", subprocesoId: "p12-s2", nombre: "Atención médica de primeros auxilios y supervisión sanitaria", responsable: "Brigith Delzo", avance: 0, estado: "Sin evaluar" },
];

// Indicadores y mediciones solo de muestra para mantener pantallas actuales.
// La hoja Matriz Oficial no tiene indicadores definidos en las columnas L/M.
// NO usar estos valores para reportes oficiales hasta conectar el dashboard a Supabase.
const demoSubIds = [
  "p1-s1",
  "p1-s2",
  "p2-s1",
  "p2-s2",
  "p3-s1",
  "p3-s2",
  "p4-s1",
  "p4-s2",
  "p5-s1",
  "p5-s2",
  "p6-s1",
  "p6-s2",
  "p6-s3",
  "p7-s1",
  "p7-s2",
  "p8-s1",
  "p8-s2",
  "p9-s1",
  "p9-s2",
  "p10-s1",
  "p10-s2",
  "p11-s1",
  "p11-s2",
  "p12-s1",
  "p12-s2",
];
export const indicadores: Indicador[] = [];
export const metas: Meta[] = [];
export const registros: Registro[] = [];
export const evidencias: Evidencia[] = [];
function demoRnd(seed: number): number { const x=Math.sin(seed * 9301 + 49297)*233280; return x-Math.floor(x); }
demoSubIds.forEach((sid, indice) => {
  const sub = subprocesos.find((s) => s.id===sid);
  if (!sub) return;
  const proc = procesos.find((p) => p.id===sub.procesoId);
  if (!proc) return;
  const iid = `${sid}-i1`;
  const item: Indicador = {
    id: iid, codigo: `IND-${String(indice+1).padStart(3,"0")}`,
    subprocesoId: sid,
    nombre: `DEMO · Cumplimiento de ${sub.nombre.toLowerCase()}`,
    formula: "(Actividades ejecutadas / Actividades programadas) × 100",
    unidad: "%", frecuencia:"Anual", polaridad:"Ascendente", responsable:sub.responsable||proc.lider,
    peso:1, demostrativo:true,
  };
  indicadores.push(item);
  ANIOS.forEach((anio) => {
    metas.push({ id:`${iid}-m${anio}`,indicadorId:iid,anio,valor:100 });
    const numero = Math.min(100, Math.round((60 + demoRnd(indice*7+anio)*38)*10)/10);
    const rid=`${iid}-r${anio}`;
    registros.push({id:rid,indicadorId:iid,anio,periodo:anio===ANIO_ACTUAL?"Parcial I":"Cierre anual",valor:numero,fecha:`${anio}-${anio===ANIO_ACTUAL?"09":"12"}-15`,registradoPor:item.responsable});
    if(anio===ANIO_ACTUAL) {
      evidencias.push({id:`${rid}-e1`,registroId:rid,nombre:`Ejemplo - constancia de ${sub.nombre}.pdf`,tipo:"PDF",subidoPor:item.responsable,fecha:`${anio}-09-16`});
    }
  });
});
export const usuarios: Usuario[] = [
  { id:"u1", nombre:"Administrador SGI", correo:"sistemas@bup.edu.pe", rol:"Administrador", area:"TIC", activo:true },
  { id:"u2", nombre:"Pbro. Director General", correo:"direccion@bup.edu.pe", rol:"Directivo", area:"Dirección General", activo:true },
  { id:"u3", nombre:"Administradora General", correo:"administracion@bup.edu.pe", rol:"Líder de proceso", area:"Administración", activo:true },
  { id:"u4", nombre:"Coordinador de Calidad", correo:"calidad@bup.edu.pe", rol:"Auditor EFQM", area:"Calidad", activo:true },
  { id:"u5", nombre:"Director Académico", correo:"academico@bup.edu.pe", rol:"Líder de proceso", area:"Académica", activo:true },
  { id:"u6", nombre:"Coordinadora de Pastoral", correo:"pastoral@bup.edu.pe", rol:"Responsable de área", area:"Pastoral", activo:true },
  { id:"u7", nombre:"Jefa de Personal", correo:"personal@bup.edu.pe", rol:"Responsable de área", area:"Talento Humano", activo:false },
];
// No hay acciones de auditoría reales en el Excel.
export const auditoria: LogAuditoria[] = [];
export const areas = Array.from(new Set(procesos.map((p) => p.area))).sort();
