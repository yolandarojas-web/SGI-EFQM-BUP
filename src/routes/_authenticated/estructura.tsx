import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/sgi/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  actividades, criterios, documentos, indicadores, procedimientos, procesos, subprocesos,
} from "@/lib/sgi/data";
import { avanceSubproceso } from "@/lib/sgi/metrics";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/estructura")({
  head: () => ({ meta: [{ title: "Estructura de Gestión · SGI EFQM" }] }),
  component: Estructura,
});

function Estructura() {
  const [subSel, setSubSel] = useState(subprocesos[0]?.id ?? "");
  const sub = subprocesos.find((s) => s.id === subSel);
  const proceso = procesos.find((p) => p.id === sub?.procesoId);
  const procs = procedimientos.filter((x) => x.subprocesoId === subSel);
  const docs = documentos.filter((x) => x.subprocesoId === subSel);
  const acts = actividades.filter((x) => x.subprocesoId === subSel);
  const inds = indicadores.filter((x) => x.subprocesoId === subSel);
  const hayAvanceReal = acts.some((a) => a.estado !== "Sin evaluar");

  return (
    <AppShell titulo="Estructura de Gestión" descripcion="Bloque EFQM → Proceso → Subproceso → Marco operativo">
      <div className="grid gap-4 lg:grid-cols-[340px_1fr]">
        <Card className="h-fit shadow-card">
          <CardHeader>
            <CardDescription className="tracking-wide uppercase">Matriz Oficial · EFQM 2020</CardDescription>
            <CardTitle className="font-display">Procesos institucionales</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {criterios.map((c) => (
              <section key={c.id}>
                <p className="mb-2 text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">
                  {c.nombre} <span className="font-normal text-muted-foreground">({c.descripcion})</span>
                </p>
                <div className="space-y-2">
                  {procesos.filter((p) => p.criterioId === c.id).map((p) => (
                    <div key={p.id} className="rounded-md border border-border p-2">
                      <p className="text-xs font-semibold">{p.codigo} · {p.nombre}</p>
                      <div className="mt-2 space-y-1">
                        {subprocesos.filter((s) => s.procesoId === p.id).map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setSubSel(s.id)}
                            className={cn(
                              "w-full rounded px-2 py-1.5 text-left text-xs transition-colors hover:bg-muted",
                              s.id === subSel && "bg-primary font-medium text-primary-foreground hover:bg-primary",
                            )}
                          >
                            <span className="block text-[10px] opacity-75">{s.codigo || "Sin código en el Excel"}</span>
                            <span>{s.nombre}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </CardContent>
        </Card>

        {!sub || !proceso ? (
          <Card><CardContent className="p-6">No hay un subproceso seleccionado.</CardContent></Card>
        ) : (
          <Card className="shadow-card">
            <CardHeader>
              <CardDescription className="tracking-wide uppercase">{proceso.codigo} · {proceso.area}</CardDescription>
              <CardTitle className="font-display">{sub.nombre}</CardTitle>
              <p className="text-xs text-muted-foreground">
                Código: {sub.codigo || "Pendiente en la matriz"} · Responsable del subproceso: {sub.responsable || "Sin asignar"}
              </p>
              <p className="text-xs text-muted-foreground">Proceso: {proceso.nombre} · Responsable del proceso: {proceso.lider}</p>
              <div className="mt-3 space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Avance de actividades</span>
                  <span className="font-medium">{hayAvanceReal ? `${avanceSubproceso(sub.id)}%` : "Sin medición registrada"}</span>
                </div>
                {hayAvanceReal && <Progress value={avanceSubproceso(sub.id)} />}
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="actividades">
                <TabsList className="flex h-auto flex-wrap">
                  <TabsTrigger value="actividades">Actividades ({acts.length})</TabsTrigger>
                  <TabsTrigger value="procedimientos">Procedimientos ({procs.length})</TabsTrigger>
                  <TabsTrigger value="documentos">Documentos ({docs.length})</TabsTrigger>
                  <TabsTrigger value="indicadores">Indicadores ({inds.length})</TabsTrigger>
                </TabsList>
                <TabsContent value="actividades" className="space-y-2">
                  {acts.length === 0 && <p className="text-sm text-muted-foreground">Sin actividades registradas en la matriz.</p>}
                  {acts.map((a) => (
                    <div key={a.id} className="rounded-md border border-border p-3">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium">{a.nombre}</p>
                        <Badge variant={a.estado === "En riesgo" ? "destructive" : "secondary"}>{a.estado}</Badge>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">Responsable: {a.responsable || "Por asignar"}</p>
                      {a.estado !== "Sin evaluar" && <Progress value={a.avance} className="mt-2" />}
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="procedimientos" className="space-y-2">
                  {procs.length === 0 && <p className="text-sm text-muted-foreground">Sin procedimientos especificados.</p>}
                  {procs.map((p) => (
                    <div key={p.id} className="flex items-start justify-between gap-2 rounded-md border border-border p-3">
                      <div>
                        <p className="text-sm font-medium">{p.nombre}</p>
                        <p className="text-xs text-muted-foreground">Código: {p.codigo || "Sin código"}{p.version && ` · Versión ${p.version}`}</p>
                      </div>
                      <Badge variant={p.estado === "Aprobado" ? "default" : "secondary"}>{p.estado}</Badge>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="documentos" className="space-y-2">
                  {docs.length === 0 && <p className="text-sm text-muted-foreground">Sin documentos especificados.</p>}
                  {docs.map((d) => (
                    <div key={d.id} className="flex items-start justify-between gap-2 rounded-md border border-border p-3">
                      <div><p className="text-sm font-medium">{d.nombre}</p><p className="text-xs text-muted-foreground">{d.tipo}{d.version && ` · Versión ${d.version}`}</p></div>
                      <Badge variant={d.estado === "Aprobado" ? "default" : "secondary"}>{d.estado}</Badge>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="indicadores" className="space-y-2">
                  {inds.length === 0 && <p className="text-sm text-muted-foreground">La hoja oficial no define indicadores para este subproceso. Se deben completar antes de publicar métricas.</p>}
                  {inds.map((i) => (
                    <div key={i.id} className="rounded-md border border-border p-3">
                      <div className="flex justify-between gap-2">
                        <p className="text-sm font-medium">{i.codigo} · {i.nombre}</p>
                        {i.demostrativo && <Badge variant="outline">DEMO</Badge>}
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">Fórmula: {i.formula}</p>
                      <p className="text-xs text-muted-foreground">{i.frecuencia} · {i.polaridad} · Responsable: {i.responsable}</p>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
      </div>
    </AppShell>
  );
}
