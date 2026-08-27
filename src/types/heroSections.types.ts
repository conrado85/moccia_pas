import type { ReactNode } from "react";

export type CuerpoTarjetas = {
  id: number;
  subtitulo: string;
  bajada: string;
  icon?: ReactNode;
};

export type CuerpoCabecera = {
  volanta: string;
  titulo: string;
};