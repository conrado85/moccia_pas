import type { ReactNode } from "react";

export type CuerpoTarjetas = {
  id: number;
  subtitulo: string;
  bajada: string;
  icon?: ReactNode;
  navegacion?: string
  cotizar?: string
};

export type CuerpoCabecera = {
  volanta: string;
  titulo: string;
};